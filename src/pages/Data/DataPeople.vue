<template>
  <div class="content" id="content" ref="homePage">
    <h2 class="title-h2">大数据平台实有人口</h2>
    <div class="top-link">
      <DataRouter></DataRouter>
    </div>
    <el-row class="main-con main-content">
      <el-col class="main-content" :span="8">
        <div class="chart-common chart-2">
          <h5>人口类型分布</h5>
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
        <div class="chart-common chart-3">
          <Pie3D :id="id" :option="option"/>
        </div>
      </el-col>
      <el-col class="main-content" :span="8">
        <div class="chart-common chart-2">
          <h5>人口学历分布</h5>
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
        <div class="chart-common chart-3">
          <DataPieChart :pieData="pieData2" :pieColor="pieColor2" :pieTitle="pieTitle2"/>
        </div>
      </el-col>
      <el-col class="main-content" :span="8">
        <div class="chart-common chart-5">
          <h5>人员年龄分布</h5>
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
        <div class="chart-common chart-6">
          <DataPieChart :pieData="pieData3" :pieColor="pieColor3" :pieTitle="pieTitle3"/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PeopleBar from "../../components/Data/PeopleBarChart";
import DataRouter from "../../components/Data/DataRouter";
import DataPieChart from "../../components/Data/PeoplePieChart";
import Pie3D from "../../components/Data/Pie3DChart"
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
      colorZero1: "rgba(0,224,252,1)",
      colorHalf1: "rgba(0,224,252,.5)",
      colorAll1: "rgba(0,224,252,0)",
      chartData2: ["其他", "研究生", "本科"],
      chartYdata2: [3000, 2600, 2400],
      chartTitle2: "人口学历分布",
      yName2: "(党员)",
      xName2: "(年龄)",
      colorZero2: "rgba(0,126,255,1)",
      colorHalf2: "rgba(0,126,255,.5)",
      colorAll2: "rgba(0,126,255,0)",
      chartData3: ["1-18", "18-30", "30-40", "40-50", "60-70", "70以上"],
      chartYdata3: [1000, 300, 500, 1000, 500, 600],
      chartTitle3: "人口年龄分布",
      yName3: "(数量)",
      xName3: "(类型)",
      colorZero3: "rgba(173,0,252,1)",
      colorHalf3: "rgba(173,0,252,.5)",
      colorAll3: "rgba(173,0,252,0)",
      pieData1: [
        {
          value: 335,
          name: "男性"
        },
        {
          value: 310,
          name: "女性"
        }
      ],
      pieColor1: "#017eff",
      pieTitle1: "人口婚姻分布",
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
          name: "汉族"
        },
        {
          value: 310,
          name: "回族"
        },
        {
          value: 450,
          name: "藏族"
        },
        {
          value: 450,
          name: "蒙古族"
        },
        {
          value: 450,
          name: "维吾尔族"
        }
      ],
      pieColor3: "#6b1f1f",
      pieTitle3: "人口民族分布",
      id: "test",
      option: {
        colors:["#017eff","#d3227a","#ff8b4e","#fbd884","#08b170","#00b6e8","#8d7ce4"],
        chart: {
          backgroundColor: null,
          type: "pie", //饼图
          options3d: {
            enabled: true, //使用3d功能
            alpha: 60, //延y轴向内的倾斜角度
            beta: 0
          },
        },
        title: {
          text: "人口性别分布", //图表的标题文字
          style:{
            color:'#fff',
            
          },
          align:'left'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true, //每个扇块能否选中
            cursor: "pointer", //鼠标指针
            depth: 15, //饼图的厚度
            dataLabels: {
              enabled: true //是否显示饼图的线形tip
            },
          }
        },
        series: [
          {
            type: "pie",
            // name: "测试用1", //统一的前置词,非必须
            data: [
              ["男性", 12], //模块名和所占比，也可以{name: '测试1',y: 12}
              ["女性", 23],
              
            ]
          }
        ]
      }
    };
  },
  components: { PeopleBar, DataRouter, DataPieChart,Pie3D },
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
  background: url("../../assets/images/data/ziyemian_bg.png") no-repeat;
  background-size: 100% 100%;
  width: 95%;
  margin: 1% auto;
  height: 55%;
  padding: 2px;
}
.chart-common h5 {
  height: 40px;
  background: url("../../assets/images/data/ziyemian_nav.png") no-repeat;
  background-size: 100% 100%;
  text-align: left;
  line-height: 40px;
  color: #fff;
  padding-left: 20px;
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
  height: calc(100% - 50px);
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

