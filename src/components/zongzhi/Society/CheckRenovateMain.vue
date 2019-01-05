<template>
  <div>
    <el-row class="mainRight">
      <el-col :span="24" class="borderBottom">重点地区</el-col>
    </el-row>
    <el-row style="padding-left: 15px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="涉及区域类型:">
            <el-select v-model="formInline.areaType" placeholder="请选择">
              <el-option label="开发区" value="开发区"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="search">
            <el-button type="primary" icon="iconfont icon-jinduchaxun" size="small">查询</el-button>
            <el-button type="primary" icon="iconfont icon-tianjia" size="small">添加</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-table :data="tableData" border>
      <el-table-column fixed prop="square" sortable label="所属网格" width="120"></el-table-column>
      <el-table-column prop="id" sortable label="编号" width="120"></el-table-column>
      <el-table-column prop="problem" label="治安突出问题" width="150"></el-table-column>
      <el-table-column prop="areaType" label="涉及区域类型" width="200"></el-table-column>
      <el-table-column prop="cuanTou" label="整治窜头单位" width="200"></el-table-column>
      <el-table-column prop="join" label="整治参与单位" width="150"></el-table-column>
      <el-table-column prop="time" label="整改时限" width="120"></el-table-column>
      <el-table-column prop="status" label="状态" width="200"></el-table-column>
      <el-table-column fixed="right" label="操作" width="350">
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
        areaType: ""
      },
      currentPage4: 1,
      tableData: [
        {
          square: "开发区",
          id: "2",
          problem: "抢劫抢夺",
          areaType: "学校周边",
          cuanTou: "保安大队",
          join: "保安大队",
          time: "20181113",
          status: "待处理"
        },
        {
          square: "天桥办事区",
          id: "3",
          problem: "其他",
          areaType: "交通场站",
          cuanTou: "保安大队",
          join: "保安大队",
          time: "20181112",
          status: "待处理"
        },
        {
          square: "舜泰办事区",
          id: "4",
          problem: "电信诈骗",
          areaType: "集贸市场",
          cuanTou: "安保大队",
          join: "安保大队",
          time: "20181120",
          status: "待处理"
        },
        {
          square: "花园路社区",
          id: "5",
          problem: "交通秩序混乱",
          areaType: "重点线路",
          cuanTou: "安保大队",
          join: "安保大队",
          time: "20181120",
          status: "待处理"
        },
        {
          square: "港西办事处",
          id: "6",
          problem: "偷盗机动车",
          areaType: "学校周边",
          cuanTou: "安保大队",
          join: "安保大队",
          time: "20181119",
          status: "待处理"
        },
        {
          square: "平西2号网格",
          id: "1",
          problem: "入室盗窃",
          areaType: "交通场站",
          cuanTou: "安保大队",
          join: "历下区政府",
          time: "20180920",
          status: "已处理"
        }
      ]
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
