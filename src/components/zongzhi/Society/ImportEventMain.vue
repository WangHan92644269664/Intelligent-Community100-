<template>
  <div>
    <el-row class="mainRight">
      <el-col :span="24" class="borderBottom">重特大案(事)件</el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="案(事)件名称:">
            <el-input v-model="formInline.name" ></el-input>
          </el-form-item>
          <el-form-item label="发生日期:">
            <el-input v-model="formInline.date" ></el-input>
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
      <el-table-column fixed prop="name" sortable label="案(事)件名称"  min-width="13%"></el-table-column>
      <el-table-column prop="date" sortable label="发生日期"  min-width="13%"></el-table-column>
      <el-table-column prop="area" label="发生地"   show-overflow-tooltip min-width="13%"></el-table-column>
      <el-table-column prop="desc" label="发生地详细地址"   show-overflow-tooltip min-width="13%"></el-table-column>
      <el-table-column prop="rank" label="案(事)件分级"  min-width="10%"></el-table-column>
      <el-table-column prop="kind" label="案(事)件类型"  min-width="12%"></el-table-column>
      <el-table-column fixed="right" label="操作"  min-width="40%">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)"size="small" >详情</el-button>
          <el-button @click="handleClick(scope.row)" size="small">编辑</el-button>
          <el-button @click="deleteRow(scope.$index,tableData)"size="small">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="background: #fff;padding-bottom:40px;margin-top:170px;">
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
          date:''
        },
        currentPage4: 1,
        tableData: [
          {
           name:'电动车丢失',
           date:'2018-09-04',
            area:'云岩区枣山路',
           desc:'枣山路120号',
            rank:'较大',
            kind:'安全事故',
          },
          {
            name:'现金丢失',
            date:'2018-09-04',
            area:'龙岗社区',
            desc:'龙岗社区2单元13号',
            rank:'重大',
            kind:'群体性事故',
          },
          {
            name:'汽车被砸事件',
            date:'2018-09-04',
            area:'修文县阳明大道',
            desc:'阳明大道36号',
            rank:'重大',
            kind:'刑事案件',
          },
          {
            name:'自行车丢失',
            date:'2018-09-04',
            area:'龙岗社区',
            desc:'龙岗社区1单元4号',
            rank:'重大',
            kind:'刑事案件',
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
