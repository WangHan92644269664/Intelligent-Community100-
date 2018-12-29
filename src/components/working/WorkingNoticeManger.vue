<template>
  <div>
    <el-row class="mainRight">
      <el-col :span="24" class="borderBottom">
        公告管理列表
      </el-col>
    </el-row>
    <el-row style="padding-left: 15px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="选择日期:">
            <el-col :span="24">
              <el-form-item prop="date">
                <el-date-picker type="date" placeholder="yyyy-MM-dd" v-model="formInline.date"
                                style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="关键字" prop="name">
            <el-input v-model="formInline.key" placeholder="标题或操作人"></el-input>
          </el-form-item>
          <el-form-item class="search">
            <el-button type="primary" icon="iconfont icon-jinduchaxun" size="small">查询</el-button>
            <el-button type="primary" size="medium" class="iconfont icon-tianjia">添加</el-button>
            <el-button type="primary" size="medium" class="iconfont">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      border
      height="380"
      style="width: 100%;"
    >
      <el-table-column
        fixed
        prop="id"
        label="编号"
        width="100">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        width="200">
      </el-table-column>
      <el-table-column
        prop="name"
        label="操作人"
        width="150">
      </el-table-column>
      <el-table-column
        prop="isPublic"
        label="是否为群众公告"
        width="150">
      </el-table-column>
      <el-table-column
        prop="time"
        label="操作时间"
        width="300">
      </el-table-column>
      <el-table-column
        prop="desc"
        label="文章描述"
        width="200">
      </el-table-column>
      <el-table-column
        prop="photo"
        label="电话"
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
    <el-row style="background: #fff;padding-bottom: 20px;">
      <el-col :span="24">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[1,2,3,4,5,6,7,8,9,10,11,12]"
            :page-size="6"
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
          date: '',
          key: '',
        },
        currentPage4: 1,
        tableData: [{
          id: '12',
          title: '公告',
          name: '超级管理员',
          isPublic: '否',
          time: '2018-11-17 11:34:16',
          desc:'护路护线功能模块开发',
          photo: '15455545555',
          zip: 200333
        }, {
          id: '11',
          title: '提前下班通知',
          name: '超级管理员',
          isPublic: '否',
          time: '2018-11-17 11:34:16',
          desc:'护路护线功能模块开发',
          photo: '15455545555',
          zip: 200333
        }, {
          id: '10',
          title: '提前下班通知',
          name: '超级管理员',
          isPublic: '是',
          time: '2018-11-17 11:34:16',
          desc:'护路护线功能模块开发',
          photo: '15455545555',
          zip: 200333
        }, {
          id: '9',
          title: '放假通知',
          name: '超级管理员',
          isPublic: '否',
          time: '2018-11-17 11:34:16',
          desc:'护路护线功能模块开发',
          photo: '15455545555',
          zip: 200333
        },
          {
            id: '8',
            title: '版本升级公告',
            name: '超级管理员',
            isPublic: '否',
            time: '2018-11-17 11:34:16',
            desc:'护路护线功能模块开发',
            photo: '15455545555',
            zip: 200333
          },
          {
            id: '7',
            title: '社区下发服务通知',
            name: '超级管理员',
            isPublic: '否',
            time: '2018-11-17 11:34:16',
            desc:'护路护线功能模块开发',
            photo: '15455545555',
            zip: 200333
          },
          {
            id: '10',
            title: '提前下班通知',
            name: '超级管理员',
            isPublic: '是',
            time: '2018-11-17 11:34:16',
            desc:'护路护线功能模块开发',
            photo: '15455545555',
            zip: 200333
          }, {
            id: '9',
            title: '放假通知',
            name: '超级管理员',
            isPublic: '否',
            time: '2018-11-17 11:34:16',
            desc:'护路护线功能模块开发',
            photo: '15455545555',
            zip: 200333
          },
          {
            id: '8',
            title: '版本升级公告',
            name: '超级管理员',
            isPublic: '否',
            time: '2018-11-17 11:34:16',
            desc:'护路护线功能模块开发',
            photo: '15455545555',
            zip: 200333
          },
          {
            id: '7',
            title: '社区下发服务通知',
            name: '超级管理员',
            isPublic: '否',
            time: '2018-11-17 11:34:16',
            desc:'护路护线功能模块开发',
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
