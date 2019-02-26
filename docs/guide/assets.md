# 静态资源

## 热更新

上面讲了原生如何设置热更新地址，这里介绍前端如何打热更新包。  
@weexbox/builder的任何构建命令都会生成两个包。

- deploy目录

deploy目录用于发布热更新包。可以把它拷贝到nginx上，并把该地址作为hotdeployUrl。

- weex-update目录

weex-update目录存在app里面，作为内置包随app一起发布。

### 配置热更新的最低版本号

有时候只有特定版本的APP才能更新最新的weex文件，这个时候就要设置`最低版本号`了。
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

```js
<image src="https://aygtech.github.io/weexbox/logo.png"></image>
```

:::tip
weexbox支持使用file-loader加载图片
:::

### 从 APP bundle 中加载

src 以`bundle://`开头，例如：

```js
<image src="bundle://image.png"></image>
```

### 从 APP 文件目录中加载

src 不以上面两种方式开头，例如：

```js
// iOS
<image src="file://var/mobile/Media/DCIM/100APPLE/IMG_0171.PNG"></image>
// Android
<image src="/storage/emulated/0/DCIM/Camera/IMG_20180917_145836.jpg"></image>
```

::: tip
实际使用时 src 不应该写死在源码上。大多数情况是通过 module 拿到图片地址再给 src 赋值。因此你不需要关心是何种平台。
:::

## 活用 config/update-config.json

一般来说，我们希望在开发的时候，图片是从本机加载的。而在部署的时候，图片是从服务器或者app里面加载。要切换这种行为特别简单。

首先，我们用file-loader的方式加载个图片（[点击查看完整例子](https://github.com/aygtech/weexbox-template/blob/master/src/page/page1/App.vue)）：

```js
<template>
  <div>
    <image :src="logo" class="logo" />
  </div>
</template>

<script>
import logo from '../../../static/logo.png'

export default {
  data() {
    return {
      logo,
    }
  },
}
</script>
```

重点来了，打开config/update-config.json文件，你能看到形如下面的配置。

```js
const config = {
  develop: {
    // 从本机加载图片，只有在调试的时候有效
    imagePublicPath: null,
  },
  test: {
    // 从网络加载图片
    imagePublicPath: 'https://raw.githubusercontent.com/aygtech/weexbox-template/master/deploy',
  },
  preRelease: {
    // 从app加载图片
    imagePublicPath: 'bundle://',
  },
  release: {
    // 从网络加载图片
    imagePublicPath: 'https://raw.githubusercontent.com/aygtech/weexbox-template/master/deploy',
  },
}

module.exports = config
```

当`imagePublicPath`为`null`时，weexbox会把`static`部署到本机。  
当`imagePublicPath`为`http`时，需要你自己把`deploy`部署到服务器，图片地址即是部署的地址。  
当`imagePublicPath`为`bundle://`时，weexbox会自动拷贝`static`到app中。

于是乎，调试的时候跑`npm run debug xxx/App.vue`的时候，本机图片可以正常显示了。部署的时候，任君挑选是要部署到服务器还是app中。

由此可见，切换图片源不用你改动任何一行业务代码，weexbox全部帮你搞定了。
