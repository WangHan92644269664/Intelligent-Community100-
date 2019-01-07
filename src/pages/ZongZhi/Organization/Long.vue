<template>
  <el-container>
    <el-main>
      <!--主体内容的右边的内容组件-->
      <MainRight :rightTitle="rightTitle"></MainRight>
    </el-main>
  </el-container>
</template>

<script>
  import MainRight from '../../../components/zongzhi/Organization/Long'

  export default {
    data() {
      return {
        rightTitle:'整栋楼'
      }
    },
    components: {
      MainRight
    }
  }
</script>

<style scoped>

</style>
