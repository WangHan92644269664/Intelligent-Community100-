<template>
  <el-container>
    <el-main style="padding: 0;">
      <MainRight :rightTitle="rightTitle"></MainRight>
    </el-main>
  </el-container>
</template>

<script>
  import MainRight from '../../../components/dangjian/Building/PartyPostsMain'

  export default {
    name: "Three",
    data() {
      return {
        rightTitle:'党内职务管理列表',
      }
    },
    components: {
      MainRight
    },
  }
</script>

<style scoped>

</style>
