# 静态资源

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

## 热更新

## 图片加载路径

weexbox 支持 3 种图片方式

### 从网络加载

src 以`http`开头，例如：

```vue
<image src="https://weexbox.surge.sh/hero.png"></image>
```

### 从 APP bundle 中加载

src 以`bundle://`开头，例如：

```vue
<image src="bundle://image.png"></image>
```

### 从 APP 文件目录中加载

src 不以上面两种方式开头，例如：

```vue
// iOS
<image src="file://var/mobile/Media/DCIM/100APPLE/IMG_0171.PNG"></image>
// Android
<image src="/storage/emulated/0/DCIM/Camera/IMG_20180917_145836.jpg"></image>
```

::: tip
 实际使用时 src 不应该写死在源码上。大多数情况是通过 module 拿到图片地址再给 src 赋值。
:::
