<template>
  <div>
    <el-row class="mainRight">
      <el-col :span="24" class="borderBottom">
        校园周边重点人员列表
      </el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="所属网格:">
            <el-input v-model="formInline.name" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="姓名:">
            <el-input v-model="formInline.name" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="公民省份证号:">
            <el-input v-model="formInline.name" placeholder="请输入"></el-input>
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
        prop="id"
        sortable
        label="所属网格"
        min-width="13%">
      </el-table-column>
      <el-table-column
        prop="school"
        sortable
        label="所属学校"
        min-width="13%">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        show-overflow-tooltip
        min-width="12%">
      </el-table-column>
      <el-table-column
        prop="idCard"
        label="公民身份证号"
        min-width="13%">
      </el-table-column>
      <el-table-column
        prop="agoName"
        label="曾用名"
        min-width="10%">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        min-width="10%">
      </el-table-column>
      <el-table-column
        prop="zhiye"
        label="职业"
        min-width="12%">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        min-width="40%">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)"size="small" >详情</el-button>
          <el-button @click="handleClick(scope.row)" size="small">编辑</el-button>
          <el-button @click="deleteRow(scope.$index,tableData)"size="small">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="background: #fff;padding-bottom:40px;margin-top:200px;">
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
            :total="5">
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
        formInline: {
          kind: '',
          name: '',
        },
        currentPage4: 1,
        tableData: [
          {
          id: '九庄镇政法委',
          school:'九庄镇幼儿园',
          name:'陈佳',
         idCard:'**************5461',
          agoName:'李想',
          sex:'女',
          zhiye:'学生',
        }, {
            id: '开阳县政法委',
            school:'开阳县小学',
            name:'周浩',
            idCard:'**************5461',
            agoName:'周明明',
            sex:'女',
            zhiye:'学生',
        }, {
            id: '久安乡政法委',
            school:'久安乡小学',
            name:'付晓丽',
            idCard:'**************5461',
            agoName:'付想',
            sex:'女',
            zhiye:'学生',
        }, {
            id: '大石乡政法委',
            school:'大石乡小学',
            name:'李瑶',
            idCard:'**************5461',
            agoName:'李想',
            sex:'女',
            zhiye:'学生',
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
