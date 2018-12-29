<template>
  <div>
    <el-row class="mainRight">
      <el-col :span="24" class="borderBottom">
        老人信息列表
      </el-col>
    </el-row>
    <el-row style="padding-left: 15px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="性别:">
            <el-select v-model="formInline.people" placeholder="请选择">
              <el-option label="男" value="male"></el-option>
              <el-option label="女" value="female"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="出生年月:">
            <el-input v-model="formInline.date"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="formInline.info" placeholder="民族/身份证号/婚姻状态/学历" disabled></el-input>
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
        prop="name"
        label="姓名"
        width="200">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width="120">
      </el-table-column>
      <el-table-column
        prop="date"
        label="出生日期"
        width="250">
      </el-table-column>
      <el-table-column
        prop="nation"
        label="民族"
        width="200">
      </el-table-column>
      <el-table-column
        prop="id"
        label="身份证"
        width="200">
      </el-table-column>
      <el-table-column
        prop="photo"
        label="电话"
        width="180">
      </el-table-column>
      <el-table-column
        prop="education"
        label="学历"
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
        width="200">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" plain size="small">详情</el-button>
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
            :total="11">
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
          date: '',
          info:''
        },
        currentPage4: 1,
        tableData: [
          {
            name: '黄并肩',
            sex: '男',
            date: '2018-11-17 11:34:16',
            nation: '汉族',
            id:'*******10000',
            photo: '15455545555',
            education:'本科',
            title: '护路护线功能模块开发',
          },{
            name: '黄并肩',
            sex: '男',
            date: '2018-11-17 11:34:16',
            nation: '汉族',
            id:'*******10000',
            photo: '15455545555',
            education:'本科',
            title: '护路护线功能模块开发',
          }, {
            name: '黄并肩',
            sex: '男',
            date: '2018-11-17 11:34:16',
            nation: '汉族',
            id:'*******10000',
            photo: '15455545555',
            education:'',
            title: '护路护线功能模块开发',
          }, {
            name: '黄并肩',
            sex: '男',
            date: '2018-11-17 11:34:16',
            nation: '汉族',
            id:'*******10000',
            photo: '15455545555',
            education:'',
            title: '护路护线功能模块开发',
          },
          {
            name: '黄并肩',
            sex: '男',
            date: '2018-11-17 11:34:16',
            nation: '汉族',
            id:'*******10000',
            photo: '15455545555',
            education:'',
            title: '护路护线功能模块开发',
          },
          {
            name: '黄并肩',
            sex: '男',
            date: '2018-11-17 11:34:16',
            nation: '汉族',
            id:'*******10000',
            photo: '15455545555',
            education:'',
            title: '护路护线功能模块开发',
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
