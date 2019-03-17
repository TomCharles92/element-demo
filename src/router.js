import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/workbench',
      name: '我的工作台',
      component: () => import('./views/workbench/Workbench.vue'),
      children: [
        {
          path: 'form',
          name: '表单',
          component: () => import('./views/workbench/Form.vue')
        },
        {
          path: 'vuex-test',
          name: 'vuex',
          component: () => import('./views/workbench/VuexTest.vue')
        }
      ]
    },
    {
      path: '/vuexlearn',
      name: 'VuexLearn',
      component: () => import('./views/vuexlearn/VuexLearn.vue'),
      children: [
        {
          path: 'state',
          name: 'state',
          component: () => import('./views/vuexlearn/State.vue')
        },
        {
          path: 'getter',
          name: 'Getter',
          component: () => import('./views/vuexlearn/Getter.vue')
        },
        {
          path: 'mutations',
          name: 'Mutations',
          component: () => import('./views/vuexlearn/Mutations.vue')
        },
        {
          path: 'action',
          name: 'Action',
          component: () => import('./views/vuexlearn/Action.vue')
        }
      ]
    },
    {
      path: '/router',
      name: 'Router',
      component: () => import('./views/router/Router.vue'),
      children: [
        {
          path: '', // 当/router时，会渲染 UserPost 组件
          name: 'UserPost',
          component: () => import('./views/router/UserPost.vue')
        },
        {
          path: 'userprofile',
          name: 'UserProfile',
          component: () => import('./views/router/UserProfile.vue')
        }
      ]

    }
  ]
})
