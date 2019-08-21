# Android 集成 WeexBox

即使项目是用 @weexbox/cli 生成的，我依旧建议你了解一下这个过程。

:::tip
Android SDK使用Kotlin开发，并且100%兼容Java。
对于有追求的团队而言，强烈建议使用Kotlin来开发，开发速度和稳健度都会大幅提升！
:::

## 集成SDK

修改app的build.gradle

```groovy
dependencies {
    api 'com.github.aygtech:weexbox-android-library:2.1.40'
}
```

## 初始化

在 Application 中

```kotlin
override fun onCreate() {
    super.onCreate()

    // 初始化 WeexBox
    WeexBoxEngine.setup(this, null)

    // 开启调试
    WeexBoxEngine.INSTANCE.setDebug(true);

}
```

## 继承

- 普通 Activity 继承 WBBaseActivity
- Weex Activity 继承 WBWeexActivity
- 普通 Fragment 继承 WBBaseFragment
- Weex Fragment 继承 WBWeexFragment
- Web Activity 继承 WBWebViewActivity

## 事件通知

WeexBox 提供了原生与weex互相通知的能力(你甚至可以用作原生之间的通知，不管是weex界面还是原生界面，只要注册了事件，都能接收到)。

#### 通过 Event 类，你可以在weex发送事件与注册事件：

```kotlin
// 注册事件
Event.register()

// 发送事件
Event.emit()

// 注销事件
Event.unregister()

// 注销所有事件
Event.unregisterAll()
```

#### 在原生发送事件与注册事件：
```kotlin
// 注册事件
Event.register(this,"YourEventName") { //this为Activity或者Fragment
    //var value = it!!["key"]  it为发送事件传过来的Map<String,Any>，可不传
}

// 发送事件
Map<String, Object> map = new HashMap<>()
map.put("key", Object)
Event.emit("YourEventName", map)//map可为null

// 注销事件
Event.unregister(this, "YourEventName") //this为Activity或者Fragment

// 注销所有事件
Event.unregisterAll(this)
```
## 网络

Network 类封装了Retrofit。原生和weex的网络请求都会走这里。

```kotlin
// 网络请求域名
Network.server = 你的网络请求域名

// 发起网络请求。如果url已经包含了域名，会忽略你上面的设置
Network.request(url)
```

:::tip
原生也可以直接使用Retrofit。  
大多数情况下app会有自己的网络封装，可以参考weexbox来实现自己的network module。
:::

## 热更新

```kotlin
// 配置热更新地址
UpdateManager.serverUrl = hotdeployUrl

// 是否需要强制更新
UpdateManager.forceUpdate = true

// 执行热更新
UpdateManager.update { state, progress, error, url ->
    when (updateState) {
        UpdateManager.UpdateState.Unzip -> // 解压
        UpdateManager.UpdateState.DownloadFile -> // 下载
        UpdateManager.UpdateState.UpdateSuccess -> {
            // 更新成功，可以进入APP
            // 如果开启了强制更新，会等到下载完成才会进入这里。否则就是静默更新，解压成功就会进入
        ... // 还有各种状态码，参见下面表格，可以处理热更新各种情况，如热更新失败提示用户重启
        }
    }
}
```
#### 执行热更新完整状态码

状态码|描述|
--|:--:|
Unzip|解压文件|
UnzipError|解压文件出错|
UnzipSuccess|解压文件成功|
GetServer|获取服务器路径|
GetServerError|获取服务器路径出错|
DownloadConfig|下载配置文件|
DownloadConfigError|下载配置文件出错|
DownloadConfigSuccess|下载配置文件成功|
DownloadMd5|下载md5文件|
DownloadMd5Error|下载Md5出错|
DownloadMd5Success|下载md5文件成功|
DownloadFile|下载文件|
DownloadFileError|下载文件出错|
DownloadFileSuccess|下载文件成功|
UpdateSuccess|更新成功|
:::tip
可以根据环境来选择更新模式。比如  
开发和测试使用强制更新，保证app启动即使最新代码。  
准生产和生产使用静默更新，保证用户体验。
:::

## 路由

路由提供页面间的跳转功能。

- 注册路由

```kotlin
Router.register()
```

:::tip
WeexBox 默认注册了`weex`和`web`，你可以在app初始化的时候重新注册，用你自己的Activity覆盖它们。
:::

- 路由实例的属性

```kotlin
// 页面名称
var name: String = ""

// 下一个weex/web的路径
var url: String? = null

// 页面出现方式：push, present
var type: String = Router.TYPE_PUSH

// 是否隐藏导航栏
var navBarHidden: Boolean = false

// 需要传到下一个页面的数据
var params: Map<String, Any>? = null

// 打开页面的同时关闭页面
var closeFrom: Int? = null

// 关闭页面的方向，默认和堆栈方向一致
var closeFromBottomToTop = true

// 关闭页面的个数
var closeCount: Int? = null
```

- 打开页面

```kotlin
val router = Router()

// 原生页面
router.name = "你注册路由时的页面名称"

// weex页面
router.name = Router.weex
router.url = "module/page.js"

// web页面
router.name = Router.web
router.url = "https://aygtech.github.io/weexbox"

router.open()
```

- 关闭页面

```kotlin
val router = Router()
router.close()
```