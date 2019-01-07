<template>
  <div class="content">
    <CommonTitle :title="title"/>
    <div class="main">
      <el-col class="common-height" :span="5">
        <div class="chart-common">
          <GISAreaChart :GISAreaData = "GISAreaData1" :GISAreaXdata = "GISAreaXdata1" :areaTitleColor ="areaTitleColor1" :normalColor = "normalColor1" :areaTitle="areaTitle1"/>
        </div>
        <div class="chart-common">1</div>
        <div class="chart-common">1</div>
      </el-col>
      <el-col class="common-height" :span="14">图表</el-col>
      <el-col class="common-height" :span="5">
        <div class="chart-common">
          <GISAreaChart :GISAreaData = "GISAreaData2" :GISAreaXdata = "GISAreaXdata2" :areaTitleColor ="areaTitleColor2" :normalColor ="normalColor2" :areaTitle="areaTitle2"/>
        </div>
        <div class="chart-common">1</div>
        <div class="chart-common">1</div>
      </el-col>
    </div>
  </div>
</template>

<script>
import CommonTitle from "../../../components/GIS/GIS/GISCommonTitle";
import GISAreaChart from "../../../components/GIS/GIS/GISAreaChart"
export default {
  data() {
    return {
      title: "社区周边街道治安",
      areaTitle1:"昨天街道车辆密度数据图",
      GISAreaData1:[50,38,20,40,58,55,51],
      GISAreaXdata1:['20:00','0:00','4:00','8:00','12:00','16:00','20:00'],
      areaTitleColor1:'rgba(245,29,69,1)',
      normalColor1:'rgba(245,29,69,.1)',
      areaTitle2:"今日街道车辆密度数据图",
      GISAreaData2:[50,38,20,40,58,55,51],
      GISAreaXdata2:['20:00','0:00','4:00','8:00','12:00','16:00','20:00'],
      areaTitleColor2:'rgba(0,119,255,1)',
      normalColor2:'rgba(0,119,255,.1)',
      
      
    };
  },
  components: { CommonTitle,GISAreaChart }
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
  border-top:1px solid #0177ff;
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
.chart-common div{
  height: 100%;
}
</style>
