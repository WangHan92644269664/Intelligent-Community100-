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
          <el-form-item label="年月:">
            <el-input v-model="formInline.date"></el-input>
          </el-form-item>
          <el-form-item label="状态:">
            <el-select v-model="formInline.status" placeholder="请选择">
              <el-option label="未审核" value="undo"></el-option>
              <el-option label="已审核" value="do"></el-option>
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
      style="width:96%;margin:0 auto"
    >
      <el-table-column
        type="selection">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        min-width="11%">
      </el-table-column>
      <el-table-column
        prop="month"
        label="月检"
        min-width="13%">
      </el-table-column>
      <el-table-column
        prop="head"
        label="支部名称"
        min-width="18%">
      </el-table-column>
      <el-table-column
        prop="money"
        label="缴费金额"
        min-width="8%">
      </el-table-column>
      <el-table-column
        prop="date"
        label="缴费时间"
        min-width="18%">
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
          <el-button @click="handleClick(scope.row)"size="small" >查看</el-button>
          <el-button @click="deleteRow(scope.$index,tableData)"size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="background: #fff;padding-bottom:40px;margin-top: 160px;">
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
            name: '周耀玲',
            month:'2018-11',
            head:'新天社区政法委',
            money:'8',
            date:'2018-11-24',
            status:'未缴纳',
          },   {
            name: '李聪',
            month:'2018-11',
            head:'久安乡政法委',
            money:'8',
            date:'2018-11-24',
            status:'未缴纳',
          },  {
            name: '王晓东',
            month:'2018-11',
            head:'开阳县党委政府',
            money:'8',
            date:'2018-11-24',
            status:'未缴纳',
          },  {
            name: '李林',
            month:'2018-11',
            head:'大石乡政法委',
            money:'8',
            date:'2018-11-24',
            status:'未缴纳',
          },
        ],
        formInline: {
          name: '',
          date: '',
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
