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
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
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
                }
            ]
        }
    ]
})
