import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import CN from 'vee-validate/dist/locale/zh_CN' // VeeValidate 中文提示语言包

Vue.use(VeeValidate)
Validator.localize('zh_CN', CN) // 本地化 VeeValidate 的中文错误提示语言

Validator.extend('truthy', {
  getMessage: field => 'The ' + field + ' value is not truthy.',
  validate: value => !!value
})

let instance = new Validator({ trueField: 'truthy' })
