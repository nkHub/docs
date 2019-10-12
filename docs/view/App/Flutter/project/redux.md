# flutter-redux(主题随机切换)

#### ReduxState

```dart
    import 'dart:math';
    import 'package:flutter/rendering.dart';
    import 'package:nk_app/**/themeColor.dart';

    class ReduxState {
        Color theme;
        ReduxState.initTheme() : theme = themeColor[Random().nextInt(themeColor.length)];
    }

```

#### Action

```dart
    //定义action
    enum Action { ThemeChange }

```

#### reducer

```dart
    import 'dart:math';
    import 'package:nk_app/**/themeColor.dart';
    import 'package:nk_app/**/action.dart';
    import 'package:nk_app/**/ReduxState.dart';

    //定义reducer
    ReduxState reducer(ReduxState state, action) {
        switch (action) {
            case Action.ThemeChange:
            print(Random());
            state.theme = themeColor[Random().nextInt(themeColor.length)];
            break;
        }
        return state;
    }
```

#### 绑定至App

```dart

    import 'package:flutter/material.dart';
    import 'package:flutter_redux/flutter_redux.dart';
    import 'package:redux/redux.dart';
    import "package:nk_app/view/home/detail.dart";
    import 'package:nk_app/**/ReduxState.dart';
    import 'package:nk_app/**/reducer.dart';

    void main(){
        final store = Store<ReduxState>(
            reducer,
            initialState: ReduxState.initTheme()
        );
        runApp(NKApp(store));
    }

    class NkApp extends StatelessWidget {
        final Store<ReduxState> store;
        NkApp(this.store);

        @override
        Widget build(BuildContext context) {
            return StoreProvider(
                store: store,
                child: StoreBuilder<ReduxState>(
                    builder: (BuildContext context, Store<ReduxState> store){
                        return MaterialApp(
                            title: '测试',
                            initialRoute: "init",
                            theme: ThemeData(
                                platform: TargetPlatform.iOS,
                                primarySwatch: store.state.theme, //主题颜色设置
                                splashColor: Colors.transparent, //水波纹样式
                                highlightColor: Colors.transparent //点击高亮颜色
                            ),
                            routes:{
                                "init": (context) => InitPage(),
                                ...
                            }
                        );
                    }
                )
            );
        }
        ...

```

#### 页面dispatch

```dart
    import 'package:flutter/material.dart';
    import 'package:flutter_redux/flutter_redux.dart';
    import 'package:nk_app/redux/ReduxState.dart';
    import 'package:nk_app/redux/action.dart' as prefix0;
    ...

    floatingActionButton: StoreConnector<ReduxState, VoidCallback>(
        converter: (store) {
          return () => store.dispatch(prefix0.Action.ThemeChange);
        },
        builder: (context, callback) {
          return FloatingActionButton(
            onPressed: callback,
            child: Icon(Icons.add),
          );
        },
    ),
    ...

```