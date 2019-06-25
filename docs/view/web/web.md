# 网页相关

##### 1. H5 离线缓存：

```
    <html manifest="cache.manifest"> //引入

    //cache.manifest
    CACHE MANIFEST
    #version 1.0.0
    CACHE: //首次下载后进行缓存
    #css
    #js
    #img
    NETWORK:  //需要网络，不会被缓存
    *
    FALLBACK: //无法访问时的回退页面  

    //js手动更新缓存
    window.applicationCache.update();
```

##### 2. 兼容：

* HTML5
    - [html5shiv](https://github.com/aFarkas/html5shiv)

* CSS与初始化
    - [normalize.css](http://necolas.github.io/normalize.css/)

* JavaScript
    - babel


