# [nodeJS](http://nodejs.cn/api/)


##### [putty远程连接服务器](https://help.aliyun.com/document_detail/59083.html?spm=5176.10173289.107.1.73ee2e77Rk5hDi#windows);


##### [express脚手架](http://www.expressjs.com.cn/starter/generator.html);

```
    express --view=pug appname //初始化

    DEBUG=appname:* npm start //本地运行

```

##### [pm2](http://pm2.keymetrics.io/);

```
    pm2 start npm -- start  //开启进程守护（express脚手架可用）
    pm2 start id/name
    pm2 stop id/name //结束进程
    pm2 delete id/name //删除进程

    //process.json配置
```