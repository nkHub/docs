# vue-router

#### 1. 配置

```javascript
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

```javascript
    import Vue from 'vue'
    import App from './App'
    import router from './router'
    import store from './store'

    let whiteList = [];
    const defaultRoutePath = '/';

    router.afterEach(async function(to, from, next){
        //路由跳转之前
        if(hasCookie){
            if(isLogin){
                // 初始化用户信息
                await state.dispatch('initUserInfo');
                // 动态添加的路由
                let Approuter = new AppRouter(list);
                router.addRoutes(Approuter.tree);
                // 获取之前的hash值（如果存在直接跳转之前的路由）
                let before = window.location.hash.substring(1);
                let redirect = !before.includes('login')?before:defaultRoutePath;
                next({ path: redirect });
            }else{
                next()
            }
        }else{
            if(whiteList.includes(to.name)){
                next();
            }else{
                next({ path: '/login' })
            }
        }
    });

    router.beforeEach((to, from, next) => {
        //路由跳转之后
        next();
    });

    //外部配置
    new Vue({
        el: '#App',
        router,
        store,
        components: { App },
        template: '<App/>'
    });
```

#### 3. 动态添加与路由权限

```javascript
    // 路由组件映射
    const getViewByKey = key => Component;
    /**
     * 路由树对象
     * */
    class AppRouter{
        constructor(tree) {
            this.tree = this.init(tree);
        }
        init(list, parentId = 0, level = 0){
            let that = this
            return list.map(v => {
                let node = new Node(v, parentId, level, v.permission);
                if(isNotEmptyArray(v.children)){
                    let child = that.init(v.children, v.id, level + 1);
                    if(isNotEmptyArray(child)){
                        node.redirect = child[0].path;
                        node.children = child;
                    }
                }
                return node;
            })
        }
        root(){
            const home = {
                path: '/',
                name: 'home',
                redirect: isNotEmptyArray(this.tree)?this.tree[0].path:'',
                meta: { title: 'home' },
                children: this.tree
            }
            return home;
        }
    }
    /**
     * 树节点对象
     * */
    class Node{
        constructor(node, parent = 0, level = 0, permission = []) {
            this.key = node.id;
            this.path = node.path;
            this.name = node.name;
            this.hidden = node.hidden;
            this.meta = {
                title: node.name,
                icon: node.icon,
                keepAlive: node.keep_alive,
                permission
            };
            this.component = getViewByKey(node.component);
            this.parent = parent;
            this.level = level;
        }

        /**
         * 获取组件名称(部分页面异步加载)
         * 页面缓存页面name值的获取
        */
        getName(){
            let that = this;
            return new Promise((resolve,reject) => {
                if(that.component instanceof Function){
                    that.component().then(module => resolve(module.default.name)).catch(e => reject(e));
                }else{
                    resolve(that.component.name);
                }
            })
        }
    }

    /**
     * 数组非空检测
     * */
    const isNotEmptyArray = a => Array.isArray(a) && a.length > 0;
```

#### 4. Vue-Router 3.1.0遇到问题

导出路由对象处添加

```javascript
    // vue-router push方法返回promise 报错Uncaught (in promise) undefined捕捉
    const originalPush = Router.prototype.push
    Router.prototype.push = function push(location, onResolve, onReject) {
        if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
        return originalPush.call(this, location).catch(err => err)
    }
```