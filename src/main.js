import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import './assets/common.less'
import router from './router'
import store from './store'
import axios from 'axios'
import { mapActions } from 'vuex'

Vue.prototype.$axios = axios
axios.defaults.baseURL = '/zhihu'

Vue.config.productionTip = false

new Vue({
  router, // 将路由挂载到根实例上
  store,
  render: h => h(App),
  created () {
    this.getZhihuDataAsync()
  },
  methods: {
    ...mapActions([
      'getZhihuDataAsync'
    ])
  }
}).$mount('#app')
