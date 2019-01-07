<template>
  <el-container>
    <el-main>
      <MainRight></MainRight>
    </el-main>
  </el-container>
</template>

<script>
  import MainRight from '../../../components/Grid/DomicileManageMain'

  export default {
    name: "Three",
    data() {
      return {

        rightTitle:'户籍管理列表',
      }
    },
    components: {
      MainRight
    },
  }
</script>

<style scoped>

</style>
