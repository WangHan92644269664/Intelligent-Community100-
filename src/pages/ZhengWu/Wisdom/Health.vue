<template>
  <el-container>
    <el-main>
        <!--主体内容的右边的内容组件-->
        <MainRight :rightTitle="rightTitle"></MainRight>
    </el-main>
    </el-container>
</template>

<script>
  import MainRight from '../../../components/zhengwu/WisdomHealthMain'

  export default {
    name: "Three",
    data() {
      return {
        title: '老人信息',
        rightTitle:'老人信息列表',
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
