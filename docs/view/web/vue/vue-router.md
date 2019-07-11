# vue-router

#### 1. 配置

```
    import Vue from 'vue'
    import Router from 'vue-router'
    import Home from '@/pages/home'

    Vue.use(Router)

    export default new Router({
        routes: [
            path: '/',
            component: Index,
            redirect: 'home', //路由重定向
            children: [{
                path: '/home',
                name: 'home',
                //component: Home,
                component: (resolve) => { //异步加载组件 实例：实时加载时需要
                    require(["@/components/home/home"], resolve);
                }
            }
        ]
    });



```

#### 2. 路由拦截

```
    import Vue from 'vue'
    import App from './App'
    import router from './router'
    import store from './store'

    router.afterEach((to, from) => {
        //路由跳转之前
    });

    router.beforeEach((to, from, next) => {
        //路由跳转之后
        next();
    });

    //外部配置
    new Vue({
        el: '#app',
        router,
        store,
        components: { App },
        template: '<App/>'
    });
```