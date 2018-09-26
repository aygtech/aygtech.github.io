# 静态资源

## 热更新内置包

## 热更新服务器包

## 图片加载路径

weexbox支持3种图片方式

### 从网络加载

src以`http`开头，例如：

```vue
<image src="https://weexbox.surge.sh/hero.png"></image>
```

### 从APP bundle中加载

src以`bundle://`开头，例如：

```vue
<image src="bundle://image.png"></image>
```

### 从APP文件目录中加载

src不以上面两种方式开头，例如：

```vue
// iOS
<image src="file://var/mobile/Media/DCIM/100APPLE/IMG_0171.PNG"></image>
// Android
<image src="/storage/emulated/0/DCIM/Camera/IMG_20180917_145836.jpg"></image>
```

::: tip
实际使用时src不应该写死在源码上。大多数情况是通过module拿到图片地址再给src赋值。
:::


