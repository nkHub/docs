# nginx

```nginx
    #配置用户或者组，默认为nobody nobody。
    user  www www;

    #允许生成的进程数，默认为1
    worker_processes auto;

    #制定日志路径，级别。这个设置可以放入全局块，http块，server块，级别以此为：debug|info|notice|warn|error|crit|alert|emerg
    error_log  /home/wwwlogs/nginx_error.log  crit;

    #指定nginx进程运行文件存放地址
    pid        /usr/local/nginx/logs/nginx.pid;

    #指定此进程可以打开的最大文件描述符的值。
    worker_rlimit_nofile 51200;

    events {
        #设置网路连接序列化，防止惊群现象发生，默认为on
        accept_mutex on;
        #事件驱动模型，select|poll|kqueue|epoll|resig|/dev/poll|eventport
        use epoll;
        #最大连接数，默认为512
        worker_connections 51200;
        #设置一个进程是否同时接受多个网络连接，默认为off
        multi_accept on;
    }

    http {
        #文件扩展名与文件类型映射表
        include       mime.types;
        #默认文件类型，默认为text/plain
        default_type  application/octet-stream;

        server_names_hash_bucket_size 128;
        client_header_buffer_size 32k;
        large_client_header_buffers 4 32k;
        client_max_body_size 50m;

        #允许sendfile方式传输文件，默认为off，可以在http块，server块，location块。
        sendfile   on;
        tcp_nopush on;

        #连接超时时间，默认为75s，可以在http，server，location块。
        keepalive_timeout 60;

        tcp_nodelay on;

        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
        fastcgi_buffer_size 64k;
        fastcgi_buffers 4 64k;
        fastcgi_busy_buffers_size 128k;
        fastcgi_temp_file_write_size 256k;

        gzip on;
        gzip_min_length  1k;
        gzip_buffers     4 16k;
        gzip_http_version 1.1;
        gzip_comp_level 2;
        gzip_types     text/plain application/javascript application/x-javascript text/javascript text/css application/xml application/xml+rss;
        gzip_vary on;
        gzip_proxied   expired no-cache no-store private auth;
        gzip_disable   "MSIE [1-6]\.";

        #limit_conn_zone $binary_remote_addr zone=perip:10m;
        #如果开启limit_conn_zone,添加 "limit_conn perip 10;" 到服务模块

        server_tokens off;
        access_log off; #取消服务日志 

        #负载均衡设置
        #upstream mysvr { 
        #    server 127.0.0.1:7878; 
        #    server 192.168.10.121:3333 backup;  #热备     
        #}

        #主页
        server {
            listen 80 default_server; #监听端口
            server_name nikai.site; #监听地址

            location / { #请求的url过滤，正则匹配，~为区分大小写，~*为不区分大小写。
                proxy_pass http://127.0.0.1:3001;  #请求转向mysvr 定义的服务器列表
                proxy_http_version 1.1; #Nginx服务器提供代理服务的http协议版本1.0，1.1，默认设置为1.0版本
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
            }

            access_log  /var/www/nksite/nksite.log;
        }

        #http重定向
        server{
            listen 80;
            #listen [::]:80;
            server_name www.nikai.site  nikai.site;
            
            if ($server_port = 80) {
                return 301 https://$server_name$request_uri;
            }
            if ($scheme = http) {
                return 301 https://$server_name$request_uri;
            }	

            location / {
                proxy_pass http://127.0.0.1:3000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
            }

            access_log  /var/www/nksite/nksite.log;
        }

        #主页https
        server{
            listen 443 ssl http2;
        
            server_name www.nikai.site nikai.site;	 		

            ssl on;

            ssl_certificate /var/www/nksite/bin/www.nikai.site.pem;
            ssl_certificate_key /var/www/nksite/bin/www.nikai.site.key;

            ssl_session_cache    shared:SSL:1m;
            ssl_session_timeout  5m;

            ssl_ciphers  HIGH:!aNULL:!MD5;
            ssl_prefer_server_ciphers  on;

            location / {
                proxy_pass http://127.0.0.1:3000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
                
            }
            access_log  /var/www/nksite/nksite.log;
        }


        include vhost/*.conf;
    }

```

#### 其他   

    1. 惊群现象：一个网路连接到来，多个睡眠的进程被同事叫醒，但只有一个进程能获得链接，这样会影响系统性能。