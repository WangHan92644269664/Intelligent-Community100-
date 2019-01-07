<template>
  <el-container>
    <el-main>
      <MainRight></MainRight>
    </el-main>
  </el-container>
</template>

<script>
  import MainRight from '../../../components/Grid/UnitManageMain'

  export default {
    name: "Three",
    data() {
      return {
        rightTitle:'部件列表',
      }
    },
    components: {
      MainRight
    },
  }
</script>

<style scoped>

</style>
