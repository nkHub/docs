# [小程序](https://developers.weixin.qq.com/miniprogram/dev/)

!>  **插件方式开发** 。

    1. 一个小程序只支持一个插件，并且需要申请。
    2. 插件不支持selectComponent方式获取插件实例。

### 1. 获取任意页面实例


```
    const getPage = (route = 'pages/index/index') => {
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

* 注意
  - cover-view的CSS中border与伪元素属性无效
  - CSS中transition属性有时会失效(原因未知)
  - cover-view不支持box-shadow属性