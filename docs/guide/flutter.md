# Flutter 初体验  

## 为何使用

针对原生开发面临的问题，人们一直都在努力寻找好的解决方案，时至今日，已经有很多跨平台框架(主要指Android和iOS两个平台)，根据其原理，主要分为三类：
* H5 + 原生（Cordova、Ionic）
* JavaScript开发 + 原生渲染（ReactNative、Weex）
* 自绘UI + 原生 (Flutter)

针对以上几种跨平台的方案，每个框架都有其优缺点，在我们的项目中，也都曾尝试过，也踩过无数的坑。近期爱收入开发天团初体验了flutter并成功上线，发现了它的美，迫不及待地分享给大家。

## WeexBox中使用flutter

### 安装环境
* [flutter SDK安装](https://flutter.dev/docs/get-started/install)
* 根据flutter官网配置环境变量 

### 创建项目
* weexBox可以通过命令行创建包含weex与flutter的混合项目：

``` bash
# 新建一个weex和flutter混合工程
weexbox create project-name -f
```

::: tip 注意
flutter章节是基于Android studio开发环境所写
:::

### 运行项目

运行项目之前，需要先用Android Studio打开flutter_module项目，该项目在platforms文件夹下，与Android、ios项目同级。因为原生项目需要将flutter文件打包到apk里面，需要先确保flutter项目环境没有问题。打开flutter_module项目后配置好flutter与dart安装路径，如下图：
* flutter sdk
<img src="../.vuepress/public/image/weexbox2.0/flutter sdk.png"/>
* dart sdk
<img src="../.vuepress/public/image/weexbox2.0/dart_sdk.png"/>
然后同步环境后运行该项目，编译一段时间后，生成apk成功（注意apk生成成功，不成功说明你的flutter环境有问题，请检查是否缺少了某个步骤），安装apk成功后，打开apk，Console将会报错，因为该flutter项目并不是一个纯项目，而是我们原生项目的一个依赖。接下来就可以直接运行原生项目。
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

## 原生通信
* 对于某些需要调用原生硬件的需求，flutter不可避免的需要和原生端进行通信，flutter提供了3种通信通道。在weexbox中，已经写好了通信通道，并且根据不同情况选好不同的通道。
* 核心类
  类名|说明|
  --|:--:|
  BasicMessageChannel|用于传递数据。Flutter与原生项目的资源是不共享的，可以通过BasicMessageChannel来获取Native项目的图标等资源。|
  MethodChannel|传递方法调用。Flutter主动调用Native的方法，并获取相应的返回值。比如获取系统电量，发起Toast等调用系统API，可以通过这个来完成。|
  EventChannel|传递事件。这里是Native将事件通知到Flutter。比如Flutter需要监听网络情况，这时候MethodChannel就无法胜任这个需求了。EventChannel可以将Flutter的一个监听交给Native，Native去做网络广播的监听，当收到广播后借助EventChannel调用Flutter注册的监听，完成对Flutter的事件通知|

### flutter调用原生提供的方法

需要原生端先提供方法的实现，再在flutter进行调用。
* 原生提供方法

  建议使用者在继承WBFlutterActivity的基类Activity中重写以下方法，或者在WBFlutterActivity中直接修改。

```kotlin
// 子类重载此方法，就可以添加自己的method
open fun flutterMethodCall(call: MethodCall, result: MethodChannel.Result) {
  val method = call.method
  val arguments = call.arguments as? Map<String, Any> ?: TreeMap<String, Any>()
  when (method) {
    "methodName" -> {
      result.success("")
    }
  }
}
```
* flutter调用原生方法

```dart
ChannelManger.methodChannel.invokeMethod('methodName');
//methodName是与原生端一起定好的方法名
```

## WeexBox通信
由于weexBox中使用了weex与flutter，为了统一weex，flutter，native三端的通信，我们提供了以下解决方案。
<img src="../.vuepress/public/image/weexbox2.0/flutter2.png"/>
* 路由的跳转
在weexBox中跳转flutter界面同样采用路由的方式，并且与原来的路由跳转没有区别，只需要将router.name改为flutter，url传入flutter模块中定好的flutter路径。
* 先在RouterManager定义flutter路径
<img src="../.vuepress/public/image/weexbox2.0/routerManage.png"/>

* flutter页面跳转flutter
```dart
var router = Router();
router.name = Router.nameFlutter;//Router.nameFlutter = "flutter"
router.url = 'test_fade_app';
router.params = {'sss': 'sss'};
router.navBarHidden = true;
router.open();
```
* weex页面跳转flutter
```js
native.router.open({
  name: 'flutter',
  // 隐藏导航栏
  navBarHidden: true,
  url: 'test_fade_app',
  params: {
    from: 'modify',
  },
})
```
* 事件通知
weexbox中的flutter、weex和native都支持全局事件通知， 任一端注册事件，任一端发送事件。下面是flutter的注册事件和发送事件，weex的事件注册与通知请查看weex章节。
```dart
// 发送事件
Event.emit('eventName', {'k': 'vbbbb'});
// 注册事件
Event.register('eventName', (event) {
  //print(event); 
});
// 注销事件
Event.unregister("eventName");
// 注销当前页面全部事件
Event.unregisterAll();
```  






