<template>
  <div>
    <GoBack></GoBack>
    <h1>自定义组件</h1>

    <h3>自定义组件的 v-model</h3>
    <base-checkbox v-model="lovingVue"></base-checkbox>
    <CustomInput :value="product" @input="product = $event"></CustomInput>
    <CustomInput v-model="product"></CustomInput>
    {{ product }}
    <h3>绑定原生事件</h3>
    <!-- 双向绑定，$listeners -->
    <BaseInput label="产品名称" :value="product" v-on:input="product = $event"></BaseInput>
    <BaseInput label="产品名称" v-model="product"></BaseInput>

    <!-- .native -->
    <BaseInput2 label="产品名称" :value="product" v-on:input.native="onInput"></BaseInput2>
    <BaseInput2 label="产品名称" :value="product" v-on:dblclick.native="onDblclick"></BaseInput2>
    <BaseInput2 label="产品名称" :value="product" v-on:focus.native="onDblclick"></BaseInput2>
    <h3>.sync修饰符</h3>
    <button @click="isShow = true">显示子组件</button>
    <TextDocument v-show="isShow" :isShow="isShow" @update:isShow="isShow = $event"></TextDocument>
    <br>
    <button @click="isShow2 = true">显示子组件</button>
    <TextDocumentSync v-show="isShow2" :isShow.sync="isShow2"></TextDocumentSync>
  </div>
</template>

<script>
import BaseCheckbox from "./childComponent/BaseCheckbox";
import CustomInput from "./childComponent/CustomInput";
import BaseInput from "./childComponent/BaseInput";
import BaseInput2 from "./childComponent/BaseInput2";
import TextDocument from "./childComponent/TextDocument";
import TextDocumentSync from "./childComponent/TextDocumentSync";
export default {
  name: "CustomEvent",
  components: { BaseCheckbox, CustomInput, BaseInput, BaseInput2, TextDocument, TextDocumentSync },
  data: () => ({
    lovingVue: true,
    product: "产品",
    doc: {
      title: "标题"
    },
    isShow: false,
    isShow2: false
  }),
  methods: {
    onInput(event) {
      console.log(event.target.value);
    },

    onDblclick(event) {
      console.log("标签名：", event.target);
    }
  }
};
</script>

