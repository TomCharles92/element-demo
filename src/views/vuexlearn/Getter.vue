<template>
  <div>
    <h1>doneTodosCount: {{ doneTodosCount }}</h1>
    <h1>doneTodos: {{ doneTodos }}</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Getter",
  computed: {
    doneTodosCount() {
      return this.$store.getters.doneTodosCount;
    },
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters(["doneTodos"])
  }
};
</script>

<style scoped>
</style>