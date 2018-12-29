<template>
  <div>
    <el-header>
      <!--引入主体内容的标题组件-->
      <ConHeader :title=title></ConHeader>
    </el-header>
    <el-main>
      <el-row :gutter="40">
        <!--主体内容的右边的内容组件-->
        <MainRight :rightTitle="rightTitle"></MainRight>
      </el-row>
    </el-main>
  </div>
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
  /*主体内容*/
  .el-header {
    background-color: #fff !important;
    height: 40px !important;
    line-height: 38px;
    color: #aaa;
  }
</style>
