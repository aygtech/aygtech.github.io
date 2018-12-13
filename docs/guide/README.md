# 介绍

WeexBox 致力于打造一套简单、高效的基于 [weex](https://weex-project.io/cn/) 的APP混合开发解决方案。

## 开发 WeexBox 的初衷

weex给了vue开发者一条全新的道路，让前端开发者在APP中大放异彩。  
然而，weex也给前端开发者一个错觉，误以为整个APP都可以用weex来做，而不需要原生的支持。  
事实是，想要开发出优秀体验的APP，前端是离不开原生的，而且是重度依赖的。  
所以，前端需要与原生端紧密配合，我们称之为大前端的紧紧拥抱...  
weex的重心放在了js渲染UI的能力上，对原生的扩展并不多。  
于是我们想通过 WeexBox

- 扩展 weex 的能力
- 把最佳实践带入进来，提供大前端正确拥抱的姿势
- 开发一些实用工具，带来更棒的开发体验
- 填掉 weex 的坑

最终，开发者能够专注写bug了~~~


## 支持的系统

- Android 5.0 (API 21)+
- iOS 10.0+

## @weexbox/cli

@weexbox/cli 帮助你快速初始化工程项目。

- 编译

```sh
# 安装
cnpm i -g @weexbox/cli

# 新建一个weex工程
weexbox create projectName

# 进入工程
cd projectName

# 安装依赖
cnpm i

# 开始写bug
```

## @weexbox/debugger

初始化的项目里已经内置了 @weexbox/debugger，它负责调试功能。

- 调试app里的weex页面

```sh
npm run debug
```

- 从源码调试页面，并且支持热刷新

```sh
npm run debug xxx/App.vue
```

## @weexbox/builder

初始化的项目里已经内置了 @weexbox/builder，它负责打包功能。

- 编译打包热更新一条龙服务

```sh
# 开发环境
npm run develop

# 测试环境
npm run test

# 准生产环境
npm run preRelease

# 生成环境
npm run release
```