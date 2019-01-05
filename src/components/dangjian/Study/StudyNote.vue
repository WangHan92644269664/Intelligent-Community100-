<template>
  <div class="mainRight">
    <el-row class="borderBottom">
      <el-col :span="24">{{rightTitle}}</el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form-item label="笔记类型:">
          <el-select v-model="formInline.kind" placeholder="请选择">
            <el-option label="党章学习" value="undo"></el-option>
            <el-option label="政治学习" value="do"></el-option>
          </el-select>
        </el-form-item>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="笔记标题:">
            <el-input v-model="formInline.name" ></el-input>
          </el-form-item>
          <el-form-item label="更改时间:">
            <el-input v-model="formInline.time" ></el-input>
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
        type="selection"
        width="50">
      </el-table-column>
      <el-table-column
        fixed
        prop="id"
        label="编号"
        width="250">
      </el-table-column>
      <el-table-column
        prop="name"
        label="笔记标题"
        width="350">
      </el-table-column>
      <el-table-column
        prop="kind"
        label="笔记分类"
        width="300">
      </el-table-column>
      <el-table-column
        prop="zhuan"
        label="专题类型"
        width="200">
      </el-table-column>
      <el-table-column
        prop="people"
        label="操作人"
        width="200">
      </el-table-column>
      <el-table-column
        prop="date"
        label="更改时间"
        width="250">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="300">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)"size="small" >详情</el-button>
          <el-button @click="handleClick(scope.row)" size="small">编辑</el-button>
          <el-button @click="handleClick(scope.row)"size="small">停用</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="background: #fff;padding-bottom:40px;margin-top: 300px;">
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
            id: '1',
            name: '党章学习',
            kind:'学习笔记',
            zhuan:'规章制度',
            people:'超级管理员',
            date:'2019-01-04 16:31:42'
          },
          {
            id: '2',
            name: '政治学习',
            kind:'学习笔记',
            zhuan:'两学一做',
            people:'超级管理员',
            date:'2019-01-04 16:31:42'
          },
          {
            id: '3',
            name: '三严三实',
            kind:'学习笔记',
            zhuan:'规章制度',
            people:'超级管理员',
            date:'2019-01-04 16:31:42'
          },
          {
            id: '4',
            name: '学习心得',
            kind:'学习笔记',
            zhuan:'规章制度',
            people:'超级管理员',
            date:'2019-01-04 16:31:42'
          },
        ],
        formInline: {
          name: '',
          kind:'',
          time:''
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
      }
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
