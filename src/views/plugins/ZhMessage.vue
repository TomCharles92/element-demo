<template>
  <div>
    <h1>模仿El-Message</h1>

    <my-button :loading="false" native-type="reset" @click="sendMessage">发送自定义消息</my-button>

  </div>
</template>

<script>
import message from "@/components/ZhMessage/src/main.js"
import myButton from "@/components/button"

import MyMessage from "./components/main.js"

export default {
  name: "ZhMessage",
  components: { myButton, MyMessage },
  data() {
    return {
      count: 1
    }
  },
  created() {
    message({
      message: "一条消息",
      duration: 3000
    });
  },
  methods: {
    sendMessage() {
      MyMessage(`发送xiaoxi ${this.count++}`);
    }
  }
}
</script>