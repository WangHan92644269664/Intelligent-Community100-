<template>
  <div class="content" id="content" ref="homePage">
    <h2 class="title-h2">大数据平台社区工作</h2>
    <div class="top-link">
      <DataRouter></DataRouter>
    </div>
    <el-row class="main-content">
      <el-col class="main-content" :span="7">
        <div class="bili-chart">
          <BiliChart></BiliChart>
        </div>
        <div class="chart-common chart-1">
          <EchartsConponent
            :chartData="chartData1"
            :chartYdata="chartYdata1"
            :chartTitle="chartTitle1"
            :yName="yName1"
            :xName="xName1"
            :barLeftColor="barLeftColor1"
            :barRightColor="barRightColor1"
            :circleLeftColor="circleLeftColor1"
            :circleRightColor="circleRightColor1"
            :circleBorderColor="circleBorderColor1"
          />
        </div>
        <div class="chart-common chart-2">
          <EchartsConponent
            :chartData="chartData2"
            :chartYdata="chartYdata2"
            :chartTitle="chartTitle2"
            :yName="yName2"
            :xName="xName2"
            :barLeftColor="barLeftColor2"
            :barRightColor="barRightColor2"
            :circleLeftColor="circleLeftColor2"
            :circleRightColor="circleRightColor2"
            :circleBorderColor="circleBorderColor2"
          />
        </div>
        <div class="chart-common chart-3">
          <EchartsConponent
            :chartData="chartData3"
            :chartYdata="chartYdata3"
            :chartTitle="chartTitle3"
            :yName="yName3"
            :xName="xName3"
            :barLeftColor="barLeftColor3"
            :barRightColor="barRightColor3"
            :circleLeftColor="circleLeftColor3"
            :circleRightColor="circleRightColor3"
            :circleBorderColor="circleBorderColor3"
          />
        </div>
      </el-col>
      <el-col class="main-content" :span="10">
        <div class="mapChart" style="height:52.5%;">
          <mapChina/>
        </div>
        <div class="main-content-data" style="height:25%;">
          <el-row class="data-row">
            <el-row>
              <el-col :span="8">
                <div class="face-data">
                  人脸识别数据
                </div>
                <div class="data-number">
                  <span><b>2</b><b>6</b><b>5</b><b>3</b></span>
                  <span class="unit">人次</span>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="door-key-data">
                  门禁数据
                </div>
                <div class="data-number">
                  <span><b>2</b><b>9</b><b>5</b><b>6</b></span>
                  <span class="unit">次</span>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="car-key-data">
                  车辆进出数据
                </div>
                <div class="data-number">
                  <span><b>2</b><b>4</b><b>9</b></span>
                  <span class="unit">辆</span>
                </div>
              </el-col>
            </el-row>
            <el-col class="data-common" :span="4">
              <div class="data-common-div data-right">总人数
                <br>
                <span>1008</span><span class="unit1">人</span>
              </div>
            </el-col>
            <el-col class="data-common" :span="4">
              <div class="data-common-div data-right">建筑物
                <br>
                <span>20</span><span class="unit1">栋</span>
              </div>
            </el-col>
            <el-col class="data-common" :span="4">
              <div class="data-common-div data-right">部件
                <br>
                <span>10</span><span class="unit1">件</span>
              </div>
            </el-col>
            <el-col class="data-common" :span="4">
              <div class="data-common-div data-right">走访
                <br>
                <span>10</span><span class="unit1">件</span>
              </div>
            </el-col>
            <el-col class="data-common" :span="4">
              <div class="data-common-div data-right">事件
                <br>
                <span>15</span><span class="unit1">件</span>
              </div>
            </el-col>
            <el-col class="data-common" :span="4">
              <div class="data-common-div data-right">组织
                <br>
                <span>12</span><span class="unit1">个</span>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="chart-common chart-4">
          <BuildingTypeChart></BuildingTypeChart>
        </div>
      </el-col>
      <el-col class="main-content" :span="7">
        <div class="gonggao" style="height:47%;">
          <Table/>
        </div>
        <div class="chart-common chart-5">
          <Pie/>
        </div>
        <div class="chart-common chart-6">
          <EchartsConponent
            :chartData="chartData5"
            :chartYdata="chartYdata5"
            :chartTitle="chartTitle5"
            :yName="yName5"
            :xName="xName5"
            :barLeftColor="barLeftColor5"
            :barRightColor="barRightColor5"
            :circleLeftColor="circleLeftColor5"
            :circleRightColor="circleRightColor5"
            :circleBorderColor="circleBorderColor5"
          />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import EchartsConponent from "../../components/Data/EchartsComponent";
import MapChina from "../../components/Data/MapChina";
import Table from "../../components/Data/TableComponent";
import Pie from "../../components/Data/PieCompontent";
import DataRouter from "../../components/Data/DataRouter";
import BiliChart from "../../components/Data/BiliChart";
import BuildingTypeChart from "../../components/Data/BuildingTypeChart"
export default {
  name: "Data",
  data() {
    return {
      screenHeight: document.documentElement.clientHeight, //屏幕高度
      chartData1: ["常住", "租赁", "其他"],
      chartYdata1: [180, 150, 100],
      chartTitle1: "房屋住房情况分布",
      yName1: "(数量)",
      xName1: "(类型)",
      barLeftColor1: "#006a62",
      barRightColor1: "#00e7af",
      circleLeftColor1: "#b3fea9",
      circleRightColor1: "#01eab1",
      circleBorderColor1: "#01eab1",
      chartData2: ["18-30", "30-40", "40-50", "50-60", "60-70", "70以上"],
      chartYdata2: [3000, 2600, 2400, 2000, 1000, 1500],
      chartTitle2: "党员年龄分布",
      yName2: "(党员)",
      xName2: "(年龄)",
      barLeftColor2: "#4d2597",
      barRightColor2: "#957df9",
      circleLeftColor2: "#eaacff",
      circleRightColor2: "#a083fa",
      circleBorderColor2: "#a083fa",
      chartData3: ["常住人口", "外出人口", "境外人口", "未落户人口"],
      chartYdata3: [1000, 300, 500, 1000],
      chartTitle3: "人口类型分布",
      yName3: "(数量)",
      xName3: "(类型)",
      barLeftColor3: "#01b1ea",
      barRightColor3: "#46c4f6",
      circleLeftColor3: "#b8e7fb",
      circleRightColor3: "#3cc7f2",
      circleBorderColor3: "#3cc7f2",
      chartData5: ["刑满释放人员", "吸毒人员", "艾滋病人群"],
      chartYdata5: [10, 10, 10],
      chartTitle5: "特殊人员分布",
      yName5: "(数量)",
      xName5: "(类型)",
      barLeftColor5: "#960435",
      barRightColor5: "#ff7db9",
      circleLeftColor5: "#ff7ab2",
      circleRightColor5: "#bd4d5b",
      circleBorderColor5: "#bd4d5b"
    };
  },
  components: { EchartsConponent, MapChina, Table, Pie, DataRouter, BiliChart ,BuildingTypeChart},
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
.bili {
  height: 15%;
  background: #040b35;
  width: 80%;
  margin: 0 auto;
  padding: 3% 0;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
}
.bili li {
  color: #30e4f6;
  float: left;
  width: 50%;
  text-align: center;
}
.bili li span {
  font-size: 30px;
}
.chart-common {
  height: 31%;
  background: url("../../assets/images/data/common_chart_bg.png") no-repeat;
  background-size: 100% 100%;
  width: 90%;
  margin: 1% auto;
}
.bili-div {
  width: 50%;
  float: left;
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
.data-right {
  color: #fff;
  padding-left: 10px;
}
.data-right span {
  font-size: 20px;
  color: #f5af19;
}
.data-row {
  width: 90%;
  height: 40%;
  color:#fff;
  margin:1% auto;
}
.door-key-data, .face-data, .car-key-data{
  font-size:16px;
}
.data-number{
  margin-top:10px;
}
.data-number b{
  color:#00a7ff;
  border:1px solid #0c3467;
  font-size: 28px;
  padding:0 6px;

}
.unit{
  font-size: 14px;
  color:#00a7ff;
}
.unit1{
  font-size: 14px !important;
}
/* 右侧公告 */
.gonggao {
  background: rgba(4, 11, 53, 0.6);
  width: 90%;
  margin: 0 auto;
  position: relative;
}
/* 男女比例图表 */
.bili-chart {
  height: 15%;
}
.bili-chart div {
  height: 100%;
  width: 90%;
  margin: 0 auto;
}
</style>

