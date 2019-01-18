<template>
  <div class="content">
    <CommonTitle :title="title"/>
    <div class="main">
      <el-col class="img-tab common-height" :span="14">
        <ImgTab></ImgTab>
      </el-col>
      <el-col class="common-height" :span="10">
        <div class="chart-common">
          <el-col style="border-right:1px solid #ccc;" :span="12">
           <HunheCharts/>
          </el-col>
          <el-col :span="12">
           <HunheChart2/>
          </el-col>
        </div>
        <div class="table-area">
          <CarTable/>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import CommonTitle from "../../../components/GIS/GIS/GISCommonTitle";
import HunheCharts from "../../../components/GIS/GIS/HunheCharts"
import HunheChart2 from "../../../components/GIS/GIS/HunheChart2"
import CarTable from "../../../components/GIS/GIS/CarTable"
import ImgTab from "../../../components/GIS/GIS/ImgTabCar";
export default {
  data() {
    return {
      title: "社区周边街道治安",
     
    };
  },
  components: { CommonTitle,  ImgTab,HunheCharts,HunheChart2,CarTable }
};
</script>

<style scoped>
.content {
  width: 100%;
  height: 100%;
}
.main {
  height: calc(100% - 40px);
  width: 100%;
  border-top: 1px solid #0177ff;
}
.chart-common {
  height: 32%;
  background: #ffffff;
  margin-bottom: 3%;
  -moz-box-shadow: 0px 0px 15px #ccc;
  -webkit-box-shadow: 0px 0px 15px #ccc;
  box-shadow: 0px 0px 15px #ccc;
}
.common-height {
  height: 100%;
}
.chart-common div {
  height: 100%;
}
.large-view {
  height: 78%;
  padding: 20px;
}
.large-view img {
  width: 100%;
  height: 100%;
}
.small-view img {
  width: 70px;
  height: 70px;
}
.small-view {
  height: 20%;
}
.large-view-area {
  width: 100%;
  height: 100%;
  border: 6px solid #000;
}
.small-view {
  padding: 0 5px;
}
.small-view .el-col {
  height: 100%;
}
.small-view-area {
  width: 90%;
  height: 100%;
  border: 1px solid #000;
  margin: 0 auto;
}
.img-tab div {
  height: 100%;
}
.table-area{
  height: 67%;
}
.table-area div{
  height: 100%;
  overflow: auto;
}
</style>
