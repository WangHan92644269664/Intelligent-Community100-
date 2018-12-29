<template>
  <div class="mainRight" style="margin-left: 220px">
    <el-row class="borderBottom" style="height: 40px;">
      <el-col :span="24">{{rightTitle}}</el-col>
    </el-row>
    <el-row style="padding-left: 15px;height: 40px;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="时间:">
            <el-input v-model="formInline.time"></el-input>
          </el-form-item>
          <el-form-item label="标题:">
            <el-input v-model="formInline.title"></el-input>
          </el-form-item>
          <el-form-item class="search">
            <el-button type="primary"  size="small" icon="iconfont icon-jinduchaxun">查询</el-button>
            <el-button type="primary" size="small"><i class="iconfont icon-tianjia"></i>添加</el-button>
            <el-button type="primary" size="medium">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      border
    >
      <el-table-column
        fixed
        prop="id"
        label="编号"
        width="150">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        show-overflow-tooltip
        width="200">
      </el-table-column>
      <el-table-column
        prop="name"
        label="缩略图"
        width="150">
        <template slot-scope="scope">
          <img :src="scope.row.name" alt="" style="width: 90px;height: 40px;">
        </template>
      </el-table-column>
      <el-table-column
        prop="head"
        label="所属栏目"
        width="200">
      </el-table-column>
      <el-table-column
        prop="people"
        label="添加人"
        width="150">
      </el-table-column>
      <el-table-column
        prop="date"
        label="添加时间"
        width="300">
      </el-table-column>
      <el-table-column
        prop="photo"
        label="电话"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="250">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="info" size="small">编辑</el-button>
          <el-button type="success" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row>
      <el-col :span="24">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[1,2,3,4,5,6,7,8,9,10]"
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
        currentPage4: 1,
        tableData: [
          {
            id: '6',
            name: require('../images/advertise.jpg'),
            title: '智慧大厅简介',
            people: '超级管理员',
            head:'智慧大厅简介',
            date:'2017-11-24 12:21:10',
            photo: '15455545555',
          },   {
            id: '6',
            name: require('../images/advertise.jpg'),
            title: '智慧大厅简介',
            people: '超级管理员',
            head:'智慧大厅简介',
            date:'2017-11-24 12:21:10',
            photo: '15455545555',
          },  {
            id: '6',
            name: require('../images/advertise.jpg'),
            title: '智慧大厅简介',
            people: '超级管理员',
            head:'智慧大厅简介',
            date:'2017-11-24 12:21:10',
            photo: '15455545555',
          },  {
            id: '6',
            name: require('../images/advertise.jpg'),
            title: '智慧大厅简介',
            people: '超级管理员',
            head:'智慧大厅简介',
            date:'2017-11-24 12:21:10',
            photo: '15455545555',
          },
          {
            id: '6',
            name: require('../images/advertise.jpg'),
            title: '智慧大厅简介',
            people: '超级管理员',
            head:'智慧大厅简介',
            date:'2017-11-24 12:21:10',
            photo: '15455545555',
          },
          {
            id: '6',
            name: require('../images/advertise.jpg'),
            title: '智慧大厅简介',
            people: '超级管理员',
            head:'智慧大厅简介',
            date:'2017-11-24 12:21:10',
            photo: '15455545555',
          },
        ],
        formInline: {
          title: '',
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
      }
    }
  }
</script>
<style>
  .el-main .el-table td {
    text-align: center !important;
  }

  .el-main .el-table th {
    text-align: center;
    background: rgba(222, 222, 222, .3);
  }

  .el-button--info {
    background-color: #fff!important;
    border: 1px solid #FF6400 !important;
    color: #FF6400 !important;
  }

  .el-button--success {
    background-color: #fff!important;
    border: 1px solid #409EFF !important;
    color: #409EFF !important;
  }

  .block {
    text-align: left;
    margin-top: 10px;
  }

  .el-pager li.active {
    background: #FF6400;
    color: #fff;
    border-radius: 4px;
  }

  .el-pagination__total {
    margin-left: 10px;
  }
  .hideWord{

  }

</style>
<style scoped>
  /*主体内容*/
  .el-header[data-v-69eb3339] {
    background-color: #fff !important;
    height: 40px !important;
    color: #aaa;
  }
  .el-main .el-table td {
    padding:0 !important;
    text-align: center !important;
  }
  .el-main .borderBottom {
    border-bottom: 1px solid #eee;
    text-align: left;
    padding-left: 15px;
    padding-bottom: 15px;
    font-size: 14px;
    color: #777;
    font-weight: bolder;
    letter-spacing: 0.1em;
    margin-bottom: 15px;
  }
  .el-main .mainRight {
    background: #fff;
    padding: 15px 0 !important;
  }

  .el-main .search .el-button--primary {
    background-color: #FF6400 !important;
    border-color: #FF6400 !important;
  }

  .el-main .info {
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    padding: 0 15px;
    height: 40px;
    line-height: 40px;
    color: #ababab;
  }

  .el-main .el-button {
    border-radius: 2px;
  }
</style>
