<template>
  <div>
    <h2>计算属性和侦听器</h2>
    <h3>计算属性缓存 vs 方法</h3>
    <p>{{ reversedMessageComputed }}</p>
    <p>{{ reversedMessageComputed }}</p>
    <p>{{ reversedMessageComputed }}</p>
    <p>{{ reversedMessageMethods() }}</p>
    <p>{{ reversedMessageMethods() }}</p>
    <p>{{ reversedMessageMethods() }}</p>

    <h3>Watcher</h3>
    <p>
      Ask a yes/no question:
      <input v-model="question">
    </p>
    <p>{{ answer }}</p>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "ComputedAndWatcher",
  data: function() {
    return {
      message: "Hello",
      question: "",
      answer: "请输入问题"
    };
  },
  computed: {
    reversedMessageComputed: function() {
      console.log("我是computed");
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function(newQuestion, oldQuestion) {
      this.answer = "等待输入...";
      this.debouncedGetAnswer();
    }
  },
  created: function() {
    // 请求间隔 >= 500ms，_.debounce返回一个函数
    // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  },
  methods: {
    reversedMessageMethods: function() {
      console.log("我是methods");
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    getAnswer: function() {
      if (this.question.indexOf("?") === -1) {
        this.answer = "请输入问号？ ;-)";
        return;
      }
      this.answer = "Thinking...";
      var vm = this;
      this.$axios
        .get("https://yesno.wtf/api")
        .then(response => {
          this.answer = _.capitalize(response.data.answer);
        })
        .catch(error => {
          this.answer = "Error! Could not reach the API. " + error;
        });
    }
  }
};
</script>

