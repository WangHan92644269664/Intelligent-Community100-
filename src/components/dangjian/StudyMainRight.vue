<template>
  <div>
    <el-row class="mainRight" >
      <el-col :span="24" class="borderBottom">{{rightTitle}}</el-col>
    </el-row>
    <el-row style="padding-left: 15px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="标题:">
            <el-input v-model="formInline.name"></el-input>
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
        type="selection">
      </el-table-column>
      <el-table-column
        prop="id"
        label="编号"
        min-width="8%">
      </el-table-column>
      <el-table-column
        prop="name"
        label="标题"
        min-width="13%">
      </el-table-column>
      <el-table-column
        prop="time"
        label="更改时间"
        sortable
        min-width="20%">
      </el-table-column>
      <el-table-column
        prop="people"
        label="操作人"
        sortable
        min-width="13%">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        sortable
        min-width="13%">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        min-width="25%">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)"size="small" >编辑</el-button>
          <el-button @click="handleClick(scope.row)" size="small">停用</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="background: #fff;padding-bottom:40px;margin-top: 80px;">
      <el-col :span="24">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[1,2,3,4,5,6,7,8,9,10]"
            :page-size="10"
            layout="prev, pager,next, jumper, total, sizes"
            :total="7">
          </el-pagination>
        </div>
      </el-col>
    </el-row>
    </div>
</template>

<script>
  export default {
    props: {
      rightTitle: String
    },
    data() {
      return {
        search:require('../images/search.png'),
        add:require('../images/add.png'),
        currentPage4: 1,
        tableData: [
          {
            id:'5',
            name: '两学一做',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'可用',
          }, {
            id:'6',
            name: '两学一做',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'可用',
          }, {
            id:'7',
            name: '三严三实',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'可用',
          }, {
            id:'8',
            name: '三会一课',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'可用',
          },
          {
            id:'8',
            name: '法治建设',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'可用',
          },
          {
            id:'9',
            name: '规章制度',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'可用',
          },
          {
            id:'10',
            name: '公共服务',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'可用',
          },
          {
            id:'11',
            name: '就业创业',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'可用',
          },
        ],
        formInline: {
          name: '',
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
    }
  }
</script>

<style scoped>
  .cell .el-button:first-child{
    background: none;
    border:1px solid #ff813d;
    color:#ff813d
  }
  .cell .el-button:nth-child(2){
    background: none;
    border:1px solid #008aff;
    color:#008aff;
  }

</style>
