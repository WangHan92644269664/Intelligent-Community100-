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
  import MainRight from '../../../components/working/AdvertiseEssayMain'

  export default {
    name: "Three",
    data() {
      return {
        title: '文章管理',
        name: '栏目管理',
        rightTitle:'文章管理列表',
        data: [
          {
            label: '新闻资讯',
          }, {
            label: '政务公开',
          }, {
            label: '政策法规',
          },
          {
            label: '智慧大厅简介',
          },
          {
            label: '使用说明',
          },
          {
            label: '关于我们',
          },
          {
            label: '谷渡街道办事处简介',
          },
          {
            label: '党建服务中心简介',
          },
          {
            label: '社区简介',
          },
          {
            label: '智慧党建',
          },
          {
            label: '居民业务查询',
          },
          {
            label: '后台测试',
          },
          ],
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
