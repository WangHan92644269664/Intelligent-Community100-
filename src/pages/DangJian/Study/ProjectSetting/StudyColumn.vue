<template>
  <el-container>
    <el-header style="height: 40px;">
    <ConHeader :title="title"></ConHeader>
    </el-header>
    <el-main>
      <!--主体内容的右边的内容组件-->
      <MainRight :rightTitle="rightTitle"></MainRight>
    </el-main>
  </el-container>
</template>

<script>
  import ConHeader from '../../../../components/ContainerHeader'
  import MainRight from '../../../../components/dangjian/StudyColumn'

  export default {
    name: "Three",
    data() {
      return {
        title: '学习资料栏目',
        rightTitle:'学习资料栏目列表',
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
