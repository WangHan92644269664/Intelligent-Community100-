<template>
  <el-col :span="24" class="mainRight">
    <el-row class="borderBottom">
      <el-col :span="24">{{rightTitle}}</el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="时间:">
            <el-input v-model="formInline.time" placeholder="-"></el-input>
          </el-form-item>
          <el-form-item label="关键字:">
            <el-input v-model="formInline.key" placeholder="请输入标题或内容"></el-input>
          </el-form-item>
          <el-form-item class="search">
            <el-button type="primary" size="small"><img :src="search" alt="" style="margin-right: 8px;">查询</el-button>
            <el-button type="primary" size="small"><img :src="add" alt="" class="add">添加</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      border
      style="width:96%;margin:0px auto"
    >
      <el-table-column
        type="selection">
      </el-table-column>
      <el-table-column
        type="index"
        label="编号"
        sortable
        :index="indexMethod"
        width="100">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        sortable
        show-overflow-tooltip
        min-width="20%">
      </el-table-column>
      <el-table-column
        prop="name"
        label="缩略图"
        sortable
        min-width="13%">
        <template slot-scope="scope">
          <img :src="scope.row.name" alt="" style="width: 90px;height: 40px;">
        </template>
      </el-table-column>
      <el-table-column
        prop="people"
        label="操作人"
        sortable
        min-width="13%">
      </el-table-column>
      <el-table-column
        prop="time"
        sortable
        label="操作时间"
        min-width="20%">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        min-width="30%">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)"size="small" >详情</el-button>
          <el-button @click="handleClick(scope.row)" size="small">编辑</el-button>
          <el-button @click="deleteRow(scope.$index,tableData)"size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="background: #fff;padding-bottom:20px;margin-top:20px;">
      <el-col :span="24">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[5,10]"
            :page-size="10"
            layout="prev, pager,next, jumper, total, sizes"
            :total="10">
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </el-col>
</template>

<script>
  export default {
    props: {
      rightTitle: String
    },
    data() {
      return {
        search:require('../../images/search.png'),
        add:require('../../images/add.png'),
        currentPage4: 1,
        tableData: [
          {
            title:'2018年第49期 对历史大势 走人间正道',
            people:'超级管理员',
            name: require('../../images/timg.jpg'),
            time:'2018-11-17 14:02:43',
            photo:'15141554652'
          }, {
            title:'2018年第49期 对历史大势 走人间正道',
            people:'超级管理员',
            name: require('../../images/timg.jpg'),
            time:'2018-11-17 14:02:43',
            photo:'15141554652'
          }, {
            title:'2018年第49期 对历史大势 走人间正道',
            people:'超级管理员',
            name: require('../../images/timg.jpg'),
            time:'2018-11-17 14:02:43',
            photo:'15141554652'
          }, {
            title:'2018年第49期 对历史大势 走人间正道',
            people:'超级管理员',
            name: require('../../images/timg.jpg'),
            time:'2018-11-17 14:02:43',
            photo:'15141554652'
          },
          {
            title:'2018年第49期 对历史大势 走人间正道',
            people:'超级管理员',
            name: require('../../images/timg.jpg'),
            time:'2018-11-17 14:02:43',
            photo:'15141554652'
          },
          {
            title:'2018年第49期 对历史大势 走人间正道',
            people:'超级管理员',
            name: require('../../images/timg.jpg'),
            time:'2018-11-17 14:02:43',
            photo:'15141554652'
          },
          {
            title:'2018年第49期 对历史大势 走人间正道',
            people:'超级管理员',
            name: require('../../images/timg.jpg'),
            time:'2018-11-17 14:02:43',
            photo:'15141554652'
          },
          {
            title:'2018年第49期 对历史大势 走人间正道',
            people:'超级管理员',
            name: require('../../images/timg.jpg'),
            time:'2018-11-17 14:02:43',
            photo:'15141554652'
          },
        ],
        formInline: {
          key: '',
          time: '',
        },
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
      },
      indexMethod(index){
        return index+6
      },
      //删除所选中的一行
      deleteRow(index,rows){
        rows.splice(index,1)
      },
    }
  }
</script>

<style scoped>
  .cell .el-button:first-child{
    background: none;
    border:1px solid #999
  }
  .cell .el-button:nth-child(2){
    background: none;
    border:1px solid #ff813d;
    color:#ff813d
  }
  .cell .el-button:nth-child(3){
    background: none;
    border:1px solid #008aff;
    color:#008aff;
  }
</style>
