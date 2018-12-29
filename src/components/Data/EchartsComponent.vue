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
    },
    barLeftColor: {
      type: String,
      default: () => ""
    },
    barRightColor: {
      type: String,
      default: () => ""
    },
    circleLeftColor: {
      type: String,
      default: () => ""
    },
    circleRightColor: {
      type: String,
      default: () => ""
    },
    circleBorderColor: {
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
        tooltip: {
          trigger: "item"
        },
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
            fontSize: 11,
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
          },
          axisLine:{
            lineStyle:{
              color:'#fff',
            }
          }
        },
        yAxis: {
          axisTick: {
            show: false
          },
          splitLine: { show: false }, //去除网格线
          axisLabel: {
            textStyle: {
              color: "#fff"
            }
          },
          axisLine:{
            lineStyle:{
              color:'#fff'
            }
          },
          name: this.yName,
          nameTextStyle: {
            fontSize: 14,
            fontFamily: "Microsoft YaHei",
            color: "#fbd101"
          }
        },
        series: [
          {
            type: "bar",
            barWidth: 30,
            itemStyle: {
              normal: {
                borderWidth: 1,
                borderColor: 'none', //柱体边框颜色
                barBorderRadius: 12,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  { offset: 0, color: this.barLeftColor }, //柱体渐变色 左
                  { offset: 1, color: this.barRightColor } //柱体渐变色右
                ])
              },
              emphasis: {
                barBorderRadius: 13,
                shadowBlur: 18,
                shadowColor: "rgba(218,170, 58, 0.7)"
              }
            },
            data: this.chartYdata
          },
          {
            name: "a",
            tooltip: {
              show: false
            },
            type: "pictorialBar",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  { offset: 0, color: this.circleLeftColor }, //圆柱盖子渐变色 左
                  { offset: 1, color: this.circleRightColor } //圆柱盖子渐变色 右
                ]),
                borderWidth: 1,
                borderColor: this.circleBorderColor //圆柱盖子的颜色
              }
            },
            symbol: "circle",
            symbolSize: ["28", "15"],
            symbolPosition: "end",
            symbolOffset: [0, '-5%'],
            data: this.chartYdata,
            z: 3
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