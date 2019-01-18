<template>
  <div class="content">
    <CommonTitle :title="title"/>
    <div class="main">
    
      <el-col class="img-tab common-height" :span="16">
        <ImgTab></ImgTab>
      </el-col>
      <el-col class="common-height" :span="8">
        <div class="chart-common">
          <GISBarChart
            :barCTitle="barCTitleR1"
            :barCseries="barCseriesR1"
            :gisBXdata="gisBXdataR1"
            :gisBlenged="gisBlengedR1"
            :barTitleColor="barTitleColorR1"
          />
        </div>
        <div class="chart-common">
          <GISBarChart
            :barCTitle="barCTitleR2"
            :barCseries="barCseriesR2"
            :gisBXdata="gisBXdataR2"
            :gisBlenged="gisBlengedR2"
            :barTitleColor="barTitleColorR2"
          />
        </div>
        <div class="chart-common">
         <LineArea/>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import CommonTitle from "../../../components/GIS/GIS/GISCommonTitle";
import GISBarChart from "../../../components/GIS/GIS/GISBarChart";
import ImgTab from "../../../components/GIS/GIS/ImgTabCommunity";
import LineArea from "../../../components/GIS/GIS/GISLineArea"
export default {
  data() {
    return {
      title:'社区主干道实时监控',
      barCTitleR1: "上周车辆异常停放次数",
      barCseriesR1: [
        {
          name: "本周",
          type: "bar",
          data: [10, 25, 19, 20, 19, 13, 40],
          itemStyle: {
            normal: {
              color: "#0071f3"
            }
          }
        }
      ],
      gisBXdataR1: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      gisBlengedR1: [""],
      barTitleColorR1: "#0071f3",
      barCTitleR2: "社区卫生情况数据",
      barCseriesR2: [
        {
          name: "本周",
          type: "line",
          data: [10, 25, 19, 20, 19, 13, 40],
          itemStyle: {
            normal: {
              color: "#fba500"
            }
          }
        }
      ],
      gisBXdataR2: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      gisBlengedR2: [""],
      barTitleColorR2: "#fba500",
   
    };
  },
  components: {
    CommonTitle,
    GISBarChart,
    ImgTab,
    LineArea
  }
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
</style>
