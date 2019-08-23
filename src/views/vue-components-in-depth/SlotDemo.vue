<template>
  <div>
    <h1>SlotDemo</h1>

    <h4>1. 编译作用于</h4>
    <NavicationLink url="/profile">Your Profile {{ user.name }}</NavicationLink>

    <h4>2. 后备内容</h4>
    <submit-button></submit-button>

    <h4>3. 具名插槽</h4>
    <BaseLayout>
      <base-layout>
        <template v-slot:header>
          <h1>Here might be a page title</h1>
        </template>

        <p>A paragraph for the main content.</p>
        <p>v-slot 只能添加在一个 template 上</p>

        <template v-slot:footer>
          <p>Here's some contact info</p>
        </template>
      </base-layout>
    </BaseLayout>

    <h4>4. 作用域插槽（父作用域使用子作用域的属性）</h4>
    <current-user>
      <template v-slot:default="slotProps">{{ slotProps.user.firstName }}</template>
    </current-user>
    <current-user></current-user>
    <!-- 独占默认插槽的缩写语法 -->
    <current-user v-slot="slotProps">{{ slotProps.user.firstName }}</current-user>
  </div>
</template>

<script>
import NavicationLink from "./childComponent/slotComponents/NavicationLink";
import SubmitButton from "./childComponent/slotComponents/submit-button";
import BaseLayout from "./childComponent/slotComponents/base-layout";
import CurrentUser from "./childComponent/slotComponents/current-user";
export default {
  name: "SlotDemo",
  components: { NavicationLink, SubmitButton, BaseLayout, CurrentUser },
  data() {
    return {
      user: {
        name: "张三"
      }
    };
  }
};
</script>