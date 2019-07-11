# [webpack](https://github.com/jantimon/html-webpack-plugin)

#### 1. 主要结构

```
    module.export = {
        mode: 'production',      //开发模式production、development、none
        entry: {                 //编译入口
            name1: 'path1',
            name2: 'path2'
        },
        output: {                //编译出口
            filename: '[name].js',
            path: __dirname + '/dist'
        },
        module: {                //webpack默认支持js与json,加载器可以拓展文件支持
            rules: [
                {
                    test: /\.txt$/,             //匹配文件格式
                    use: 'raw-loader'           //对应加载器
                }
                ...
            ]
        },
        plugins: [               //插件(捆绑优化，资源管理和环境变量注入)
            new HtmlWebpackPlugin({
                title: '首页',
                //document.title 文档标题(title已设置则忽略)
                //使用：`<title><%= htmlWebpackPlugin.options.title %></title>`
                filename: 'index.html',       //导出文件名称
                template: './src/index.html'  //导入路径
            })
        ]
    }
```

#### 2. 其他

##### 1. Entrypoint undefined = index.html

```
    stats: {
        children: false
    }
```

##### 2. 样式消失问题

```
    .test{
        //正常编译
        display: -webkit-box;
        //跳过开头
        /*! autoprefixer: off */
        -webkit-box-orient: vertical;
        /* autoprefixer: on */
        //跳过结束、正常编译
        text-overflow: ellipsis;
        overflow: hidden;
    }
```