<template>
  <el-container>
    <el-main style="padding: 0;">
      <MainRight :rightTitle="rightTitle"></MainRight>
    </el-main>
  </el-container>
</template>

<script>
  import MainRight from '../../../../components/dangjian/Building/OrganOutstandingMain'

  export default {
    name: "Three",
    data() {
      return {
        rightTitle:'优秀党组织列表',
      }
    },
    components: {
      MainRight
    },
  }
</script>

<style scoped>
  .el-header {
    background-color: #fff !important;
    height: 40px !important;
    line-height: 38px;
    color: #aaa;
  }
</style>
