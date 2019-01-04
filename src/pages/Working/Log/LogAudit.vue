<template>
  <el-container>
    <el-main style="padding: 0;">
      <MainRight></MainRight>
    </el-main>
  </el-container>
</template>

<script>
  import MainRight from '../../../components/working/LogAuditMain'

  export default {
    name: "Three",
    data() {
      return {
        title: '工作日志',
        rightTitle:'日志列表',
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
