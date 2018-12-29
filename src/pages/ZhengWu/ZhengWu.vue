<template>
  <el-container style="margin-top: 10px;">
    <!--主体内容的侧边栏-->
    <el-aside width="200px" style="height: 100%">
      <!--左侧侧边栏组件-->
      <ConAside></ConAside>
    </el-aside>
    <el-container style="margin-right: 20px;">
      <!--子路由显示的地方-->
      <router-view/>
    </el-container>
  </el-container>
</template>

<script>
  import ConAside from '../../components/zhengwu/ContainerAside'
  export default {
    data() {
      return {
      }
    },
    components: {
      ConAside,
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
    }
  }
</script>
<style scoped>
  .el-aside {
    color: #333;
    background-color: #fff;
    margin-right: 10px;
    margin-left: 20px;
  }
</style>
