<template>
  <div>
    <el-row class="mainRight">
      <el-col :span="24" class="borderBottom">
        工作计划列表
      </el-col>
    </el-row>
    <el-row style="padding-left: 15px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="审核人:">
            <el-select v-model="formInline.people" placeholder="请选择">
              <el-option label="超级管理员" value="admin"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="完成程度:">

            <el-select v-model="formInline.finish" placeholder="请选择">
              <el-option label="未审核" value="未审核"></el-option>
              <el-option label="正在进行" value="正在进行"></el-option>
              <el-option label="还未开始" value="还未开始"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="时间类型:">
            <el-col :span="24">
              <el-time-picker type="fixed-time" placeholder="选择时间" v-model="formInline.date2"
                              style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="日期:">
            <el-col :span="24">
              <el-form-item prop="date">
                <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date"
                                style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="计划标题" prop="name">
            <el-input v-model="formInline.name" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item class="search">
            <el-button type="primary" icon="iconfont icon-jinduchaxun" size="small">查询</el-button>
            <el-button type="primary" size="medium" class="iconfont icon-tianjia">添加</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      border
    >
      <el-table-column
        fixed
        prop="id"
        sortable
        label="编号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="计划标题"
        width="200">
      </el-table-column>
      <el-table-column
        prop="people"
        sortable
        label="审核人"
        width="120">
      </el-table-column>
        <el-table-column
          prop="finish"
          label="完成程度"
          width="150">
        </el-table-column>
      <el-table-column
        prop="before"
        label="开始时间"
        width="200">
      </el-table-column>
      <el-table-column
        prop="end"
        label="完成时间"
        width="200">
      </el-table-column>
      <el-table-column
        prop="photo"
        label="电话"
        width="150">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编"
        width="120">
      </el-table-column>
      <el-table-column
        prop="title"
        label="计划描述"
        width="200">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="350">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" plain size="small">详情</el-button>
          <el-button @click="handleClick(scope.row)" type="info" size="small">编辑</el-button>
          <el-button type="success" size="small">删除</el-button>
          <el-button @click="handleClick(scope.row)" plain size="small">居住信息</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="background: #fff;padding-bottom: 20px;">
      <el-col :span="24">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[1,2,3,4,5,6,7,8,9,10,11,12]"
            :page-size="10"
            :page-count="2"
            layout="prev, pager,next, jumper, total, sizes"
            :total="12">
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
        formInline: {
          people: '',
          finish: '',
          time: '',
          date: '',
          title: '',
          date2: '',
          name: '',
        },
        currentPage4: 1,
        tableData: [
          {
          id: '11',
          name: '护路护线功能模块开发',
          people: '超级管理员',
          finish: '未审核',
          before: '2018-11-17 11:34:16',
          end: '2018-11-19 11:34:16',
          photo: '15455545555',
          title: '护路护线功能模块开发',
          zip: 200333
        }, {
          id: '8',
          name: '部件管理模块开发',
          people: '超级管理员',
          finish: '正在进行',
          before: '2018-11-17 11:34:16',
          end: '2018-11-24 11:34:16',
          photo: '15455545555',
          title: '护路护线功能模块开发',
          zip: 200333
        }, {
          id: '4',
          name: '户籍管理模块开发',
          people: '超级管理员',
          finish: '正在进行',
          before: '2018-11-17 11:34:16',
          end: '2018-11-24 11:34:16',
          title: '护路护线功能模块开发',
          photo: '15455545555',
          zip: 200333
        }, {
          id: '10',
          name: '校园安全功能模块开发',
          people: '超级管理员',
          finish: '正在进行',
          before: '2018-11-17 11:34:16',
          end: '2018-11-24 11:34:16',
          title: '护路护线功能模块开发',
          photo: '15455545555',
          zip: 200333
        },
          {
            id: '5',
            name: '实有人口功能模块开发',
            people: '超级管理员',
            finish: '还未开始',
            before: '2018-11-17 11:34:16',
            end: '2018-11-24 11:34:16',
            title: '护路护线功能模块开发',
            photo: '15455545555',
            zip: 200333
          },
          {
            id: '7',
            name: '社区民意模块开发',
            people: '超级管理员',
            finish: '还未开始',
            before: '2018-11-17 11:34:16',
            end: '2018-11-24 11:34:16',
            title: '护路护线功能模块开发',
            photo: '15455545555',
            zip: 200333
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
    },
    mounted() {
    }
  }
</script>
<style>
  .el-main .el-table th {
    text-align: center;
    padding: 5px 0;
    background: rgba(222, 222, 222, .3);
  }
  .el-main .el-table td{
    text-align: center;
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
</style>
<style scoped>
  .el-main .el-table td {
    padding: 0 !important;
  }

  .el-main .el-table {
    background: #fff;
    border: 1px solid #ddd;
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

  .mainRight {
    background: #fff;
  }

  .mainRight .borderBottom {
    border-bottom: 1px solid #eee;
    text-align: left;
    padding: 10px 0 10px 15px;
    font-size: 14px;
    color: #777;
    font-weight: bolder;
    letter-spacing: 0.1em;
  }

  .el-main .search .el-button--primary {
    background-color: #FF6400 !important;
    border-color: #FF6400 !important;
  }

</style>
