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
    chartData: {
      type: Array,
      default: () => []
    },
    chartYdata: {
      type: Array,
      default: () => []
    },
    chartTitle: {
      type: String,
      default: () => ""
    },
    yName: {
      type: String,
      default: () => ""
    },
    xName: {
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
          text: this.chartTitle,
          textStyle: {
            color: "#feffff",
            fontSize: "16"
          },
          padding: [10, 10, 5, 40] //设置标题内边距,上，右，下，左
        },
        tooltip: {},
        xAxis: {
          data: this.chartData,
          axisLine: {
            show: true,
            lineStyle: {
              color: "#313133"
            }
          },
          name: this.xName,
          nameTextStyle: {
            fontSize: 14,
            fontFamily: "Microsoft YaHei",
            color: "#fbd101"
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#fff"
            }
          }
        },
        yAxis: {
          splitLine: { show: false }, //去除网格线
          axisLabel: {
            textStyle: {
              color: "#fff"
            }
          },
          name: this.yName,
           nameTextStyle: {
            fontSize: 14,
            fontFamily: "Microsoft YaHei",
            color: "#fbd101"
          },
        },
        series: [
          {
            name: this.xName,
            type: "bar",
            data: this.chartYdata,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "rgba(43,205,222,1)" },
                  { offset: 0.5, color: "rgba(43,205,222,0.4)" },
                  { offset: 1, color: "rgba(43,205,222,0)" }
                ])
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