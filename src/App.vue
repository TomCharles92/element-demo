<template>
  <div id="app">
    <el-row>
      <el-col :span="4" class="side"><SideNavMenu></SideNavMenu></el-col>
      <el-col :span="20" style="padding: 20px;"><router-view></router-view></el-col>
    </el-row>
  </div>
</template>

<script>
  import SideNavMenu from "./components/SideNavMenu";
  export default {
    components: {SideNavMenu}
  }
</script>

<style>

</style>