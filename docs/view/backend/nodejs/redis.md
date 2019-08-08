# [Redis](https://redis.io)

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