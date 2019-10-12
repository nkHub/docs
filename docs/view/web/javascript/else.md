<!--
 * @version: 1.0.0
 * @Date: 2019-06-21 11:05:37
 * @LastEditTime: 2019-09-27 14:51:35
 -->
# JavaScript 其他

##### [fetch请求](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)：

```javascript
    var controller = new AbortController();
    var options = {
        method: GET | POST,
        headers: new Headers(),
        body: String | Blob | FormData ...,
        mode: 'cors' | 'no-cors' | 'same-origin',
        credentials: 'omit' | 'same-origin' | 'include',
        cache: 'no-store',
        redirect: 'follow',
        referrer: 'client',
        referrerPolicy: 'no-referrer-when-downgrade',
        signal: controller.signal
    }
    <!-- 开始请求 -->
    fetch(url,option).then().catch(e);
    <!-- 请求中断 -->
    controller.abort();
```

##### GET与POST的区别

    1、参数类型GET为查询字符串，而POST则支持json、查询字符串、FormData等类型；
    2、参数位置GET位于请求头中，POST位于请求体中；
    3、参数大小GET存在大小限制(不同浏览器不同)，POST则取决于服务器限制；
    4、缓存GET请求方式存在缓存，使用Cache-Control(max-age)、eTag等于Response Headers中控制；
        

##### 中文输入法事件：

compositionstart、compositionend、compositionupdate可以与change、input等事件搭配使用。
