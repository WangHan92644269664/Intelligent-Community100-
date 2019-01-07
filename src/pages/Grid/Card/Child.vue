<template>
  <el-container>
    <el-main>
      <MainRight></MainRight>
    </el-main>
  </el-container>
</template>

<script>
  import MainRight from '../../../components/Grid/CardChildMain'

  export default {
    name: "Three",
    data() {
      return {

        rightTitle:'人口卡片管理列表',
      }
    },
    components: {
      MainRight
    },
  }
</script>

<style scoped>

</style>
