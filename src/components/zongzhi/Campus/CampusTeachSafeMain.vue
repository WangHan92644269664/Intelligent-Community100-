<template>
  <div>
    <el-row class="mainRight">
      <el-col :span="24" class="borderBottom">
       涉及师生安全的案件列表
      </el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="案件编号:">
            <el-input v-model="formInline.id" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="案件名称:">
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
        prop="network"
        label="所属网格"
        min-width="12%">
      </el-table-column>
      <el-table-column
        prop="school"
        label="所属学校"
        min-width="13%">
      </el-table-column>
      <el-table-column
        prop="id"
        label="案件编号"
        min-width="12%">
      </el-table-column>
      <el-table-column
        prop="name"
        label="案件名称"
        show-overflow-tooltip
        min-width="12%">
      </el-table-column>
      <el-table-column
        prop="time"
        label="发生时间"
        min-width="13%">
      </el-table-column>
      <el-table-column
        prop="nature"
        label="案件性质"
        min-width="12%">
      </el-table-column>
      <el-table-column
        prop="desc"
        label="案件情况"
        show-overflow-tooltip
        min-width="12%">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        sortable
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
         id: '',
          name: '',
        },
        currentPage4: 1,
        tableData: [
          {
          network: '九庄镇政法委',
          school: '九庄镇幼儿园',
          id:'AS000002',
          name:'持刀抢劫',
          time:'2018-04-07',
         nature:'治安案件',
         desc:'已处理',
        }, {
          network: '开阳县政法委',
          school: '开阳县小学',
          id:'AS000002',
          name:'路口闯红绿灯',
          time:'2018-04-07',
          nature:'治安案件',
          desc:'路口闯红绿灯',
        }, {
          network: '久安乡政法委',
          school: '久安乡小学',
          id:'AS000002',
          name:'持刀抢劫',
          time:'2018-04-07',
          nature:'治安案件',
          desc:'已处理',
        }, {
          network: '大石乡政法委',
          school: '大石乡小学',
          id:'AS000002',
          name:'持刀抢劫',
          time:'2018-04-07',
          nature:'治安案件',
          desc:'已处理',
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
