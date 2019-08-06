# Flutter 初体验  

## 为何使用
### 前言
针对原生开发面临的问题，人们一直都在努力寻找好的解决方案，时至今日，已经有很多跨平台框架(主要指Android和iOS两个平台)，根据其原理，主要分为三类：
* H5+原生（Cordova、Ionic、微信小程序）
* JavaScript开发 + 原生渲染 （React Native、Weex）
* 自绘UI+原生(Flutter)

针对以上几种跨平台的方案，每个框架都有其优缺点，在我们的项目中，也都曾尝试过，也踩过无数的坑。近期爱收入开发天团初体验了flutter并成功上线，发现了它的美，迫不及待地分享给大家。
### weex的不足
* 学习资料少
> Weex 的学习资料比较少。而RN使用的开发者比较多, 社区活跃，围绕react产生了许多开发框架。
这一点，个人认为是weex最大的缺点，甚至是weex能不能很好发展下去的关键因素.
* 社区活跃度不够
> Weex 相较于 RN 起步比较晚，Weex目前社区主要由阿里人员在维护, 相较于已经成熟的RN社区目前还有很多不足。用的人相对RN少很多，目前没有形成一个良好的生态。作为开发者，如果碰到一个问题，搜索不到，抛出去也没人很好的解答，自己摸索的成本就会很高了。 可能解决一个问题的成本就已经远远大于节省下来的一点学习成本。
* 界面的设配精度不够
> Weex进行界面适配的时候是用750为标准的，所以需要根据750去换算，换算的过程中会进行四舍五入，所以会产生精度不足。
* 对常用的断点调试支持不足
* 不支持热重载
* 官方对于动画的支持非常薄弱
* weex每次更新都会出现较严重的设配问题

### Flutter优点
1. 性能强大，流畅
> Flutter对比weex和react native相比，性能的强大是有目共睹的。对于weex，react native，主要基于dom树渲染原生组件，很难与直接在原生视图上绘图比肩性能，Google作为一个轮子大厂，直接在两个平台上重写了各自的UIKit，对接到平台底层，减少UI层的多层转换，UI性能可以比肩原生，这个优势在滑动和播放动画时尤为明显。
2. 路由设计优秀。
> Flutter的路由传值非常方便，push一个路由，会返回一个Future对象（也就是Promise对象），使用await或者.then就可以在目标路由pop，回到当前页面时收到返回值。这个反向传值的设计基本是甩了微信小程序一条街了。弹出dialog等一些操作也是使用的路由方法，几乎不用担心出现传值困难
3. 优秀的动画设计。
> Flutter的动画简单到不可思议，动画对象会根据屏幕刷新率每秒产生很多个（一般是60个）浮点数，只需要将一个组件属性通过补间（Tween）关联到动画对象上，Flutter会确保在每一帧渲染正确的组件，从而形成连贯的动画。这种十分暴力的操作在Flutter上却看不到明显的卡顿，这也是Flutter的一个魔力所在。相比之下其他跨平台框架几乎不能设计动画……往往会遭遇非常严重的性能问题。
4. UI跨平台稳定。
> Google直接在两个平台上在底层重写了UIKit，不依赖于Css等外部解释器，几乎不存在UI表达不理想，渲染不正常的情况，可以获得非常稳定的UI表达效果。Css换个浏览器就有不同的表现，基于Css的跨平台框架很难获得稳定的UI表现。
5. 可选静态的语言，语言特性优秀
> Dart是一个静态语言，这也是相对于js的一个优势。Dart可以被编译成js，但是看起来更像java。静态语言可以避免错误，获得更多的编辑器提示词，极大的增加可维护性。很多js库也已经用ts重写了，Vue3.0的底层也将全部使用ts编写，静态语言的优势不言而喻。
6. 支持热重载

* [引用地址](https://www.jianshu.com/p/c51fc925bfd1)
### Flutter架构简介
* 传统的原生开发使用Native语言和Platform进行交互，通过调用平台API来实现App的功能。


<img src="../.vuepress/public/image/weexbox2.0/flutter_0_1.png"/>

* RN通过JS访问平台UI组件，所以需要通过Bridge桥接器将JS转换到原生，在UI被频繁操作时可能导致性能问题。

<img src="../.vuepress/public/image/weexbox2.0/flutter_0_2.png"/>

* 为避免JS桥接器的性能问题，Flutter采用Dart语言，Dart使用预编译的方式编译多个平台的原生代码，这允许Flutter直接与平台通信，而不需要通过执行上下文切换的JS桥接器。Flutter的UI组件和渲染器都从平台中移到了到用户的应用程序，所以虚拟机中的控件树是真实的控件树，渲染速度快。Dart程序和执行数据编解码的平台之间仍然有个接口，但这个接口的速度比JSBridge高出几个数量级。

<img src="../.vuepress/public/image/weexbox2.0/flutter_0_3.png"/>

* 绘制原理
> 我们都知道显示器以固定的频率刷新，比如 iPhone的 60Hz、iPad Pro的 120Hz。当一帧图像绘制完毕后准备绘制下一帧时，显示器会发出一个垂直同步信号（VSync），所以 60Hz的屏幕就会一秒内发出 60次这样的信号。 并且一般地来说，计算机系统中，CPU、GPU和显示器以一种特定的方式协作：CPU将计算好的显示内容提交给 GPU，GPU渲染后放入帧缓冲区，然后视频控制器按照 VSync信号从帧缓冲区取帧数据传递给显示器显示。
所以，Android、iOS的 App在显示 UI时是如此，Flutter也不例外，也遵循了这种模式。所以从这里可以看出 Flutter和 React-Native之众的本质区别：React-Native之类只是扩展调用 OEM组件，而 Flutter是自己渲染。 在 Flutter Architecture的解释中，Google还提供了一张更为详尽的图来解释 Flutter的原理：

<img src="../.vuepress/public/image/weexbox2.0/flutter_0_4.png"/>


> 这张图解释得更清晰一些：Flutter只关心向 GPU提供视图数据，GPU的 VSync信号同步到 UI线程，UI线程使用 Dart来构建抽象的视图结构，这份数据结构在 GPU线程进行图层合成，视图数据提供给 Skia引擎渲染为 GPU数据，这些数据通过 OpenGL或者 Vulkan提供给 GPU。
所以 Flutter并不关心显示器、视频控制器以及 GPU具体工作，它只关心 GPU发出的 VSync信号，尽可能快地在两个 VSync信号之间计算并合成视图数据，并且把数据提供给 GPU。


### 各框架特点汇总

  比较内容|React Native|Weex|Flutter|
  --|:--:|--:|--:|
  平台实现|JavaScript|JavaScript|无桥接、原生编码|
  引擎|JS V8|JSCore |Flutter engine|
  核心语言|React|Vue|Dart|
  Apk大小|7.6M|10.6M|8.1M|
  bundle文件大小|默认单一，较大|较小，多页面可多文件|一般|
  上手难度|稍高|容易|一般|
  架构程度|较重|较轻|重|
  特点|适合开发整体App|适合单页面|适合开发整体App|
  社区|丰富，facebook重点维护|有点残念，托管apache|刚出道的小鲜肉，拥护者众多|
  支持|Android,iOS|Android,iOS|Android,iOS,web?|


## Dart简介
* Dart 是一种 易于学习、 易于扩展、并且可以部署到 任何地方 的 应用 编程 语言。
* Google 使用 Dart 来开发 大型应用。
* 通过核心库和工具打造一个坚固的基石
* 让编写通用功能的代码更加容易
* 不要给程序员提供惊喜
* 为真实的应用提供稳定务实的解决方案
## 环境配置

* [下载flutter](https://flutter.io/setup-macos/).
* 配置环境变量 
```js
vim ~/.bash_profile

export PATH=/你的flutter文件夹所在位置/flutter/bin:$PATH

source ~/.bash_profile
```
* 检查环境
```js
// 能出现以下帮助信息，代表flutter安装成功
flutter -h
Manage your Flutter app development.

Common commands:

  flutter create <output directory>
    Create a new Flutter project in the specified directory.

  flutter run [options]
    Run your Flutter application on an attached device or in an emulator.

Usage: flutter <command> [arguments]

// flutter doctor 检查环境，若缺依赖，按照提交安装即可。
flutter doctor

Doctor summary (to see all details, run flutter doctor -v):
[✓] Flutter (Channel stable, v1.7.8+hotfix.4, on Mac OS X 10.14.4 18E226, locale
    zh-Hans-CN)

[!] Android toolchain - develop for Android devices (Android SDK version 28.0.3)
    ! Some Android licenses not accepted.  To resolve this, run: flutter doctor
      --android-licenses
[✓] Xcode - develop for iOS and macOS (Xcode 10.2)
[✓] iOS tools - develop for iOS devices
[✓] Android Studio (version 3.4)
```
## 项目简介

* 创建flutter项目
```js
// 注意 flutter 建议使用使用这样命名方式。(小写开头)
flutter create my_flutter_app
// 创建项目的更多选项参考
flutter help create
```
* 运行项目
```js
// run 起来的项目支持热重载
flutter run
```

* 项目结构
  目录与文件|说明|
  --|:--:|
  android|flutter与Android工程相关|
  ios|flutter与iOS工程相关|
  lib|flutter核心代码|
  pubspec.yaml|flutter依赖的配置文件|
  
<img src="../.vuepress/public/image/weexbox2.0/flutter1.png"/>

* 配置文件 pubspec.yaml
```js
version: 1.0.0+1
// 环境，flutter的sdk版本在此之间
environment:
  sdk: ">=2.2.2 <3.0.0"
// 依赖库  
dependencies:
  flutter:
    sdk: flutter
  cupertino_icons: ^0.1.2
  flutter_spinkit: "^3.1.0"
  flutter_easyrefresh: ^1.2.7
  common_utils: ^1.1.3
// 测试环境的依赖库
dev_dependencies:
  flutter_test:
    sdk: flutter
flutter:
  uses-material-design: true
// 图片配置 weexbox refimg / weexbox refimg -d (自动创建基于配置信息的dart文件) 已实现自动导入图片配置
  assets:
     - images/icon_expert_help_1.png
     - images/icon_expert_help_2.png
     - images/icon_expert_help_3.png
```

## 网络请求
对于网络请求，我们推荐使用dio。[文档](https://github.com/flutterchina/dio/blob/master/README-ZH.md)
* 在pubspec.yaml添加依赖

```js
dependencies:
  dio: ^2.1.x  // 请使用pub上2.1分支的最新版本
```
* get 请求
```js
Response response;
Dio dio = new Dio();
response = await dio.get("/test?id=12&name=小老弟");
print(response.data.toString());
// 请求参数也可以通过对象传递，上面的代码等同于：
response = await dio.get("/test", queryParameters: {"id": 12, "name": "小老弟"});
print(response.data.toString());

```
* post 请求
```js
response = await dio.post("/test", data: {"id": 12, "name": "天伟老师"});
```


## 效果展示
* 常用布局

<img src="../.vuepress/public/image/weexbox2.0/flutter5.png"/>



## 混合开发
#### 一. 集成到已有的Android项目  [文档](https://github.com/flutter/flutter/wiki/Add-Flutter-to-existing-apps)
1. 创建module
```js
cd some/path/

flutter create -t module --org com.example my_flutter
```
2. 主build.gradle加入

```js
android {
  //...
  compileOptions {
    sourceCompatibility 1.8
    targetCompatibility 1.8
  }
}
```
3. 创建aar包

```js
$ cd some/path/my_flutter
$ flutter build aar
```
4. 在app/build.gradle中加入

```js
// MyApp/app/build.gradle
android {
  // ...
}

repositories {
  maven {
    url 'some/path/my_flutter/build/host/outputs/repo'
  }
}

dependencies {
  // ...
  releaseCompile ('com.example.my_flutter:flutter_release:1.0@aar') {
    transitive = true
  }
}
```
5. settings.gradle中加入：

```js
// MyApp/settings.gradle
include ':app'                                     // assumed existing content
setBinding(new Binding([gradle: this]))                                 // new
evaluate(new File(                                                      // new
  settingsDir.parentFile,                                               // new
  'my_flutter/.android/include_flutter.groovy'                          // new
))  
```
6. 最后在app/build.gradle中加入依赖

```js
dependencies {
  implementation project(':flutter')
}
```
#### 二. 集成到已有的iOS项目  [文档](https://github.com/flutter/flutter/wiki/Add-Flutter-to-existing-apps)



## 原生通信
* 核心类
  类名|说明|
  --|:--:|
  BasicMessageChannel|用于传递数据。Flutter与原生项目的资源是不共享的，可以通过BasicMessageChannel来获取Native项目的图标等资源。|
  MethodChannel|传递方法调用。Flutter主动调用Native的方法，并获取相应的返回值。比如获取系统电量，发起Toast等调用系统API，可以通过这个来完成。|
  EventChannel|传递事件。这里是Native将事件通知到Flutter。比如Flutter需要监听网络情况，这时候MethodChannel就无法胜任这个需求了。EventChannel可以将Flutter的一个监听交给Native，Native去做网络广播的监听，当收到广播后借助EventChannel调用Flutter注册的监听，完成对Flutter的事件通知|


* BasicMessageChannel

<img src="../.vuepress/public/image/weexbox2.0/flutter_bmc_1.gif"/>
<img src="../.vuepress/public/image/weexbox2.0/flutter_bmc_2.gif"/>

* EventChannel

<img src="../.vuepress/public/image/weexbox2.0/flutter_ecl_1.gif"/>
<img src="../.vuepress/public/image/weexbox2.0/flutter_ecl_2.gif"/>

* MethodChannel

<img src="../.vuepress/public/image/weexbox2.0/flutter_mcl_1.gif"/>
<img src="../.vuepress/public/image/weexbox2.0/flutter_mcl_2.gif"/>

## weex通信
由于已有项目中使用了weex，为了统一weex，flutter，native三端的通信，我们提供了以下解决方案。
<img src="../.vuepress/public/image/weexbox2.0/flutter2.png"/>
* 路由的跳转
```js
  var router = Router();
  router.name = 'flutter';
  router.url = 'home';
  router.params = Map();
  router.navBarHidden = true;
  router.type = 'push';
  MethodConfig().invokeMethod(native_open_page, router.toJson());
```
* Event 
```js
  // 发送事件
  Event().emitEvent("eventName", Map());
  // 注册事件
  Event.getInstance().receiveEvent("eventName", (val){
  });
  // 移除事件
  Event.unReceiveEvent("eventName")
```  






