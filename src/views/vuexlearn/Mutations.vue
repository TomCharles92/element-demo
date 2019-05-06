<template>
  <div>
    <h1>Mutations</h1>
    <h1>count: {{ count }}</h1>
    <button @click="add">
      add
    </button>
    <button @click="add2">
      add2
    </button>
    <button @click="increment">
      add3
    </button>
    <button @click="add10(10)">
      addBy10
    </button>
    <button @click="incrementBy({ amount: 20 })">
      addBy20
    </button>
    <p>
      <button @click="updateProductInfo">product</button>
    </p>
  </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'

    export default {
        name: "Mutations",
        computed: {
            ...mapState([
                'count',
                'productInfo'
            ])
        },
        // commit mutation 的三种方式
        methods: {
            add() {
                this.$store.commit('increment')
            },
            add10(amount) {
                this.$store.commit('incrementBy', { amount: amount })
            },
            ...mapMutations({
                add2: 'increment'
            }),
            ...mapMutations([
                'increment',
                'incrementBy'
            ]),
            updateProductInfo() {
              // this.productInfo.name = '产品2'
              this.$store.commit('setProductInfo', { productInfo: { name: '产品2' }})
              console.log(this.productInfo);
            }
        }
    }
</script>

<style scoped>

</style>