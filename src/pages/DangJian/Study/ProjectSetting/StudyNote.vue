<template>
  <el-container>
    <el-main style="padding: 0;">
      <MainRight :rightTitle="rightTitle"></MainRight>
    </el-main>
  </el-container>
</template>

<script>
  import MainRight from '../../../../components/dangjian/Study/StudyNote'

  export default {
    name: "Three",
    data() {
      return {
        rightTitle:'学习笔记列表',
      }
    },
    components: {
      MainRight
    },
  }
</script>

<style scoped>

</style>
