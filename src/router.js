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
          path: '/form',
          name: '表单',
          component: () => import('./views/workbench/Form.vue')
        },
        {
          path: '/table',
          name: '表格',
          component: () => import('./views/workbench/Table.vue')
        },
        {
          path: '/vuex-test',
          name: 'vuex',
          component: () => import('./views/workbench/VuexTest.vue')
        },
        {
          path: '/tree',
          name: 'Ele树形控件',
          component: () => import('./views/workbench/Tree.vue')
        },
        {
          path: '/tree2',
          name: '手写树形控件',
          component: () => import('./views/workbench/Tree2.vue')
        },
        {
          path: '/tree3',
          name: '手写树形控件2',
          component: () => import('./views/workbench/Tree3.vue')
        },
        {
          path: '/message-box',
          name: '消息盒子',
          component: () => import('./views/workbench/MessageBox.vue')
        }
      ]
    },
    {
      path: '/vuexlearn',
      name: 'VuexLearn',
      component: () => import('./views/vuexlearn/VuexLearn.vue'),
      children: [
        {
          path: '/state',
          name: 'state',
          component: () => import('./views/vuexlearn/State.vue')
        },
        {
          path: '/getter',
          name: 'Getter',
          component: () => import('./views/vuexlearn/Getter.vue')
        },
        {
          path: '/mutations',
          name: 'Mutations',
          component: () => import('./views/vuexlearn/Mutations.vue')
        },
        {
          path: '/action',
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
          path: '/userpost', // 当/router时，会渲染 UserPost 组件
          name: 'UserPost',
          component: () => import('./views/router/UserPost.vue')
        },
        {
          path: '/userprofile',
          name: 'UserProfile',
          component: () => import('./views/router/UserProfile.vue')
        }
      ]
    },
    {
      path: '/layout',
      name: 'Layout',
      component: () => import('./views/layout/Layout.vue'),
      children: [
        {
          path: '/layout-table',
          name: 'layout-table',
          component: () => import('./views/layout/Table.vue')
        },
        {
          path: '/layout-float',
          name: 'layout-float',
          component: () => import('./views/layout/Float.vue')
        },
        {
          path: '/layout-float2',
          name: 'layout-float2',
          component: () => import('./views/layout/Float2.vue')
        },
        {
          path: '/layout-float3',
          name: 'layout-float3',
          component: () => import('./views/layout/Float3.vue')
        },
        {
          path: '/layout-responsive',
          name: 'layout-responsive',
          component: () => import('./views/layout/Responsive.vue')
        }
      ]
    },
    {
      path: '/layout-vertical-center',
      name: 'layout-vertical-center',
      component: () => import('./views/layout-vertical-center/layout-vertical-center.vue'),
      children: [
        {
          path: '/flexbox',
          name: 'flexbox',
          component: () => import('./views/layout-vertical-center/Flexbox.vue')
        },
        {
          path: '/absolute-and-block',
          name: 'absolute-and-block',
          component: () => import('./views/layout-vertical-center/absolute-and-block.vue')
        }
      ]
    }
  ]
})
