<template>
  <div id="app">
    <el-row
      type="flex"
      justify="end"
    >
      <el-col
        :span="5"
        class="side"
      >
        <SideNavMenu />
      </el-col>
      <el-col
        :span="19"
        class="main"
      >
        <router-view />
      </el-col>
    </el-row>
  </div>
</template>

<script>
    import SideNavMenu from "./components/SideNavMenu";

    export default {
        components: {SideNavMenu}
    }
</script>

<style lang="less">
    .side {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        box-sizing: border-box;

        /deep/ .el-menu {
            height: 100%;
        }
    }

    .main {
        padding: 20px;
        text-align: center;
    }
</style>