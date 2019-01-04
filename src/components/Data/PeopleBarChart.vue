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
    yName: {
      type: String,
      default: () => ""
    },
    xName: {
      type: String,
      default: () => ""
    },
    colorZero: {
      type: String,
      default: () => ""
    },
    colorHalf: {
      type: String,
      default: () => ""
    },
    colorAll: {
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
        grid: {
          top: "9%",
          left: "3%",
          right: "9%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: this.chartData,
            axisLine: {
              show: false
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
              show: true,
              textStyle: {
                color: "#00c7ff"
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              formatter: "{value}"
            },
            name: this.yName,
            nameTextStyle: {
              fontSize: 11,
              fontFamily: "Microsoft YaHei",
              color: "#fbd101"
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#fff",
                width: 1,
                type: "solid"
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "#063374"
              }
            }
          }
        ],
        series: [
          {
            type: "bar",
            data: this.chartYdata,
            //barWidth: 50, //柱子宽度
            //barGap: 1, //柱子之间间距
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: this.colorZero
                  },
                  { offset: 0.5, color: this.colorHalf },
                  {
                    offset: 1,
                    color: this.colorAll
                  }
                ]),
                opacity: 1
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