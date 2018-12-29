<template>
  <el-container>
    <el-header style="height: 40px;">
      <ConHeader :title="title"></ConHeader>
    </el-header>
    <el-main>
      <MainRight></MainRight>
    </el-main>
  </el-container>
</template>

<script>
  import ConHeader from '../../../components/ContainerHeader'
  import MainRight from '../../../components/working/LogMainRight'

  export default {
    name: "Three",
    data() {
      return {
        title: '工作日志',
        rightTitle:'日志列表',
      }
    },
    components: {
      ConHeader,
      MainRight
    },
  }
</script>

<style scoped>
  .el-header {
    background-color: #fff !important;
    height: 40px !important;
    line-height: 38px;
    color: #aaa;
  }
</style>
