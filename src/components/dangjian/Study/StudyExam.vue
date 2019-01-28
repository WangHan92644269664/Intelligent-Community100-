<template>
  <div class="mainRight">
    <el-row class="borderBottom">
      <el-col :span="24">{{rightTitle}}</el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="试卷标题:">
            <el-input v-model="formInline.name" ></el-input>
          </el-form-item>
          <el-form-item label="考试时间:">
            <el-input v-model="formInline.time" ></el-input>
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
        label="编号"
        min-width="8%">
      </el-table-column>
      <el-table-column
        prop="name"
        label="考试标题"
        min-width="14%">
      </el-table-column>
      <el-table-column
        prop="img"
        label="缩略图"
        min-width="13%">
      </el-table-column>
      <el-table-column
        prop="right"
        label="正确答案"
        min-width="12%">
      </el-table-column>
      <el-table-column
        prop="date"
        label="考试时间"
        min-width="20%">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        min-width="16%"
        column-key="status"
        :filters="[{text:'已结束',value:'已结束'},{text:'未开始',value:'未开始'},{text:'考试中',value:'考试中'}]"
      >
        <template slot-scope="scope">
            <span :class="{red:scope.row.status==='已结束',blue:scope.row.status==='未开始'}">
              {{scope.row.status}}
            </span>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        min-width="25%">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" size="small">编辑</el-button>
          <el-button @click="handleClick(scope.row)"size="small">停用</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="background: #fff;padding-bottom:40px;margin-top: 300px;">
      <el-col :span="24">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[5,10]"
            :page-size="10"
            layout="prev, pager,next, jumper, total, sizes"
            :total="6">
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    props:{
      rightTitle:String
    },
    data() {
      return {
        search:require('../../images/search.png'),
        add:require('../../images/add.png'),
        currentPage4: 1,
        tableData: [
          {
            id: '35',
            name: '党政知识考试',
            img:'无',
            right:'A',
            date:'2019-01-04',
            status:'已结束'
          },
          {
            id: '36',
            name: '党政知识考试',
            img:'无',
            right:'B',
            date:'2019-01-04',
            status:'未开始'
          },
          {
            id: '37',
            name: '党政知识考试',
            img:'无',
            right:'C、D',
            date:'2019-01-04',
            status:'考试中'
          },
          {
            id: '38',
            name: '党政知识考试',
            img:'无',
            right:'D',
            date:'2019-01-04',
            status:'考试中'
          },
        ],
        formInline: {
          name: '',
          time:''
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
      }
    }
  }
</script>
<style scoped>
  .red{
    color:red
  }
  .blue{
    color:#008aff;
  }
  .cell .el-button:first-child{
    background: none;
    border:1px solid #ff813d;
    color:#ff813d
  }
  .cell .el-button:nth-child(2){
    background: none;
    border:1px solid #008aff;
    color:#008aff;
  }
</style>
