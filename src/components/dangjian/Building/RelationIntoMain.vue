<template>
  <div class="mainRight">
    <el-row class="borderBottom">
      <el-col :span="24">{{rightTitle}}</el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="关键词:" >
            <el-input v-model="formInline.key" placeholder="姓名/身份证"></el-input>
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
        prop="phone"
        label="手机号"
        show-overflow-tooltip
        min-width="13%">
      </el-table-column>
      <el-table-column
        prop="ago"
        label="原属组织"
        show-overflow-tooltip
        min-width="15%">
      </el-table-column>
      <el-table-column
        prop="now"
        label="现属组织"
        show-overflow-tooltip
        min-width="14%">
      </el-table-column>
      <el-table-column
        prop="into"
        label="转入说明"
        min-width="12%">
      </el-table-column>
      <el-table-column
        prop="id"
        label="身份证号"
        show-overflow-tooltip
        min-width="14%">
      </el-table-column>

      <el-table-column
        fixed="right"
        label="操作"
        min-width="25%">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)"size="small" >查看</el-button>
          <el-button @click="deleteRow(scope.$index,tableData)"size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="background: #fff;padding-bottom:40px;margin-top:280px;">
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
            name:'彭宏伟',
            phone:'18339071734',
            ago:'六桶镇党委政府',
            now:'久安乡政法委',
            into:'工作调动',
            id:'**********7776',
          },   {
            name:'朱明明',
            phone:'18239076425',
            ago:'六桶镇党委政府',
            now:'久安乡政法委',
            into:'工作调动',
            id:'**********7776',
          },  {
            name:'赵厚涛',
            phone:'18139077819',
            ago:'六桶镇党委政府',
            now:'久安乡政法委',
            into:'工作调动',
            id:'**********7776',
          },  {
            name:'刘恩泽',
            phone:'17339471111',
            ago:'六桶镇党委政府',
            now:'久安乡政法委',
            into:'工作调动',
            id:'**********7776',
          },

        ],
        formInline: {
         key:''
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
    border:1px solid #008aff;
    color:#008aff;
  }
</style>
