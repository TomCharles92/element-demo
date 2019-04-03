<template>
 <div>
   <el-tree
       :data="data5"
       show-checkbox
       node-key="id"
       default-expand-all
       :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          <el-button
              type="text"
              size="mini"
              @click="appendBrother(node, data)">
            新增同级
          </el-button>
          <el-button
              type="text"
              size="mini"
              @click="append(data)">
            新增子级
          </el-button>
          <el-button
              type="text"
              size="mini"
              @click="remove(node, data)">
            删除
          </el-button>
          <el-button
              type="text"
              size="mini"
              @click="rename(node, data)"
              >
              重命名
          </el-button>
        </span>
      </span>
   </el-tree>
   
   <el-dialog :visible.sync="dialogVisible">
     <el-input v-model="name"></el-input>
     <el-button @click="dialogVisible = false">取 消</el-button>
     <el-button type="primary" @click="confirm">确 定</el-button>
   </el-dialog>
  
  
 </div>
</template>

<script>
  let id = 1000;

  export default {
    data() {
      const data = [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }];
      return {
        data4: JSON.parse(JSON.stringify(data)),
        data5: JSON.parse(JSON.stringify(data)),
        dialogVisible: false,
        name: '',
        currentNode: null
      }
    },

    methods: {
      append(data) {
        const newChild = { id: id++, label: 'newChild', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      appendBrother(node, data) {
        if (node.level !== 1) {
          node.parent.data.children.push({ id: id++, label: 'newBrother', children: [] })
        } else {
          node.parent.data.push({ id: id++, label: 'newBrother', children: [] })
        }
        
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },

      rename(node, data) {
        this.dialogVisible = true;
        this.name = data.label;
        this.currentNode = node;
      },
      
      confirm () {
        this.dialogVisible = false;
        this.currentNode.data.label = this.name;
      }
    }
  };
</script>

<style scoped>
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>