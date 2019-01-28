<template>
  <div>
    <el-row class="mainRight" >
      <el-col :span="24" class="borderBottom">{{rightTitle}}</el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="工作组名称/党员:">
            <el-input v-model="formInline.list" ></el-input>
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
      style="width:96%;margin:0px auto"
    >
      <el-table-column
        type="selection">
      </el-table-column>
      <el-table-column
        type="index"
        label="编号"
        sortable
        :index="indexMethod"
        width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        sortable
        label="工作组名称"
        min-width="18%">
      </el-table-column>
      <el-table-column
        prop="people"
        sortable
        label="工作组成员"
        min-width="20%">
      </el-table-column>
      <el-table-column
        prop="village"
        label="工作村"
        sortable
        min-width="16%">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        min-width="25%">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)"size="small" >详情</el-button>
          <el-button @click="handleClick(scope.row)" size="small">编辑</el-button>
          <el-button @click="deleteRow(scope.$index,tableData)"size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row  style="background: #fff;padding-bottom:40px;margin-top:30px;">
      <el-col :span="24">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[5,10]"
            :page-size="10"
            layout="prev, pager,next, jumper, total, sizes"
            :total="10">
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    props: {
      rightTitle: String
    },
    data() {
      return {
        search:require('../../images/search.png'),
        add:require('../../images/add.png'),
        currentPage4: 1,
        tableData: [
          {
            name: '开发区一号工作组',
            people:'百元徐 张书轩 方文轩',
            village:'久安乡政法委党支部',
          }, {
            name: '开发区一号工作组',
            people:'百元徐 张书轩',
            village:'开阳县政法委党支部',
          }, {
            name: '开发区一号工作组',
            people:'百元徐 张书轩',
            village:'大石乡政法委党支部',
          }, {
            name: '开发区一号工作组',
            people:'百元徐 张书轩 方文轩',
            village:'九庄镇政法委党支部',
          },
        ],
        formInline: {
          list:''
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
      indexMethod(index){
        return index+5
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
