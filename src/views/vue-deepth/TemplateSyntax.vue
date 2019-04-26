<template>
  <div>
    <h2>模板语法</h2>

    <h3>v-once</h3>
    <ul>
      <li>{{ msg }}</li>
      <li v-once>{{ msg }}</li>
      <li>
        <el-input v-model="msg"></el-input>
      </li>
    </ul>

    <h3>原始HTML v-html</h3>
    <p>Using mustaches: {{ rawHtml }}</p>
    <p>
      Using v-html directive:
      <span v-html="rawHtml"></span>
    </p>

    <h3>指令-动态参数</h3>
    <el-button v-on:[eventName]="msg = '223'">更新数据</el-button>
  </div>
</template>

<script>
export default {
  name: "TemplateSyntax",
  data: function() {
    return {
      msg: "Hello World!",
      rawHtml: `<span style="color: red;">This should be red.</span>`,
      eventName: 'click'
    };
  }
};
</script>

