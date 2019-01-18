<template>
    <div class="mainLeft" style="width:270px;">
      <el-row class="borderBottom">
        <el-col :span="21">{{name}}</el-col>
        <el-col :span="2" style="color:#FF6400;"><img :src="add" alt=""></el-col>
      </el-row>
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" ></el-tree>
    </div>
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
            add:require('./images/4add.png'),
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
    margin-right: 30px;
    box-shadow: 2px 2px 20px rgba(76,76,76,0.2);
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
