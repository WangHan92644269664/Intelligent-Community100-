<template>
  <div class="content" id="content" ref="homePage">
    <h2 class="title-h2">大数据平台社区工作</h2>
    <div class="top-link">
      <DataRouter></DataRouter>
    </div>
    <el-row class="main-con main-content">
      <el-col class="main-content" :span="8">
        <div class="chart-common chart-2">
          <DataPieChart :pieData="pieData1" :pieColor="pieColor1" :pieTitle="pieTitle1"/>
        </div>
        <div class="chart-common chart-3">
          <PeopleBar
            :chartData="chartData1"
            :chartYdata="chartYdata1"
            :chartTitle="chartTitle1"
            :yName="yName1"
            :xName="xName1"
            :colorZero="colorZero1"
            :colorHalf="colorHalf1"
            :colorAll="colorAll1"
          />
        </div>
      </el-col>
      <el-col class="main-content" :span="8">
        <div class="chart-common chart-2">
          <RosePieChart :roseData="roseData1" :legendData="legendData1" :roseColors="roseColors1"/>
        </div>
        <div class="chart-common chart-3">
          <PeopleBar
            :chartData="chartData2"
            :chartYdata="chartYdata2"
            :chartTitle="chartTitle2"
            :yName="yName2"
            :xName="xName2"
            :colorZero="colorZero2"
            :colorHalf="colorHalf2"
            :colorAll="colorAll2"
          />
        </div>
      </el-col>
      <el-col class="main-content" :span="8">
        <div class="chart-common chart-5">
          <DataPieChart :pieData="pieData3" :pieColor="pieColor3" :pieTitle="pieTitle3"/>
        </div>
        <div class="chart-common chart-6">
          <PeopleBar
            :chartData="chartData3"
            :chartYdata="chartYdata3"
            :chartTitle="chartTitle3"
            :yName="yName3"
            :xName="xName3"
            :colorZero="colorZero3"
            :colorHalf="colorHalf3"
            :colorAll="colorAll3"
          />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PeopleBar from "../../components/Data/PeopleBarChart";
import RosePieChart from "../../components/Data/RosePieChart";
import DataRouter from "../../components/Data/DataRouter";
import DataPieChart from "../../components/Data/PeoplePieChart";
export default {
  name: "Data",
  data() {
    return {
      screenHeight: document.documentElement.clientHeight, //屏幕高度
      chartData1: ["超级管理员1", "超级管理员2", "超级管理员3"],
      chartYdata1: [1800, 1500, 1000],
      chartTitle1: "人员绩效分布（11月）",
      yName1: "分数",
      xName1: "人员",
      colorZero1: "rgba(83,243,121,1)",
      colorHalf1: "rgba(83,243,121,.5)",
      colorAll1: "rgba(83,243,121,0)",
      chartData2: ["高新区综治中心", "管城区综治中心", "经开区综治中心"],
      chartYdata2: [3000, 2600, 2400],
      chartTitle2: "工作计划执行分布",
      yName2: "数量",
      xName2: "区域",
      colorZero2: "rgba(83,243,121,1)",
      colorHalf2: "rgba(83,243,121,.5)",
      colorAll2: "rgba(83,243,121,0)",
      chartData3: ["超级管理员", "徐保成", "张成功"],
      chartYdata3: [1000, 300, 500],
      chartTitle3: "工作日志分布",
      yName3: "数量",
      xName3: "类型",
      colorZero3: "rgba(83,243,121,1)",
      colorHalf3: "rgba(83,243,121,.5)",
      colorAll3: "rgba(83,243,121,0)",
      pieData1: [
        {
          value: 335,
          name: "群众来访"
        },
        {
          value: 310,
          name: "电话热线"
        }
      ],
      pieColor1: "#017eff",
      pieTitle1: "重点事件来源分布",
      pieData2: [
        {
          value: 335,
          name: "未婚"
        },
        {
          value: 310,
          name: "已婚"
        },
        {
          value: 450,
          name: "已婚"
        }
      ],
      pieColor2: "#8d3600",
      pieTitle2: "人口民族分布",
      pieData3: [
        {
          value: 335,
          name: "日常走访"
        },
        {
          value: 310,
          name: "其他"
        }
      ],
      pieColor3: "#6b1f1f",
      pieTitle3: "人口民族分布",
      roseData1: [
        { value: 10, name: "待派遣" },
        { value: 5, name: "待核查" },
        { value: 15, name: "待处理" },
        { value: 25, name: "待延期审核" },
        { value: 20, name: "待结案" },
        { value: 35, name: "待接收" },
        { value: 30, name: "已废弃" }
      ],
      legendData1: [
        "待派遣",
        "待核查",
        "待处理",
        "待延期审核",
        "待结案",
        "待接收",
        "已废弃"
      ],
      roseColors1: [
        "#1883b7",
        "#1ed2d1",
        "#74b809",
        "#8b3a86",
        "#ec5044",
        "#fec200",
        "#ca3b71"
      ]
    };
  },
  components: { PeopleBar, DataRouter, DataPieChart, RosePieChart },
  mounted() {
    var _this = this;
    //页面加载时赋值id全屏高度
    var oIframe = document.getElementById("content");
    oIframe.style.height = document.documentElement.clientHeight + "px";
    // 加载时echarts的高度
    window.onresize = function() {
      // 定义窗口大小变更通知事件
      _this.screenHeight = document.documentElement.clientHeight; //窗口高度
      console.log(_this.screenHeight);
    };
    console.log(_this.screenHeight);
    //echart操作
    const vm = this;
    vm.$nextTick(() => {});
  },
  watch: {
    screenHeight: function(val) {
      //监听屏幕高度变化
      var oIframe = document.getElementById("content");
      oIframe.style.height = Number(val) + "px"; //'120'是页面布局调整，可去除
    }
  },
  created() {},
  methods: {}
};
</script>

<style scoped>
ul {
  list-style: none;
}
.content {
  height: 100%;
  width: 100%;
  background: url("../../assets/images/data/bg.png") no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
}
.title-h2 {
  color: #fff;
  padding-top: 40px;
}
.top-link-left {
  color: #fff;
  text-align: center;
  text-align: left;
  padding-left: 10%;
  height: 40px;
}
.top-link-left li {
  float: left;
  margin-right: 2%;
  height: 40px;
  line-height: 40px;
  width: 150px;
  text-align: center;
  background: rgba(24, 39, 76, 0.8);
  border-top-left-radius: 20px;
}
.top-link-right {
  float: right;
  color: #fff;
  text-align: center;
  height: 40px;
  text-align: right;
}
.top-link-right li {
  /* float: left; */
  display: inline-block;
  width: 150px;
  text-align: center;
  line-height: 40px;
  background: rgba(24, 39, 76, 0.8);
  border-top-left-radius: 20px;
  margin-right: 20px;
}
.main-content {
  height: calc(100% - 122px);
}

.chart-common {
  background: url("../../assets/images/data/common_chart_bg.png") no-repeat;
  background-size: 100% 100%;
  width: 95%;
  margin: 1% auto;
  height: 55%;
}

.bili-left {
  text-align: right;
  padding-right: 20px;
}
.bili-left i,
.bili-left1 i {
  font-size: 40px;
}
.bili-right {
  text-align: left;
}
.bili-left1 {
  text-align: left;
  width: 20%;
}
.bili-left1 i {
  color: #fa06b9;
}
.bili-right1 {
  text-align: left;
}
.chart-common div {
  height: 100%;
  margin-bottom: 1%;
}
.mapChart {
  background: url("../../assets/images/data/map_bg.png") no-repeat;
  background-size: 100% 100%;
  margin-bottom: 1%;
}
.mapChart div {
  height: 100%;
}
.main-content-data {
  position: relative;
}
.data-common {
  margin: 2% auto;
  text-align: center;
}
.data-common-div {
  float: left;
  text-align: center;
}
.chart-4 {
  width: 100%;
}

.data-row {
  width: 90%;
  height: 40%;
  color: #fff;
  margin: 1% auto;
}

/* 右侧公告 */

/* 男女比例图表 */
.main-con {
  width: 100%;
}
</style>

