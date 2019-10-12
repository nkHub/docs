# json_serializable

##### pubspec.yaml

```
    dependencies:
        flutter:
            sdk: flutter
        json_annotation: ^3.0.0

    dev_dependencies:
        flutter_test:
            sdk: flutter
        build_runner: ^1.0.0
        json_serializable: ^3.2.0
```

将返回的数据使用[json2dart](https://caijinglong.github.io/json2dart/index_ch.html)处理，

使用命令构建***.g.dart文件

```
    flutter packages pub run build_runner build
```

使用命令自动构建***.g.dart文件

```
    flutter packages pub run build_runner watch
```

调用***类的fromJson方法转换为Dart Modal