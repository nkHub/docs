# antd-design

引入ant，按需加载

命令 npm run eject 暴露配置，修改config的webpack配置文件

npm @next最新包

```
  // Process JS with Babel.
  {
    test: /\.(js|jsx|mjs)$/,
    include: paths.appSrc,
    loader: require.resolve('babel-loader'),
    options: {
      cacheDirectory: true,
      plugins: [
        'transform-runtime',["import", {
            libraryName: "antd-mobile",
             style: "css"
         }] // `style: true` 会加载 less 文件
      ]
    },
  }
```