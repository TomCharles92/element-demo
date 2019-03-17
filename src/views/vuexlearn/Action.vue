<template>
    <div>
        <h1>Action</h1>
        <h1>count: {{ count }}</h1>
        <button @click="add()">add</button>
        <button @click="addAmount()">addAmount</button>
        <button @click="addAmount2({ amount: 20 })">addAmount2</button>
        <button @click="incrementByAsyncPromise({ amount: 15 })">incrementByAsyncPromise</button>
        <button @click="getZhihuDataAsync">getZhihuDataAsync</button>
    </div>
</template>

<script>
    import { mapState, mapActions} from 'vuex'

    export default {
        name: "Action",
        computed: {
            ...mapState([
                'count'
            ])
        },
        methods: {
            add () {
                this.$store.dispatch('incrementAsync')
            },
            addAmount () {
                this.$store.dispatch('incrementByAsync', { amount: 10 })
                    .then(res => {
                        console.log(res)
                    })
            },
            ...mapActions({
                addAmount2: 'incrementByAsync' // 映射为 `this.$store.dispatch('incrementByAsync', amount)`
            }),
            ...mapActions([
                'incrementByAsyncPromise',
                'getZhihuDataAsync'
            ])
        }
    }
</script>

<style scoped>

</style>