# JS代码规范

weexbox-template 已经帮你配置好了代码规范，我们这里讲一下如何在VSCode中开启提示。

1. 安装 `eslint` 扩展
2. 打开首选项 -- 设置，在里面添加：
```JSON
"eslint.autoFixOnSave": true,
"eslint.validate": [
  {
    "language": "vue",
    "autoFix": true
  },
  {
    "language": "html",
    "autoFix": true
  },
  {
    "language": "javascript",
    "autoFix": true
  }
],
```