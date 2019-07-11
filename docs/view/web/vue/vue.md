# [vue](https://cn.vuejs.org/)


#### 1. vue组件插槽、react与小程序区别

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


#### 2. 其他

```
    DOMException: Failed to execute 'insertBefore' on 'Node'报错，使用v-show替换v-if；

```