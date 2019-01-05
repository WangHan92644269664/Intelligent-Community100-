<template>
  <el-container>
    <el-main>
      <MainRight :rightTitle="rightTitle"></MainRight>
    </el-main>
  </el-container>
</template>

<script>
  import MainRight from '../../../../components/dangjian/Activity/BrandConstructionMain'

  export default {
    name: "Three",
    data() {
      return {
        title: '品牌党建建设',
        rightTitle:'品牌党建列表',
      }
    },
    components: {
      MainRight
    },
  }
</script>
<style scoped>

</style>
