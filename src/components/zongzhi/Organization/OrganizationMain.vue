<template>
  <div class="mainRight">
    <el-row class="borderBottom" >
      <el-col :span="24">员工管理列表</el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="姓名:">
            <el-input v-model="formInline.name"></el-input>
          </el-form-item>
          <el-form-item label="公民身份证号:">
            <el-input v-model="formInline.id"></el-input>
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
      style="width:96%;margin:0 auto"
    >
      <el-table-column
        type="selection">
      </el-table-column>
      <el-table-column
        fixed
        prop="name"
        label="姓名"
        min-width="10%">
      </el-table-column>
      <el-table-column
        prop="id"
        label="公民省份证号"
        show-overflow-tooltip
        min-width="15%">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        min-width="10%">
      </el-table-column>
      <el-table-column
        prop="dept"
        label="所属部门"
        show-overflow-tooltip
        min-width="13%">
      </el-table-column>
      <el-table-column
        prop="education"
        label="学历"
        min-width="11%">
      </el-table-column>
      <el-table-column
        prop="politics"
        label="政治面貌"
        show-overflow-tooltip
        min-width="12%">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        min-width="33%">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)"size="small" >详情</el-button>
          <el-button @click="handleClick(scope.row)" size="small">编辑</el-button>
          <el-button @click="deleteRow(scope.$index,tableData)"size="small">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="background: #fff;padding-bottom:40px;margin-top:300px;">
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
            :total="3">
          </el-pagination>
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
        currentPage4: 1,
        tableData: [
          {
          name: '王洪涛',
          id:'55455445622521',
          sex: '女',
          dept:'综治办',
          education:'本科',
          politics:'共青团员',
          photo: '15455545555',
        }, {
          name: '郭嘉林',
          id:'55455445622521',
          sex: '男',
          dept:'度假区综治中心',
          education:'本科',
          politics:'共青团员',
          photo: '15455545555',
        }, {
          name: '张福运',
          id:'55455445622521',
          sex: '男',
          dept:'高新区综治中心',
          education:'本科',
          politics:'共青团员',
          photo: '15455545555',
        }
        ],
        formInline: {
        name:'',
          id:''
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
