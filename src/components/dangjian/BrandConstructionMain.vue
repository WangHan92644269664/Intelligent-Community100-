<template>
  <div>
    <el-row class="mainRight" >
      <el-col :span="24" class="borderBottom">{{rightTitle}}</el-col>
    </el-row>
    <el-row style="padding-left: 15px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="品牌党建列表:">
            <el-input v-model="formInline.list" placeholder="请输入"></el-input>
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
        width="250">
      </el-table-column>
      <el-table-column
        prop="name"
        sortable
        label="工作组织名称"
        width="350">
      </el-table-column>
      <el-table-column
        prop="people"
        sortable
        label="工作成员"
        width="350">
      </el-table-column>
      <el-table-column
        prop="village"
        label="工作村"
        sortable
        width="400">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="300">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" plain size="small">详情</el-button>
          <el-button type="success" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="background: #fff;">
      <el-col :span="24">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[1,2,3,4,5,6,7,8,9,10]"
            :page-size="10"
            layout="prev, pager,next, jumper, total, sizes"
            :total="10">
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
            name: '开发区一号工作组',
            people:'百元徐 张书轩 方文轩',
            village:'开发区一号党支部',
          }, {
            name: '开发区一号工作组',
            people:'百元徐 张书轩',
            village:'开发区一号党支部',
          }, {
            name: '开发区一号工作组',
            people:'百元徐 张书轩',
            village:'开发区一号党支部',
          }, {
            name: '开发区一号工作组',
            people:'百元徐 张书轩 方文轩',
            village:'开发区一号党支部',
          },
          {
            name: '开发区一号工作组',
            people:'百元徐 张书轩',
            village:'开发区一号党支部',
          },
          {
            name: '开发区一号工作组',
            people:'百元徐',
            village:'开发区一号党支部',
          },
          {
            name: '开发区一号工作组',
            people:'张书轩 ',
            village:'开发区一号党支部',
          },
          {
            name: '开发区一号工作组',
            people:'方文轩',
            village:'开发区一号党支部',
          },
        ],
        formInline: {
          list:''
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
        return index+5
      }
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
