<template>
  <div>
    <el-row class="mainRight">
      <el-col :span="24" class="borderBottom">
        服务档案列表
      </el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="性别:">
            <el-select v-model="formInline.people" placeholder="请选择">
              <el-option label="男" value="male"></el-option>
              <el-option label="女" value="female"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="出生年月:">
            <el-input v-model="formInline.date"></el-input>
          </el-form-item>
          <el-form-item label="身份证号:">
            <el-input v-model="formInline.info" placeholder="民族/身份证号/婚姻状态/学历" disabled></el-input>
          </el-form-item>
          <el-form-item class="search">
            <el-button type="primary" size="small"><img :src="search" alt="" style="margin-right: 8px;">查询</el-button>
            <el-button type="primary" size="small"><img :src="reset" alt="" style="margin-right: 8px;">重置</el-button>
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
        prop="name"
        label="姓名"
        min-width="13%">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        min-width="11%">
      </el-table-column>
      <el-table-column
        prop="date"
        label="出生日期"
        min-width="20%">
      </el-table-column>
      <el-table-column
        prop="photo"
        label="电话"
        min-width="14%">
      </el-table-column>
      <el-table-column
        prop="id"
        label="身份证"
        min-width="14%">
      </el-table-column>

      <el-table-column
        prop="kind"
        label="服务类型"
        min-width="13%">
      </el-table-column>
      <el-table-column
        prop="title"
        label="服务标题"
        min-width="13%">
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
    <el-row style="background: #fff;padding-bottom:40px;margin-top:90px;">
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
            :total="11">
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
        search:require('../images/search.png'),
        add:require('../images/add.png'),
        reset:require('../images/reset.png'),
        formInline: {
          people: '',
          date: '',
          info:''
        },
        currentPage4: 1,
        tableData: [
          {
            name: '黄并肩',
            sex: '男',
            date: '2018-11-17 11:34:16',
            id:'*******10000',
            photo: '15455545555',
            kind:'医院治疗',
            title: '紧急救治',
          },{
            name: '黄并肩',
            sex: '男',
            date: '2018-11-17 11:34:16',
            id:'*******10000',
            photo: '15455545555',
            kind:'一键呼叫',
            title: '呼叫帮助',
          }, {
            name: '黄并肩',
            sex: '男',
            date: '2018-11-17 11:34:16',
            id:'*******10000',
            photo: '15455545555',
            kind:'上门治疗',
            title: '上门救治',
          }, {
            name: '黄并肩',
            sex: '男',
            date: '2018-11-17 11:34:16',
            id:'*******10000',
            photo: '15455545555',
            kind:'上门治疗',
            title: '上门救治',
          },
          {
            name: '黄并肩',
            sex: '男',
            date: '2018-11-17 11:34:16',
            id:'*******10000',
            photo: '15455545555',
            kind:'上门治疗',
            title: '上门喂药',
          },
          {
            name: '黄并肩',
            sex: '男',
            date: '2018-11-17 11:34:16',
            id:'*******10000',
            photo: '15455545555',
            kind:'医院治疗',
            title: '医院服务',
          },
        ],
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
    },
    mounted() {
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
