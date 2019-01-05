<template>
  <div class="mainRight">
    <el-row class="borderBottom">
      <el-col :span="24">{{rightTitle}}</el-col>
    </el-row>
    <el-table
      :data="tableData"
      border
      style="width:96%;margin:30px auto 0"
    >
      <el-table-column
        type="selection"
        width="50">
      </el-table-column>
      <el-table-column
        fixed
        type="index"
        label="编号"
        :index="indexMethod"
        width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        label="支部名称"
        width="300">
      </el-table-column>
      <el-table-column
        prop="big"
        label="支部大会"
        width="150">
      </el-table-column>
      <el-table-column
        prop="meeting"
        label="支委会议"
        width="200">
      </el-table-column>
      <el-table-column
        prop="group"
        label="党小组会"
        width="200">
      </el-table-column>
      <el-table-column
        prop="class"
        label="党课"
        width="200">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="300">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)"size="small" >详情</el-button>
          <el-button @click="handleClick(scope.row)" size="small">添加会议</el-button>
          <el-button @click="handleClick(scope.row)"size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="background: #fff;padding-bottom:20px;margin-top:60px;">
      <el-col :span="24">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[1,2,3,4,5,6,7,8,9,10]"
            :page-size="10"
            layout="prev, pager,next, jumper, total, sizes"
            :total="29">
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
            name: '天桥区三号党支部',
            big: '0/0',
            meeting: '0/0',
            group: '0/0',
            class: '0/0',
          }, {
            name: '舜泰街道工委',
            big: '0/0',
            meeting: '0/0',
            group: '0/0',
            class: '0/0',
          }, {
            name: '天桥区街道工委',
            big: '0/1',
            meeting: '0/0',
            group: '0/0',
            class: '0/1',
          }, {
            name: '开发区六号党支部',
            big: '0/0',
            meeting: '0/0',
            group: '0/0',
            class: '0/0',
          },
          {
            name: '开发区五号党支部',
            big: '0/0',
            meeting: '0/0',
            group: '0/0',
            class: '0/0',
          },
          {
            name: '开发区四号党支部',
            big: '0/0',
            meeting: '0/0',
            group: '0/0',
            class: '0/1',
          },
          {
            name: '开发区三号党支部',
            big: '0/0',
            meeting: '0/0',
            group: '0/0',
            class: '0/0',
          },
          {
            name: '开发区二号党支部',
            big: '0/0',
            meeting: '0/0',
            group: '0/0',
            class: '0/1',
          },
          {
            name: '开发区一号党支部',
            big: '0/0',
            meeting: '0/0',
            group: '0/0',
            class: '0/0',
          },
        ],
        formInline: {
          title: '',
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
