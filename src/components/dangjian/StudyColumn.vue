<template>
  <div>
    <el-row class="mainRight">
      <el-col :span="24" class="borderBottom">{{rightTitle}}</el-col>
    </el-row>
    <el-row style="padding-left: 15px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="栏目名称:">
            <el-input v-model="formInline.name"></el-input>
          </el-form-item>
          <el-form-item class="search">
            <el-button type="primary" icon="iconfont icon-jinduchaxun">查询</el-button>
            <el-button type="primary"><i class="iconfont icon-tianjia"></i>添加</el-button>
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
        label="栏目名称"
        sortable
        min-width="14%">
      </el-table-column>
      <el-table-column
        prop="header"
        label="所属上级"
        min-width="10%">
      </el-table-column>
      <el-table-column
        prop="people"
        label="操作人"
        sortable
        min-width="13%">
      </el-table-column>
      <el-table-column
        prop="time"
        label="操作时间"
        sortable
        min-width="19%">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        min-width="12%">
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
    <el-row style="background: #fff;padding-bottom:40px;margin-top: 400px;">
      <el-col :span="24">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[5,10]"
            :page-size="10"
            layout="prev, pager,next, jumper, total, sizes"
            :total="2">
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
        currentPage4: 1,
        tableData: [
          {
            name: '|—文章材料',
            header:'无',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'可用',
            zip: 200333
          },  {
            name: '|—视频类型',
            header:'无',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'可用',
            zip: 200333
          }
        ],
        formInline: {
          name: '',
          time: '',
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
        return index+1
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
