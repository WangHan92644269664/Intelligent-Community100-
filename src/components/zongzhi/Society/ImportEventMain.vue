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
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column fixed prop="name" sortable label="案(事)件名称" width="150"></el-table-column>
      <el-table-column prop="date" sortable label="发生日期" width="120"></el-table-column>
      <el-table-column prop="area" label="发生地" width="250"></el-table-column>
      <el-table-column prop="desc" label="发生地详细地址" width="150"></el-table-column>
      <el-table-column prop="rank" label="案(事)件分级" width="250"></el-table-column>
      <el-table-column prop="kind" label="案(事)件类型" width="200"></el-table-column>
      <el-table-column fixed="right" label="操作" width="300">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)"size="small" >详情</el-button>
          <el-button @click="handleClick(scope.row)" size="small">编辑</el-button>
          <el-button @click="handleClick(scope.row)"size="small">移除</el-button>
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
            area:'郑州市金水区',
           desc:'金水区通泰路',
            rank:'较大',
            kind:'安全事故',
          },
          {
            name:'现金丢失',
            date:'2018-09-04',
            area:'郑州市二七区',
            desc:'二七区人民路',
            rank:'重大',
            kind:'群体性事故',
          },
          {
            name:'汽车被砸事件',
            date:'2018-09-04',
            area:'郑州市管城回族区',
            desc:'管城回族区东三路',
            rank:'重大',
            kind:'刑事案件',
          },
          {
            name:'自行车丢失',
            date:'2018-09-04',
            area:'郑州市管城回族区',
            desc:'管城回族区东三路',
            rank:'重大',
            kind:'刑事案件',
          },
          {
            name:'电动车丢失',
            date:'2018-09-04',
            area:'郑州市金水区',
            desc:'金水区通泰路',
            rank:'较大',
            kind:'安全事故',
          },
          {
            name:'电动车丢失',
            date:'2018-09-04',
            area:'郑州市金水区',
            desc:'金水区通泰路',
            rank:'较大',
            kind:'安全事故',
          }
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
      }
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
