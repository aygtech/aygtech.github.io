# 基本配置

## iOS



## Andorid

### 初始化

- 初始化后，如果要使用weex，Activity务必要使用WBWeexActivity，或者自定义weex页面（Activity继承WBBaseActivity，Fragment继承WBWeexFragment）

```vue
//在application中初始化
WeexBoxEngine.INSTANCE.initialize(this);
```

### 注册module

```vue
//其中wb-network需要与weex页面定义的名字一致
WXSDKEngine.registerModule("wb-network", NetworkModule.class);
```

### 注册weex组件

```vue
//其中ai-amap需要与weex的标签名字一致
 WXSDKEngine.registerComponent("ai-amap", AMapComponent.class);
```

### 注册router

```vue
//通过weex页面跳转页面时候需要将activity注册到路由，其中video_record需要与weex需要跳转的Router里面的name名字一致
Router.Companion.register("video_record", VideoRecordActivity.class);
```