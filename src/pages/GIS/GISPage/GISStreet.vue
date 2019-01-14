<template>
  <div class="content">
    <CommonTitle :title="title"/>
    <div class="main">
      <el-col class="common-height" :span="5">
        <div class="chart-common">
          <GISBarChart
            :barCTitle="barCTitleL1"
            :barCseries="barCseriesL1"
            :gisBXdata="gisBXdataL1"
            :gisBlenged="gisBlengedL1"
            :barTitleColor="barTitleColorL1"
          />
        </div>
        <div class="chart-common">
          <GISBarChart
            :barCTitle="barCTitleL2"
            :barCseries="barCseriesL2"
            :gisBXdata="gisBXdataL2"
            :gisBlenged="gisBlengedL2"
            :barTitleColor="barTitleColorL2"
          />
        </div>
        <div class="chart-common">
          <GISBarChart
            :barCTitle="barCTitleL3"
            :barCseries="barCseriesL3"
            :gisBXdata="gisBXdataL3"
            :gisBlenged="gisBlengedL3"
            :barTitleColor="barTitleColorL3"
          />
        </div>
      </el-col>
      <el-col class="img-tab common-height" :span="14">
        <ImgTab></ImgTab>
      </el-col>
      <el-col class="common-height" :span="5">
        <div class="chart-common">
          <HengxiangChart/>
        </div>
        <div class="chart-common">
          <GisPieChart
            :pieData="seriesR2"
            :pieTitle="titleR2"
            :pieColors="pieColorR2"
            :pieTitleColor="pieTitleColorR2"
          />
        </div>
        <div class="chart-common">
          <GISBarChart
            :barCTitle="barCTitleR3"
            :barCseries="barCseriesR3"
            :gisBXdata="gisBXdataR3"
            :gisBlenged="gisBlengedR3"
            :barTitleColor="barTitleColorR3"
          />
        </div>
      </el-col>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import CommonTitle from "../../../components/GIS/GIS/GISCommonTitle";
import GISAreaChart from "../../../components/GIS/GIS/GISAreaChart";
import GISBarChart from "../../../components/GIS/GIS/GISBarChart";
import GisPieChart from "../../../components/GIS/GIS/GisCircleChart";
import HengxiangChart from "../../../components/GIS/GIS/HengxiangBarChart";
import ImgTab from "../../../components/GIS/GIS/ImgTabStreet";
export default {
  data() {
    return {
      title:'社区主干道实时监控',
      barCTitleL1: "本周街道卫生情况监测数据",
      barCseriesL1: [
        {
          name: "本周",
          type: "line",
          data: [10, 25, 19, 20, 19, 13, 40],
          itemStyle: {
            normal: {
              color: "#8f6eca"
            }
          }
        }
      ],
      gisBXdataL1: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      gisBlengedL1: [""],
      barTitleColorL1: "#ec407b",
      barCTitleL2: "本周社区主要街道堵车率",
      barCseriesL2: [
        {
          name: "本周",
          type: "line",
          data: [10, 25, 19, 20, 19, 13, 40],
          itemStyle: {
            normal: {
              color: "#ec407b"
            }
          }
        }
      ],
      gisBXdataL2: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      gisBlengedL2: [""],
      barTitleColorL2: "#ec407b",
      barCTitleL3: "本周社区异常情况监测数据",
      barCseriesL3: [
        {
          name: "本周",
          type: "line",
          data: [10, 25, 19, 20, 19, 13, 40],
          itemStyle: {
            normal: {
              color: "#fec300"
            }
          }
        }
      ],
      gisBXdataL3: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      gisBlengedL3: [""],
      barTitleColorL3: "#fec300",
      barCTitleR3: "本周社区异常情况监测数据",
      barCseriesR3: [
        {
          name: "本周",
          type: "line",
          data: [10, 25, 19, 20, 19, 13, 40],
          itemStyle: {
            normal: {
              color: "#0071f3"
            }
          }
        }
      ],
      gisBXdataR3: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      gisBlengedR3: [""],
      barTitleColorR3: "#0071f3",
      seriesR2: [
        { value: 335, name: "通勤路" },
        { value: 310, name: "南街" },
        { value: 234, name: "环区主道" }
      ],
      titleR2: "本周主干道预警率",
      pieColorR2: ["#ff80ab", "#ff4181", "#ea0041"],
      pieTitleColorR2: "#fd4281"
    };
  },
  components: {
    CommonTitle,
    GISBarChart,
    ImgTab,
    GisPieChart,
    HengxiangChart
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
