### [vue.config.js](https://cli.vuejs.org/zh/config/)

打包分析

```
    yarn add webpack-bundle-analyzer
```

打包分析配置

```javascript
    const idProd = process.env.NODE_ENV === 'production';
    const assetsCDN = {
        css: [],
        js: [
            '//cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js',
        ]
    }
    // cdn 对应对象
    const prodExternals = {
        Vue: 'Vue'
    }
    const vueConfig = {
        configureWebpack: config => {
            config.externals = prodExternals;
            // 为生产环境修改配置...
            if (isProd) {
                // 去除console.log
                config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
            }
        },
        chainWebpack: (config) => {
            // 可添加cdn加速
            config.plugin('html').tap(args => {
                args[0].cdn = assetsCDN
                return args
            })
            // 打包分析
            if (process.env.use_analyzer) {
                config.plugin('webpack-bundle-analyzer')
                    .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
            }
        },
        productionSourceMap: !idProd
    }
```


package.json

```json
    {
        "dev": "vue-cli-service serve --mode 环境类型name",    //自定义环境类型
        "flow": "vue-cli-service serve && 命令2 && 命令3 ...", //顺序执行命令
        "sync": "vue-cli-service serve & 命令2 & 命令3 ...",   //同步执行命令
        "analyzer": "use_analyzer=true vue-cli-service build",// 打包分析
    }
```

.env.apha

```
    NODE_ENV=apha
    VUE_APP_TEST=测试环境变量 
```