<template>
  <div>
    <div class="chartHeight" style="width:100%;" ref="echarts"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "EchartsComponents",
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
      var colors = ["rgba(0,119,255,1)", "rgba(0,119,255,.5)"];
      var data1 = [
        1,
        2,
        1,
        1,
        1,
        1,
        1,
        
      ];
      var total = 208;
      var addNum = 30;
      var data2 = [87, 46, 129, 174, 45];
      var xData = [
        "周一",
        "周二",
        "周三",
        "周四",
        "周五",
        "周六",
        "周日",
      ];
      // 绘制图表
      myChart.setOption({
        backgroundColor: "#fff",
        title: {
          text: "上月车辆异常预警次数",
          textStyle: {
            fontSize: "15",
            color: "rgba(240,22,109,1)"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            textStyle: {
              color: "#fff"
            }
          }
        },
        grid: {
          top: "40%",
          right: "2%",
          bottom: "10%",
          left: "5%"
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            axisLine: {
              lineStyle: {
                color: "#000"
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitArea: {
              show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                fontSize: 10
              }
            },
            axisLine: {
              show: false
            },
            data: xData
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "",
            position: "left",
            axisLine: {
              show: false,
              lineStyle: {
                color: "#000"
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false,
              formatter: "{value} "
            }
          }
        ],
        series: [
          {
            name: "预警次数",
            type: "bar",
            barWidth:15,
            itemStyle: {
              barBorderRadius: 2,
              color: function(params) {
                var colorList = [
                  "rgba(240,22,109,1)",
                  "rgba(240,22,109,.5)",
                  "rgba(240,22,109,1)",
                  "rgba(240,22,109,.5)",
                  "rgba(240,22,109,1)",
                  "rgba(240,22,109,.5)",
                  "rgba(240,22,109,1)"
                ];
                return colorList[params.dataIndex];
              }
            },
            data: data1
          },
          {
            // value: total,
            name: "全年/上月",
            type: "pie",
            radius: ["20%", "35%"],
            color: ["#ff0000", "#00EE76"],
            center: ["73%", "20%"],
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            label: {
              normal: {
                position: "center"
              }
            },
            data: [
              {
                name: "预警次数",
                value: addNum,
                label: {
                  normal: {
                    formatter: "{d} %",
                    textStyle: {
                      fontSize: 12
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    color: "rgba(240,22,109,1)"
                  },
                  emphasis: {
                    color: "rgba(240,22,109,1)"
                  }
                }
              },
              {
                name: "正常次数",
                value: "100",
                label: {
                  normal: {
                    formatter: "全年/上月",
                    textStyle: {
                      color: "#555",
                      fontSize: 10
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    color: "rgba(240,22,109,.5)"
                  },
                  emphasis: {
                    color: "rgba(240,22,109,.5)"
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

<style scoped>
.chartHeight {
  height: 100%;
}
</style>