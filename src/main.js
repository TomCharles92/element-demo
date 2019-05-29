import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import './assets/common.less'
import './plugins/vee-validate.js'
import './plugins/global.js' // 自动全局注册基础组件
import router from './router'
import store from './store'
import axios from 'axios'
import { mapActions } from 'vuex'
import toasted from 'vue-toasted'
import infiniteScroll from 'vue-infinite-scroll'
import GoBack from './components/GoBack'

Vue.component('GoBack', GoBack)

Vue.use(infiniteScroll)

Vue.use(toasted, {
  position: 'top-center',
  duration: 2000
})

Vue.prototype.$axios = axios
axios.defaults.baseURL = '/zhihu'

Vue.config.productionTip = false

new Vue({
  router, // 将路由挂载到根实例上
  store,
  created () {
    this.getZhihuDataAsync()
  },
  methods: {
    ...mapActions([
      'getZhihuDataAsync'
    ])
  },
  render: h => h(App)
}).$mount('#app')
