<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: nk
 * @Date: 2019-08-08 20:40:18
 * @LastEditTime: 2019-09-05 00:40:43
 -->
# [Mongoose](http://mongoosejs.net/docs/api.html)

#### 备注
```
    初始化mongodb服务
    ./mongod -f /root/mongodb-linux-x86_64-4.0.6/data/etc/mongodb.conf
    显示进程列表
    netstat -tunlp
    关闭进程
    kill -9 PID
    如果强制关闭进程，mongodb需要删除data/bin文件夹下mongodb.lock文件，并且在bin文件夹下执行
    ./mongod --repair
    之后重新初始化数据库服务
    
```

#### 1. 连接与配置(mongodb.js)

```javascript
    const mongoose = require('mongoose');
    const url = 'mongodb://username:password@ip/database';
    mongoose.set( 'debug', true)
    mongoose.connect( url ,{
        useNewUrlParser: true
    });

    module.exports = mongoose;
```

#### 2. Model(user.js)

```javascript
    const mongoose = require('/config/mongodb');
    //表字段
    var UserSchema = new mongoose.Schema({
        name: String,
        age: Number
    },{
        collection: 'user' //表名
    });
    const User = mongoose.model('User', UserSchema);

    module.exports = User;
```

#### 2. Interface(interface.js)

```javascript
    let User = require('/models/user');

    module.exports = async function(req,res){
        let userList = await User.find({}); //用户列表接口
        res.json({
            code: 200 ,
            msg: '成功',
            data: userList
        });
    }

    module.exports = User;
```