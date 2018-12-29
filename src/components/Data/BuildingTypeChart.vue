<template>
  <div>
    <div class="chartHeight" style="width:100%;" ref="echarts"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  props: {},
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
         tooltip: {
          trigger: "axis"
        },
        xAxis: {
          data: ["自建", "商务楼", "商住", "公园", "景点", "街道办", "活动楼"],
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          },
          splitLine: { show: false } //去除网格线
        },
        yAxis: {
          splitLine: { show: false }, //去除网格线
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = [
                    "rgba(1,119,255,0.5)",
                    "rgba(1,119,255,1)",
                    "rgba(1,119,255,0.5)",
                    "rgba(1,119,255,1)",
                    "rgba(1,119,255,0.5)",
                    "rgba(1,119,255,1)",
                    "rgba(1,119,255,0.5)"
                  ];
                  return colorList[params.dataIndex];
                }
              }
            }
          },
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "line",
            symbol: "circle",
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#ff9501",
                lineStyle: {
                  color: "#ff9501",
                  width: 2
                }
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
  background: url("../../assets/images/data/bili_bg.png") no-repeat;
  background-size: 100% 100%;
}
</style>