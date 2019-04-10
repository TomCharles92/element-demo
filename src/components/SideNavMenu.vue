<template>
  <el-menu
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
  >
    <template v-for="item in routes">
      <el-submenu
        v-if="item.children"
        :key="item.name"
        :index="item.path"
      >
        <template slot="title">
          {{ item.name }}
        </template>
        <el-menu-item
          v-for="subItem in item.children"
          :key="subItem.name"
          :index="subItem.path"
        >
          {{ subItem.name }}
        </el-menu-item>
      </el-submenu>
      
      <el-menu-item
        v-else
        :key="item.name"
        :index="item.path"
      >
        {{ item.name }}
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
  export default {
    name: "SideNavMenu",
    data() {
      return {
        routes: []
      }
    },
    created() {
      this.getRouters()
    },
    methods: {
      // 通过路由器实例来获取所有路由信息
      getRouters() {
        this.routes = this.$router.options.routes
      }
    }
  }
</script>

<style scoped>

</style>