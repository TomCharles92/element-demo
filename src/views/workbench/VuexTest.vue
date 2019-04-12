<template>
  <div>
    <el-button @click="test()">
      Test
    </el-button>
  </div>
</template>

<script>
import Mortgage from "../../commonClass.js";

export default {
  name: "VuexTest",
  methods: {
    test() {
      let a = new Mortgage(200000, 30, 5);
      let b = new Mortgage(100000, 30, 5);
      console.log(a);
      console.log(b, Object.keys(b));
    }
  }
};
</script>

<style scoped>
</style>