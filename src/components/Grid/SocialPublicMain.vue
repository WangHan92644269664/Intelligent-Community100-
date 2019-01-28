<template>
  <div>
    <el-row  class="mainRight">
      <el-col :span="24" class="borderBottom">
        社情民意列表
      </el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="走访对象:">
            <el-input v-model="formInline.object"></el-input>
          </el-form-item>
          <el-form-item label="走访时间:">
            <el-input v-model="formInline.time"></el-input>
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
      stripe
      style="width:96%;margin:0 auto"
    >
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        sortable
        prop="id"
        label="序号"
        min-width="11%">
      </el-table-column>
      <el-table-column
        prop="name"
        label="登记人"
        min-width="13%">
      </el-table-column>
      <el-table-column
        prop="object"
        label="走访对象"
        min-width="12%">
      </el-table-column>

      <el-table-column
        prop="phone"
        label="联系方式"
        min-width="14%">
      </el-table-column>
      <el-table-column
        prop="time"
        label="走访时间"
        min-width="13%">
      </el-table-column>
      <el-table-column
        prop="from"
        label="走访缘由"
        min-width="14%">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        min-width="30%">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)"size="small" >详情</el-button>
          <el-button @click="handleClick(scope.row)" size="small">编辑</el-button>
          <el-button @click="deleteRow(scope.$index,tableData)"size="small">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="background: #fff;padding-bottom:40px;margin-top:60px;">
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
        formInline: {
         object:'',
          time:''
        },
        currentPage4: 1,
        tableData: [
          {
            id:'0001',
            name:'超级管理员',
            object:'胡天德',
            phone:'16426482554',
            time:'2018-12-29',
            from:'日常走访'
          },
          {
            id:'0001',
            name:'超级管理员',
            object:'李先明',
            phone:'16426482554',
            time:'2018-12-29',
            from:'日常走访'
          },
          {
            id:'0001',
            name:'超级管理员',
            object:'韩定军',
            phone:'16426482554',
            time:'2018-12-29',
            from:'日常走访'
          },
          {
            id:'0001',
            name:'超级管理员',
            object:'张震',
            phone:'16426482554',
            time:'2018-12-29',
            from:'日常走访'
          },
          {
            id:'0001',
            name:'超级管理员',
            object:'张军才',
            phone:'16426482554',
            time:'2018-12-29',
            from:'日常走访'
          },
          {
            id:'0001',
            name:'超级管理员',
            object:'孟云云',
            phone:'16426482554',
            time:'2018-12-29',
            from:'日常走访'
          },
          {
            id:'0001',
            name:'超级管理员',
            object:'刘天',
            phone:'16426482554',
            time:'2018-12-29',
            from:'日常走访'
          },
          {
            id:'0001',
            name:'超级管理员',
            object:'张达明',
            phone:'16426482554',
            time:'2018-12-29',
            from:'日常走访'
          },
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
