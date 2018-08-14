
> 我们推荐全部都安装，**但标注必须的环境必须安装，不然无法开发与调试**。

## 基础环境`(必须)`
darwin: 
* Node.js (>=9.x), npm version 4+ 

windows: 
* Git bash (并确定已经设置为`.sh脚本的默认执行程序`)

```
$ npm i eros-cli -g
```
如果你在中国地区，我们还是推荐您使用 [cnpm](https://npm.taobao.org/) 安装或者直接修改为`淘宝源`。
```
$ cnpm i eros-cli -g 
```

> 因为脚手架依赖了`node-sass`，安装失败有很多解决办法，可自行查找。

## darwin 开发 iOS`(必须)`
> CocoaPods 使用过程中遇到问题及时 Google。

### 版本要求
- ruby: `2.5.0` 以上
- cocoapods: `1.4.0` (最好)

其他版本会有环境问题
### 安装
* Xcode (appStore 下载)
* CocoaPods(建议使用pod 1.4.0版本)
    * 升级 rubygem 环境：`$ sudo gem update --system`
    * 移除现有 rubygem 镜像：`$ gem sources --remove https://rubygems.org/`
    * 添加gem.ruby-china镜像：`$ gem source -a https://gems.ruby-china.org/`
    * 安装 CocoaPods：`$ sudo gem install cocoapods -v 1.4.0`
    * 如果以上命令报错则执行：`$ sudo gem install -n /usr/local/bin cocoapods -v 1.4.0`
    * 最后执行：`$ pod setup 过程比较漫长，请耐心等待执行完成`

## darwin/windows/linux 开发 Android`(必须)`
### 版本要求
`AndroidStudio` 版本目前最好
- `3.0.x` best (高版本不太稳定，会有很多问题)

### 安装

JDK 是 JAVA 开发包，AndroidStudio 是 Android开发IDE，这两项不再做过多介绍。

* 下载并安装 [JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)。
* 下载并安装 [Android Studio](https://developer.android.google.cn/studio/index.html)。


> 如果您使用虚拟机进行跨平台开发，也需要配置好对应平台的所需环境。

## 模拟器安装`(必须)`
* ios 开发中 xcode 已经自带了模拟器
* android 开发者可以使用 android studio 再带模拟器，为了更好的效果，推荐下载 `Genymotion`模拟器

>当然市面上的如 `夜神模拟器` 也是可以的，[调试教程](http://blog.csdn.net/qq_34653571/article/details/53007044?locationNum=14&fps=1)，但是在 weex 0.17/0.18 中会出现 weex 实例化失败的问题，所以还是推荐 `Genymotion`。

## weex-toolkit`(可选)`
`断点调试` app 的能力。
```
$ cnpm i -g weex-toolkit
```
> [weex-toolkit](https://github.com/weexteam/weex-toolkit) 是 weex 官方提供的一个脚手架命令行工具，你可以使用它进行 weex 项目的创建，调试以及打包等功能，我们这里只使用它的调试功能( `weex debug` )；

## 代理软件`(可选)`
帮助我们进行 app 请求抓包，分析问题。
* darwin/linux 推荐下载 [Charles](http://xclient.info/s/charles.html?_=b75d1488fca52bf0f85a4d11ac1200e3)。

下完完成之后需要进行相关的配置：

* [fidder 手机抓包](http://blog.csdn.net/gld824125233/article/details/52588275)(如果未生效可尝试重启fidder)
* [charles 手机抓包](http://blog.csdn.net/suifeng3051/article/details/52087343)

至此，所有的相关的工具和软件都已下载完毕，下面我们开始创建一个 `eros-demo` 工程。