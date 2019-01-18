<template>
  <div>
    <!-- <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="province" label="省份" width="120"></el-table-column>
      <el-table-column prop="city" label="市区" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" width="300"></el-table-column>
      <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table> -->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column  fixed prop="name" label="姓名" width="150"></el-table-column>
      <el-table-column prop="id" label="车牌号" width="140"></el-table-column>
      <el-table-column prop="info" label="车辆信息"  ></el-table-column>
      <el-table-column prop="phone" label="联系电话" ></el-table-column>
      <el-table-column prop="action" label="操作"></el-table-column>
    </el-table>
    <el-row style>
      <div class="fenye">
        <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "张源升",
          id: "豫AQ12767",
          info: "比亚迪F4-黑白",
          phone: "215-593-5846",
          action: "查看"
        },
        {
          name: "张源升",
          id: "豫AQ12767",
          info: "比亚迪F4-黑白",
          phone: "215-593-5846",
          action: "查看"
        },
        {
          name: "张源升",
          id: "豫AQ12767",
          info: "比亚迪F4-黑白",
          phone: "215-593-5846",
          action: "查看"
        },
        {
          name: "张源升",
          id: "豫AQ12767",
          info: "比亚迪F4-黑白",
          phone: "215-593-5846",
          action: "查看"
        },
        {
          name: "张源升",
          id: "豫AQ12767",
          info: "比亚迪F4-黑白",
          phone: "215-593-5846",
          action: "查看"
        },
        {
          name: "张源升",
          id: "豫AQ12767",
          info: "比亚迪F4-黑白",
          phone: "215-593-5846",
          action: "查看"
        },
        {
          name: "张源升",
          id: "豫AQ12767",
          info: "比亚迪F4-黑白",
          phone: "215-593-5846",
          action: "查看"
        },
        {
          name: "张源升",
          id: "豫AQ12767",
          info: "比亚迪F4-黑白",
          phone: "215-593-5846",
          action: "查看"
        }
      ]
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style>
.mainTable .el-table td,
.mainTable .el-table th {
  padding: 2px 0 !important;
}
.fenye {
    /* position:absolute;
    bottom:10px; */
    margin-top:10px
}
</style>

<style scoped>
</style>
