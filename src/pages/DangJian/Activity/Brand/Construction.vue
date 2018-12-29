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
