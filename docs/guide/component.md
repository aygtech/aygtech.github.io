# Component 拓展

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

## wb-lottie

[Lottie](https://airbnb.design/lottie/)动画，终于不用苦逼的写动画了！

### 引用方式

```vue
<wb-lottie class="happyBirthday" :sourceJson=sourceJson ref="lottie"></wb-lottie>
```

### props

- sourceJson: String 设计师给你的动画json字符串
- sourceUrl: String 设计师给你的动画地址
- speed: Number 动画播放速度
- loop: Boolean 是否循环播放
- resizeMode: String "cover"|"contain"|"center" 缩放模式

### API

- 是否在播放动画

isAnimationPlaying()

```vue
this.$refs.lottie.isAnimationPlaying()
```

- 播放动画

play(callback)

```vue
this.$refs.lottie.play((result) => {
    console.log(JSON.stringify(result))
})
```

- 指定进度的播放动画

playFromProgress(fromProgress, toProgress, callback)

```vue
this.$refs.lottie.playFromProgress(0, 1, (result) => {
    console.log(JSON.stringify(result))
})
```

- 指定帧的播放动画

playFromFrame(fromFrame, toFrame, callback)

```vue
this.$refs.lottie.playFromFrame(1, 10, (result) => {
    console.log(JSON.stringify(result))
})
```

- 暂停动画

pause()

```vue
this.$refs.lottie.pause()
```

- 停止动画

stop()

```vue
this.$refs.lottie.stop()
```