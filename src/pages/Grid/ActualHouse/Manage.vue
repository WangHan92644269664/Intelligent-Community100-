<template>
  <el-container>
    <el-main>
      <MainRight></MainRight>
    </el-main>
  </el-container>
</template>

<script>
  import MainRight from '../../../components/Grid/ActualHouseMange'

  export default {
    name: "Three",
    data() {
      return {

        rightTitle:'实有房屋列表',
      }
    },
    components: {
      MainRight
    },
  }
</script>

<style scoped>

</style>
