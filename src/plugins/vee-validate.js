import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import CN from 'vee-validate/dist/locale/zh_CN' // VeeValidate 中文提示语言包

const config = {
  errorBagName: 'errorBags', // change if property conflicts. 避免变量名称命名冲突
  fieldsBagName: 'fieldBags',
};

Vue.use(VeeValidate, config)
Validator.localize('zh_CN', CN) // 本地化 VeeValidate 的中文错误提示语言

Validator.extend('truthy', {
  getMessage: field => 'The ' + field + ' value is not truthy.',
  validate: value => !!value
})

let instance = new Validator({ trueField: 'truthy' })
