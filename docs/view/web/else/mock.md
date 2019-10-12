<!--
 * @version: 1.0.0
 * @Date: 2019-09-17 19:57:03
 * @LastEditTime: 2019-09-17 20:04:33
 -->
# [mock](http://mockjs.com/)

###### 引入

```javascript
    //main.js
    import mock from './mock'
```

###### 使用([模板规则](https://github.com/nuysoft/Mock/wiki/Syntax-Specification))

```javascript
    // mock/index.js
    import Mock from 'mockjs'
    import home from './home'

    //使用mockjs模拟数据(第二个参数接收模板、函数、数据等)
    Mock.mock('/api/home', home)
```

###### 假数据

```javascript
    // mock/home.js 首页数据

    export default function home(options) {
        return {};
    };
```