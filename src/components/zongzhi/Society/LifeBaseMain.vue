<template>
  <div>
    <el-row class="mainRight">
      <el-col :span="24" class="borderBottom">命案基本信息</el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="案件名称:">
            <el-input v-model="formInline.name" ></el-input>
          </el-form-item>
          <el-form-item label="案件编号:">
            <el-input v-model="formInline.id" ></el-input>
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
      <el-table-column fixed prop="square"  label="所属网格"  min-width="13%"></el-table-column>
      <el-table-column prop="id" label="案件编号"  min-width="11%"></el-table-column>
      <el-table-column prop="name" label="案件名称"  min-width="12%"></el-table-column>
      <el-table-column prop="start" label="发生日期"  min-width="12%"></el-table-column>
      <el-table-column prop="end" label="结案日期"  min-width="12%"></el-table-column>
      <el-table-column prop="desc" label="简要情况"  min-width="12%"></el-table-column>
      <el-table-column prop="time" label="添加时间"  min-width="13%"></el-table-column>
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
            square: "新天社区",
            id: "AS000001",
           name:'偷电动车',
            start:'2018.1.15',
           end:'2018.1.15',
           desc:'已经结案',
            time: "2018.11.13",
          },
          {
            square: "九庄镇政法委党支部",
            id: "AS000001",
            name:'群众斗殴',
            start:'2018.1.15',
            end:'2018.1.15',
            desc:'已经结案',
            time: "2018.11.13",
          },
          {
            square: "久安乡政法委党支部",
            id: "AS000001",
            name:'偷窃',
            start:'2018.1.15',
            end:'2018.1.15',
            desc:'已经结案',
            time: "2018.11.13",
          },
          {
            square: "大石乡政法委党支部",
            id: "AS000001",
            name:'抢劫杀人',
            start:'2018.1.15',
            end:'2018.1.15',
            desc:'已经结案',
            time: "2018.11.13",
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
