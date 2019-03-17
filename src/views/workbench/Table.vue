<template>
  <el-table :data="tableData">
    <el-table-column label="时间" prop="date"></el-table-column>
    <el-table-column label="姓名" prop="name"></el-table-column>
    <el-table-column label="地址" prop="address"></el-table-column>
    <el-table-column label="item" prop="item">
      <template slot-scope="scope">{{ formatter(scope.row) }}</template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: "Table",
    methods: {
      formatter (row) {
        let item = this.itemOptions.find( element => {
          return row.item === element.key
        })
        return item.value
      }
    },
    data () {
      return {
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            item: 1
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
            item: 2
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            item: 3
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            item: 4
          }
        ],
        itemOptions: [
          { key:1, value: 'Tag' },
          { key:2, value: 'Table' },
          { key:3, value: 'Progress' },
          { key:4, value: 'Pagination' }
        ]
      }
    }
  }
</script>

<style scoped>

</style>