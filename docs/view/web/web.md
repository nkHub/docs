<!--
 * @version: 1.0.0
 * @Date: 2019-09-25 20:12:08
 * @LastEditTime: 2019-09-25 20:14:08
 -->
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
    window.ApplicationCache.update();
```
