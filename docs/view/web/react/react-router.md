# react-router

外部配置

```
  import { HashRouter , Switch , Route } from 'react-router-dom';

  //路由方式 1.history import BrowserRouter
  //路由方式 2.hash  import HashRouter

  //DOM渲染
  ReactDOM.render((
    <Provider store={store}>
      <HashRouter>
          <Switch>
            <Route path="/" component={Index} exact/>
            <Route path="/detail/:id" component={Detail} />
          </Switch>
      </HashRouter>
    </Provider>
  ), document.getElementById('root'));
```

页面使用redirect组件或props.history...手动跳转路由。

```
  <NavLink to="/detail/1">详情页面</NavLink>
```