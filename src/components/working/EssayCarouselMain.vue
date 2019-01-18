<template>
  <div>
    <el-row  class="mainRight">
      <el-col :span="24" class="borderBottom">
        轮播图列表
      </el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="总结类型:">
            <el-select v-model="formInline.people" placeholder="请选择">
              <el-option label="日报" value="day"></el-option>
              <el-option label="周报" value="week"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="提交日期:">
            <el-input v-model="formInline.date" placeholder="请输入时间段"></el-input>
          </el-form-item>
          <el-form-item label="审核状态:">
            <el-select v-model="formInline.status" placeholder="请选择">
              <el-option label="未审核" value="undo"></el-option>
              <el-option label="已审核" value="doing"></el-option>
            </el-select>
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
      stripe
      style="width:96%;margin:0 auto"
    >
      <el-table-column
        type="selection">
      </el-table-column>
      <el-table-column
        sortable
        prop="id"
        label="编号"
        min-width="8%">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        min-width="14%">
      </el-table-column>
      <el-table-column
        prop="address"
        label="位置简介"
        min-width="17%">
      </el-table-column>
      <el-table-column
        prop="people"
        label="操作人"
        min-width="13%">
      </el-table-column>
      <el-table-column
        prop="date"
        label="操作时间"
        min-width="20%">
      </el-table-column>
      <el-table-column
        prop="title"
        label="计划描述"
        min-width="17%">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        min-width="25%">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)"size="small" >广告列表</el-button>
          <el-button @click="handleClick(scope.row)" size="small">编辑</el-button>
          <el-button @click="deleteRow(scope.$index,tableData)"size="small">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="background: #fff;padding-bottom:40px;margin-top: 250px;">
      <el-col :span="24">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[5,10]"
            :page-size="10"
            :page-count="2"
            layout="prev, pager,next, jumper, total, sizes"
            :total="12">
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        search:require('../images/search.png'),
        add:require('../images/add.png'),
        reset:require('../images/reset.png'),
        formInline: {
          people: '',
          date: '',
          info:''
        },
        currentPage4: 1,
        tableData: [
          {
            id:'44',
            name: '2018-12-01 工作总结',
            address:'党建动态左侧轮播图',
            people:'超级管理员',
            date: '2018-11-17 11:34:16',
            title: '护路护线功能模块开发',
          },{
            id:'44',
            name: '2018-12-01 工作总结',
            address:'首页中间广告位置',
            people:'超级管理员',
            date: '2018-11-17 11:34:16',
            title: '护路护线功能模块开发',
          },{
            id:'44',
            name: '2018-12-01 工作总结',
            address:'左侧轮播图',
            people:'超级管理员',
            date: '2018-11-17 11:34:16',
            title: '护路护线功能模块开发',
          }
        ],
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
    },
  }
</script>
<style>

</style>
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
