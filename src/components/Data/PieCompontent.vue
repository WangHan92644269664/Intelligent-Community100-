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
        title: {
          text: "重点事件比例分布",
          textStyle: {
            color: "#feffff",
            fontSize: "18"
          },
          x: "left",
          padding:[20,0,0,30]
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "right",
          top: "middle",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
          textStyle: {
            color: "#fff"
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "待延期审核" },
              { value: 310, name: "待结案" },
              { value: 234, name: "待核查" },
              { value: 135, name: "待处理" },
              { value: 1548, name: "待派遣" },
              { value: 1548, name: "待接收" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
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

<style>
.chartHeight {
  height: 100%;
}
</style>