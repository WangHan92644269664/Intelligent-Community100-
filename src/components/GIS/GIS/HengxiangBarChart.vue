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
      // 绘制图表
      var data = [70, 34, 60, 78];
      var titlename = [
        "南街",
        "北街",
        "西街",
        "东街"
      ];
      var valdata = [683, 234, 234, 523];
      var myColor = ["#df468c", "#12c6ad", "#3983fe", "#aa00ff", "#8B78F6"];

      myChart.setOption({
        title: {
            text:'本周社区非法占用主占道',
            textStyle:{
                color:'#35d3bc'
            }
        },
        xAxis: {
          show: false,
          data:''
        },
        yAxis: [
          {
            show: true,
            data: titlename,
            inverse: true,
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: "#ccc",
              formatter: function(value, index) {
                return [
                  "{lg|" + (index + 1) + "}" + "{title|" + value + "} "
                ].join("\n");
              },
              rich: {
                lg: {
                  backgroundColor: "#339911",
                  color: "#fff",
                  borderRadius: 15,
                  align: "center",
                  width: 15,
                  height: 15
                }
              }
            }
          },
          {
            show: true,
            inverse: true,
            data: valdata,
            axisLabel: {
              textStyle: {
                fontSize: 12,
                color: "#cfd8dd"
              }
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "条",
            type: "bar",
            yAxisIndex: 0,
            data: data,
            barWidth: 20,
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                color: function(params) {
                  var num = myColor.length;
                  return myColor[params.dataIndex % num];
                }
              }
            },
            label: {
              normal: {
                show: true,
                position: "inside",
                formatter: "{c}%"
              }
            }
          },
          {
            name: "框",
            type: "bar",
            yAxisIndex: 1,
            barGap: "-100%",
            data: [100, 100, 100, 100],
            barWidth: 20,
            itemStyle: {
              normal: {
                color: "rgba(169,169,169,.3)",
                borderWidth: 3,
                barBorderRadius: 15
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