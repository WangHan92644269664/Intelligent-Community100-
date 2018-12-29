<template>
    <el-col :span="3" class="mainLeft" style="height: 100%;">
      <el-row class="borderBottom">
        <el-col :span="21">{{name}}</el-col>
        <el-col :span="2" style="color:#FF6400;"><i class="iconfont icon-tianjia"></i></el-col>
      </el-row>
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" default-expand-all></el-tree>
    </el-col>
</template>

<script>
    export default {
        name: "ConMainAside",
      props:{
        name:String,
        data:Array
      },
      data(){
          return {
            defaultProps: {
              children: 'children',
              label: 'label'
            }
          }
      },
      methods:{
        handleNodeClick(data) {
          console.log(data);
        },
      }
    }
</script>

<style scoped>
  .mainLeft {
    background: #fff;
    height: 600px;
    border-right: 10px solid #f0f0f0;
    padding: 15px 0 !important;
  }
  .borderBottom {
    border-bottom: 1px solid #eee;
    text-align: left;
    padding-left: 15px;
    padding-bottom: 15px;
    font-size: 14px;
    color: #777;
    font-weight: bolder;
    letter-spacing: 0.1em;
    margin-bottom: 15px;
  }
  .el-tree {
    padding: 0 15px;
  }
</style>
