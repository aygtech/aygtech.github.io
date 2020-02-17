# hm-ui
内置了常用组件、过滤器、工具函数。[源码](https://github.com/aygtech/hm-ui)

## 组件-步骤条
引导用户按照流程完成任务的导航条

#### 代码演示
[点击预览](https://preview-oms.test.hnrfqj.com/demo/page/component)
```html
<hm-steps :active="currentStep" :steps="steps" :showAction="showStepAction" @change="onStepChange">
  <div class="steps-slot-wrap">
    <div class="step-slot" v-if="currentStep === 0">操作 {{steps[currentStep].title}} Step</div>
    <div class="step-slot" v-if="currentStep === 1">操作 {{steps[currentStep].title}} Step</div>
    <div class="step-slot" v-if="currentStep === 2">操作 {{steps[currentStep].title}} Step</div>
    <div class="step-slot" v-if="currentStep === 3">操作 {{steps[currentStep].title}} Step</div>
    <div class="step-slot" v-if="currentStep === 4">操作完成，页面路由跳走 或 自定义操作成功页</div>
  </div>
</hm-steps>
```
```js
export default {
  data() {
    return {
      currentStep: 0,
      showStepAction: true,
      steps: [
        {
          title: 'First',
          description: 'First-description',
        },
        {
          title: 'Second',
          description: 'Second-description',
        },
        {
          title: 'Thrid',
          description: 'Thrid-description',
        },
        {
          title: 'Last',
          description: 'Last-description',
        },
      ],
      // hm-steps end
    }
  },
  methods: {
    onStepChange(param) {
      this.currentStep = param.active
      console.info('onStepChange', param)
    },
  },
}
```

#### API
| 参数 | 说明 | 类型| 默认值 | 可选值 |
|-----|:----------|:------|:------------|:--------|
| labelPlacement | 指定标签放置位置 |  String | vertical | horizontal,vertical |
| showAction | 是否显示底部按钮(下一步、上一步) |  Boolean | true | true,false |
| current | 指定当前步骤 |  Number | 0 | - |
| steps | 步骤数据列表 |  Array | [] | [{title: 'title', description: 'description'}] |
| title | steps中title的字段名 |  String | title | - |
| description | steps中description的字段名 |  String | description | - |
| doneTxt | 最后一步完成的提示语 |  String | - | - |


## 过滤器
过滤器-描述

#### 代码演示
```js
```


## 工具函数
工具函数-描述

#### 代码演示
```js
```