<template>
  <el-container>
    <el-main>
        <MainRight :rightTitle="rightTitle"></MainRight>
    </el-main>
  </el-container>
</template>

<script>
  import MainRight from '../../../../components/dangjian/StudyMainRight'

  export default {
    name: "Three",
    data() {
      return {
        rightTitle:'专题设置列表',
      }
    },
    components: {
      MainRight
    },
  }
</script>

<style scoped>
  .el-main{
    padding: 0;
  }
</style>
