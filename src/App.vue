<template>
  <div id="app">
    <el-row type="flex" justify="end">
      <el-col :span="5" class="side">
        <SideNavMenu />
      </el-col>
      <el-col :span="19" class="main">
        <div class="breadcrumbContainer">
          <BreadCrumb></BreadCrumb>
        </div>
        <el-row type="flex" justify="start">
          <router-view />
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SideNavMenu from "./components/SideNavMenu";
import BreadCrumb from "@/components/BreadCrumb";

export default {
  components: { SideNavMenu, BreadCrumb }
};
</script>

<style lang="less">
.side {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  overflow-y: scroll;

  /deep/ .el-menu {
    height: 100%;
  }
}

.main {
  padding: 20px;
}

.breadcrumbContainer {
  height: 30px;
  display: flex;
  align-items: center;
}
</style>