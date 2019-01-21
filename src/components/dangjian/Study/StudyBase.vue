<template>
  <div class="mainRight">
    <el-row class="borderBottom">
      <el-col :span="24">{{rightTitle}}</el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="题目:">
            <el-input v-model="formInline.name" ></el-input>
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
        label="题目"
        min-width="25%">
      </el-table-column>
      <el-table-column
        prop="select"
        label="题目选项"
        min-width="27%">
      </el-table-column>
      <el-table-column
        prop="right"
        label="正确答案"
        min-width="10%">
      </el-table-column>
      <el-table-column
        prop="count"
        label="分值"
        min-width="10%">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        min-width="15%">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        min-width="20%">
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
            name: '中国共产党人的初心和使命',
            select:'A正确 B错误',
            right:'A',
            count:'20',
            status:'可用'
          },
          {
            id: '36',
            name: '办好中国的事情，关键在党',
            select:'A坚持公私分明，先公后私 B坚持',
            right:'B',
            count:'10',
            status:'可用'
          },
          {
            id: '36',
            name: '下列哪种情形应当追究党组织的问题',
            select:'A党内政治生活 B党的政治纪律 C党',
            right:'C、D',
            count:'10',
            status:'可用'
          },
          {
            id: '38',
            name: '党的中央和省、自治区、直辖市委员会',
            select:'A战略思维 B立场观点 C方法举措',
            right:'D',
            count:'10',
            status:'可用'
          },
        ],
        formInline: {
          name: '',
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
