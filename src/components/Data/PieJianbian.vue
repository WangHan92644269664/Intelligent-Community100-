<template>
  <div>
    <div class="chartHeight" style="width:100%;" ref="echarts"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  props: {
    pieTitle: {
      type: String,
      default: () => ""
    },
    pieData: {
      type: Array,
      default: () => []
    },
    pieLegendData: {
      type: Array,
      default: () => []
    },
    pieColors: {
      type: Array,
      default: () => []
    },
    jianbianColor: {
      type: Array,
      default: () => []
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
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: ["直接访问"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: 335,
                name: "直接访问",
                itemStyle: {
                  normal: {
                    color: {
                      type: "linear",
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: this.jianbianColor,
                      globalCoord: false // 缺省为 false
                    }
                  },
                  emphasis: {
                    color: {
                      type: "linear",
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [
                        {
                          offset: 0,
                          color: "rgba(0,88,234,0)" // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "rgba(0,88,234,1)" // 100% 处的颜色
                        }
                      ],
                      globalCoord: false // 缺省为 false
                    }
                  }
                }
              }
            ]
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

<style>
.chartHeight {
  height: 100%;
}
</style>