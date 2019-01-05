<template>
  <el-container>
    <el-main>
      <!--主体内容的右边的内容组件-->
      <MainRight :rightTitle="rightTitle"></MainRight>
    </el-main>
  </el-container>
</template>

<script>
  import MainRight from '../../../../components/dangjian/StudyColumn'

  export default {
    name: "Three",
    data() {
      return {
        rightTitle:'学习资料栏目列表',
      }
    },
    components: {
      MainRight
    },
  }
</script>
<style scoped>
.el-main{
  padding: 0;
}

</style>
