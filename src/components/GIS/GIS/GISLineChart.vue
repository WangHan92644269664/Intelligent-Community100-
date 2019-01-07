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
    lineCTitle: {
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
          text: this.lineCTitle
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["今天", "昨天"],
          left: "right",
          itemGap: 10,
          itemWidth: 10,
          itemHeight: 10
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLine: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#bfbfbf"
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
          },
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
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
          },
          axisLabel: {
            formatter: "{value}"
          }
        },
        series: [
          {
            name: "今天",
            type: "line",
            data: [11, 11, 15, 13, 12, 13, 10]
          },
          {
            name: "昨天",
            type: "line",
            data: [1, -2, 2, 5, 3, 2, 0]
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