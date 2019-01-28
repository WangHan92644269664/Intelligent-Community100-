<template>
  <div>
    <el-row class="mainRight">
      <el-col :span="24" class="borderBottom">命案犯罪嫌疑人/受害人</el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="嫌疑人/受害人姓名:">
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
      <el-table-column fixed prop="life"  label="所属命案"  min-width="12%"></el-table-column>
      <el-table-column prop="square"  label="所属区域"  min-width="12%"></el-table-column>
      <el-table-column prop="isTrue" label="嫌疑人/受害人"   show-overflow-tooltip  min-width="12%"></el-table-column>
      <el-table-column prop="id" label="身份证号"   show-overflow-tooltip min-width="14%"></el-table-column>
      <el-table-column prop="name" label="姓名"  min-width="11%"></el-table-column>
      <el-table-column prop="sex" label="性别"  min-width="10%"></el-table-column>
      <el-table-column prop="area" label="户籍地"  min-width="10%"></el-table-column>
      <el-table-column prop="phone" label="联系电话"   show-overflow-tooltip min-width="13%"></el-table-column>
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
        },
        currentPage4: 1,
        tableData: [
          {
            life:'偷电动车',
            square: "新天社区",
            isTrue:'受害人',
            id: "************2255",
            name:'杨盼',
           sex:'男',
           area:'贵阳',
           phone:'15546256465',
          },
          {
            life:'偷电动车',
            square: "新天社区",
            isTrue:'受害人',
            id: "************2255",
            name:'吴静',
            sex:'男',
            area:'贵阳',
            phone:'15546256465',
          },
          {
            life:'偷电动车',
            square: "新天社区",
            isTrue:'受害人',
            id: "************2255",
            name:'付晓丽',
            sex:'男',
            area:'贵阳',
            phone:'15546256465',
          },
          {
            life:'偷电动车',
            square: "新天社区",
            isTrue:'受害人',
            id: "************2255",
            name:'张倩',
            sex:'男',
            area:'贵阳',
            phone:'15546256465',
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
