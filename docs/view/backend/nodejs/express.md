# Express

##### [express脚手架](http://www.expressjs.com.cn/starter/generator.html);

```
    项目名称: appname
    express --view=pug appname //初始化
    DEBUG=appname:* npm start  //本地运行
```

##### 1. 通用配置(app.js)

```
    const compression = require('compression');
    const app = express();

    // express配置
    const options = {
        dotfiles: 'ignore',
        etag: true,
        extensions: ['htm', 'html'],
        index: '/',
        maxAge: '1d', //设置过期时间，否则正常403
        redirect: '/',
        setHeaders: function (res, path, stat) {
            res.set('X-TimeStamp', Date.now());
        }
    }
    //初始化外部访问路径(public)与配置
    app.use(express.static(path.join(__dirname, 'public'), options));

    //上传文件大小限制
    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ 
        limit: '50mb', 
        extended: true, 
        parameterLimit: 50000 
    }));
    
    //开启Gzip
    app.use(compression());
```

##### 2. https配置(bin/www)

```
    var app = require('../app');
    /**
    * https设置
    */
    const options = {
        key : fs.readFileSync("/bin/******.key"),
        cert: fs.readFileSync("/bin/******.pem")
    }
    const server = http.createServer(app).listen(443);
```

##### 3. 文件上传(upload.js)

```
    const formidable = require("formidable");
    const file = require('/utils/file'); //文件操作封装

    module.exports = function(req,res){
        let form = new formidable.IncomingForm();
        //fields请求携带参数、files请求文件列表
        form.parse(req, function(err, fields, files) {
            if(err)return res.json({
                code: 201 ,
                msg: 'error',
                data: '上传失败'
            });
            fields.files = Object.values(files);
            // 从服务器缓存目录复制文件列表
            file.copyAll(fields.files).then(path => {
                fields.files = path;
                res.json({
                    code: 200 ,
                    msg: 'success',
                    data: fields
                });
            });
        });
    }
```
