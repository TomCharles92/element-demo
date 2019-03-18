<template>
  <el-menu background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
    
    <template v-for="item in routes">
      <el-submenu v-if="item.children" :index="item.path" :key="item.name">
        <template slot="title">{{ item.name }}</template>
        <el-menu-item v-for="subItem in item.children" :index="subItem.path" :key="subItem.name">
          {{ subItem.name }}
        </el-menu-item>
      </el-submenu>
      
      <el-menu-item v-else :index="item.path" :key="item.name">{{ item.name }}</el-menu-item>
    </template>
  
  </el-menu>
</template>

<script>
  export default {
    name: "SideNavMenu",
    created() {
      this.getRouters()
    },
    methods: {
      // 通过路由器实例来获取所有路由信息
      getRouters() {
        this.routes = this.$router.options.routes
      }
    },
    data() {
      return {
        routes: []
      }
    }
  }
</script>

<style scoped>

</style>