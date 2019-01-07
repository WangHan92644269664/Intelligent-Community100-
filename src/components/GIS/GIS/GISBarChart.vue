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
    barCTitle: {
      type: String,
      default: () => ""
    },
    barCseries: {
      type: Array,
      default: () => []
    },
    gisBXdata: {
      type: Array,
      default: () => []
    },
    gisBlenged: {
      type: Array,
      default: () => []
    },
    barTitleColor: {
      type: String,
      default: () => ""
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
          text: this.barCTitle,
          textStyle: {
            color: this.barTitleColor
          }
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: this.gisBlenged,
          left: "right",
          itemGap: 10,
          itemWidth: 10,
          itemHeight: 10
        },
        calculable: true,
        xAxis: {
          type: "category",
          data: this.gisBXdata,
          axisLabel: {
            show: true,
            textStyle: {
              color: "#bfbfbf"
            }
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#e8e8e8"
            }
          }
        },
        yAxis: {
          type: "value",
          axisLabel: {
            show: true,
            textStyle: {
              color: "#bfbfbf"
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#eaeaea"
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#e8e8e8"
            }
          }
        },
        series: this.barCseries
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