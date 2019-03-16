<template>
    <div>
        <h1>Action</h1>
        <h1>count: {{ count }}</h1>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: "Action",
        computed: {
            ...mapState([
                'count'
            ])
        }
    }
</script>

<style scoped>

</style>