<template>
  <div class="content" id="content" ref="homePage">
    <h2 class="title-h2">大数据平台综治数据</h2>
    <div class="top-link">
      <DataRouter></DataRouter>
    </div>
    <el-row class="main-con main-content">
      <el-col class="main-content" :span="8">
        <div class="chart-common chart-2">
           <RosePieChart :roseData="roseData1" :legendData="legendData1" :roseColors="roseColors1"/>
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
          <RosePieChart :roseData="roseData2" :legendData="legendData2" :roseColors="roseColors2"/>
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
          <RosePieChart :roseData="roseData3" :legendData="legendData3" :roseColors="roseColors3"/>
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
      chartData1: ["刑满释放人员", "吸毒人员", "艾滋病人群"],
      chartYdata1: [18, 15, 10],
      chartTitle1: "特殊人员分布",
      yName1: "数量",
      xName1: "类型",
      colorZero1: "rgba(128,2,252,1)",
      colorHalf1: "rgba(65,28,206,.5)",
      colorAll1: "rgba(128,2,252,0)",
      chartData2: ["幼儿园", "普通中学", "高级中学","普通大学",'重点大学'],
      chartYdata2: [7, 3, 5,4,2],
      chartTitle2: "工作计划执行分布",
      yName2: "数量",
      xName2: "类型",
      colorZero2: "rgba(128,2,252,1)",
      colorHalf2: "rgba(65,28,206,.5)",
      colorAll2: "rgba(128,2,252,0)",
      chartData3: ["公路", "输油气管道", "其他"],
      chartYdata3: [6, 3, 4],
      chartTitle3: "线路类型分布",
      yName3: "数量",
      xName3: "类型",
      colorZero3: "rgba(128,2,252,1)",
      colorHalf3: "rgba(65,28,206,.5)",
      colorAll3: "rgba(128,2,252,0)",
      roseData1: [
        { value: 10, name: "群防群治-专职巡防队伍" },
        { value: 5, name: "群防群治-保安服务公司" },
        { value: 15, name: "群防群治-志愿者队伍" },
        { value: 25, name: "群防群治-义务巡防队伍" },
        { value: 20, name: "群防群治-其他" },
      ],
      legendData1: [
        "群防群治-专职巡防队伍",
        "群防群治-保安服务公司",
        "群防群治-志愿者队伍",
        "群防群治-义务巡防队伍",
        "群防群治-其他",
      ],
      roseColors1: [
        "#f8c27a",
        "#f1ad40",
        "#c68108",
        "#b1560d",
        "#9b4200",
      ],
      roseData2: [
        { value: 10, name: "综治机构-综治委" },
        { value: 5, name: "综治机构-综治工作室（站）" },
        { value: 15, name: "综治机构-综治办" },
        { value: 25, name: "综治机构-综治中心" },
      ],
      legendData2: [
        "综治机构-综治委",
        "综治机构-综治工作室（站）",
        "综治机构-综治办",
        "综治机构-综治中心",
      ],
      roseColors2: [
        "#ea8500",
        "#df1a45",
        "#205ae9",
        "#b1560d",
        "#00caa4",
      ],
      roseData3: [
        { value: 10, name: "学校周边" },
        { value: 5, name: "交通场站" },
        { value: 15, name: "重点线路" },
        { value: 25, name: "城乡结合部" },
        { value: 20, name: "集贸市场" },
        { value: 20, name: "娱乐场所" },
        { value: 20, name: "其他" }
      ],
      legendData3: [
        "学校周边",
        "交通场站",
        "重点线路",
        "城乡结合部",
        "集贸市场",
        "娱乐场所",
        "其他",
      ],
      roseColors3: [
        "#ffbfc0",
        "#e08485",
        "#ae5364",
        "#8e3d50",
        "#713245",
        "#5f1631",
        "#3d061b",
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

