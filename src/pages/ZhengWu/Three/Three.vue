<template>
  <div>
    <el-header>
      <!--引入主体内容的标题组件-->
      <ConHeader :title=title></ConHeader>
    </el-header>
    <el-main>
      <el-row :gutter="40">
        <!--主体内容的中部的侧边栏组件-->
        <ConMainAside :name="name" :data="data"></ConMainAside>
        <!--主体内容的右边的内容组件-->
        <MainRight :rightTitle="rightTitle"></MainRight>
      </el-row>
    </el-main>
  </div>
</template>

<script>
  import ConHeader from '../../../components/ContainerHeader'
  import ConMainAside from '../../../components/ConMainAside'
  import MainRight from '../../../components/zhengwu/ConMainRight'

  export default {
    name: "Three",
    data() {
      return {
        title: '三务公开',
        name: '栏目管理',
        rightTitle:'三务公开列表',
        data: [
          {
            label: '党务',
            children: [{
              label: '党务1',
            }]
          }, {
            label: '村务',
          }, {
            label: '财务',
          }],
      }
    },
    components: {
      ConHeader,
      ConMainAside,
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
