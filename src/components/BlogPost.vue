<template>
  <div>
      <h3>{{ post.title }}</h3>
      <button @click="$emit('enlargeText', 0.1)">
        Enlarge text
      </button>
      <div v-html="post.content"></div>
  </div>
</template>

<script>
export default {
    name: "BlogPost",
    props: ["post"]
}
</script>

