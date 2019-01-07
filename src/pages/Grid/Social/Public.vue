<template>
  <el-container>
    <el-main>
      <MainRight></MainRight>
    </el-main>
  </el-container>
</template>

<script>
  import MainRight from '../../../components/Grid/SocialPublicMain'

  export default {
    name: "Three",
    data() {
      return {

        rightTitle:'社区民意列表',
      }
    },
    components: {
      MainRight
    },
  }
</script>

<style scoped>

</style>
