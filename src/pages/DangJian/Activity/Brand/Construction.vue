<template>
  <el-container>
    <el-header>
      <!--引入主体内容的标题组件-->
      <ConHeader :title=title></ConHeader>
    </el-header>
    <el-main>
      <MainRight :rightTitle="rightTitle"></MainRight>
    </el-main>
  </el-container>
</template>

<script>
  import ConHeader from '../../../../components/ContainerHeader'
  import MainRight from '../../../../components/dangjian/BrandConstructionMain'

  export default {
    name: "Three",
    data() {
      return {
        title: '品牌党建建设',
        rightTitle:'品牌党建列表',
      }
    },
    components: {
      ConHeader,
      MainRight
    },
  }
</script>
<style>
  .el-main{
    padding: 20px 0 0 0!important;
  }
</style>
<style scoped>

  /*主体内容*/
  .el-header {
    background-color: #fff !important;
    height: 40px !important;
    line-height: 38px;
    color: #aaa;
  }
</style>
