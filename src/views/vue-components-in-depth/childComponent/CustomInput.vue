<template>
  <div>
    <h4>自定义双向数据绑定</h4>
    <input v-bind:value="value" v-on:input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: ["value"]
};
</script>

