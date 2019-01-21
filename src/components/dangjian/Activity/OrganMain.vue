<template>
  <div class="mainRight">
    <el-row class="borderBottom">
      <el-col :span="24">{{rightTitle}}</el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="姓名:">
            <el-input v-model="formInline.name"></el-input>
          </el-form-item>
          <el-form-item label="入党日期:">
            <el-input v-model="formInline.date"></el-input>
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
        min-width="12%">
      </el-table-column>
      <el-table-column
        prop="head"
        label="支部名称"
        min-width="14%">
      </el-table-column>
      <el-table-column
        prop="date"
        label="入党日期"
        min-width="18%">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        min-width="20%">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" size="small">祝福</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="background: #fff;padding-bottom:40px;margin-top: 280px;">
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
            name: '世博',
            head:'高新区区委',
            date:'2017-11-24',
          },   {
            name: '世博',
            head:'高新区区委',
            date:'2017-11-24',
          },  {
            name: '世博',
            head:'高新区区委',
            date:'2017-11-24',
          },  {
            name: '世博',
            head:'高新区区委',
            date:'2017-11-24',
          },
        ],
        formInline: {
          name:'',
          date:''
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
  .cell .el-button:nth-child(1){
    background: none;
    border:1px solid #ff813d;
    color:#ff813d
  }
</style>
