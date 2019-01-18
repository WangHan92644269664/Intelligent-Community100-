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
        1,
        1,
        1,
        1,
        1,
        2,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        1,
        1,
        1,
        1,
        1
      ];
      var total = 208;
      var addNum = 30;
      var data2 = [87, 46, 129, 174, 45];
      var xData = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31"
      ];
      // 绘制图表
      myChart.setOption({
        backgroundColor: "#fff",
        title: {
          text: "上月车辆异常预警次数",
          textStyle: {
            fontSize: "15",
            color:"rgba(0,119,255,1)"
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
          right: "10%",
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
            itemStyle: {
              barBorderRadius: 2,
              color: function(params) {
                var colorList = [
                  "rgba(0,119,255,1)",
                  "rgba(0,119,255,.5)",
                  "rgba(0,119,255,1)",
                  "rgba(0,119,255,.5)",
                  "rgba(0,119,255,1)",
                  "rgba(0,119,255,.5)",
                  "rgba(0,119,255,1)",
                  "rgba(0,119,255,.5)",
                  "rgba(0,119,255,1)",
                  "rgba(0,119,255,.5)",
                  "rgba(0,119,255,1)",
                  "rgba(0,119,255,.5)",
                  "rgba(0,119,255,1)",
                  "rgba(0,119,255,.5)",
                  "rgba(0,119,255,1)",
                  "rgba(0,119,255,.5)",
                  "rgba(0,119,255,1)",
                  "rgba(0,119,255,.5)",
                  "rgba(0,119,255,1)",
                  "rgba(0,119,255,.5)",
                  "rgba(0,119,255,1)",
                  "rgba(0,119,255,.5)",
                  "rgba(0,119,255,1)",
                  "rgba(0,119,255,.5)",
                  "rgba(0,119,255,1)",
                  "rgba(0,119,255,.5)",
                  "rgba(0,119,255,1)",
                  "rgba(0,119,255,.5)",
                  "rgba(0,119,255,1)",
                  "rgba(0,119,255,.5)",
                  "rgba(0,119,255,1)",
                  "rgba(0,119,255,.5)",
                  "rgba(0,119,255,1)",
                  "rgba(0,119,255,.5)",
                  "rgba(0,119,255,1)",
                  "rgba(0,119,255,.5)"
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
                    color: "rgba(0,119,255,1)"
                  },
                  emphasis: {
                    color: "rgba(0,119,255,1)"
                  }
                }
                 
              },
              {
                name: "正常次数",
                value:'100',
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
                    color: "rgba(0,119,255,.5)"
                  },
                  emphasis: {
                    color: "rgba(0,119,255,.5)"
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