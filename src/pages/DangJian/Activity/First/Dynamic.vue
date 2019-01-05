<template>
  <el-container>
    <el-main>
      <MainRight :rightTitle="rightTitle"></MainRight>
    </el-main>
  </el-container>
</template>

<script>
  import MainRight from '../../../../components/dangjian/Activity/FirstDynamicMain'

  export default {
    name: "Three",
    data() {
      return {
        rightTitle:'第一书记动态列表',
      }
    },
    components: {
      MainRight
    },
  }
</script>

<style scoped>
</style>
