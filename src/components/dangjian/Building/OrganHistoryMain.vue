<template>
  <div class="mainRight">
    <el-row class="borderBottom">
      <el-col :span="24">{{rightTitle}}</el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="所属组织:">
            <el-input v-model="formInline.time"></el-input>
          </el-form-item>
          <el-form-item label="姓名:">
            <el-input v-model="formInline.title" placeholder="姓名/身份证号"></el-input>
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
      style="width:96%;margin:0 auto"
    >
      <el-table-column
        type="selection">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        min-width="10%">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        min-width="10%">
      </el-table-column>
      <el-table-column
        prop="date"
        label="出生日期"
        min-width="18%">
      </el-table-column>
      <el-table-column
        prop="nation"
        label="民族"
        min-width="10%">
      </el-table-column>
      <el-table-column
        prop="id"
        label="身份证号"
        min-width="15%">
      </el-table-column>
      <el-table-column
        prop="area"
        label="所属组织"
        min-width="13%">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        min-width="35%">
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
        search:require('../../images/search.png'),
        add:require('../../images/add.png'),
        currentPage4: 1,
        tableData: [
          {
            name:'陈华',
           sex:'男',
           date:'1994-05-16',
           nation:'汉',
            id:'**************2546',
            area:'久安乡政法委'
          },   {
            name:'黄伟',
            sex:'男',
            date:'1994-05-16',
            nation:'汉',
            id:'**************2546',
            area:'新华社区政法委'
          },  {
            name:'徐秋红',
            sex:'女',
            date:'1994-05-16',
            nation:'汉',
            id:'**************2546',
            area:'珍珠河社区政法委'
          },  {
            name:'刘光',
            sex:'女',
            date:'1994-05-16',
            nation:'汉',
            id:'**************2546',
            area:'九庄镇综治办'
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
