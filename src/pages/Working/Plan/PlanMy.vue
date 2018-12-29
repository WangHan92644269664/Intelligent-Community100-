<template>
  <el-container>
    <el-header style="height: 40px;">
      <ConHeader :title="title"></ConHeader>
    </el-header>
    <el-main>
      <WorkingMain></WorkingMain>
    </el-main>
  </el-container>

</template>

<script>
  import ConHeader from '../../../components/ContainerHeader'
  import WorkingMain from '../../../components/working/WorkingMain'

  export default {
    props: {
      rightTitle: String
    },
    components: {
      ConHeader,
      WorkingMain
    },
    data() {
      return {
        title:'我的工作计划'
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleClick(row) {
        console.log(row);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>
<style>

</style>
<style scoped>
  .el-header {
    background: #fff;
    height: 40px;
    line-height: 40px;
  }
  .el-main{
    padding:15px 0;
  }
</style>
