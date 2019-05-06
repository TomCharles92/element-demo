<template>
  <div>
    <h2>条件渲染</h2>
    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username">
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address">
    </template>
    <p>
      <button @click="loginType = 'email'">Toggle login type</button>
    </p>

    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username">
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email">
    </template>

    <h4>v-show 不支持 template，不会生效</h4>
    <template v-if="!ok">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>

    <template v-show="!ok">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>
  </div>
</template>

<script>
export default {
  name: "ConditionalRendering",
  data: function() {
    return {
      loginType: "username",
      username: "",

      ok: true
    };
  }
};
</script>

