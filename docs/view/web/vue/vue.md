# [vue](https://cn.vuejs.org/)

#### 1. vue-cli3创建项目

```
    vue create project
```

#### 2. mixins

与组件具有同样的生命周期，组件混入后将与组件的对应生命周期合并；

```
    //mixins.js
    export default {
        created(){

        },
        methods:{

        }
    }

    //components.js
    import mixin from '@/mixins/mixins.js';
    export default {
        name: 'test',
        mixins: [mixin],
        created(){
            ...
        },
        components:{
            ...
        }
    }
```

#### 2. vue组件插槽、react与小程序区别

```
    1. vue组件
    //组件调用
    <test>
        <template slot="content">
            <div>test</div>
        </template>
    </test>
    //组件内部
    <div>
        <slot name="content"></slot>
    </div>


    2. 小程序
    //组件调用
    <test>
        <view slot="content"></view>
    </test>

    //组件内部
    <view>
        <slot name="content"></slot>
    </view>

    3. react
    //直接使用this.props.children调取
```