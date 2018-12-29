<template>
  <div>
    <el-row class="mainRight">
      <el-col :span="24" class="borderBottom">重点事件列表</el-col>
    </el-row>
    <el-row style="padding-left: 15px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="来源:">
            <el-select v-model="formInline.from" placeholder="请选择">
              <el-option label="开发区" value="开发区"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="登记时间:">
            <el-select v-model="formInline.time" placeholder="请选择">
              <el-option label="2018-9" value="2018-9"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label>
            <el-input v-model="formInline.search" value="" placeholder="万能搜索"></el-input>
          </el-form-item>
          <el-form-item class="search">
            <el-button type="primary" icon="iconfont icon-jinduchaxun" size="small">查询</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-table :data="tableData" border>
      <el-table-column fixed prop="square" sortable label="所属网格" width="220"></el-table-column>
      <el-table-column prop="id" sortable label="登记编号" width="150"></el-table-column>
      <el-table-column prop="problem" label="事件名称" width="180"></el-table-column>
      <el-table-column prop="problemFrom" label="来源" width="200"></el-table-column>
      <el-table-column prop="dengjiTime" label="登记时间" width="200"></el-table-column>
      <el-table-column prop="problemPeople" label="登记人" width="150"></el-table-column>
      <el-table-column prop="problemType" label="事件类型" width="220"></el-table-column>
      <el-table-column fixed="right" label="操作" width="350">
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
            :total="12"
          ></el-pagination>
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
        from: "",
        search:"",
        time:""
      },
      currentPage4: 1,
      tableData: [
        {
          square: "高新区-天桥办事处",
          id: "AS00002",
          problem: "土地使用权纠纷",
          problemFrom: "群众来访",
          dengjiTime: "20181117",
          problemPeople: "超级管理员",
          problemType: "土地及资产",
        },
         {
          square: "高新区-开发区",
          id: "AS00001",
          problem: "下水道井盖丢失",
          problemFrom: "电话热线",
          dengjiTime: "20181117",
          problemPeople: "超级管理员",
          problemType: "物权相关",
        }]
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
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
  },
  mounted() {}
};
</script>
<style>
.el-main .el-table th {
  text-align: center;
  padding: 5px 0;
  background: rgba(222, 222, 222, 0.3);
}
.el-main .el-table td {
  text-align: center;
}
.el-button--info {
  background-color: #fff!important;
  border: 1px solid #ff6400 !important;
  color: #ff6400 !important;
}

.el-button--success {
  background-color: #fff!important;
  border: 1px solid #409eff !important;
  color: #409eff !important;
}

.block {
  text-align: left;
  margin-top: 10px;
}

.el-pager li.active {
  background: #ff6400;
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
  background-color: #ff6400 !important;
  border-color: #ff6400 !important;
}
</style>
