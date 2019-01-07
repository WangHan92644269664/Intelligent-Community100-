<template>
  <el-container>
    <ConMainAside :name="name" :data="data" ></ConMainAside>
    <el-main>
        <!--主体内容的右边的内容组件-->
        <MainRight :rightTitle="rightTitle"></MainRight>
    </el-main>
    </el-container>
</template>

<script>
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
      ConMainAside,
      MainRight
    },
  }
</script>

<style scoped>
</style>
