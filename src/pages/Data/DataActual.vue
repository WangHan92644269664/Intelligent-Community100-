<template>
  <div class="content" id="content" ref="homePage">
    <h2 class="title-h2">大数据平台实有人口</h2>
    <div class="top-link">
      <DataRouter></DataRouter>
    </div>
    <el-row class="main-con main-content">
      <el-col class="main-content" :span="8">
        <div class="chart-common chart-2">
          <ActualBar
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
        <div class="chart-common chart-3">
          <PieJianbian :jianbianColor="jianbianColor1"/>
        </div>
      </el-col>
      <el-col class="main-content" :span="8">
        <div class="chart-common chart-2">
          <ActualCircle :circleData="circleData1"/>
        </div>
        <div class="chart-common chart-3">
          <PieCharts
            :pieTitle="pieTitle2"
            :pieData="pieData2"
            :pieLegendData="pieLegendData2"
            :pieColors="pieColor2"
          />
        </div>
      </el-col>
      <el-col class="main-content" :span="8">
        <div class="chart-common chart-5">
          <PieCharts
            :pieTitle="pieTitle1"
            :pieData="pieData1"
            :pieLegendData="pieLegendData1"
            :pieColors="pieColor1"
          />
        </div>
        <div class="chart-common chart-6">
          <PieJianbian :jianbianColor="jianbianColor2"/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ActualBar from "../../components/Data/PeopleBarChart";
import ActualCircle from "../../components/Data/ActualCircleChart";
import DataRouter from "../../components/Data/DataRouter";
import DataPieChart from "../../components/Data/PeoplePieChart";
import PieCharts from "../../components/Data/PieCompontent";
import PieJianbian from "../../components/Data/PieJianbian";
export default {
  name: "Data",
  data() {
    return {
      screenHeight: document.documentElement.clientHeight, //屏幕高度
      chartData1: ["常住人口", "外出人口", "境外人口", "未落户人口"],
      chartYdata1: [1800, 1500, 1000, 1200],
      chartTitle1: "人口类型分布",
      yName1: "(数量)",
      xName1: "(类型)",
      colorZero1: "#004dff",
      colorHalf1: "#007aff",
      colorAll1: "#004bff",
      circleData1: [
        {
          value: 50,
          name: "无物业"
        },
        {
          value: 50,
          name: "单元家属院楼"
        },
        {
          value: 40,
          name: "第三方物业"
        }
      ],
      pieTitle1: "住房情况分布",
      pieData1: [
        { value: 335, name: "常住" },
        { value: 310, name: "租赁" },
        { value: 234, name: "其他" }
      ],
      pieLegendData2: ["路灯", "健身器材", "宣传栏", "其他", "垃圾桶"],
      pieColor2: ["#58c5bf", "#c4d660", "#c0e3e7", "#e66d34", "#9b8578"],
      pieTitle2: "人口婚姻分布",
      pieData2: [
        { value: 33, name: "路灯" },
        { value: 31, name: "健身器材" },
        { value: 234, name: "宣传栏" },
        { value: 204, name: "其他" },
        { value: 134, name: "垃圾桶" }
      ],
      pieLegendData1: ["常住", "租赁", "其他"],
      pieColor1: ["#d05835", "#0077db", "#ffc500"],
      jianbianColor1: [
        {
          offset: 0,
          color: "rgba(0,88,234,0)" // 0% 处的颜色
        },
        {
          offset: 1,
          color: "rgba(0,88,234,1)" // 100% 处的颜色
        }
      ],
      jianbianColor2: [
        {
          offset: 0,
          color: "rgba(164,2,235,0)" // 0% 处的颜色
        },
        {
          offset: 1,
          color: "rgba(164,2,235,1)" // 100% 处的颜色
        }
      ]
    };
  },
  components: {
    ActualBar,
    DataRouter,
    DataPieChart,
    ActualCircle,
    PieCharts,
    PieJianbian
  },
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

