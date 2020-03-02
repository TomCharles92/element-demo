<template>
  <!-- <transition @after-leave="afterLeave"> -->
    <div>
      <h3>通过 v-if 来控制组件的销毁</h3>
      <button @click="handleDestory">手动销毁</button>
    </div>
  <!-- </transition> -->
</template>

<script>
export default {
  name: "IfControl",
  data() {
    return {
      test: 223
    };
  },
  beforeCreate() {
    console.log("=========子组件创建前：");
    console.log(this.$el);
    console.log(this.$data);
  },
  created() {
    console.log("=========子组件创建完成：");
    console.log(this.$el);
    console.log(this.$data);
  },
  beforeMount() {
    console.log("=========子组件挂载前：");
    console.log(this.$el);
    console.log(this.$data);
  },
  mounted() {
    console.log("=========子组件挂载完成：");
    console.log(this.$el);
    console.log(this.$data);
  },
  beforeUpdate() {
    console.log("=========子组件=即将更新渲染=");
    // console.log(this.$refs);
    let name = this.$refs.name.innerHTML;
    console.log("name:" + name);
  },
  updated() {
    console.log("=========子组件=更新成功==");
    let name = this.$refs.name.innerHTML;
    console.log("name:" + name);
  },
  beforeDestroy() {
    console.log("=========子组件销毁前：");
    console.log(this.$el);
    console.log(this.$data);
  },
  destroyed() {
    console.log("=========子组件销毁完成：");
    console.log(this.$el);
    console.log(this.$data);
  },
  methods: {
    afterLeave() {
      console.log("子组件离开了");
      // this.$destroy();
      // console.log(this.$el.parentNode)
      // this.$el.parentNode.removeChild(this.$el);
    },
    handleDestory() {
      console.log(223)
    }
  }
};
</script>

