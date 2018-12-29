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
        color: ["#d2247b", "#00a8ff"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        grid: {
          left: "10%",
          right: "35%",
          top: "26%",
          bottom: "16%",
          containLabel: true
        },
        series: [
          {
            type: "pie",
            name: "百分比",
            center: ["50%", "53%"],
            radius: ["90%", "40%"],
            label: {
              normal: {
                textStyle: {
                  fontSize: 14
                }
              }
            },

            data: [
              {
                name: "女性比例",
                value: 1
              },
              {
                name: "男性比例",
                value: 10
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
  background: url("../../assets/images/data/bili_bg.png") no-repeat;
  background-size: 100% 100%;
}
</style>