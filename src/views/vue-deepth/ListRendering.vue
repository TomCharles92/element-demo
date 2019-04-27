<template>
  <div>
    <h3>列表渲染</h3>
    <!-- <div v-for="(value, name, index) in object">{{ index }}. {{ name }}: {{ value }}</div> -->
    <div v-for="(item, index) in list" :key="item.id">
      <input type="checkbox">
      {{ item.name }}
    </div>
    <div>
      <input v-model="name">
      <button @click="add">add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListRendering",
  data: function() {
    return {
      object: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10"
      },
      name: "",
      newId: 3,
      list: [
        { id: 1, name: "李斯" },
        { id: 2, name: "吕不韦" },
        { id: 3, name: "嬴政" }
      ]
    };
  },
  methods: {
    add: function() {
      this.list.unshift({ id: ++this.newId, name: this.name });
      this.name = "";
    }
  }
};
</script>