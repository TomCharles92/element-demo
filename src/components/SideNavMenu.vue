<template>
    <el-menu background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b"
             router>
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="/workbench">
            <template slot="title">我的工作台</template>
            <el-menu-item index="/workbench/form">表单</el-menu-item>
            <el-menu-item index="/workbench/vuex-test">Vuex</el-menu-item>
        </el-submenu>
        <el-submenu index="/vuexlearn">
            <template slot="title">VuexLearn</template>
            <el-menu-item index="/vuexlearn/state">State</el-menu-item>
            <el-menu-item index="/vuexlearn/getter">Getter</el-menu-item>
            <el-menu-item index="/vuexlearn/Mutations">Mutations</el-menu-item>
            <el-menu-item index="/vuexlearn/Action">Action</el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
    export default {
        name: "SideNavMenu"
    }
</script>

<style scoped>

</style>