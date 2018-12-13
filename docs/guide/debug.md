# Debug 调试

:::tip
确保电脑与手机处于同一网段。
:::

## 调试已经打包进真机的JSbundle

```bash
npm run debug
```
![file-list](../.vuepress/public/debug1.png)

- 1.1 此时会自动打开web，打开app的调试扫码工具扫二维码使pc与移动终端建立连接，当你看到类似以下这张图，就表示连接成功了。

![file-list](../.vuepress/public/debug2.png)

- 1.2 此时在app打开weex编译好的JSbundle,即可在调试页面中调试，调试页面console中可以看到weex页面写的console.log

## 调试正在开发的页面

```bash
npm run debug [vue/weex页面的路径]
```
- 2.1 也是需要使pc与移动终端建立连接，步骤与1.1一致

- 2.2 此时右上角有另外一个二维码，点开并扫描这个二维码即可将这个JSbundle页面载入真机渲染成原生页面

![file-list](../.vuepress/public/debug4.png)

- 2.3 调试步骤跟1.2一致

- hotreload

:::warning
这个调试工具跟Chrome devtool有一定差异：  
不支持console.error、console.group  
不可在调试页面console窗口执行js语句
:::
