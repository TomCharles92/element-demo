<template>
  <div>
    <label>
      {{ label }}
      <input v-bind:value="value">
    </label>
  </div>
</template>

<script>
export default {
  name: "BaseInput2",
  inheritAttrs: false,
  props: ["label", "value"],
  // computed: {
  //   inputListeners: function() {
  //     var vm = this;
  //     return Object.assign({}, this.$listeners, {
  //       input: function(event) {
  //         vm.$emit("input", event.target.value);
  //       }
  //     });
  //   }
  // },
  created() {
    console.log(this.$listeners);
  }
};
</script>

