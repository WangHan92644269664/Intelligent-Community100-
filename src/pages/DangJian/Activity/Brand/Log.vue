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
  import MainRight from '../../../../components/dangjian/BrandLogMain'

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
  .el-menu-item.is-active {
    color: #1951C1;
    background: #EBF0FA;
    font-weight: bolder;
    border-left: 2px solid #1951C1;
  }

  /*主体内容*/
  .el-header {
    background-color: #fff !important;
    height: 40px !important;
    line-height: 38px;
    color: #aaa;
  }
</style>
