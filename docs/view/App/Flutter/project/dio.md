# dio(请求)

##### pubspec.yaml(引入)

```
    dependencies:
        flutter:
            sdk: flutter
        dio: ^3.0.0
```

##### 定义

```
    import 'package:dio/dio.dart';

    // 默认配置
    BaseOptions options = new BaseOptions(
        baseUrl,
        connectTimeout: 5000,
        receiveTimeout: 3000,
        contentType: Headers.formUrlEncodedContentType, 
        responseType: ResponseType.json,
    );

    Dio dio = Dio(options)..interceptors.add(LogInterceptor());

```

##### 使用

```
    import 'package:dio/dio.dart';
    import 'package:toast/toast.dart';
    import 'package:nk_app/**/dio.dart';
    import 'package:nk_app/**/music_banner.dart';

    ...
    class FindState extends State<Find> {
        List<Banners> banner = [];

        @override
        void initState() {
            super.initState();
            initData();
        }

        // 初始化页面数据
        void initData() async {
            try {
                Response res = await dio.get('/banner');
                setState(() {
                    banner = MusicBanner.fromJson(res.data).banners;
                });
            } catch (e) {
                Toast.show("网络请求失败", context,
                    duration: Toast.LENGTH_SHORT, gravity: Toast.CENTER);
            }
        }
```