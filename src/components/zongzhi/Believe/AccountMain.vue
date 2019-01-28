<template>
  <div>
    <el-row class="mainRight">
      <el-col :span="24" class="borderBottom">
        上访户列表
      </el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="姓名:">
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
        prop="id"
        label="序号"
        min-width="10%">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        min-width="12%">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        min-width="11%">
      </el-table-column>
      <el-table-column
        prop="date"
        label="出生日期"
        w min-width="12%">
      </el-table-column>
      <el-table-column
        prop="nation"
        label="民族"
        min-width="10%">
      </el-table-column>
      <el-table-column
        prop="card"
        label="身份证号"
        min-width="13%">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        sortable
        min-width="30%">
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
          id: '0001',
          name: '王静',
          sex:'女',
          date:'1998.05.16',
         nation:'汉',
         card:'***********5554',
        }, {
          id: '0002',
          name: '丁春华',
          sex:'女',
          date:'1998.05.16',
          nation:'汉',
          card:'***********5554',
        }, {
          id: '0003',
          name: '黄明',
          sex:'女',
          date:'1998.05.16',
          nation:'汉',
          card:'***********5554',
        }, {
          id: '0004',
          name: '付晓丽',
          sex:'女',
          date:'1998.05.16',
          nation:'汉',
          card:'***********5554',
        },
          {
            id: '0001',
            name: '徐鑫',
            sex:'女',
            date:'1998.05.16',
            nation:'汉',
            card:'***********5554',
          }
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
