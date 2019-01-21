<template>
  <div class="mainRight">
    <el-row class="borderBottom">
      <el-col :span="24">{{rightTitle}}</el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="服务名称:">
            <el-input v-model="formInline.name"  placeholder="请输入"></el-input>
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
        fixed
        prop="id"
        label="服务编号"
        width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        label="服务名称"
        min-width="13%">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        min-width="13%">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        min-width="25%">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)"size="small" >详情</el-button>
          <el-button @click="handleClick(scope.row)" size="small">编辑</el-button>
          <el-button @click="deleteRow(scope.$index,tableData)"size="small">删除</el-button>
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
            id: '11',
            name: '党内组员',
            status:'启用'
          },
          {
            id: '12',
            name: '副书记',
            status:'启用'
          },
          {
            id: '13',
            name: '支部',
            status:'启用'
          },
          {
            id: '14',
            name: '总支',
            status:'启用'
          },
        ],
        formInline: {
          name: '',
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
