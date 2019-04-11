<template>
  <div>
    <div id="box">
      <div id="child"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Flexbox"
};
</script>

<style scoped>
#box {
  width: 300px;
  height: 300px;
  background: #ddd;
  display: flex;
  align-items: center;
}

#child {
  width: 150px;
  height: 100px;
  background: orange;
}
</style>

