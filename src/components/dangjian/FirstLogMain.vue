<template>
  <el-col :span="24" class="mainRight">
    <el-row class="borderBottom">
      <el-col :span="24">{{rightTitle}}</el-col>
    </el-row>
    <el-row style="padding-left: 15px;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="标题:">
            <el-input v-model="formInline.name"></el-input>
          </el-form-item>
          <el-form-item label="更改时间:">
            <el-input v-model="formInline.time" ></el-input>
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
      height="500px"
    >
      <el-table-column
        fixed
        type="index"
        label="编号"
        sortable
        :index="indexMethod"
        width="200">
      </el-table-column>
      <el-table-column
        prop="name"
        label="标题"
        width="200">
      </el-table-column>
      <el-table-column
        prop="time"
        label="更改时间"
        sortable
        width="260">
      </el-table-column>
      <el-table-column
        prop="people"
        label="操作人"
        sortable
        width="300">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        sortable
        width="200">
      </el-table-column>
      <el-table-column
        prop="class"
        label="党课"
        width="120">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="250">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" plain size="small">编辑</el-button>
          <el-button @click="handleClick(scope.row)" type="info" size="small">停用</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row>
      <el-col :span="24">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[1,2,3,4,5,6,7,8,9,10]"
            :page-size="10"
            layout="prev, pager,next, jumper, total, sizes"
            :total="7">
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </el-col>
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
            name: '两学一做',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'可用',
            class: '0/0',
            zip: 200333
          }, {
            name: '两学一做',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'可用',
            class: '0/0',
            zip: 200333
          }, {
            name: '三严三实',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'可用',
            class: '0/0',
            zip: 200333
          }, {
            name: '三会一课',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'可用',
            class: '0/0',
            zip: 200333
          },
          {
            name: '法治建设',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'可用',
            class: '0/0',
            zip: 200333
          },
          {
            name: '规章制度',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'可用',
            class: '0/0',
            zip: 200333
          },
          {
            name: '公共服务',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'可用',
            class: '0/0',
            zip: 200333
          },
          {
            name: '就业创业',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'可用',
            class: '0/0',
            zip: 200333
          },
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
<style>
  .el-main .el-table td {
    text-align: center !important;
  }

  .el-main .el-table th {
    text-align: center;
    background: rgba(222, 222, 222, .3);
  }

  .el-button--info {
    background-color: #fff!important;
    border: 1px solid #FF6400 !important;
    color: #FF6400 !important;
  }

  .el-button--success {
    background-color: #fff!important;
    border: 1px solid #409EFF !important;
    color: #409EFF !important;
  }

  .block {
    text-align: left;
    margin-top: 10px;
  }

  .el-pager li.active {
    background: #FF6400;
    color: #fff;
    border-radius: 4px;
  }

  .el-pagination__total {
    margin-left: 10px;
  }

  .hideWord {

  }

</style>
<style scoped>
  /*主体内容*/
  .el-header[data-v-69eb3339] {
    background-color: #fff !important;
    height: 40px !important;
    color: #aaa;
  }

  .el-main .el-table td {
    padding: 0 !important;
    text-align: center !important;
  }

  .el-main .borderBottom {
    border-bottom: 1px solid #eee;
    text-align: left;
    padding-left: 15px;
    padding-bottom: 15px;
    font-size: 14px;
    color: #777;
    font-weight: bolder;
    letter-spacing: 0.1em;
    margin-bottom: 15px;
  }

  .el-main .mainRight {
    background: #fff;
    padding: 15px 0 !important;
  }

  .el-main .search .el-button--primary {
    background-color: #FF6400 !important;
    border-color: #FF6400 !important;
  }

  .el-main .info {
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    padding: 0 15px;
    height: 40px;
    line-height: 40px;
    color: #ababab;
  }

  .el-main .el-button {
    border-radius: 2px;
  }
</style>
