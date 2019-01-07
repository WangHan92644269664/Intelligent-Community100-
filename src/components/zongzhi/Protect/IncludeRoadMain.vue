<template>
  <div>
    <el-row class="mainRight">
      <el-col :span="24" class="borderBottom">
        涉及线路案(事)件列表
      </el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="发生起止日期:">
            <el-input v-model="formInline.date" placeholder="请输入"></el-input>
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
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        fixed
        prop="id"
        label="所属网格"
        width="200">
      </el-table-column>
      <el-table-column
        fixed
        prop="id"
        label="所属线路"
        width="250">
      </el-table-column>
      <el-table-column
        fixed
        prop="id2"
        label="编号"
        width="150">
      </el-table-column>
      <el-table-column
        prop="id3"
        label="案件编号"
        width="200">
      </el-table-column>
      <el-table-column
        prop="name"
        label="案件名称"
        width="150">
      </el-table-column>
      <el-table-column
        prop="date"
        label="发生日期"
        width="200">
      </el-table-column>
      <el-table-column
        prop="nature"
        label="案件性质"
        width="150">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        sortable
        width="350">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)"size="small" >详情</el-button>
          <el-button @click="handleClick(scope.row)" size="small">编辑</el-button>
          <el-button @click="handleClick(scope.row)"size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="background: #fff;padding-bottom:40px;margin-top:40px;">
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
            :total="8">
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
         date:''
        },
        currentPage4: 1,
        tableData: [{
          id: '开发区',
          id2:'2',
          id3:'sj001',
          name: '三辆车追尾',
          date:'2018-04-25',
          nature:'其他',
        }, {
          id: '高新区',
          id2:'4',
          id3:'sj001',
          name: '三辆车追尾',
          date:'2018-04-25',
          nature:'其他',
        }, {
          id: '花园路3号网格',
          id2:'6',
          id3:'sj001',
          name: '三辆车追尾',
          date:'2018-04-25',
          nature:'其他',
        }, {
          id: '花园路5号网格',
          id2:'8',
          id3:'sj001',
          name: '三辆车追尾',
          date:'2018-04-25',
          nature:'其他',
        },
          {
            id: '平西4号网格',
            id2:'1',
            id3:'sj001',
            name: '三辆车追尾',
            date:'2018-04-25',
            nature:'其他',
          },
          {
            id: '开发区一号网格',
            id2:'3',
            id3:'sj001',
            name: '三辆车追尾',
            date:'2018-04-25',
            nature:'其他',
          },
          {
            id: '中海4号网格',
            id2:'5',
            id3:'sj001',
            name: '三辆车追尾',
            date:'2018-04-25',
            nature:'其他',
          },
          {
            id: '花园路4号网格',
            id2:'7',
            id3:'sj001',
            name: '三辆车追尾',
            date:'2018-04-25',
            nature:'其他',
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
