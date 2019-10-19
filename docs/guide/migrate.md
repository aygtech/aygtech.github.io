# 1.0迁移到2.0指引

## weex工程

- 将 2.0 版本中的 `package.json` 替换 1.0

- 运行 `cnpm i` 安装新依赖(删除先前的依赖)

查看 `package.json` ，新增了许多命令：

``` js

"develop": "weexbox-service build develop",
"test": "weexbox-service build test",
"preRelease": "weexbox-service build preRelease",
"release": "weexbox-service build release",
"watchDevelop": "weexbox-service watch develop",
"watchTest": "weexbox-service watch test",
"watchPreRelease": "weexbox-service watch preRelease",
"watchRelease": "weexbox-service watch release",
"debug": "weexbox-service debug",
"lint": "eslint --fix --ext .js,.vue src",

```

<!-- develop: 构建开发包
test:单元测试
preRelease:构建预发布包
release:构建开发包
watchDevelop:开发weex页面
debug: 开启debug页面，在命令watchDevelop中已开启，无需再次打开
lint: 代码格式化 -->
**说明：**

| 命令 | 说明 |
| :--- | :--- |
| develop | 构建开发环境 |
| test | 构建测试环境 |
| preRelease | 构建预发布(准生产)环境 |
| release | 构建发布(生产)环境 |
| watchDevelop | 监听开发环境中weex页面 |
| watchTest | 监听测试环境中weex页面 |
| watchPreRelease | 监听预发布(准生产)环境中weex页面 |
| watchRelease | 监听发布(生产)环境中weex页面 |
| debug | 开启debug页面,在命令watch中已开启,无需运行 |
| lint | 代码格式化 |

## iOS工程

升级pod
```ruby
pod 'WeexBox', '~> 2.0'
```

## Android工程

升级dependencies
```groovy
dependencies {
    api 'com.github.aygtech:weexbox-android-library:2.2.0'
}
```
