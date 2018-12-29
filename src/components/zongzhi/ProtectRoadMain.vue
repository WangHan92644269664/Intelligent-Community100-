<template>
  <div>
    <el-row class="mainRight">
      <el-col :span="24" class="borderBottom">
        护路护线列表
      </el-col>
    </el-row>
    <el-row style="padding-left: 15px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="名称:">
            <el-input v-model="formInline.name" ></el-input>
          </el-form-item>
          <el-form-item label="隶属单位名称:">
            <el-input v-model="formInline.dept" ></el-input>
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
        label="所属网格"
        width="200">
      </el-table-column>
      <el-table-column
        fixed
        prop="id2"
        label="编号"
        width="200">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        width="200">
      </el-table-column>
      <el-table-column
        prop="deptName"
        label="隶属单位名称"
        width="150">
      </el-table-column>
      <el-table-column
        prop="address"
        label="隶属单位详址"
        width="200">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="隶属单位联系方式"
        width="150">
      </el-table-column>
      <el-table-column
        prop="headName"
        label="隶属单位负责人姓名"
        width="200">
      </el-table-column>
      <el-table-column
        prop="secName"
        label="安保负责人姓名"
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
        sortable
        width="350">
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
            :page-size="10"
            :page-count="2"
            layout="prev, pager,next, jumper, total, sizes"
            :total="8">
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
          dept: '',
          name: '',
        },
        currentPage4: 1,
        tableData: [{
          id: '开发区',
          id2:'2',
          name: '武夷山路',
          deptName:'济南市交通监管局',
          address: '山东省济南市市区',
          phone:'0512-52244654',
          headName: '王天',
          secName: '赵斌',
          zip: 200333
        }, {
          id: '高新区',
          id2:'4',
          name: '黑龙江路',
          deptName:'济南市交通监管局',
          address: '山东省济南市市区',
          phone:'0512-52244654',
          headName: '王天',
          secName: '赵斌',
          zip: 200333
        }, {
          id: '花园路3号网格',
          id2:'6',
          name: '平西路',
          deptName:'济南市交通监管局',
          address: '山东省济南市市区',
          phone:'0512-52244654',
          headName: '王天',
          secName: '赵斌',
          zip: 200333
        }, {
          id: '花园路5号网格',
          id2:'8',
          name: '舜华东路',
          deptName:'济南市交通监管局',
          address: '山东省济南市市区',
          phone:'0512-52244654',
          headName: '王天',
          secName: '赵斌',
          zip: 200333
        },
          {
            id: '平西4号网格',
            id2:'1',
            name: '舜华路',
            deptName:'济南市交通监管局',
            address: '山东省济南市市区',
            phone:'0512-52244654',
            headName: '王天',
            secName: '赵斌',
            zip: 200333
          },
          {
            id: '开发区一号网格',
            id2:'3',
            name: '天津路',
            deptName:'济南市交通监管局',
            address: '山东省济南市市区',
            phone:'0512-52244654',
            headName: '王天',
            secName: '赵斌',
            zip: 200333
          },
          {
            id: '中海4号网格',
            id2:'5',
            name: '市话路',
            deptName:'济南市交通监管局',
            address: '山东省济南市市区',
            phone:'0512-52244654',
            headName: '王天',
            secName: '赵斌',
            zip: 200333
          },
          {
            id: '花园路4号网格',
            id2:'7',
            name: '舜华西路',
            deptName:'济南市交通监管局',
            address: '山东省济南市市区',
            phone:'0512-52244654',
            headName: '王天',
            secName: '赵斌',
            zip: 200333
          }
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

  .el-main .el-table td {
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
