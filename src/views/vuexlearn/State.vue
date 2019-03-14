<template>
    <div>
        <h1>count: {{ count1 }}</h1>
        <h1>countAlias: {{ countAlias }}</h1>
        <button @click="increase">add</button>
        <h1>countPlusLocalState: {{ countPlusLocalState }}</h1>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: "State",
        computed: {
            // 通过 store.state 获取状态
            count1 () {
                return this.$store.state.count
            },
            // 使用对象展开运算符将此对象混入到外部对象中
            // mapState 函数会返回一个对象，它和computed的其他方法会合并为一个对象，传给computed属性
            ...mapState({
                count: state => state.count,
                // 传字符串参数 'count' 等同于 `state => state.count`
                countAlias: 'count',

                // 为了能够使用 `this` 获取局部状态，必须使用常规函数
                countPlusLocalState (state) {
                    return state.count + this.localCount
                }
            })
        },
        methods: {
            // 通过 state.commit 变更状态
            increase () {
                this.$store.commit('increment')
            }
        },
        data () {
            return {
                localCount: 100
            }
        }
    }
</script>

<style scoped>

</style>