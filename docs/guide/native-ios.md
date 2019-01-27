# iOS 集成 WeexBox

即使项目是用 @weexbox/cli 生成的，我依旧建议你了解一下这个过程。

:::tip
iOS SDK使用Swift开发，并且尽量兼容OC。但由于Swift语言本身的限制，导致OC的VC不能继承swift的VC。一个变通的方法是把Swift VC作为OC VC的subVC来使用。  
对于有追求的团队而言，强烈建议使用Swift来开发，开发速度和稳健度都会大幅提升！
:::

## 集成SDK

修改Podfile

```ruby
source 'https://github.com/cocoapods/specs.git'
platform :ios, '10.0'
inhibit_all_warnings!
use_modular_headers!

target 'WeexBoxExample' do
    pod 'WeexBox'
end
```

## 初始化

在 AppDelegate.swift 中

```swift
func application(_ application: UIApplication, 
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) 
    -> Bool {
        
    // 初始化 WeexBox
    WeexBoxEngine.setup()
        
    // 开启调试
    WeexBoxEngine.isDebug = true
        
    window = UIWindow(frame: UIScreen.main.bounds)
    window?.backgroundColor = .white
        
    // 使用 WBNavigationController 作为导航基类
    window?.rootViewController = WBNavigationController(rootViewController: LaunchController())
        
    window?.makeKeyAndVisible()
        
    return true
}
```

## 继承

- 普通 ViewController 继承 WBBaseViewController
- Weex ViewController 继承 WBWeexViewController
- 导航 ViewController 继承 WBNavigationController
- Web ViewController 继承 WBWebViewController

## 事件通知

WeexBox 提供了原生与weex互相通知的能力(你甚至可以用作原生之间的通知)。  
通过 Event 类，你可以：

```swift
// 注册事件
Event.register()

// 发送事件
Event.emit()

// 注销事件
Event.unregister()

// 注销所有事件
Event.unregisterAll()
```

## 网络

Network 类封装了Alamofire。原生和weex的网络请求都会走这里。

```swift
// 网络请求域名
Network.server = 你的网络请求域名

// 发起网络请求。如果url已经包含了域名，会忽略你上面的设置
Network.request(url)
```

:::tip
原生也可以直接使用Alamofire，如果是这样，建议使用Network提供的sessionManager。  
大多数情况下app会有自己的网络封装，可以参考weexbox来实现自己的network module。
:::

## 路由

路由提供页面间的跳转功能。

- 注册路由

```swift
Router.register()
```

:::tip
WeexBox 默认注册了`weex`和`web`，你可以在app初始化的时候重新注册，用你自己的VC覆盖它们。
:::

- 路由实例的属性

```swift
// 页面名称
public var name: String = ""

// 下一个weex/web的路径
public var url: String?

// 页面出现方式：push, present
public var type: String = Router.typePush

// 是否隐藏导航栏
public var navBarHidden: Bool = false

// 需要传到下一个页面的数据
public var params: Dictionary<String, Any>?

// 打开页面的同时关闭页面
public var closeFrom: Int?

// 关闭页面的方向，默认和堆栈方向一致
public var closeFromBottomToTop = true

// 关闭页面的个数
public var closeCount: Int?
```

- 打开页面

```swift
var router = Router()

// 原生页面
router.name = "你注册路由时的页面名称"

// weex页面
router.name = Router.nameWeex
router.url = "module/page.js"

// web页面
router.name = Router.nameWeb
router.url = "https://aygtech.github.io/weexbox"

router.open()
```

- 关闭页面

```swift
var router = Router()
router.close()
```