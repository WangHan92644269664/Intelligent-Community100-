<template>
  <div class="mainRight">
    <el-row class="borderBottom">
      <el-col :span="24">{{rightTitle}}</el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="时间:">
            <el-input v-model="formInline.time"></el-input>
          </el-form-item>
          <el-form-item label="标题:">
            <el-input v-model="formInline.title"></el-input>
          </el-form-item>
          <el-form-item class="search">
            <el-button type="primary" size="small"><img :src="search" alt="" style="margin-right: 8px;">查询</el-button>
            <el-button type="primary" size="small"><img :src="reset" alt="" style="margin-right: 8px;">重置</el-button>
            <el-button type="primary" size="small"><img :src="add" alt="" class="add">添加</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      border
      style="width:96%;margin:0 auto"
    >
      <el-table-column
        type="selection"
        min-width="5%">
      </el-table-column>
      <el-table-column
        fixed
        prop="id"
        label="编号"
        min-width="8%">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        show-overflow-tooltip
        min-width="12%">
      </el-table-column>
      <el-table-column
        prop="name"
        label="缩略图"
        min-width="10%">
        <template slot-scope="scope">
          <img :src="scope.row.name" alt="" style="width: 90px;height: 40px;">
        </template>
      </el-table-column>
      <el-table-column
        prop="head"
        label="所属栏目"
        min-width="11%">
      </el-table-column>
      <el-table-column
        prop="people"
        label="添加人"
        min-width="10%">
      </el-table-column>
      <el-table-column
        prop="date"
        label="添加时间"
        min-width="15%">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        min-width="25%">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)"size="small" >详情</el-button>
          <el-button @click="handleClick(scope.row)" size="small">编辑</el-button>
          <el-button @click="deleteRow(scope.$index,tableData)"size="small">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="background: #fff;padding-bottom:40px;margin-top: 40px;">
      <el-col :span="24">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[5,10]"
            :page-size="10"
            layout="prev, pager,next, jumper, total, sizes"
            :total="6">
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    props:{
      rightTitle:String
    },
    data() {
      return {
        search:require('../images/search.png'),
        add:require('../images/add.png'),
        reset:require('../images/reset.png'),
        currentPage4: 1,
        tableData: [
          {
            id: '6',
            name: require('../images/advertise.jpg'),
            title: '智慧大厅简介',
            people: '超级管理员',
            head:'智慧大厅简介',
            date:'2017-11-24 12:21:10',
            photo: '15455545555',
          },   {
            id: '6',
            name: require('../images/advertise.jpg'),
            title: '智慧大厅简介',
            people: '超级管理员',
            head:'智慧大厅简介',
            date:'2017-11-24 12:21:10',
            photo: '15455545555',
          },  {
            id: '6',
            name: require('../images/advertise.jpg'),
            title: '智慧大厅简介',
            people: '超级管理员',
            head:'智慧大厅简介',
            date:'2017-11-24 12:21:10',
            photo: '15455545555',
          },  {
            id: '6',
            name: require('../images/advertise.jpg'),
            title: '智慧大厅简介',
            people: '超级管理员',
            head:'智慧大厅简介',
            date:'2017-11-24 12:21:10',
            photo: '15455545555',
          },
          {
            id: '6',
            name: require('../images/advertise.jpg'),
            title: '智慧大厅简介',
            people: '超级管理员',
            head:'智慧大厅简介',
            date:'2017-11-24 12:21:10',
            photo: '15455545555',
          },
          {
            id: '6',
            name: require('../images/advertise.jpg'),
            title: '智慧大厅简介',
            people: '超级管理员',
            head:'智慧大厅简介',
            date:'2017-11-24 12:21:10',
            photo: '15455545555',
          },
        ],
        formInline: {
          title: '',
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
