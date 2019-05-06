<template>
  <div>
    <h1>单向数据流</h1>
    <p>
      {{ product }}
      <button @click="update">在父组件中修改</button>
    </p>
    <OneWayDataFlowChild :product="product" my-prop="223" @my-event="myEvent"></OneWayDataFlowChild>
  </div>
</template>

<script>
import OneWayDataFlowChild from "@/components/OneWayDataFlowChild";

export default {
  name: "OneWayDataFlow",
  components: { OneWayDataFlowChild },
  data: function() {
    return {
      product: {
        name: "产品名称",
        desc: "产品说明"
      }
    };
  },
  methods: {
    update() {
      this.product.name = 456;
    },
    myEvent() {
      console.log("触发子组件事件");
    }
  }
};
</script>

