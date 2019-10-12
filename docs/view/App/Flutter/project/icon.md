# icon

##### pubspec.yaml(引入)
最外层添加fonts文件夹(nkApp/fonts/iconfont.ttf),使用阿里图库的字体图标

```
    fonts:
    - family: iconfont
      fonts:
        - asset: fonts/iconfont.ttf
```

##### 定义

```dart
    import 'package:flutter/cupertino.dart';

    Map weatherIconList = {
        'sun': 0xe603,          // 晴天
        'cloudy': 0xe605,       // 多云
        'cloud': 0xe605,        // 云
        ···
    };

    // 获取天气图标函数
    IconData weatherIcon(String key) => IconData(weatherIconList[key], fontFamily: "iconfont");
```

##### 使用

```dart
    import 'package:nk_app/**/icon.dart';

    ...
    @override
    Widget build(BuildContext context) {
        return Icon(weatherIcon('sun'));
    }
```