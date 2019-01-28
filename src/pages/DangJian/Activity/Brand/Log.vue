<template>
  <el-container>
    <el-main>
      <MainRight :rightTitle="rightTitle"></MainRight>
    </el-main>
  </el-container>
</template>

<script>
  import MainRight from '../../../../components/dangjian/Activity/BrandLogMain'

  export default {
    name: "Three",
    data() {
      return {
        rightTitle:'品牌党建日志列表',
      }
    },
    components: {
      MainRight
    },
  }
</script>

<style scoped>

</style>
