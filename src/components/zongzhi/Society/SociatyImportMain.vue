<template>
  <div>
    <el-row class="mainRight">
      <el-col :span="24" class="borderBottom">重点地区</el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
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
    <el-table :data="tableData" border   style="width:96%;margin:0 auto"
    >
      <el-table-column
        type="selection">
      </el-table-column>
      <el-table-column fixed prop="square"  label="所属网格"    show-overflow-tooltip min-width="12%"></el-table-column>
      <el-table-column prop="id" label="编号"  min-width="10%"></el-table-column>
      <el-table-column prop="problem" label="治安突出问题"   show-overflow-tooltip min-width="12%"></el-table-column>
      <el-table-column prop="areaType" label="涉及区域类型"  min-width="12%"></el-table-column>
      <el-table-column prop="cuanTou" label="整治窜头单位"  min-width="12%"></el-table-column>
      <el-table-column prop="join" label="整治参与单位"  min-width="12%"></el-table-column>
      <el-table-column prop="time" label="整改时限"  min-width="16%"></el-table-column>
      <el-table-column prop="status" label="状态"  min-width="14%"></el-table-column>
      <el-table-column fixed="right" label="操作"  min-width="40%">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)"size="small" >详情</el-button>
          <el-button @click="handleClick(scope.row)" size="small">编辑</el-button>
          <el-button @click="deleteRow(scope.$index,tableData)"size="small">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="background: #fff;padding-bottom:40px;margin-top:150px;">
      <el-col :span="24">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[5,10]"
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
      search:require('../../images/search.png'),
      add:require('../../images/add.png'),
      formInline: {
        areaType: ""
      },
      currentPage4: 1,
      tableData: [
        {
          square: "九庄镇政法委",
          id: "2",
          problem: "抢劫抢夺",
          areaType: "学校周边",
          cuanTou: "保安大队",
          join: "保安大队",
          time: "20181113",
          status: "待处理"
        },
        {
          square: "开阳县政法委",
          id: "3",
          problem: "其他",
          areaType: "交通场站",
          cuanTou: "保安大队",
          join: "保安大队",
          time: "20181112",
          status: "待处理"
        },
        {
          square: "久安乡政法委",
          id: "4",
          problem: "电信诈骗",
          areaType: "集贸市场",
          cuanTou: "安保大队",
          join: "安保大队",
          time: "20181120",
          status: "待处理"
        },
        {
          square: "大石乡政法委",
          id: "5",
          problem: "交通秩序混乱",
          areaType: "重点线路",
          cuanTou: "安保大队",
          join: "安保大队",
          time: "20181120",
          status: "待处理"
        },
        {
          square: "开阳县政法委",
          id: "6",
          problem: "偷盗机动车",
          areaType: "学校周边",
          cuanTou: "安保大队",
          join: "安保大队",
          time: "20181119",
          status: "待处理"
        },
        {
          square: "大石乡政法委",
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
    },
    //删除所选中的一行
    deleteRow(index,rows){
      rows.splice(index,1)
    },
  },
  mounted() {}
};
</script>

<style scoped>
  .cell .el-button:first-child{
    background: none;
    border:1px solid #999
  }
  .cell .el-button:nth-child(2){
    background: none;
    border:1px solid #ff813d;
    color:#ff813d
  }
  .cell .el-button:nth-child(3){
    background: none;
    border:1px solid #008aff;
    color:#008aff;
  }
</style>
