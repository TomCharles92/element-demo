import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/workbench",
      name: "我的工作台",
      component: () => import("./views/workbench/Workbench.vue"),
      children: [
        {
          path: "/form",
          name: "表单",
          component: () => import("./views/workbench/Form.vue")
        },
        {
          path: "/table",
          name: "表格",
          component: () => import("./views/workbench/Table.vue")
        },
        {
          path: "/vuex-test",
          name: "vuex",
          component: () => import("./views/workbench/VuexTest.vue")
        },
        {
          path: "/tree",
          name: "Ele树形控件",
          component: () => import("./views/workbench/Tree.vue")
        },
        {
          path: "/tree2",
          name: "手写树形控件",
          component: () => import("./views/workbench/Tree2.vue")
        },
        {
          path: "/tree3",
          name: "手写树形控件2",
          component: () => import("./views/workbench/Tree3.vue")
        },
        {
          path: "/message-box",
          name: "消息盒子",
          component: () => import("./views/workbench/MessageBox.vue")
        }
      ]
    },
    {
      path: "/vuexlearn",
      name: "VuexLearn",
      component: () => import("./views/vuexlearn/VuexLearn.vue"),
      children: [
        {
          path: "/state",
          name: "state",
          component: () => import("./views/vuexlearn/State.vue")
        },
        {
          path: "/getter",
          name: "Getter",
          component: () => import("./views/vuexlearn/Getter.vue")
        },
        {
          path: "/mutations",
          name: "Mutations",
          component: () => import("./views/vuexlearn/Mutations.vue")
        },
        {
          path: "/action",
          name: "Action",
          component: () => import("./views/vuexlearn/Action.vue")
        }
      ]
    },
    {
      path: "/router",
      name: "Router",
      component: () => import("./views/router/Router.vue"),
      children: [
        {
          path: "/userpost", // 当/router时，会渲染 UserPost 组件
          name: "UserPost",
          component: () => import("./views/router/UserPost.vue")
        },
        {
          path: "/userprofile",
          name: "UserProfile",
          component: () => import("./views/router/UserProfile.vue")
        }
      ]
    },
    {
      path: "/layout",
      name: "Layout",
      component: () => import("./views/layout/Layout.vue"),
      children: [
        {
          path: "/layout-table",
          name: "layout-table",
          component: () => import("./views/layout/Table.vue")
        },
        {
          path: "/layout-float",
          name: "layout-float",
          component: () => import("./views/layout/Float.vue")
        },
        {
          path: "/layout-float2",
          name: "layout-float2",
          component: () => import("./views/layout/Float2.vue")
        },
        {
          path: "/layout-float3",
          name: "layout-float3",
          component: () => import("./views/layout/Float3.vue")
        },
        {
          path: "/layout-responsive",
          name: "layout-responsive",
          component: () => import("./views/layout/Responsive.vue")
        }
      ]
    },
    {
      path: "/layout-vertical-center",
      name: "layout-vertical-center",
      component: () =>
        import("./views/layout-vertical-center/layout-vertical-center.vue"),
      children: [
        {
          path: "/flexbox",
          name: "flexbox",
          component: () => import("./views/layout-vertical-center/Flexbox.vue")
        },
        {
          path: "/absolute-and-block",
          name: "absolute-and-block",
          component: () =>
            import("./views/layout-vertical-center/absolute-and-block.vue")
        }
      ]
    },
    {
      path: "/plugins",
      name: "各种Vue插件",
      component: () => import("./views/plugins/Plugins"),
      children: [
        {
          path: '/vee-validate',
          name: "VeeValidate",
          component: () => import("./views/plugins/VeeValidate")
        },
        {
          path: '/vue-pull-to',
          name: "VuePullTo",
          component: () => import("./views/plugins/VuePullTo.vue")
        },
        {
          path: "/vue-infinite-scroll",
          name: "VueInfiniteScroll",
          component: () => import("./views/plugins/VueInfiniteScroll")
        }
      ]
    },
    {
      path: "/vue-essentials",
      name: "深入Vue",
      component: () => import("./views/vue-essentials/VueDeepth"),
      children: [
        {
          path: "/template-syntax",
          name: "模板语法",
          component: () => import("./views/vue-essentials/TemplateSyntax")
        },
        {
          path: "/computed-and-watcher",
          name: "计算属性和侦听器",
          component: () => import("./views/vue-essentials/ComputedAndWatcher")
        },
        {
          path: "/conditional-rendering",
          name: "条件渲染",
          component: () => import("./views/vue-essentials/ConditionalRendering")
        },
        {
          path: "/list-rendering",
          name: "列表渲染",
          component: () => import("./views/vue-essentials/ListRendering")
        },
        {
          path: "/form-input-binding",
          name: "表单输入绑定",
          component: () => import("./views/vue-essentials/FormInputBinding")
        },
        {
          path: "/component-basics",
          name: "组件基础",
          component: () => import("./views/vue-essentials/ComponentBasics")
        },
        {
          path: "/render-function",
          name: "渲染函数",
          component: () => import("./views/vue-essentials/RenderFunction")
        },
        {
          path: "/life-cycle",
          name: "09.生命周期",
          component: () => import("./views/vue-essentials/09.LifeCycle")
        }
      ]
    },
    {
      path: "/vue-components-in-depth",
      name: "深入了解组件",
      component: () => import("./views/vue-components-in-depth/VueComponentsInDepth"),
      children: [
        {
          path: "/automatic-global-registration",
          name: "全局注册基础组件",
          component: () => import("./views/vue-components-in-depth/AutomaticGlobalRegistration")
        },
        {
          path: "/one-way-data-flow",
          name: "Prop单向数据流",
          component: () => import("./views/vue-components-in-depth/OneWayDataFlow")
        },
        {
          path: "/custom-event",
          name: "自定义事件",
          component: () => import("./views/vue-components-in-depth/CustomEvent")
        }
      ]
    },
    {
      path: "/new-js-knowledge",
      name: "新的JS知识",
      component: () => import("./views/new-js-knowledge/index"),
      children: [
        {
          path: "/blob",
          name: "Blob",
          component: () => import("./views/new-js-knowledge/Blob")
        },
        {
          path: "/promise",
          name: "Promise",
          component: () => import("./views/new-js-knowledge/Promise")
        }
      ]
    }
  ]
});
