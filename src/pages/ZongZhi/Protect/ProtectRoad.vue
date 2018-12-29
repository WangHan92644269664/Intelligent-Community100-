<template>
  <el-container>
    <el-header style="height: 40px;">
      <ConHeader :title="title"></ConHeader>
    </el-header>
    <el-main>
      <ProtectRoadMain></ProtectRoadMain>
    </el-main>
  </el-container>

</template>

<script>
  import ConHeader from '../../../components/ContainerHeader'
  import ProtectRoadMain from '../../../components/zongzhi/ProtectRoadMain'

  export default {
    components: {
      ConHeader,
      ProtectRoadMain
    },
    data() {
      return {
        title:'护路护线'
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
