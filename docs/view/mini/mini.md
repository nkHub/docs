# [小程序](https://developers.weixin.qq.com/miniprogram/dev/)

!>  **插件方式开发** 。

    1. 一个小程序只支持一个插件，并且需要申请。
    2. 插件不支持selectComponent方式获取插件实例。

### 1. 获取任意页面实例


```
    const getPage = (route = 'pages/index/index') => {
      let all = getCurrentPages();
      for(let i = 0, len = all.length;i < len;i++){
        if (page.route == route)return all[i];
      }
      return null;
    }
```

### 2. 获取组件实例
必须等组件挂在完成。

```
  Page.selectComponent(组件id);
```

* 注意
  - cover-view的CSS多属性无效(使用谨慎)