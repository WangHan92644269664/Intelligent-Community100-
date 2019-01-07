<template>
  <el-col :span="24" class="mainRight">
    <el-row class="borderBottom">
      <el-col :span="24">{{rightTitle}}</el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="总结类型:">
            <el-select v-model="formInline.kind" placeholder="请选择">
              <el-option label="日报" value="day"></el-option>
              <el-option label="周报" value="week"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="提交日期:">
            <el-input v-model="formInline.date"   placeholder="请输入时间段"></el-input>
          </el-form-item>
          <el-form-item label="审核状态:">
            <el-select v-model="formInline.status" placeholder="请选择">
              <el-option label="未审核" value="undo"></el-option>
              <el-option label="已审核" value="doing"></el-option>
            </el-select>
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
        width="50">
      </el-table-column>
      <el-table-column
        fixed
        type="index"
        label="编号"
        sortable
        :index="indexMethod"
        width="190">
      </el-table-column>
      <el-table-column
        prop="name"
        label="标题"
        width="300">
      </el-table-column>
      <el-table-column
        prop="kind"
        label="总结类型"
        width="200">
      </el-table-column>
      <el-table-column
        prop="people"
        label="提交人"
        width="200">
      </el-table-column>
      <el-table-column
        prop="time"
        label="提交时间"
        width="240">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="120">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="300">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)"size="small" >详情</el-button>
          <el-button @click="handleClick(scope.row)" size="small">编辑</el-button>
          <el-button @click="deleteRow(scope.$index,tableData)"size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="background: #fff;padding-bottom:30px;margin-top:80px;">
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
            name: '曾让习近平驻足观看的三件展品',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'未审核',
            kind:'日报',
            zip: 200333
          }, {
            name: '曾让习近平驻足观看的三件展品',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'未审核',
            kind:'日报',
            zip: 200333
          }, {
            name: '曾让习近平驻足观看的三件展品',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'未审核',
            kind:'日报',
            zip: 200333
          }, {
            name: '曾让习近平驻足观看的三件展品',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'未审核',
            kind:'日报',
            zip: 200333
          },
          {
            name: '曾让习近平驻足观看的三件展品',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'未审核',
            kind:'日报',
            zip: 200333
          },
          {
            name: '曾让习近平驻足观看的三件展品',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'未审核',
            kind:'日报',
            zip: 200333
          },
          {
            name: '曾让习近平驻足观看的三件展品',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'未审核',
            kind:'日报',
            zip: 200333
          },
          {name: '曾让习近平驻足观看的三件展品',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'未审核',
            kind:'日报',
            zip: 200333
          },
        ],
        formInline: {
         kind:'',
          date:'',
          status:''
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
        return index+24
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
