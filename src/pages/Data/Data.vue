<template>
  <div class="content" id="content" ref="homePage">
    <h2 class="title-h2">大数据平台</h2>
    <div class="top-link">
      <el-row>
        <el-col :span="12">
          <ul class="top-link-left">
            <li>实有人口</li>
            <li>实有数据</li>
            <li>综治数据</li>
          </ul>
        </el-col>
        <el-col :span="12">
          <ul class="top-link-right">
            <li>社区工作</li>
            <li>智慧党建</li>
            <li>智慧政务</li>
          </ul>
        </el-col>
      </el-row>
    </div>
    <el-row class="main-content">
      <el-col class="main-content" :span="7">
        <ul class="bili">
          <li>
            <div class="bili-div bili-left">
              <i style class="icon iconfont icon-iconcle07"></i>
            </div>
            <div class="bili-div bili-right">男性比例
              <br>
              <span>59%</span>
            </div>
          </li>
          <li>
            <div class="bili-div bili-left1">
              <i style class="icon iconfont icon-iconxingbie08"></i>
            </div>
            <div class="bili-div bili-right1">女性比例
              <br>
              <span>41%</span>
            </div>
          </li>
        </ul>
        <div class="chart-common chart-1">
          <EchartsConponent
            :chartData="chartData1"
            :chartYdata="chartYdata1"
            :chartTitle="chartTitle1"
            :yName="yName1"
            :xName="xName1"
          />
        </div>
        <div class="chart-common chart-2">
          <EchartsConponent
            :chartData="chartData2"
            :chartYdata="chartYdata2"
            :chartTitle="chartTitle2"
            :yName="yName2"
            :xName="xName2"
          />
        </div>
        <div class="chart-common chart-3">
          <EchartsConponent
            :chartData="chartData3"
            :chartYdata="chartYdata3"
            :chartTitle="chartTitle3"
            :yName="yName3"
            :xName="xName3"
          />
        </div>
      </el-col>
      <el-col class="main-content" :span="10">
        <div class="mapChart" style="height:52.5%;">
          <mapChina/>
        </div>
        <div class="main-content-data" style="height:25%;">
          <el-row class="data-row">
            <el-col class="data-common" :span="4">
              <div class="data-common-div data-left">
                <i class="icon iconfont icon-tubiao_huabanfuben"></i>
              </div>
              <div class="data-common-div data-right">总人数
                <br>
                <span>1008人</span>
              </div>
            </el-col>
            <el-col class="data-common" :span="4">
              <div class="data-common-div data-left">
                <i class="icon iconfont icon-jianzhu"></i>
              </div>
              <div class="data-common-div data-right">建筑物
                <br>
                <span>20栋</span>
              </div>
            </el-col>
            <el-col class="data-common" :span="4">
              <div class="data-common-div data-left">
                <i class="icon iconfont icon-bujian"></i>
              </div>
              <div class="data-common-div data-right">部件
                <br>
                <span>10件</span>
              </div>
            </el-col>
            <el-col class="data-common" :span="4">
              <div class="data-common-div data-left">
                <i class="icon iconfont icon-ren"></i>
              </div>
              <div class="data-common-div data-right">走访
                <br>
                <span>10件</span>
              </div>
            </el-col>
            <el-col class="data-common" :span="4">
              <div class="data-common-div data-left">
                <i class="icon iconfont icon-shi-jian-fen-xi"></i>
              </div>
              <div class="data-common-div data-right">事件
                <br>
                <span>15件</span>
              </div>
            </el-col>
            <el-col class="data-common" :span="4">
              <div class="data-common-div data-left">
                <i class="icon iconfont icon-zuzhi"></i>
              </div>
              <div class="data-common-div data-right">组织
                <br>
                <span>12个</span>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="chart-common chart-4">
          <EchartsConponent
            :chartData="chartData4"
            :chartYdata="chartYdata4"
            :chartTitle="chartTitle4"
            :yName="yName4"
            :xName="xName4"
          />
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
export default {
  name: "Data",
  data() {
    return {
      screenHeight: document.documentElement.clientHeight, //屏幕高度
      chartData1: ["常住", "租赁", "其他"],
      chartYdata1: [180, 15, 10],
      chartTitle1: "房屋住房情况分布",
      yName1: "(数量)",
      xName1: "(类型)",
      chartData2: ["18-30", "30-40", "40-50", "50-60", "60-70", "70以上"],
      chartYdata2: [3000, 2600, 2400, 2000, 1000, 1500],
      chartTitle2: "党员年龄分布",
      yName2: "(党员)",
      xName2: "(年龄)",
      chartData3: ["常住人口", "外出人口", "境外人口", "未落户人口"],
      chartYdata3: [1000, 100, 50, 1000],
      chartTitle3: "人口类型分布",
      yName3: "(数量)",
      xName3: "(类型)",
      chartData4: ["自建", "商务楼", "商住", "公园/景点", "街道办"],
      chartYdata4: [1000, 100, 50, 1000, 1700],
      chartTitle4: "建筑物类型分布",
      yName4: "(数量)",
      xName4: "(类型)",
      chartData5: ["刑满释放人员", "吸毒人员", "艾滋病人群"],
      chartYdata5: [10, 10, 10],
      chartTitle5: "特殊人员分布",
      yName5: "(数量)",
      xName5: "(类型)"
    };
  },
  components: { EchartsConponent, MapChina, Table, Pie },
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
  width:150px;
  text-align: center;
  background: rgba(24, 39, 76, 0.8);
  border-top-left-radius: 20px;
}
.top-link-right {
  float:right;
  color: #fff;
  text-align: center;
  height: 40px;
  text-align: right;

}
.top-link-right li {
  /* float: left; */
  display:inline-block;
  width:150px;
  text-align: center;
  line-height: 40px;
  background: rgba(24, 39, 76, 0.8);
  border-top-left-radius: 20px;
  margin-right:20px;
}
.main-content {
  height: calc(100% - 122px);
}
.bili {
  height:15%;
  background:#040b35;
  width:80%;
  margin:0 auto;
  padding:3% 0;
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
  background:rgba(4,11,53,.6);
  width:90%;
  margin:1% auto;
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
.mapChart{
   background: rgba(4, 11, 53, 0.5);
   margin-bottom:1%;
}
.mapChart div {
  height: 100%;
}
.main-content-data {
  background: rgba(4, 11, 53, 0.5);
  position: relative;
}
.data-common {
  margin: 0 auto;
  text-align: center;
  padding-left: 2%;
}
.data-common-div {
  float: left;
  text-align: center;
}
.chart-4{
  width:100%;
}
.data-left i {
  font-size: 30px;
  color: #2ed9ec;
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
  /* background: #30e4f6; */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
/* 右侧公告 */
.gonggao{
  background: rgba(4,11,53,.6);
  width:90%;
  margin:0 auto;
  position: relative;
}
</style>

