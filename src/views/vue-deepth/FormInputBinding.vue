<template>
  <div>
    <h3>基础用法</h3>

    <h4>多行文本</h4>
    <span style="white-space: pre-line;">{{ message }}</span>
    <br>
    <textarea v-model.lazy="message"></textarea>

    <h4>单个复选框</h4>
    <input type="checkbox" id="check" v-model="check">
    <label for="check">{{ check }}</label>

    <h4>复选框</h4>
    <input type="checkbox" id="apple" value="苹果" v-model="checkList">
    <label for="apple">苹果</label>
    <input type="checkbox" id="banana" value="香蕉" v-model="checkList">
    <label for="banana">香蕉</label>
    <input type="checkbox" id="orange" value="橙子" v-model="checkList">
    <label for="orange">橙子</label>
    <div>{{ checkList }}</div>

    <h4>单选按钮</h4>
    <input type="radio" id="male" value="男" v-model="sex">
    <label for="male">男</label>
    <input type="radio" id="female" value="女" v-model="sex">
    <label for="female">女</label>
    <div>{{ sex }}</div>

    <h4>选择框</h4>
    <select v-model="selected">
      <option disabled value="">请选择</option>
      <option v-for="option in optionList" :value="option.id" :key="option.id">{{ option.value }}</option>
    </select>
    <p>selected: {{ selected }}</p>

  </div>
</template>

<script>
export default {
  name: "FormInputBinding",
  data: function() {
    return {
      // 多行文本
      message: "",
      // 单个复选框
      check: false,
      // 复选框
      checkList: [],
      // 单选按钮
      sex: "",
      // 选择框
      selected: "",
      optionList: [
        { id: 1, value: "中国" },
        { id: 1, value: "美国" },
        { id: 1, value: "日本" }
      ]
    };
  }
};
</script>
