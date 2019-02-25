# 项目结构

```
.
├── config                  // 配置文件夹
│   ├── update-config.json  // 热更新的配置文件
│   └── weexbox-config.js   // 图片资源的配置文件
├── deploy                  // 输出文件夹，自动生成
│   ├── 20190103153502      // js bundle文件夹
│   │   └── module          // 模块文件夹
│   │       └── page.js     // js bundle
│   ├── static              // 图片资源
│   └── update-version.txt  // 打包时间戳
├── platforms               // 原生文件夹
│   ├── android             // Android工程
│   └── ios                 // iOS工程
├── src                     // vue源码文件夹
│   └── module              // 模块文件夹。名字根据项目而定
│       └── page            // 页面文件夹。名字根据项目而定
│           ├── App.vue     // vue源码
│           └── index.js    // 入口文件
└── static                  // 图片资源文件夹
```

::: danger
上述结构，除了`module`和`page`是根据项目而定的，其他名称都是固定的。并且src的目录层级要跟上面一致。
:::

::: tip
`page`代表一个页面，不同的页面应该有各自的文件夹，文件夹里面必须包含`index.js`入口文件。上述结构打包之后，`page`文件夹的名字会作为js bundle的名字，具体可以看`deploy`文件夹。
:::