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
    GISAreaData: {
      type: Array,
      default: () => []
    },
    GISAreaXdata: {
      type: Array,
      default: () => []
    },
    areaTitleColor: {
      type: String,
      default: () => ""
    },
    normalColor: {
      type: String,
      default: () => ""
    },
    areaTitle: {
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
        // backgroundColor: "#05224d",
        tooltip: {
          trigger: "axis"
        },
        grid: {
          top: "8%",
          left: "1%",
          right: "1%",
          bottom: "8%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLine: {
              //坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: "#233e64"
              }
            },
            axisLabel: {
              //坐标轴刻度标签的相关设置
              textStyle: {
                color: "#6a9cd5",
                margin: 15
              }
            },
            splitLine:{
                show:true
            },
            axisTick: { show: false },
            data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月","八月","九月","十月","十一月","十二月"]
          }
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              show: true,
              lineStyle: {
                color: "#233e64"
              }
            },
            axisLine: { show: false },
            axisLabel: {
              margin: 20,
              textStyle: {
                color: "#6a9cd5"
              }
            },
            splitLine:{
                show:true
            },
            axisTick: { show: false }
          }
        ],
        series: [
          {
            name: "异常流量",
            type: "line",
            smooth: true, //是否平滑曲线显示
            // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
            symbolSize: 0,

            lineStyle: {
              normal: {
                color: "rgba(156,39,176,0)" // 线条颜色
              }
            },
            areaStyle: {
              //区域填充样式
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。

                color: "rgba(156,39,176,0.55)",
                shadowColor: "rgba(156,39,176,0.6)", //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              }
            },
            data: [40,30,40,30,40,30,40,30,50,30,40,30,50]
          },
          {
            name: "异常流量",
            type: "line",
            smooth: true, //是否平滑曲线显示
            // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
            symbolSize: 0,

            lineStyle: {
              normal: {
                color: "rgba(245,0,87,0)" // 线条颜色
              }
            },
            areaStyle: {
              //区域填充样式
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。

                color: "rgba(245,0,87,0.6)",
                shadowColor: "rgba(245,0,87,0.6)", //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              }
            },
            data: [30,40,30,50,30,40,30,50,30,40,30,50]
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