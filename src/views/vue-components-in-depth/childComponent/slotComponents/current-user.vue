<template>
  <div>
    <slot v-bind:user="user">{{ user.lastName }}</slot>
  </div>
</template>

<script>
export default {
  name: "current-user",
  data() {
    return {
      user: {
        firstName: "狗蛋",
        lastName: "爱新觉罗"
      }
    };
  }
};
</script>