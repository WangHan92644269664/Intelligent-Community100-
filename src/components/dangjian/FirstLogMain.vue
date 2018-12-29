<template>
  <el-col :span="24" class="mainRight">
    <el-row class="borderBottom">
      <el-col :span="24">{{rightTitle}}</el-col>
    </el-row>
    <el-row style="padding-left: 15px;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="总结类型:">
            <el-select v-model="formInline.kind" placeholder="请选择">
              <el-option label="日报" value="day"></el-option>
              <el-option label="周报" value="week"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="提交日期:">
            <el-input v-model="formInline.date"   placeholder="请输入时间段"></el-input>
          </el-form-item>
          <el-form-item label="审核状态:">
            <el-select v-model="formInline.status" placeholder="请选择">
              <el-option label="未审核" value="undo"></el-option>
              <el-option label="已审核" value="doing"></el-option>
            </el-select>
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
      stripe
      height="500px"
    >
      <el-table-column
        fixed
        type="index"
        label="编号"
        sortable
        :index="indexMethod"
        width="190">
      </el-table-column>
      <el-table-column
        prop="name"
        label="标题"
        width="300">
      </el-table-column>
      <el-table-column
        prop="kind"
        label="总结类型"
        width="200">
      </el-table-column>
      <el-table-column
        prop="people"
        label="提交人"
        width="200">
      </el-table-column>
      <el-table-column
        prop="time"
        label="提交时间"
        width="240">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
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
        width="300">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" plain size="small">详情</el-button>
          <el-button @click="handleClick(scope.row)" type="info" size="small">编辑</el-button>
          <el-button type="success" size="small">删除</el-button>
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
            name: '曾让习近平驻足观看的三件展品',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'未审核',
            kind:'日报',
            zip: 200333
          }, {
            name: '曾让习近平驻足观看的三件展品',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'未审核',
            kind:'日报',
            zip: 200333
          }, {
            name: '曾让习近平驻足观看的三件展品',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'未审核',
            kind:'日报',
            zip: 200333
          }, {
            name: '曾让习近平驻足观看的三件展品',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'未审核',
            kind:'日报',
            zip: 200333
          },
          {
            name: '曾让习近平驻足观看的三件展品',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'未审核',
            kind:'日报',
            zip: 200333
          },
          {
            name: '曾让习近平驻足观看的三件展品',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'未审核',
            kind:'日报',
            zip: 200333
          },
          {
            name: '曾让习近平驻足观看的三件展品',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'未审核',
            kind:'日报',
            zip: 200333
          },
          {name: '曾让习近平驻足观看的三件展品',
            people:'超级管理员',
            time:'2018-11-17 14:02:43',
            status:'未审核',
            kind:'日报',
            zip: 200333
          },
        ],
        formInline: {
         kind:'',
          date:'',
          status:''
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
        return index+24
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
  @media (min-width: 1500px) and (max-width: 1920px) {
    /*.el-header{*/
      /*width:100%;*/
    /*}*/
    /*.el-main{*/
      /*width:80%;*/
    /*}*/
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
  .el-pagination{
    padding: 0!important;
  }

</style>
