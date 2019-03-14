import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        todos: [
            {id: 1, text: '事件1', done: true},
            {id: 2, text: '事件2', done: false}
        ]
    },
    mutations: {
        increment(state) {
            state.count++
        }
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
    actions: {}
})
