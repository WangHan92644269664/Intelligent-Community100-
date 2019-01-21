<template>
  <el-container style="margin-top: 10px;">
    <!--主体内容的侧边栏-->
    <el-aside width="200px" style="height: 100%">
      <!--左侧侧边栏组件-->
      <ZongzhiAside></ZongzhiAside>
    </el-aside>
    <el-container style="margin:35px;padding-top:60px;height: 100vh;">
      <!--子路由显示的地方-->
      <router-view/>
    </el-container>
  </el-container>
</template>

<script>
import ZongzhiAside from '../../components/zongzhi/ZongzhiAside'
  export default {
    name: "ZongZhi",
    data() {
      return {
      }
    },
    components: {
      ZongzhiAside
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
