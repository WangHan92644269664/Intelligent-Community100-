<template>
  <div>
    <el-row class="mainRight">
      <el-col :span="24" class="borderBottom">受理派遣列表</el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="所属网格:">
            <el-input v-model="formInline.network"  placeholder="请选择"></el-input>
          </el-form-item>
          <el-form-item label="登记时间:">
            <el-input v-model="formInline.time"  placeholder="请选择"></el-input>
          </el-form-item>
          <el-form-item label="万能搜索:">
            <el-input v-model="formInline.search"  placeholder="请输入关键词"></el-input>
          </el-form-item>
          <el-form-item class="search">
            <el-button type="primary" size="small"><img :src="search" alt="" style="margin-right: 8px;">查询</el-button>
            <el-button type="primary" size="small"><img :src="add" alt="" class="add">添加</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-table :data="tableData" border   style="width:96%;margin:0 auto"
    >
      <el-table-column
        type="selection">
      </el-table-column>
      <el-table-column fixed prop="square" sortable label="所属网格"   show-overflow-tooltip min-width="13%"></el-table-column>
      <el-table-column prop="id" sortable label="案件编号"  min-width="12%"></el-table-column>
      <el-table-column prop="name" label="事件名称"   show-overflow-tooltip min-width="13%"></el-table-column>
      <el-table-column prop="from" label="来源"  min-width="12%"></el-table-column>
      <el-table-column prop="time" label="登记时间"  min-width="12%"></el-table-column>
      <el-table-column prop="people" label="登记人"  min-width="12%"></el-table-column>
      <el-table-column prop="type" label="事件类型"  min-width="12%"></el-table-column>
      <el-table-column fixed="right" label="操作"  min-width="30%">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)"size="small" >详情</el-button>
          <el-button @click="handleClick(scope.row)" size="small">编辑</el-button>
          <el-button @click="deleteRow(scope.$index,tableData)"size="small">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="background: #fff;padding-bottom:40px;margin-top: 350px;">
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
            :total="12"
          ></el-pagination>
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
        formInline: {
          network:'',
          search:"",
          time:""
        },
        currentPage4: 1,
        tableData: [
          {
            square: "九庄镇政法委",
            id: "AS00002",
            name: "土地使用权纠纷",
           from: "群众来访",
            time: "20181117",
            people: "超级管理员",
           type: "土地及资产",
          },
          {
            square: "开阳县政法委",
            id: "AS00001",
            name: "下水道井盖丢失",
            from: "电话热线",
            time: "20181117",
            people: "超级管理员",
            type: "物权相关",
          },
          {
            square: "久安乡政法委",
            id: "AS00003",
            name: "下水道井盖丢失",
            from: "电话热线",
            time: "20181117",
            people: "超级管理员",
            type: "物权相关",
          },
          {
            square: "大石乡政法委",
            id: "AS00004",
            name: "下水道井盖丢失",
            from: "电话热线",
            time: "20181117",
            people: "超级管理员",
            type: "物权相关",
          }]
      };
    },
    methods: {
      onSubmit() {
        console.log("submit!");
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
    mounted() {}
  };
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
