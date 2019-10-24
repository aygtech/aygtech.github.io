# 快速上手

## 初始化
```bash
1. git clone https://gitee.com/aiyuangong/management-background-boilerplate.git
2. cd management-background-boilerplate
3. npm i
4. npm run dev94
```

## 使用说明
```bash
1. npm run dev94 // 开发94
2. npm run dev92 // 开发92
3. npm run build // 线上部署调用
4. npm run lint // eslint检查，自动修复
5. vue ui // ui界面运行项目，查看插件等
```

## 通用配置
```js
// src/config/index.js
1. websiteName // 站点标题
2. showSettingBtn // 是否显示设置按钮，根据业务需要自行决定
3. showBreadcrumb // 是否显示访问路径面包屑，根据业务需要自行决定
4. showDemoPage // 是否显示demo页，预览版默认设置为true，业务中设置false

// src/store/modules/user.js
1. loginPageType // 默认登录页样式，根据业务需要自行决定
2. menuType // 默认菜单栏样式，根据业务需要自行决定

// 其它
* 修改密码接口待接入
* 菜单接口自行接入业务接口，数据格式参考 src/mock/menu.bak.json
```

## 项目结构
```
src
  ├─api     // 所有的请求函数，建议分业务模块封装
  ├─assets  // 静态文件
  ├─components // 组件，建议用驼峰形式，首字母大写来命名，建议命名组件name属性
  │  ├─HeaderMenu
  │  ├─Layout
  │  └─SvgIcon
  ├─config  // 配置
  ├─layouts // 布局
  ├─filters // 过滤器
  ├─router  // 路由，建议分业务模块封装。
  │  ├─index.js
  │  └─modules
  ├─store // 状态，建议分业务模块封装。index已做了（actions）封装，只需要在modules添加模块，getters需要自己书写
  │  ├─index.js
  │  └─modules
  ├─utils // 工具函数
  └─views // 页面文件
      └─login
```
