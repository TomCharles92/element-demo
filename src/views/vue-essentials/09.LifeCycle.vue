<template>
  <transition @after-leave="afterLeave">
    <div>
      <h1 ref="name">{{ name }}</h1>
      <button @click="change">Change</button>

      <p>
        <button @click="show = !show">显示与隐藏</button>
      </p>
      <IfControl v-if="show"></IfControl>
    </div>
  </transition>
</template>

<script>
import IfControl from "./subComponent/IfControl";
export default {
  name: "LifeCycle",
  data() {
    return {
      name: "liuting1",
      show: true
    };
  },
  components: { IfControl },
  beforeCreate() {
    console.log("创建前：");
    console.log(this.$el);
    console.log(this.$data);
  },
  created() {
    console.log("创建完成：");
    console.log(this.$el);
    console.log(this.$data);
  },
  beforeMount() {
    console.log("挂载前：");
    console.log(this.$el);
    console.log(this.$data);
  },
  mounted() {
    console.log("挂载完成：");
    console.log(this.$el);
    console.log(this.$data);
  },
  beforeUpdate() {
    console.log("=即将更新渲染=");
    let name = this.$refs.name.innerHTML;
    console.log("name:" + name);
  },
  updated() {
    console.log("==更新成功==");
    let name = this.$refs.name.innerHTML;
    console.log("name:" + name);
  },
  beforeDestroy() {
    console.log("销毁前：");
    console.log(this.$el);
    console.log(this.$data);
  },
  destroyed() {
    console.log("销毁完成：");
    console.log(this.$el);
    console.log(this.$data);
  },
  methods: {
    // 改变数据会调用 update 相关的钩子
    change() {
      this.name += "223";
    },
    afterLeave() {
      console.log("离开了");
      // this.$destroy(true);
      console.log(this.$el.parentNode);
      // this.$el.parentNode.removeChild(this.$el);

      console.log(this.$el);
      console.log(this.$data);
    }
  }
};
</script>