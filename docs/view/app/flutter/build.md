<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: nk
 * @Date: 2019-09-04 18:02:02
 * @LastEditTime: 2019-09-04 19:11:22
 -->
# 环境搭建

-----

### MAC

##### 环境变量

```
    open ~/.bash_profile    //打开环境变量配置文件
    source ~/.bash_profile  //编译变量配置
    
    //以下为配置数据
    [ -r ~/.bashrc ] && source ~/.bashrc //git 分支显示
    export PATH=/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin/

    export PATH='flutter路径'/flutter/bin:$PATH
    export ANDROID_HOME="安卓sdk路径"  
    export PATH=${PATH}:${ANDROID_HOME}/tools
    export PATH=${PATH}:${ANDROID_HOME}/platform-tools
    export PUB_HOSTED_URL=https://pub.flutter-io.cn
    export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
```

##### 终端命令

```
    //Flutter下载
    git clone -b master https://github.com/flutter/flutter.git
    ./flutter/bin/flutter --version

    //Flutter sdk为下载目录、Dart sdk目录为flutter -> bin -> cache -> dart-sdk下

    //环境监测、按照提示安装(brew install 会提示不要在根目录安装，在项目目录安装即可)
    flutter doctor

    //brew 最新版安装
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

```

##### VScode插件

* [Flutter](https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter) 
* [Dart](https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code)

##### Android Stuido

```
    首选项 => 插件 搜索Flutter与Dart
    首选项 => 语言与框架 => Flutter或Dart设置sdk路径 
    
```