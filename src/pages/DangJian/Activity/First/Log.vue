<template>
  <el-container>
    <el-main>
      <MainRight :rightTitle="rightTitle"></MainRight>
    </el-main>
  </el-container>
</template>

<script>
  import MainRight from '../../../../components/dangjian/Activity/FirstLogMain'

  export default {
    name: "Three",
    data() {
      return {
        rightTitle:'第一书记日志列表',
      }
    },
    components: {
      MainRight
    },
  }
</script>

<style scoped>

</style>
