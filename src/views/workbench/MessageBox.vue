<template>
  <div>
    <el-button @click="test">按钮</el-button>
  </div>
</template>

<script>
export default {
  name: "MessageBox",
  methods: {
    test() {
      this.$toasted.show("hello billo");
    }
  }
};
</script>

