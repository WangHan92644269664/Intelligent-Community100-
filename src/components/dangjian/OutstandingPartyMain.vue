<template>
  <el-col :span="24" class="mainRight">
    <el-row class="borderBottom">
      <el-col :span="24">{{rightTitle}}</el-col>
    </el-row>
    <el-row style="padding-left: 15px;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="性别:">
            <el-select v-model="formInline.sex" placeholder="请选择">
              <el-option label="男" value="male"></el-option>
              <el-option label="女" value="female"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="出生日期:">
            <el-input v-model="formInline.time"  placeholder="yyyyMMdd"></el-input>
          </el-form-item>
          <el-form-item label="关键字:">
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
      height="650px"
    >
      <el-table-column
        fixed
        prop="name"
        label="姓名"
        width="200">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        sortable
        width="150">
      </el-table-column>
      <el-table-column
        prop="date"
        label="出生日期"
        width="250">
      </el-table-column>
      <el-table-column
        prop="nation"
        label="民族"
        width="150">
      </el-table-column>
      <el-table-column
        prop="id"
        label="身份证号"
        sortable
        width="300">
      </el-table-column>
      <el-table-column
        prop="area"
        label="所属组织"
        sortable
        width="200">
      </el-table-column>
      <el-table-column
        prop="area"
        sortable
        label="党内职务"
        width="200">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="250">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)"size="small" >查看</el-button>
          <el-button @click="handleClick(scope.row)"size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-col>
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
    }
  }
</script>

<style scoped>
</style>
