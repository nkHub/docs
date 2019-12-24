# 小程序转换

### 1.[微信小程序转换支付宝](https://www.yuque.com/chengguan/wx2my)

``` 

    1. 使用vscode插件wx2my
    2. 存在的问题
      1. 单双引号问题(转换后默认外层为双引号)
      2. 部分插件与api无法使用
        1. getFileSystemManager
        2. canvasToTempFilePath
      3. 基础样式冲突
        1. 按钮边框与高度
        2. 视频宽度
      4. 自定义组件
        1. 生命周期名称不同
        2. selectComponent与ref方式获取组件实例

```

### 如果转换失败替换一下文件

wx2my.js
[wx2my](https://cdn.nikai.site/wx2my.js ':include :type=javascript text')

Behavior.js
[Behavior](https://cdn.nikai.site/Behavior.js ':include :type=javascript text')
