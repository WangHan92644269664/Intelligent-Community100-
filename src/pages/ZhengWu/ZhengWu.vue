<template>
  <el-container>
    <!--主体内容的侧边栏-->
    <el-aside width="160px" style="height: 100%">
      <!--左侧侧边栏组件-->
      <ConAside></ConAside>
    </el-aside>
    <el-container style="margin:35px;">
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

</style>
