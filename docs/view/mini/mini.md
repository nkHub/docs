# [小程序](https://developers.weixin.qq.com/miniprogram/dev/)

!>  **插件方式开发** 。

    1. 一个小程序只支持一个插件，并且需要申请。
    2. 插件不支持selectComponent方式获取插件实例。

### 1. 获取任意页面实例


```
    const getPage = (route = 'pages/carpool/carpool') => {
      let pages = getCurrentPages();
      let tmpPage = null;
      pages.forEach(page=>{
        if (page.route == route){
          return  tmpPage = page;
        }
      });
      return tmpPage;
    }
```

### 2. 获取组件实例

```
    Page({
        onLoad:function(){
            this.selectComponent(组件id);
        }
    });
```