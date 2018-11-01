# Module 拓展

## callback 参数的数据格式

```vue
{
  // 状态码。0表示操作成功，-1表示操作失败
  status: 0,
  // 错误描述信息
  error: '错误描述信息',
  // 返回的数据
  data: {}
}
```

## wb-router

页面路由

### 引用方式

```vue
const router = weex.requireModule('wb-router')
```

### API

- 打开页面

open(object)

```vue
router.open({
  // 页面名称。内置"weex"、"web"，其他路由需要原生先注册
  name: 'weex'
  // 下一个weex/web的路径
  url: 'login.js',
  // 页面出现方式,push或者present。默认是 push
  type: 'push',
  // 是否隐藏导航栏, 默认false
  navBarHidden: false,
  // 需要传到下一个页面的数据，默认为空
  params: {},
  // 指定从堆栈的哪个页面开始关闭，不传是不会关闭的
  closeFrom: 1
  // 关闭页面的方向，默认和堆栈方向一致
  closeFromBottomToTop: true
  // 关闭页面的个数。如果传了closeFrom但没有传closeCount，分两种情况：
  // closeFromBottomToTop为true时关闭到当前页面（当前页面也会关闭）
  // closeFromBottomToTop为false时关闭到根页面（根页面不关闭）
  closeCount: 1
})
```

::: tip url的两种类型
如果url是http开头，将加载网络资源。否则，会通过热更新从本地加载
:::

- 获取router的params参数

getParams()

```vue
const params = router.getParams()
```

- 关闭页面

close(number)

```vue
// 关闭顶层多个页面，默认1个
router.close(1)
```

- 刷新weex页面

refresh()

```vue
router.refresh()
```

## wb-network

网络请求

### 引用方式

```vue
const network = weex.requireModule('wb-network')
```

### API

- 请求接口

request(object, callback)

```vue
network.request({
  // 请求的URL
  url: 'https://weexbox.com/api',
  // 请求时使用的方法，默认是 get
  method: 'post',
  // 请求头
  headers: {'Content-Type': 'application/json'},
  // 发送的 URL/Body 参数
  params: {
    ID: 12345
  },
  // 响应类型, json 或 text，默认 text
  responseType: 'json'
}, (result) => {

})

// callback参数
result: {
  // 状态码
  status: 200,
  error: '',
  // 服务器返回结果
  data: {}
}
```

- 文件上传

upload(object, completionCallback, progressCallback)

```vue
network.upload({
  // 请求的URL
  url: 'https://weexbox.com/api'
  // 本地文件路径数组
  files: ['/docment/1.png']
}, (result) => {
  // 完成的callback
}, (result) => {
  // 进度的callback
})

// 完成的callback
result: {
  // 状态码
  status: 200,
  error: '',
  // 服务器返回结果
  data: {}
}

// 进度的callback
result: {
  status: 0,
  // 进度
  progress: 50
}
```

## wb-event

应用级别事件通知。相比于实例级别的事件[globalEvent](https://weex.apache.org/cn/references/modules/globalevent.html), wb-event 能够跨页面传递事件。

::: tip
globalEvent 虽然里面包含"global"这个词，但它不是真正的全局事件通知。
globalEvent 只能在当前原生页面和它里面的 weex 通信。
wb-event 不区分原生还是 weex，也不区分是同一个页面还是多个不同页面。
:::

### 引用方式

```vue
const event = weex.requireModule('wb-event')
```

### API

- 注册事件

register(string, callback)

```vue
event.register('name', (result) => {

})

// callback参数
{
  status: 0,
  error: '',
  // 触发该事件所传的参数
  data: {}
}
```

- 发送事件

emit(object)

```vue
event.emit({
  // 事件名称
  name: 'eventName',
  // 事件参数，默认为空
  params: {}
})
```

- 注销事件

unregister(string)

```vue
event.unregister('name')
```

- 注销所有事件

unregisterAll()

```vue
event.unregisterAll()
```

## globalEvent

扩展了全局事件，新增

- viewDidAppear 页面显示的时候触发
- viewDidDisappear 页面隐藏的时候触发

## wb-location

获取定位

### 引用方式

```vue
const location = weex.requireModule('wb-location')
```

### API

- 获取经纬度

getLocation(callback)

```vue
location.getLocation((result) => {

})

// callback参数
result: {
  status: 0,
  error: '',
  data: {
    // 经度，Double类型
    longitude: 38.0665411199
    // 纬度，Double类型
    latitude: 99.8420333862
  }
}
```

## wb-modal

各种弹窗

### 引用方式

```vue
const modal = weex.requireModule('wb-modal')
```

### API

- 警告弹窗

alert(object, callback)

```vue
modal.alert({
  // 标题
  title: '标题',
  // 弹窗内容
  message: '弹窗内容',
  // 确定按钮文字
  okTitle: '确定'
}, (result) => {

})

// callback参数
result: {
  status: 0
}
```

- 确定弹窗

confirm(options, callback)

```vue
modal.confirm({
  // 标题
  title: '标题',
  // 弹窗内容
  message: '弹窗内容',
  // 取消按钮文字
  cancelTitle: '取消',
  // 确定按钮文字
  okTitle: '确定'
}, (result) => {
  
})

// callback参数
result: {
  // 确定按钮0，取消按钮-1
  status: 0
}
```

- 输入弹窗

prompt(object, callback)

```vue
modal.prompt({
  // 标题
  title: '标题',
  // 弹窗内容
  message: '我是一个弹窗',
  // 占位符
  placeholder: '请输入密码',
  // 是否不显示输入，默认否
  isSecure: true,
  // 取消按钮文字
  cancelTitle: '取消',
  // 确定按钮文字
  okTitle: '确定'
}, (result) => {

})

// callback参数
result: {
  // 确定按钮0，取消按钮-1
  status: 0,
  data: {
    // 输入的文字
    text: '输入的文字'
  }
}
```

- 操作表弹窗

actionSheet(object, callback)

```vue
modal.actionSheet({
  // 标题，默认为空
  title: '标题',
  // 弹窗内容，默认为空
  message: '弹窗内容',
  // action列表
  actions: [{
    // 按钮类型'danger', 'cancel', 'normal'。默认normal
    type: 'danger',
    // 按钮的标题
    title: '删除'
  }]
}, (result) => {

})

// callback参数
result: {
  // 取消按钮-1，其他0
  status: 0,
  data: {
    // 按钮的索引
    index: 0
  }
}
```

- 吐司

showToast(object)

```vue
modal.showToast({
  // 提示信息
  text: '提示信息',
  // 显示时间，默认2秒
  duration: 2
})
```

- 显示菊花

showLoading(string)

```vue
// loading 文字，默认为空
modal.showLoading('加载中...')
```

- 显示进度

showProgress(object)

```vue
modal.showProgress({
  // 进度
  progress: 50
  // loading 文字，默认为空
  text: '加载中...'
})
```

- 关闭菊花

dismiss()

```vue
modal.dismiss()
```

## wb-navigator

设置原生导航栏

### 引用方式

```vue
const navigator = weex.requireModule('wb-navigator')
```

### API

- 禁用返回手势

disableGestureBack(Boolean)

```vue
// 禁用
navigator.disableGestureBack(true)
```

- 设置导航栏左边按钮

setLeftItems(array, callback)

```vue
navigator.setLeftItems([
  {
    // 展示的文字
    text: '',
    // 文字颜色，16进制
    color: 'ffffff',
    // 展示的图片。如果设置了text，则image不起作用
    image: 'http://weexbox.surge.sh/hero.png' 
  }
], (result) => {

})

// callback参数
result: {
  status: 0,
  data: {
    // 点击的索引
    index: 0
  }
}
```

- 设置导航栏右边按钮

setRightItems(array, callback)

```vue
navigator.setRightItems([
  {
    // 展示的文字
    text: '',
    // 文字颜色，16进制
    color: 'ffffff',
    // 展示的图片。如果设置了text，则image不起作用
    image: 'http://weexbox.surge.sh/hero.png' 
  }
], (result) => {

})

// callback参数
result: {
  status: 0,
  data: {
    // 点击的索引
    index: 0
  }
}
```

- 设置导航栏中间的按钮

setCenterItem(object, callback)

```vue
navigator.setCenterItem({
  // 展示的文字
  text: '',
  // 文字颜色，16进制
  color: 'ffffff',
  // 展示的图片。如果设置了text，则image不起作用
  image: 'http://weexbox.surge.sh/hero.png' 
}, (result) => {

})

// callback参数
result: {
  status: 0
}
```

- 导航栏颜色

setNavColor(string)

```vue
navigator.setNavColor('00ff00')
```

- 物理返回键

onBackPressed(callback)

```vue
navigator.onBackPressed(() => {
})
```

## wb-external

打开外部功能

### 引用方式

```vue
const external = weex.requireModule('wb-external')
```

**API**

- 打开浏览器:

openBrowser(string)

```vue
external.openBrowser('https://weexbox.surge.sh/')
```

- 打电话:

callPhone(string, callback)

```vue
external.callPhone('110', (result) => {

})

// callback参数
result: {
  status: 0,
  error: '',
}
```

- 拍照:

openCamera(object, callback)

```vue
external.openCamera({
  // 能否剪裁
  enableCrop: true,
  // 是否矩形剪裁，true为圆形剪裁
  isCircle: true,
  // 宽度
  width: 100,
  // 高度
  height:100
}, (result) => {

})

// callback参数
result: {
  status: 0,
  error: '',
  data: {
    // 图片的存储路径
    url: '/docment/123.png'
  }
}
```

- 打开相册:

openPhoto(object, callback)

```vue
external.openPhoto({
  // 最大选取张数
  count: 9,
  // 能否剪裁
  enableCrop: true,
  // 是否矩形剪裁，true为圆形剪裁
  isCircle: true,
  // 宽度
  width: 100,
  // 高度
  height:100
}, (result) => {

})

// callback参数
result: {
  status: 0,
  error: '',
  data: {
    // 图片的存储路径
    urls: ['url0', 'url1']
  }
}
```
