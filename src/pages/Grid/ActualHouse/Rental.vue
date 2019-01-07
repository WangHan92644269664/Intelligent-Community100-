<template>
  <el-container>
    <el-main>
      <MainRight></MainRight>
    </el-main>
  </el-container>
</template>

<script>
  import MainRight from '../../../components/Grid/ActualHouseRental'

  export default {
    name: "Three",
    data() {
      return {

        rightTitle:'出租房列表',
      }
    },
    components: {
      MainRight
    },
  }
</script>

<style scoped>

</style>
