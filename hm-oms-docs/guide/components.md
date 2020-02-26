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

## 组件-select下拉框
实现目的：解决ant-design中的select下拉框在多数据情况下的卡顿问题  
实现逻辑：根据用户输入关键字过滤数组中的数据  

```html
<hm-select :props="{
    value: 'id',
    label: 'name'
  }"
  :data="data"
  placeholder="输入内容"
  :showArrow="true"
  mode="default"
  style="width: 250px;"
  v-decorator="['company', {
    initialValue: company,
    rules: [
      { required: true, message: '请输入内容' },
    ],
  }]"
  @change="change"></hm-select>
```
```js
export default {
  data() {
    return {
      data: [
        { id: 1, name: '张三' },
        { id: 2, name: '李四' },
        { id: 3, name: '王五' },
        { id: 4, name: '张五' },
        { id: 5, name: '张三丰' },
        { id: 6, name: '王大叔' },
        { id: 7, name: '王几分' },
        { id: 8, name: '王东五' }
      ],
      company: '',
    }
  },
  methods: {
    change(value) {
      console.log(value)
    },
  },
}
```
#### API
| 参数 | 说明 | 类型| 默认值 | 可选值 |
|-----|:----------|:------|:------------|:--------|
| size | 选择框大小 |  String | default | large,small |
| allowClear | 是否可清除 |  Boolean | true | true,false |
| mode | 选择模式 |  String | default | multiple |
| props | 字段映射 |  Object | {value: 'id', label: 'name'} | - |
| data | 数据列表 |  Array | [] | - |
| showArrow | 是否显示下拉箭头 |  Boolean | true | true,false |
| placeholder | 选择框默认文案 |  String | '请输入搜索关键字' | - |

## 组件-费率
统一各个系统用到的费率表单  

::: tip hm-rate里存在各种数据校验，所以这里我们要求结合form表单使用  
费率类型包含三种：  
- NO_STEP 固定比例收费（实发金额）  
- PERSON_STEP_ONLY 不分月流水阶梯  
- BOTH_STEP 分月流水阶梯  
:::

```html
<a-form id="hmRate" :form="form" v-bind="formItemLayout" @submit="handleSubmit">
  <a-form-item label="姓名：">
    <a-input v-decorator="[
        'username',
        { rules: [{ required: true, message: '请输入姓名' }] },
      ]"
      placeholder="请输入姓名"
    />
  </a-form-item>
  <hm-rate ref="hmRate"
    v-model="stepType"
    :rateList="initData"
    :formItemLayout="formItemLayout"></hm-rate>
  <a-form-item :wrapper-col="{ span: 20, offset: 4 }">
    <a-button type="primary" html-type="submit">提交</a-button>
  </a-form-item>
</a-form>
```
```js
export default {
  data() {
    return {
      initData: [{
        key: 'level-0',
        leftVal: '0',
        rightVal: '',
        totalStepValWithRateDTOList: [
          {
            key: 'level-0-0',
            leftVal: '0',
            rightVal: '',
            rate: '',
          },
        ],
      }, {
        key: 'level-1',
        leftVal: '0',
        rightVal: '',
        totalStepValWithRateDTOList: [
          {
            key: 'level-1-0',
            leftVal: '0',
            rightVal: '',
            rate: '',
          },
        ],
      }],
      form: this.$form.createForm(this, { name: 'hmRate' }),
      // NO_STEP 固定比例收费（实发金额）
      // PERSON_STEP_ONLY 不分月流水阶梯
      // BOTH_STEP 分月流水阶梯
      stepType: 'NO_STEP',
      formItemLayout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
      },
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        console.log(values)
        if (err) return
        // 获取费率数据
        console.log(this.$refs.hmRate.getData())
      })
    },
  },
}
```
#### API
| 参数 | 说明 | 类型| 默认值 | 可选值 |
|-----|:----------|:------|:------------|:--------|
| rateList | 初始数据 |  Array | [] | - |
| formItemLayout | 布局 |  Object | {labelCol: { span: 4 }, wrapperCol: { span: 20 }} | - |

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