<template>
  <div>
    <el-row class="mainRight">
      <el-col :span="24" class="borderBottom">
        学校列表
      </el-col>
    </el-row>
    <el-row style="padding-left: 15px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="学校名称:">
            <el-input v-model="formInline.name" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="学校类型:">
            <el-select v-model="formInline.kind" placeholder="请选择">
              <el-option label="幼儿园" value="幼儿园"></el-option>
              <el-option label="小学" value="小学"></el-option>
              <el-option label="普通高中" value="普通高中"></el-option>
              <el-option label="普通高等学校" value="普通高等学校"></el-option>
            </el-select>
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
      height="500px"
    >
      <el-table-column
        fixed
        prop="id"
        sortable
        label="所属网格"
        width="200">
      </el-table-column>
      <el-table-column
        prop="name"
        sortable
        label="学校名称"
        width="200">
      </el-table-column>
      <el-table-column
        prop="kind"
        label="学校类型"
        width="150">
      </el-table-column>
      <el-table-column
        prop="address"
        label="学校地址"
        width="200">
      </el-table-column>
      <el-table-column
        prop="num"
        label="在校人数"
        width="150">
      </el-table-column>
      <el-table-column
        prop="headName"
        label="校长姓名"
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
            :total="5">
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
          kind: '',
          name: '',
        },
        currentPage4: 1,
        tableData: [{
          id: '舜泰办事处',
          name: '顺泰幼儿园',
          kind: '幼儿园',
          address: '顺泰幼儿园',
          num: '234',
          headName: '王天',
          secName: '赵斌',
          zip: 200333
        }, {
          id: '高新区',
          name: '田镇小学',
          kind: '小学',
          address: '田镇街道',
          num: '400',
          headName: '王白石',
          secName: '王东',
          zip: 200333
        }, {
          id: '开发区',
          name: '开发区小学',
          kind: '小学',
          address: '开发区小学',
          num: '234',
          headName: '王天',
          secName: '赵斌',
          zip: 200333
        }, {
          id: '天桥办事处',
          name: '天桥区中学',
          kind: '普通高中',
          address: '天桥区中学',
          num: '234',
          headName: '王天',
          secName: '赵斌',
          zip: 200333
        },
          {
            id: '中平路社区',
            name: '平西大学',
            kind: '普通高等学校',
            address: '平西大学',
            num: '234',
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
