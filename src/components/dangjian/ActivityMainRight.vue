<template>
  <div class="mainRight" style="margin-left: 220px">
    <el-row class="borderBottom" style="height: 40px;">
      <el-col :span="24">{{rightTitle}}</el-col>
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
        :index="indexMethod"
        width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        label="支部名称"
        width="300">
      </el-table-column>
      <el-table-column
        prop="big"
        label="支部大会"
        width="150">
      </el-table-column>
      <el-table-column
        prop="meeting"
        label="支委会议"
        width="200">
      </el-table-column>
      <el-table-column
        prop="group"
        label="党小组会"
        width="200">
      </el-table-column>
      <el-table-column
        prop="class"
        label="党课"
        width="200">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="300">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" plain size="small">详情</el-button>
          <el-button @click="handleClick(scope.row)" type="info" size="small">添加会议</el-button>
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
            :total="29">
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
            name: '天桥区三号党支部',
            big: '0/0',
            meeting: '0/0',
            group: '0/0',
            class: '0/0',
          }, {
            name: '舜泰街道工委',
            big: '0/0',
            meeting: '0/0',
            group: '0/0',
            class: '0/0',
          }, {
            name: '天桥区街道工委',
            big: '0/1',
            meeting: '0/0',
            group: '0/0',
            class: '0/1',
          }, {
            name: '开发区六号党支部',
            big: '0/0',
            meeting: '0/0',
            group: '0/0',
            class: '0/0',
          },
          {
            name: '开发区五号党支部',
            big: '0/0',
            meeting: '0/0',
            group: '0/0',
            class: '0/0',
          },
          {
            name: '开发区四号党支部',
            big: '0/0',
            meeting: '0/0',
            group: '0/0',
            class: '0/1',
          },
          {
            name: '开发区三号党支部',
            big: '0/0',
            meeting: '0/0',
            group: '0/0',
            class: '0/0',
          },
          {
            name: '开发区二号党支部',
            big: '0/0',
            meeting: '0/0',
            group: '0/0',
            class: '0/1',
          },
          {
            name: '开发区一号党支部',
            big: '0/0',
            meeting: '0/0',
            group: '0/0',
            class: '0/0',
          },
        ],
        formInline: {
          title: '',
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
