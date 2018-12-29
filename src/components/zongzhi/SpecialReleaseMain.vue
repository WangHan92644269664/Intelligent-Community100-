<template>
  <el-col :span="21" class="mainRight">
    <el-row class="borderBottom">
      <el-col :span="24">员工管理列表</el-col>
    </el-row>
    <el-row style="padding-left: 15px;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="姓名:">
            <el-input v-model="formInline.name"></el-input>
          </el-form-item>
          <el-form-item label="公民身份证号:">
            <el-input v-model="formInline.id"></el-input>
          </el-form-item>
          <el-form-item class="search">
            <el-button type="primary" icon="iconfont icon-jinduchaxun">查询</el-button>
            <el-button type="primary">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      border
    >
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="id"
        label="公民省份证号"
        width="200">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width="120">
      </el-table-column>
      <el-table-column
        prop="dept"
        label="所属部门"
        width="150">
      </el-table-column>
      <el-table-column
        prop="education"
        label="学历"
        width="150">
      </el-table-column>
      <el-table-column
        prop="politics"
        label="政治面貌"
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
    <el-row>
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
  </el-col>
</template>

<script>
  export default {
    data() {
      return {
        currentPage4: 1,
        tableData: [{
          name: '王晗',
          id:'55455445622521',
          sex: '女',
          dept:'综治办',
          education:'本科',
          politics:'共青团员',
          photo: '15455545555',
          zip: 200333
        }, {
          name: '成功',
          id:'55455445622521',
          sex: '男',
          dept:'度假区综治中心',
          education:'本科',
          politics:'共青团员',
          photo: '15455545555',
          zip: 200333
        }, {
          name: '超级管理员',
          id:'55455445622521',
          sex: '男',
          dept:'高新区综治中心',
          education:'本科',
          politics:'共青团员',
          photo: '15455545555',
          zip: 200333
        }
        ],
        formInline: {
          sex: '',
          time: '',
          key:''
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
<style>
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
</style>
<style scoped>
  /*主体内容*/
  .el-header[data-v-69eb3339] {
    background-color: #fff !important;
    height: 40px !important;
    color: #aaa;
  }
  .el-main .el-table td {
    padding:0 !important;
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
