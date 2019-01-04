<template>
  <el-container>
    <el-main>
      <WorkingMain></WorkingMain>
    </el-main>
  </el-container>
</template>

<script>
  import WorkingMain from '../../../components/working/WorkingUndoMain'

  export default {
    props: {
      rightTitle: String
    },
    components: {
      WorkingMain
    },
    data() {
      return {
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
    },
    created(){
      console.log(555)
    }
  }
</script>
<style scoped>
  .el-header {
    background: #fff;
    height: 40px;
    line-height: 40px;
  }
  .el-main{
    padding:0;
  }
</style>
