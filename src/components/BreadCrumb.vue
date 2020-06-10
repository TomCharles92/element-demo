<template>
  <el-breadcrumb separator="/">
    <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>
      <a href="/">活动管理</a>
    </el-breadcrumb-item> -->
    <!-- <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
    <el-breadcrumb-item v-for="item in pathList" :key="item.path">{{item.name}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: "BreadCrumb",
  data() {
    return {
      pathList: []
    };
  },
  created() {
    this.getBreadcrumb();
  },
  watch: {
    $route(route) {
      this.getBreadcrumb();
    }
  },
  methods: {
    getBreadcrumb() {
      console.log(this.$route);
      this.pathList = this.$route.matche;
    }
  }
};
</script>