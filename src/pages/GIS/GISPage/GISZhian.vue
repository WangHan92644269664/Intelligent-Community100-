<template>
  <div class="content">
    <CommonTitle :title="title"/>
    <div class="main">
      <el-col class="common-height" :span="5">
        <div class="chart-common">
          <GISAreaChart
            :GISAreaData="GISAreaData1"
            :GISAreaXdata="GISAreaXdata1"
            :areaTitleColor="areaTitleColor1"
            :normalColor="normalColor1"
            :areaTitle="areaTitle1"
          />
        </div>
        <div class="chart-common">
          <GISBarChart
            :barCTitle="barCTitle1"
            :barCseries="barCseries1"
            :gisBXdata="gisBXdata1"
            :gisBlenged="gisBlenged1"
            :barTitleColor="barTitleColor1"
          />
        </div>
        <div class="chart-common">
          <GISBarChart
            :barCTitle="barCTitle2"
            :barCseries="barCseries2"
            :gisBXdata="gisBXdata2"
            :gisBlenged="gisBlenged2"
            :barTitleColor="barTitleColor2"
          />
        </div>
      </el-col>
      <el-col class="img-tab common-height" :span="14">
       <ImgTab></ImgTab>
      </el-col>
      <el-col class="common-height" :span="5">
        <div class="chart-common">
          <GISAreaChart
            :GISAreaData="GISAreaData2"
            :GISAreaXdata="GISAreaXdata2"
            :areaTitleColor="areaTitleColor2"
            :normalColor="normalColor2"
            :areaTitle="areaTitle2"
          />
        </div>
        <div class="chart-common">
          <!-- 暂用 -->
          <GISBarChart
            :barCTitle="barCTitle4"
            :barCseries="barCseries4"
            :gisBXdata="gisBXdata4"
            :gisBlenged="gisBlenged4"
            :barTitleColor="barTitleColor4"
          />
        </div>
        <div class="chart-common">
          <GISBarChart
            :barCTitle="barCTitle3"
            :barCseries="barCseries3"
            :gisBXdata="gisBXdata3"
            :gisBlenged="gisBlenged3"
            :barTitleColor="barTitleColor3"
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
import GISLineChart from "../../../components/GIS/GIS/GISLineChart";
import ImgTab from "../../../components/GIS/GIS/ImgTab";
export default {
  data() {
    return {
      title: "社区周边街道治安",
      areaTitle1: "昨天街道车辆密度数据图",
      GISAreaData1: [50, 38, 20, 40, 58, 55, 51],
      GISAreaXdata1: [
        "20:00",
        "0:00",
        "4:00",
        "8:00",
        "12:00",
        "16:00",
        "20:00"
      ],
      areaTitleColor1: "rgba(245,29,69,1)",
      normalColor1: "rgba(245,29,69,.1)",
      areaTitle2: "今日街道车辆密度数据图",
      GISAreaData2: [50, 38, 20, 40, 58, 55, 51],
      GISAreaXdata2: [
        "20:00",
        "0:00",
        "4:00",
        "8:00",
        "12:00",
        "16:00",
        "20:00"
      ],
      areaTitleColor2: "rgba(0,119,255,1)",
      normalColor2: "rgba(0,119,255,.1)",
      barCTitle1: "三天内车辆密度数据对比",
      barCseries1: [
        {
          name: "今天",
          type: "bar",
          data: [10, 30, 15, 10, 25, 17, 10],
          itemStyle: {
            normal: {
              color: "rgba(245,29,69,1)"
            }
          }
        },
        {
          name: "昨天",
          type: "bar",
          data: [10, 30, 15, 10, 25, 17, 10],
          itemStyle: {
            normal: {
              color: "rgba(34,90,221,1)"
            }
          }
        },
        {
          name: "前天",
          type: "bar",
          data: [10, 30, 15, 10, 25, 17, 10],
          itemStyle: {
            normal: {
              color: "rgba(240,198,32,1)"
            }
          }
        }
      ],
      gisBXdata1: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      gisBlenged1: ["今天", "昨天", "前天"],
      barTitleColor1: "rgba(0,119,255,1)",
      barCTitle2: "本周周边街道交通事故数据",
      barCseries2: [
        {
          name: "前天",
          type: "bar",
          data: [30, 15, 39, 30, 39, 43, 10],
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(126,88,194,.5)"
                },
                {
                  offset: 1,
                  color: "rgba(126,88,194,1)"
                }
              ]),
              opacity: 1
            }
          }
        }
      ],
      gisBXdata2: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      gisBlenged2: ["今天", "昨天", "前天"],
      barTitleColor2: "rgba(0,119,255,1)",
      barCTitle3: "本周社区周边街道堵车率",
      barCseries3: [
        {
          name: "前天",
          type: "bar",
          data: [30, 15, 39, 30, 39, 43, 10],
          itemStyle: {
            normal: {
              color: function(params) {
                var colorList = [
                  "rgba(255,132,0,1)",
                  "rgba(255,132,0,.5)",
                  "rgba(255,132,0,1)",
                  "rgba(255,132,0,.5)",
                  "rgba(255,132,0,1)",
                  "rgba(255,132,0,.5)",
                  "rgba(255,132,0,1)"
                ];
                return colorList[params.dataIndex];
              }
            }
          }
        }
      ],
      gisBXdata3: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      gisBlenged3: ["今天", "昨天", "前天"],
      barTitleColor3: "rgba(0,119,255,1)",
      barCTitle4: "本周社区周边街道堵车率",
      barCseries4: [
        {
          name: "前天",
          type: "line",
          data: [30, 15, 39, 30, 39, 43, 10],
          itemStyle: {
            normal: {
              color: "#f0166d"
            }
          }
        },
        {
          name: "前天",
          type: "line",
          data: [10, 25, 19, 20, 19, 13, 40],
          itemStyle: {
            normal: {
              color: "#0077ff"
            }
          }
        }
      ],
      gisBXdata4: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      gisBlenged4: ["今天", "昨天", "前天"],
      barTitleColor4: "rgba(0,119,255,1)"
    };
  },
  components: { CommonTitle, GISAreaChart, GISBarChart, GISLineChart, ImgTab }
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
  padding: 0 20px 20px 20px;
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
.img-tab div{
  height: 100%;
}
</style>
