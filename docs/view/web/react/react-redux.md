# react-redux

##### 1. 简介：

状态从一个初始状态开始，被一系列动作序列改变

##### 2. 数据层绑定：

```
  import { Provider } from 'react-redux';
  import configureStore from './redux/store';

  const store = configureStore();
  //react-redux store监听
  store.subscribe(()=>{
    console.log('store监听：');
    console.log(store.getState());
  });

  export default class App extends Component{
    render(){
      return(
        <Provider store={store}>
            <Home/>
        </Provider>
      );
    }
  }
```

##### 3. UI层绑定：

```
  import { connect } from 'react-redux';

  const mapStateToProps = (state)=>{
    return {
        test: state.test
    };
  }
  const mapDispatchToProps = (dispatch)=>{
    return {
        testClick: () => dispatch({
            type: 'test',
            payload: true
        })
    };
  }

  connect(
    mapStateToProps,    //将state映射到props中,参数为state，props  必须返回对象
    mapDispatchToProps  //发送action,参数为dispatch,props  必须返回对象
  )(component);
```

##### 4. 内部结构：

###### 1). store：

store由createStore创建，可使用combineReducers() 合并多个reducer，applyMiddleware(thunk, promise, logger)中间件拓展 如异步、日志等。

React-thunk 使dispatch可接受函数（原来只接受对象）,可拓展多步操作（可包含多个dispatch）;

i. 状态存储中心，store.js代码：

```
  //通用const store = applyMiddleware(...middlewares)(createStore)(reducer, initialState);

  //实例
  'use strict';
  import { createStore, applyMiddleware } from 'redux';
  import thunkMiddleware from 'redux-thunk';
  import rootReducer from './reducer';
  //此处设置中间件thunk的方法
  const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
  const configureStore = (initialState) => {
    return createStoreWithMiddleware(rootReducer, initialState);
  };
  export default configureStore;
```
###### 1). reducer：

i. 模块操作合并，reducer.js代码如下

```
  'use strict';
  import { combineReducers } from 'redux';
  //页面模块部分
  import Common from './module/common';
  import Home from './module/home';

  const rootReducer = combineReducers({
    Common: Common,
    Home: Home,
    ...
  });
  export default rootReducer;
```

ii. 单个页面模块部分，接受action返回新State;

!> 不要修改原 state

特点:
*  一、不改写参数
*  二、不调用系统I/O的API
*  三、不调用时间或随机数等不纯的方法

推荐使用: Object.assign({},state,需要修改的参数);生成新的State

```
  const initialState = {};
  export default (state = initialState, action)=>{
    switch(action.type){
        case 'test':
            return { ...state, test: action.payload}
            break;
        default:
            return state;
    }
    // return new_state;
  }
```


###### 3). state：

时点数据集合，一个State对应一个View，获取：store.getState();

###### 4). action：

```
  let action = {
    type: type,
    preload: preload,
    ...
  }
  store.dispatch(action);
```