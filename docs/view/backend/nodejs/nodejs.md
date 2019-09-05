<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: nk
 * @Date: 2019-08-08 18:11:06
 * @LastEditTime: 2019-09-05 13:30:18
 -->
# [服务器搭建](http://nodejs.cn/api/)

##### [搭建参照地址](https://segmentfault.com/a/1190000013740262?utm_source=tag-newest)
##### [putty远程连接服务器](https://help.aliyun.com/document_detail/59083.html?spm=5176.10173289.107.1.73ee2e77Rk5hDi#windows);

##### [linux常用命令](http://www.runoob.com/linux/linux-command-manual.html);

##### [pm2进程守护](http://pm2.keymetrics.io/);

```
    pm2 start id/name -- start  //开启进程守护（express脚手架可用）
    pm2 start id/name
    pm2 stop id/name        //结束进程
    pm2 delete id/name      //删除进程
    pm2 restart id/name     //重启进程
    pm2 list                //进程列表
    //process.json配置

    pm2 save                //保存进程列表
    pm2 startup             //开机自启进程列表
```

---------------

```
    node进程自启： pm2自启
    mongodb进程自启： /etc/rc.d/rc.local 填入启动命令、执行chmod +x /etc/rc.d/rc.local
    redis进程自启：同mongodb
```