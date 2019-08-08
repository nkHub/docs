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
```