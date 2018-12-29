<template>
  <el-col :span="21" class="mainRight">
    <el-row class="borderBottom">
      <el-col :span="24">人口列表</el-col>
    </el-row>
    <el-row style="padding-left: 15px;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="性别:">
            <el-select v-model="formInline.sex" placeholder="请选择">
              <el-option label="男" value="male"></el-option>
              <el-option label="女" value="female"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="出生日期:">
            <el-input v-model="formInline.time"></el-input>
          </el-form-item>
          <el-form-item label="关键字:">
            <el-input v-model="formInline.key" placeholder="姓名/身份证"></el-input>
          </el-form-item>
          <el-form-item class="search">
            <el-button type="primary" icon="iconfont icon-jinduchaxun">查询</el-button>
            <el-button type="primary"><i class="iconfont icon-tianjia"></i>添加</el-button>
            <el-button type="primary">数据导出</el-button>
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
        label="序号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="150">
      </el-table-column>
      <el-table-column
        prop="sex"
        sortable
        label="性别"
        width="120">
      </el-table-column>
      <el-table-column
        prop="time"
        label="出生日期"
        width="150">
      </el-table-column>
      <el-table-column
        prop="nation"
        label="民族"
        width="150">
      </el-table-column>
      <el-table-column
        prop="card"
        label="身份证号"
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
          id: '918',
          name: '王晗',
          sex: '男',
          time: '19951007',
          nation:'汉族',
          card:'***********4776',
          photo: '15455545555',
          zip: 200333
        }, {
          id: '924',
          name: '李萌萌',
          sex: '男',
          time: '19951207',
          nation:'汉族',
          card:'***********4476',
          photo: '15455545555',
          zip: 200333
        }, {
          id: '928',
          name: '吴鑫',
          sex: '男',
          time: '19960505',
          nation:'汉族',
          card:'***********6664',
          photo: '15455545555',
          zip: 200333
        }, {
          id: '1159',
          name: '张赢芳',
          sex: '男',
          time: '19971024',
          nation:'汉族',
          card:'***********4556',
          photo: '15455545555',
          zip: 200333
        },
          {
            id: '891',
            name: '徐樱花',
            sex: '女',
            time: '19951007',
            nation:'汉族',
            card:'***********4776',
            photo: '15455545555',
            zip: 200333
          },
          {
            id: '895',
            name: '张鑫',
            sex: '女',
            time: '19940808',
            nation:'汉族',
            card:'***********4776',
            photo: '15455545555',
            zip: 200333
          },
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
