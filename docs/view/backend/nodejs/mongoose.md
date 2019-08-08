# [Mongoose](http://mongoosejs.net/docs/api.html)

#### 1. 连接与配置(mongodb.js)

```
    const mongoose = require('mongoose');
    const url = 'mongodb://username:password@ip/database';
    mongoose.set( 'debug', true)
    mongoose.connect( url ,{
        useNewUrlParser: true
    });

    module.exports = mongoose;
```

#### 2. Model(user.js)

```
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

```
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