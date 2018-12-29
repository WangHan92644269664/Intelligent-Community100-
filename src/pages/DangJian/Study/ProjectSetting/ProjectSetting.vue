<template>
  <el-container>
    <el-header style="height: 40px;">
    <ConHeader :title="title"></ConHeader>
    </el-header>
    <el-main>
        <MainRight :rightTitle="rightTitle"></MainRight>
    </el-main>
  </el-container>
</template>

<script>
  import ConHeader from '../../../../components/ContainerHeader'
  import MainRight from '../../../../components/dangjian/StudyMainRight'

  export default {
    name: "Three",
    data() {
      return {
        title: '专题设置',
        rightTitle:'专题设置列表',
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
    height: 40px;
    line-height: 38px;
    color: #aaa;
  }
</style>
