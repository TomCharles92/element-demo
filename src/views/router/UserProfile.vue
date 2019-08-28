<template>
  <h1>UserProfile</h1>
</template>

<script>
    export default {
        name: "UserProfile",
        created () {
            this.getData()
        },
        methods: {
            getData () {
                this.$axios.get('/zhihu/api/2/news/latest')
                    .then(res => {
                        console.log(res.data)
                    })
            }
        }
    }
</script>

<style scoped>

</style>