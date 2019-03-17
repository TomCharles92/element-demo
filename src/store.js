import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        todos: [
            {id: 1, text: '事件1', done: true},
            {id: 2, text: '事件2', done: false}
        ],
        zhihuData: {}
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        // Getter 也可以接受其他 getter 作为第二个参数：
        doneTodosCount: (state, getters) => {
            return getters.doneTodos.length
        },
        getTodoById: state => id => {
            return state.todos.find(element => element.id === id)
        },
        // 上面函数的原型
        test: function (state) {
            return function (id) {
                return state.todos.find(element => element.id === id)
            }
        }
    },
    // 每个mutations的第一个参数必须是state, 第二个参数称为payload载荷
    mutations: {
        increment(state) {
            state.count++
        },
        incrementBy(state, payload) {
            state.count += payload.amount
        },
        getZhihuData(state) {
            axios.get('api/2/news/latest')
                .then(res => {
                    state.zhihuData = res.data
                })
        }
    },
    // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，但并不是同一个
    actions: {
        increment(context) {
            context.commit('increment')
        },
        // 用参数解构 argument destructuring 来简化
        increment2({commit}) {
            commit('increment')
        },
        // 异步 action
        incrementAsync({commit}) {
            setTimeout(() => {
                commit('increment')
            }, 1000)
        },
        // payload 荷载
        incrementByAsync({commit}, payload) {
            setTimeout(() => {
                commit('incrementBy', payload)
            }, 1000)
        },
        incrementByAsyncPromise({commit}, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('incrementBy', payload)
                    resolve()
                }, 1000)
            })
        },
        getZhihuDataAsync({commit}) {
            commit('getZhihuData')
        }
    }
})

// this.store.dispatch('getZhihuDataAsync')
