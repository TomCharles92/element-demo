<template>
  <div>
    <h1>自定义组件</h1>

    <base-checkbox v-model="lovingVue"></base-checkbox>
    <CustomInput :value="product" @input="product = $event"></CustomInput>
    <CustomInput v-model="product"></CustomInput>
    {{ product }}
  </div>
</template>

<script>
import BaseCheckbox from "./childComponent/BaseCheckbox";
import CustomInput from "./childComponent/CustomInput";
export default {
  name: "CustomEvent",
  components: { BaseCheckbox, CustomInput },
  data: () => ({
    lovingVue: true,
    product: "产品"
  })
};
</script>

