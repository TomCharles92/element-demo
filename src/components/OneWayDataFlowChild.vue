<template>
  <div>
    <h4>子组件</h4>
    <p>
      {{ product }}
      <button @click="update1">直接修改prop</button>
    </p>
    <p>
      {{ product }}
      <button @click="update2">直接修改prop的属性</button>
    </p>
    <p>
      {{ localProduct }}
      <button @click="update3">prop复制到本地</button>
    </p>
    <p>
      <button @click="$emit('my-event')">子组件事件</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "OneWayDataFlowChild",
  props: ["product"],
  inheritAttrs: false,
  data: function() {
    return {
      localProduct: this.product
    };
  },
  created: function() {
    console.log(this.$attrs);
  },
  methods: {
    // 直接修改prop，vue会报错
    update1: function() {
      this.product = {
        name: 223
      };
    },
    // 直接修改prop的属性，会影响到父组件
    update2: function() {
      this.product.name = 666;
    },
    update3: function() {
      console.log(Boolean(this.product === this.localProduct));
      this.localProduct = {
        name: 223
      };
    }
  }
};
</script>

