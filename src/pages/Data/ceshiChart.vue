<template>
  <div>
    <div class="charts">
      <pie :id="id" :option="option"></pie>
    </div>
  </div>
</template>
 
<script>
import pie from "../../components/Data/Pie3DChart";
export default {
  components: {
    pie
  },
  data() {
    return {
      id: "test",
      option: {
        chart: {
          type: "pie", //饼图
          options3d: {
            enabled: true, //使用3d功能
            alpha: 60, //延y轴向内的倾斜角度
            beta: 0
          }
        },
        title: {
          text: "测试用" //图表的标题文字
        },
        subtitle: {
          text: "" //副标题文字
        },

        plotOptions: {
          pie: {
            allowPointSelect: true, //每个扇块能否选中
            cursor: "pointer", //鼠标指针
            depth: 35, //饼图的厚度
            dataLabels: {
              enabled: true //是否显示饼图的线形tip
            }
          }
        },
        series: [
          {
            type: "pie",
            name: "测试用1", //统一的前置词,非必须
            data: [
              ["测试1", 12], //模块名和所占比，也可以{name: '测试1',y: 12}
              ["测试2", 23],
              ["测试3", 19],
              ["测试4", 29]
            ]
          }
        ]
      }
    };
  }
};
</script>
 
<style scoped>
</style>
