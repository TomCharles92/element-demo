<template>
  <ul id="demo">
    <tree-item
      class="item"
      :item="treeData"
      @make-folder="makeFolder"
      @add-item="addItem"
    />
  </ul>
</template>

<script>
  import Vue from 'vue'
  import TreeItem from "../../components/TreeItem";
  export default {
    name: "Tree2",
    components: {TreeItem},
    data() {
      return {
        treeData: {
          name: 'My Tree',
          children: [
            {name: 'hello'},
            {name: 'wat'},
            {
              name: 'child folder',
              children: [
                {
                  name: 'child folder',
                  children: [
                    {name: 'hello'},
                    {name: 'wat'}
                  ]
                },
                {name: 'hello'},
                {name: 'wat'},
                {
                  name: 'child folder',
                  children: [
                    {name: 'hello'},
                    {name: 'wat'}
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    methods: {
      makeFolder: function (item) {
        Vue.set(item, 'children', [])
        this.addItem(item)
      },
      addItem: function (item) {
        item.children.push({
          name: 'new stuff'
        })
      }
    }
  }
</script>

<style scoped>
  ul {
    text-align: left;
  }

</style>