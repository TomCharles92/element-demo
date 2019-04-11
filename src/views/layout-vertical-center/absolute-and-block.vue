<template>
  <div>
    <div id="box">
      <div id="child">
        Child
      </div>
      <div>ddd</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AbsoluteAndBlock"
};
</script>

<style scoped>
#box {
  width: 300px;
  height: 300px;
  background: #ddd;
  position: relative;
}
#child {
  width: 150px;
  height: 100px;
  background: orange;
  position: absolute;
  top: 50%;
  margin: -50px 0 0 0;
  line-height: 100px;
}
</style>


