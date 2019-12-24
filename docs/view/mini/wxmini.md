# [微信小程序](https://developers.weixin.qq.com/miniprogram/dev/)

    坑点：

    1. 自主开发一个小程序只支持一个插件，并且需要申请，使用也要申请。
    2. 插件不支持selectComponent方式获取插件实例。
    3. 原生组件存在多重样式与兼容问题(tabbar层级问题)
    4. 小程序循环跳转iOS闪退(存在体验版时)

### 1. 页面实例

``` javascript
    const getPage = (route = 'default') => {
        return getCurrentPages().find(page => page.route == route);
    }
```

### 2. 组件实例

``` javascript
    onReady() {
        context.selectComponent(组件id);
    }
```

### 3. 全局变量

  1. storage数据存储
  2. 文件存储
  3. App.globalData
  4. 自定义状态管理函数

### 4. 组件传参

``` 
    父组件

    1. 直接获取组件实例调用其方法
    2. 组件绑定

        父： <component bindEventName="handleEvent" bindProps="props"></component>
        子：methods中 this.triggerEvent(EventName,data); //handleEvent(res => res.detail);
```

* 注意事项
  + [cover-view样式与层级支持](https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html)
