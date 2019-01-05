<template>
  <div>
    <div class="chartHeight" :id="id" :option="option"></div>
  </div>
</template>
<script>
import HighCharts from "highcharts";
export default {
  props: {
    id: {
      type: String
    },
    //option 是图表的配置数据
    option: {
      type: Object
    }
  },
  mounted() {
    HighCharts.chart(this.id, this.option);
     const vm = this;
      // 基于准备好的dom，初始化echarts实例
      var myChart = HighCharts.chart(this.id, this.option);
    vm.$nextTick(() => {
      vm.drawChart();
    });
  },
  methods: {
    drawChart() {
      const vm = this;
      // 基于准备好的dom，初始化echarts实例
      var myChart = HighCharts.chart(this.id, this.option);
    }
  },
  created() {}
};
</script>
 
<style scoped>
/* 容器 */
.chartHeight {
  height: 100%;
}
</style>
