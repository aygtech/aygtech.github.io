# 在已有项目中集成 WeexBox

即使项目是用 @weexbox/cli 生成的，我依旧建议你了解一下这个过程。

## 初始化

在 AppDelegate.swift 中

```swift
import WeexBox

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
    window?.rootViewController = WBNavigationController(rootViewController: WBViewController())
        
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
import WeexBox

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
import WeexBox

// 网络请求域名
Network.server = 你的网络请求域名

// 发起网络请求。如果url已经包含了域名，会忽略你上面的设置
Network.request(url)
```

## 热更新

```swift
import WeexBox

// 配置热更新地址
UpdateManager.setServer(url: hotdeployUrl)

// 是否需要强制更新
UpdateManager.forceUpdate = true

// 执行热更新
UpdateManager.update { (state, progress, error, url) in
    switch state {
    case .Unzip:
        // 解压
    case .DownloadFile:
        // 下载
    case .UpdateSuccess:
        // 更新成功，可以进入APP
        // 如果开启了强制更新，会等到下载完成才会进入这里。否则就是静默更新，解压成功就会进入
    }
}
```