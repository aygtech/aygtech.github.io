# 静态资源

## 热更新

上面讲了原生如何设置热更新地址，这里介绍前端如何打热更新包。  
@weexbox/builder的任何构建命令都会生成两个包。

- deploy目录

deploy目录用于发布热更新包。可以把它拷贝到nginx上，并把该地址作为hotdeployUrl。

- weex-update目录

weex-update目录存在app里面，作为内置包随app一起发布。

### 配置热更新的最低版本号

有时候只有特定版本的APP才能更新最新的weex文件，这个时候就要设置`最低版本号`了。
查看`config/update-config.json`文件，内容如下：
```json
{
  "name": "weexbox", // APP的名字，非必须
  "ios_min_version": "0.0.0", // iOS最低版本要求，必须
  "android_min_version": "0.0.0" // Android最低版本要求，必须
}
```

## 图片加载路径

weexbox 支持 3 种图片方式

### 从网络加载

src 以`http`开头，例如：

```vue
<image src="https://aygtech.github.io/weexbox/logo.png"></image>
```

:::tip
weexbox支持使用file-loader加载图片
:::

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
实际使用时 src 不应该写死在源码上。大多数情况是通过 module 拿到图片地址再给 src 赋值。因此你不需要关心是何种平台。
:::
