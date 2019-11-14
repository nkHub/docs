# [vue](https://cn.vuejs.org/)

#### 1. 脚手架搭建

*   1. npm init 初始化 package.json

```json
    {
        "name": "test",
        "version": "1.0.0",
        "description": "",
        "main": "webpack.config.js",
        "scripts": {
            "dev": "cross-env NODE_ENV=development webpack-dev-server --open --hot",
            "build": "cross-env NODE_ENV=production webpack --progress --hide-modules"
        },
        "author": "",
        "license": "ISC",
        "dependencies": {
            "vue": "^2.6.10",
            "babel-core": "^6.26.3",
            "babel-loader": "^8.0.6",
            "babel-plugin-transform-runtime": "^6.23.0",
            "babel-preset-env": "^1.7.0",
            "babel-register": "^6.26.0",
            "clean-webpack-plugin": "^3.0.0",
            "cross-env": "^5.2.0",
            "css-loader": "^3.0.0",
            "file-loader": "^4.0.0",
            "html-webpack-plugin": "^3.2.0",
            "style-loader": "^0.23.1",
            "url-loader": "^2.0.1",
            "vue-loader": "^15.7.0",
            "vue-template-compiler": "^2.6.10",
            "webpack": "^4.35.3",
            "webpack-cli": "^3.3.6",
            "webpack-dev-server": "^3.7.2"
        }
    }

```

*   2. 文件目录

```
    - node_modules
    - src
        - assets
        App.vue
        main.js
    .babelrc            //bable配置文件
    .package.json       //npm配置文件
    webpack.config.js   //webpack配置文件
```

*   3. webpack.config.js文件

```javascript
    const path = require('path');
    const webpack = require('webpack');
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const { CleanWebpackPlugin } = require('clean-webpack-plugin');
    const VueLoaderPlugin = require('vue-loader/lib/plugin');
    const process = require('process');

    const config = {
        mode: process.env.NODE_ENV,
        // 入口
        entry: {
            App: './src/main.js'
        },
        // 出口
        output: {
            filename: '[name].[hash:7].js',
            path: path.resolve(__dirname, './dist')
        },
        // loader加载器
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'img/[name]_[hash:7].[ext]'
                    }
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                }
            ]
        },
        // 插件
        plugins: [
            // 打包清空文件夹
            new CleanWebpackPlugin(),
            new VueLoaderPlugin(),
            // 注入
            new HtmlWebpackPlugin({
                filename: './index.html',
                template: './index.html',
                inject: true
            }),
            new webpack.LoaderOptionsPlugin({
                minimize: true
            })
        ],
        // 解析细节
        resolve: {
            alias: {
                //以vue结尾时加载vue/dist/vue.esm.js
                'vue$': 'vue/dist/vue.esm.js',
                '@': path.join(__dirname, 'src')
            },
            //require无后缀时的加载顺序
            extensions: ['.js', '.json', '.vue', '.css'] 
        }
    }

    module.exports = config;
```
#### 2. 命令行工具(类vue-cli)

* 1. npm init 初始化 package.json

```json
    {
        "name": "m-cli",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "bin": {
            "m": "bin/m",
            "m-init": "bin/m-init",
            "m-build": "bin/m-build"
        },
        "author": "nk",
        "license": "ISC",
        "dependencies": {
            "chalk": "^2.4.2",
            "commander": "^2.20.0",
            "download-git-repo": "^2.0.0",
            "inquirer": "^6.5.0",
            "ora": "^3.4.0"
        }
    }
```

*   2. 文件目录

```
    - bin
        m
        m-build
        m-init
    - node_modules
    package.json
```

*  3. read.me

```
    #### 自定义命令
    -   m init 初始化项目
    -   m build 构建项目

    #### 全局命令
    -   设置: sudo npm link
    -   删除: sudo npm unlink

    #### 工具
    *   commander：指令定义与处理
    *   chalk：高亮提示
    *   ora：过渡提示
    *   download：下载
```

*   4. m文件

```javascript
    #!/usr/bin/env node
    const commander = require('commander')

    commander
    .version(require('../package').version)
    .usage('<command> [options]')
    .command('init', '初始化项目')
    .command('build', '打包项目')
    
    commander.parse(process.argv)
```

*   5. m-init文件

```javascript
    #!/usr/bin/env node

    const chalk = require('chalk')
    const ora = require('ora')
    const inquirer = require('inquirer')
    const download = require('download-git-repo')

    // 高亮提示
    console.log(chalk.green('自定义初始化项目：'))

    const promptList = [{
        type: 'input',
        message: '项目名称:',
        name: 'name',
        default: "test"
    },{
        type: 'input',
        message: '作者:',
        name: 'author'
    },{
        type: 'input',
        message: '介绍:',
        name: 'description'
    },{
        type: 'list',
        message: '框架:',
        name: 'frame',
        choices: [
            "vue",
            "react",
            "angular"
        ],
        filter: lower
    },{
        type: "confirm",
        message: "vuex?",
        name: "vuex",
        when(a){
            return a.frame == 'vue';
        }
    },{
        type: "confirm",
        message: "vue-router?",
        name: "vue-router",
        when(a){
            return a.frame == 'vue';
        }
    },{
        type: "confirm",
        message: "react-redux?",
        name: "react-redux",
        when(a){
            return a.frame == 'react';
        }
    },{
        type: "confirm",
        message: "react-router?",
        name: "react-router",
        when(a){
            return a.frame == 'react';
        }
    },{
        type: 'list',
        message: 'css预编译器:',
        name: 'css',
        choices: [
            "scss",
            "less",
            "stylus"
        ],
        filter: lower
    },{
        type: "confirm",
        message: "babel?",
        name: "babel"
    },{
        type: "confirm",
        message: "TypeScript?",
        name: "TypeScript"
    },{
        type: "confirm",
        message: "单元测试?",
        name: "unit-test"
    }]

    inquirer.prompt(promptList).then(answers => {
        console.log(answers);
    })

    // 加载动态提示
    // const spinner = ora("下载中...");
    // spinner.start();     开始
    // spinner.succeed();   成功
    // spinner.fail();      失败

    // 下载函数
    // download(repository, destination, options, callback)
    // repository       git地址
    // destination      下载地址(默认当前目录)
    // options          config { clone：boolean }
    // callback         回调

    // 小写
    function lower(v){
        return v.toLowerCase();
    }
```

#### 4. 多层组件属性事件传递与调用

```
    1. Vuex

    2. EventBus

    3. vm.$parent、vm.$children

    4. provide、inject
    
    5. v-bind="$attrs" v-on="$listeners"

    6. $refs、$emit

    ...

```

#### 4. 其他

```
    DOMException: Failed to execute 'insertBefore' on 'Node'报错，使用v-show替换v-if；

```