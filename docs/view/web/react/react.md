# [React](https://reactjs.org/docs/hello-world.html)

##### 1. npm项目创建：

```
  npm install –g create-react-app
  create-react-app 项目名称
  cd 项目名称
  npm start
  npm run dev   //开发本地测试
  npm run build //打包运行
```

##### 2. 组件样式导入：

[默认ES6方式导入](/view/web/ES6.md?id=_14-模块)。

```
  import { Component } from 'react';
  import 'style.css';
```

##### 3. 渲染：

```
  import ReactDom from 'react-dom';
  ReactDom.render(
    组件,
    Element,
    回调函数           //可省略
  );
```

##### 3. 组件：

PureComponent组件相对于Component，已完成props与state的浅对比，优化性能，复杂数据不建议使用，易出错,同时子组件须使用PureComponent。

?> 组件使用时，组件名称可使用变量动态替换，但不支持表达式方式使用。

推荐使用以下ES6方式书写组件，此外还包含无状态组件以及高级组件等。

```
  class 组件名(首字母必须大写) extends Component{
    //构造函数
    contructor(props){
      super(props);          // 执行父类的构造函数，将父类的props绑定到this
      this.state = {};
    }

    //内置函数
    this.setState({          //设置state
       参数名：参数值
    });
    this.forceUpdate()       //强制更新props或state

    //生命周期(常用)
    componentWillMount()                        //组件将要挂载
    componentDidMount()                         //组件已加载
    shouldComponentUpdate(nextProps, nextState) //是否应该更新（多用于性能优化）返回true时更新界面
    componentDidUpdate()                        //已更新界面
    componentWillUnmount()                      //组件将要卸载

    //渲染函数
    render(){
      return (HTML元素或组件);
    }
  }
```

!>  **[标签要求:](https://facebook.github.io/react/docs/dom-elements.html)**

1). 任意元素必须闭合

2). 属性class和for使用className和htmlFor代替

3). 最外层只含有一个标签

4). 属性dangerouslySetInnerHTML对innerHTML的替代

```
  <div dangerouslySetInnerHTML={{__html: html字符串}}></div>
```

##### 4. 事件：


```
  ...
  render(){
    return (
      <div>
        //默认所有事件驼峰写法
        <div onClick={ 函数名 }></div>
        //携带任意个数参数
        <div onClick={(参数名例如event) => this.函数名(参数名1,参数名2...) }></div>
        //绑定函数到当前对象
        <div onClick={() => this.函数名().bind(this) }></div>
      </div>
    )
  }
  ...
```

##### 5. props：

```
  <组件名 参数名={参数} />  //组件可从this.props中获取传递的参数
```


###### [props类型检测](https://facebook.github.io/react/docs/typechecking-with-proptypes.html)

```
  import ProTypes from “prop-types”;  //不推荐使用React.ProTypes
  组件名.propTypes={
    参数名: PropType.string…(.isRequired)
    //可选值string、bool、array、number、object、func、element、node…
  }
```


##### 6. ref（不推荐）：

```
  ...
  render(){
    return(
        <input ref={(input)=>{ this.inputEle = input }} />
        //新写法获取元素;将元素绑定到组件对象上
    )
  }
  ...
```