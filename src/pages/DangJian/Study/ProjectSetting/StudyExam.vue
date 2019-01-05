<template>
  <el-container>
    <el-main style="padding: 0;">
      <MainRight :rightTitle="rightTitle"></MainRight>
    </el-main>
  </el-container>
</template>

<script>
  import MainRight from '../../../../components/dangjian/Study/StudyExam'

  export default {
    name: "Three",
    data() {
      return {
        rightTitle:'考试中心列表',
      }
    },
    components: {
      MainRight
    },
  }
</script>

<style scoped>

</style>
