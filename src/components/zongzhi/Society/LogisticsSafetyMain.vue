<template>
  <div>
    <el-row class="mainRight">
      <el-col :span="24" class="borderBottom">寄递物流安全管理</el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="工商执照注册号:">
            <el-input v-model="formInline.id" ></el-input>
          </el-form-item>
          <el-form-item label="寄递物流企业名称:">
            <el-input v-model="formInline.name" ></el-input>
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
      <el-table-column fixed prop="square" sortable label="所属网格" min-width="13%"></el-table-column>
      <el-table-column prop="id" sortable label="案件编号"  min-width="10%"></el-table-column>
      <el-table-column prop="reg" label="工商执照注册号"   show-overflow-tooltip  min-width="16%"></el-table-column>
      <el-table-column prop="name" label="寄递物流企业名称"  min-width="12%"></el-table-column>
      <el-table-column prop="area" label="所在地"   show-overflow-tooltip min-width="14%"></el-table-column>
      <el-table-column prop="desc" label="企业详细地址"   show-overflow-tooltip  min-width="13%"></el-table-column>
      <el-table-column prop="phone" label="企业联系方式"   show-overflow-tooltip min-width="13%"></el-table-column>
      <el-table-column fixed="right" label="操作"  min-width="40%">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)"size="small" >详情</el-button>
          <el-button @click="handleClick(scope.row)" size="small">编辑</el-button>
          <el-button @click="deleteRow(scope.$index,tableData)"size="small">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="background: #fff;padding-bottom:40px;margin-top:150px;">
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
          name:'',
          id:''
        },
        currentPage4: 1,
        tableData: [
          {
            square: "九庄镇政法委",
            id: "1",
            reg:'554466556545565455455',
           name:'韵达快递',
           area:'贵阳省贵阳市',
            desc:'贵阳省贵阳市南通大街',
            phone:'15224658545',
          },
          {
            square: "开阳县政法委",
            id: "2",
            reg:'554466556545565455455',
            name:'德邦快递',
            area:'贵阳省贵阳市',
            desc:'贵阳省贵阳市南通大街',
            phone:'15224658545',
          },
          {
            square: "久安乡政法委",
            id: "3",
            reg:'554466556545565455455',
            name:'顺丰快递',
            area:'贵阳省贵阳市',
            desc:'贵阳省贵阳市南通大街',
            phone:'15224658545',
          },
          {
            square: "大石乡政法委",
            id: "4",
            reg:'554466556545565455455',
            name:'申通快递',
            area:'贵阳省贵阳市',
            desc:'贵阳省贵阳市南通大街',
            phone:'15224658545',
          },
        ]
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
