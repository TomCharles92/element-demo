<template>
  <div>
    TextDocument
    <p><button @click="$emit('update:isShow', false)">子组件隐藏按钮</button></p>
  </div>
</template>

<script>
export default {
  name: "TextDocumentSync",
  props: ["isShow"]
}
</script>

<style scoped>
div {
  background: lightblue;
}
</style>

