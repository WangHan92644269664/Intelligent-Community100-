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
    circleData: {
      type: Array,
      default: () => []
    },
    pieColor: {
      type: Array,
      default: () => []
    },
    pieTitle: {
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
      var colorList = ["#00aed1", "#837ae7", "#f29200", "#00FEB5", "#7081DB", "#FDFEFF", "#2385E0"];
      myChart.setOption({
        
        tooltip: {
          trigger: "item",
          formatter: "{b}: {c} ({d}%)"
        },
        grid: {
          top: "1%",
          containLabel: true
        },
        series: [
          {
            type: "pie",
            radius: ["27%", "53%"],
            // roseType: 'radius',
            clockwise: false,
            z: 5,
            itemStyle: {
              normal: {
                color: function(params) {
                  // build a color map as your need.
                  return colorList[params.dataIndex];
                },
                shadowBlur: 20,
                shadowColor: "rgba(0, 0, 0, 0.3)"
              }
            },
            label: {
              normal: {
                formatter: "{d|{b}}\n{hr|}\n{d|({d}%)}",
                rich: {
                  b: {
                    fontSize: 12,
                    color: "#fff",
                    align: "left",
                    padding: 4
                  },
                  hr: {
                    //		                            borderColor: '#12EABE',
                    width: "100%",
                    borderWidth: 1,
                    height: 0
                  },
                  d: {
                    fontSize: 12,
                    color: "#fff",
                    align: "left",
                    padding: 1
                  },
                  c: {
                    fontSize: 12,
                    color: "#fff",
                    align: "center"
                    //		                            padding: 4
                  }
                }
              }
            },

            labelLine: {
              normal: {
                length: 22,
                length2: 0,
                lineStyle: {
                  width: 2
                }
              }
            },
            data: this.circleData
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