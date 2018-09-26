# 介绍

WeexBox 致力于打造一套简单、高效的基于 [weex](https://weex-project.io/cn/) 的APP混合开发解决方案。

## 支持的系统

- Android 5.0 (API 21)+
- iOS 10.0+

## 特性

- 不依赖 weex-toolkit

## @weexbox/service

@weexbox/service提供编译、打热更新包、生成内置包、调试等功能。

- 编译

```sh
// 非生产环境
weexbox-service build
// 生产环境
weexbox-service release
```

- 打热更新包

```sh
weexbox-service update
```

- 生成内置包

```sh
weexbox-service copy
```

- 调试

```sh
weexbox-service debug [xxx/App.vue]
```

## 初始化的项目

项目里已经内置并配置好了@weexbox/service。

- 编译打包热更新一条龙服务

```sh
npm run hotDeploy
```

- 调试

```sh
npm run debug  [xxx/App.vue]
```
