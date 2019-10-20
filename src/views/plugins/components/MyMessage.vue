<template>
  <transition @after-leave="handleAfterLeave">
    <div v-show="visible">
      <div class="zh-message">{{ message }}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "MyMessage",
  data() {
    return {
      message: "",
      visible: false,
      duration: 3000,
    };
  },
  mounted() {
    this.startTimer();
  },
  beforeDestroy() {
    console.log("销毁");
  },
  methods: {
    handleAfterLeave() {
      // this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el); // parentNode 父节点
    },

    // 计时开始
    startTimer() {
      if (this.duration > 0) {
        setTimeout(() => {
          this.onClose(this);
          this.visible = false;
        }, this.duration);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.zh-message {
  // 居中效果-start
  position: fixed;
  width: 380px;
  left: 50%;
  margin-left: -190px;
  box-sizing: border-box;
  // 居中效果-end
  z-index: 3000;
  border: 1px solid black;
  padding: 10px;

  background: bisque;
}
</style>