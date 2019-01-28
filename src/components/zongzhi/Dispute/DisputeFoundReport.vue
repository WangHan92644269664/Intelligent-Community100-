<template>
  <div>
    <el-row class="mainRight">
      <el-col :span="24" class="borderBottom">重点事件列表</el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="来源:">
            <el-select v-model="formInline.from" placeholder="请选择">
              <el-option label="开发区" value="开发区"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="登记时间:">
            <el-select v-model="formInline.time" placeholder="请选择">
              <el-option label="2018-9" value="2018-9"></el-option>
            </el-select>
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
      <el-table-column fixed prop="square"  label="所属网格"   show-overflow-tooltip min-width="13%"></el-table-column>
      <el-table-column prop="id"  label="登记编号"  min-width="12%"></el-table-column>
      <el-table-column prop="problem" label="事件名称"   show-overflow-tooltip min-width="13%"></el-table-column>
      <el-table-column prop="problemFrom" label="来源"  min-width="12%"></el-table-column>
      <el-table-column prop="dengjiTime" label="登记时间"  min-width="12%"></el-table-column>
      <el-table-column prop="problemPeople" label="登记人"  min-width="12%"></el-table-column>
      <el-table-column prop="problemType" label="事件类型"  min-width="12%"></el-table-column>
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
        from: "",
        search:"",
        time:""
      },
      currentPage4: 1,
      tableData: [
        {
          square: "九庄镇政法委",
          id: "AS00002",
          problem: "土地使用权纠纷",
          problemFrom: "群众来访",
          dengjiTime: "20181117",
          problemPeople: "超级管理员",
          problemType: "土地及资产",
        },
         {
          square: "开阳县政法委",
          id: "AS00001",
          problem: "下水道井盖丢失",
          problemFrom: "电话热线",
          dengjiTime: "20181117",
          problemPeople: "超级管理员",
          problemType: "物权相关",
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
