<template>
  <div>
    <div class="chartHeight" style="width:100%;" ref="echarts"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "EchartsComponents",
  props: {
    GISAreaData: {
      type: Array,
      default: () => []
    },
    GISAreaXdata: {
      type: Array,
      default: () => []
    },
    areaTitleColor:{
        type:String,
        default:() => ''
    },
    normalColor:{
        type:String,
        default:() => ''
    },
    areaTitle:{
        type:String,
        default:() => ''
    }
  },
  data() {
    return {
      count: 1
    };
  },
  methods: {
    drawChart() {
      const vm = this;
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(this.$refs.echarts);
      $(window).resize(function() {
        myChart.resize(); //窗口变化
      });
      // 绘制图表
      myChart.setOption({
        title: {
          text: this.areaTitle,
          x: "left",
          textStyle: {
            color: this.areaTitleColor,
            fontSize: "16"
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.GISAreaXdata,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#ebedf9"
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#d0d0d0"
            }
          }
        },
        yAxis: {
          type: "value",
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#ebedf9"
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#d0d0d0"
            }
          }
        },
        series: [
          {
            data: this.GISAreaData,
            type: "line",
            lineStyle:{
                color: this.areaTitleColor
            },
            areaStyle: {
              normal: {
                color: this.normalColor
              }
            }
          }
        ]
      });
    }
  },
  computed: {},
  mounted: function() {
    const vm = this;
    vm.$nextTick(() => {
      vm.drawChart();
    });
  },
  created: () => {}
};
</script>

<style scoped>
.chartHeight {
  height: 100%;
}
</style>