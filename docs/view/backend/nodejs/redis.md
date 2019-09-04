<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: nk
 * @Date: 2019-08-08 20:40:42
 * @LastEditTime: 2019-09-05 00:40:54
 -->
# [Redis](https://redis.io)

#### 常用命令

```
    // 查看运行的redis
    ps aux|grep redis

    // etc文件夹下执行启动redis
    redis-server redis.conf
```

------

#### 1. 连接与配置(redis.js)

```
    'use strict';
    let redis = require('redis');
    let client = redis.createClient(6379,ip);

    client.on("error", function (err) {
        client.quit();
    });

    client.auth(password);

    module.exports = client;
```


