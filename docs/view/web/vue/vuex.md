# vuex

```
    import Vue from 'vue';
    import Vuex from 'vuex';

    Vue.use(Vuex)

    // 模块注册
    import home from './modules/home.js';

    //state
    const state = {
        data: null
    }

    //getters
    const getters = {
        data(state){
            return state.data;
        }
    }
    //mutations
    const mutations = {
        init(state,data){
            state.data = data;
        }
    }

    //actions
    const actions = {
        async count({ commit }, data ){
            try{
                let res = await Servers.init.post();
                if(res.code == 200){
                    commit('init',res.data);
                }else{
                    commit('init',{});
                }
            }catch(e){
                commit('init',{});
            }
        }
    }
    //模块modules
    const home = {
        namespaced: true,// 限制命名空间
        state: {
            ...
        },
        getters:{
            ...
        },
        mutations:{
            ...
        },
        actions:{
            ...
        }
    }

    export default new Vuex.Store({
        state,
        actions,
        mutations,
        getters,
        modules: {
            home: home
        }
    });


    //外部配置
    import router from './router'
    import store from './store'
    new Vue({
        el: '#app',
        router,
        store,
        components: { App },
        template: '<App/>'
    });
```