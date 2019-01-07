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
    roseData: {
      type: Array,
      default: () => []
    },
    legendData: {
      type: Array,
      default: () => []
    },
    roseColors: {
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
        color: this.roseColors,
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "right",
          y: "top",
          data: this.legendData,
          textStyle:{
            color:'#fff'
          }
        },
        calculable: true,
        series: [
          {
            name: "面积模式",
            type: "pie",
            radius: [30, 110],
            center: ["50%", "55%"],
            roseType: "area",
            data: this.roseData
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