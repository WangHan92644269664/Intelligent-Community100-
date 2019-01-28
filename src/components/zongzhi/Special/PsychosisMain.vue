<template>
  <div class="mainRight">
    <el-row class="borderBottom">
      <el-col :span="24">精神病人员列表</el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="性别:">
            <el-select v-model="formInline.sex" placeholder="请选择">
              <el-option label="男" value="male"></el-option>
              <el-option label="女" value="female"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="出生日期:">
            <el-input v-model="formInline.time"></el-input>
          </el-form-item>
          <el-form-item label="关键词:">
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
        prop="id"
        sortable
        label="序号"
        min-width="10%">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        min-width="13%">
      </el-table-column>
      <el-table-column
        prop="sex"
        sortable
        label="性别"
        min-width="10%">
      </el-table-column>
      <el-table-column
        prop="time"
        label="出生日期"
        min-width="15%">
      </el-table-column>
      <el-table-column
        prop="nation"
        label="民族"
        min-width="10%">
      </el-table-column>
      <el-table-column
        prop="card"
        label="身份证号"
        show-overflow-tooltip
        min-width="16%">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        min-width="50%">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" plain size="small">详情</el-button>
          <el-button @click="handleClick(scope.row)" type="info" size="small">编辑</el-button>
          <el-button type="success" @click="deleteRow(scope.$index,tableData)" size="small">删除</el-button>
          <el-button @click="handleClick(scope.row)" plain size="small">居住信息</el-button>
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
        search:require('../../images/search.png'),
        add:require('../../images/add.png'),
        currentPage4: 1,
        tableData: [
          {
            id: '918',
            name: '王静',
            sex: '男',
            time: '19951007',
            nation:'汉族',
            card:'***********4776',
            photo: '15455545555',
            zip: 200333
          }, {
            id: '924',
            name: '丁春华',
            sex: '男',
            time: '19951207',
            nation:'汉族',
            card:'***********4476',
            photo: '15455545555',
            zip: 200333
          }, {
            id: '928',
            name: '黄明',
            sex: '男',
            time: '19960505',
            nation:'汉族',
            card:'***********6664',
            photo: '15455545555',
            zip: 200333
          }, {
            id: '1159',
            name: '付晓丽',
            sex: '男',
            time: '19971024',
            nation:'汉族',
            card:'***********4556',
            photo: '15455545555',
            zip: 200333
          },
          {
            id: '891',
            name: '徐鑫',
            sex: '女',
            time: '19951007',
            nation:'汉族',
            card:'***********4776',
            photo: '15455545555',
            zip: 200333
          },
        ],
        formInline: {
          sex: '',
          time: '',
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
    border:1px solid #ff813d;
    color:#ff813d
  }
  .cell .el-button:nth-child(3){
    background: none;
    border:1px solid #008aff;
    color:#008aff;
  }
</style>
