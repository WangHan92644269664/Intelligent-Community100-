<template>
  <el-container>
    <!--主体内容的侧边栏-->
    <el-aside width="200px" style="height: 100%">
      <!--左侧侧边栏组件-->
      <WorkingAside></WorkingAside>
    </el-aside>
    <el-container style="margin:35px;padding-top: 70px;height: 100vh;">
      <!--子路由显示的地方-->
      <router-view/>
    </el-container>
  </el-container>
</template>

<script>

  import WorkingAside from '../../components/working/WorkingAside'
  export default {
    data() {
      return {
      }
    },
    components: {
      WorkingAside
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
    }
  }
</script>
<style scoped>

</style>
