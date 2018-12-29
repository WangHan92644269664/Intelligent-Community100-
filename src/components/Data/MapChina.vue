<template>
  <div>
    <div class="mapHeight" style="width:100%;" ref="echarts"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import "echarts/map/js/china.js";
export default {
  name: "mapChina",
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
        // title: {
        //   text: "阴阳师与王者荣耀贴吧用户区域分布",
        //   left: "center"
        // },
        tooltip: {
          trigger: "item"
        },
        // legend: {
        //   orient: "vertical",
        //   left: "left",
        //   data: ["王者荣耀", "阴阳师"]
        // },
        visualMap: {
          min: 0,
          max: 100,
          left: "left",
          top: "bottom",
          text: ["高", "低"],
          calculable: true,
          inRange: {
            color: ["#033379"]
          },
          textStyle: {
            color: "#fff"
          },
          show: false
        },

        series: [
          {
            name: "类型一",
            type: "map",
            mapType: "china",
            roam: true,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  textStyle: {
                    color: "#f4e925"
                  }
                },
                borderColor: "#3fdaff", //边界线颜色
                borderWidth: 1, //边界线大小
                shadowColor: "rgba(63,218,255,0.5)",
                shadowBlur: 20,
                areaColor: "transparent" //地区背景颜色
              },
              emphasis: {
                //选中或者悬浮状态
                label: {
                  show: true,
                  textStyle: {
                    color: "#fff" //选中或者悬浮字体颜色
                  }
                },
                areaColor: "#2b91b7" //选中或者悬浮区域颜色
              }
            },
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            data: [
              {
                name: "北京",
                value: 6.8
              },
              {
                name: "天津",
                value: 1.6
              },
              {
                name: "上海",
                value: 4.7
              },
              {
                name: "重庆",
                value: 2.5
              },
              {
                name: "河北",
                value: 3.6
              },
              {
                name: "河南",
                value: 4.5
              },
              {
                name: "云南",
                value: 1.1
              },
              {
                name: "辽宁",
                value: 3.1
              },
              {
                name: "黑龙江",
                value: 2.1
              },
              {
                name: "湖南",
                value: 2.9
              },
              {
                name: "安徽",
                value: 2.9
              },
              {
                name: "山东",
                value: 6.6
              },
              {
                name: "新疆",
                value: 0.5
              },
              {
                name: "江苏",
                value: 8.3
              },
              {
                name: "浙江",
                value: 7.6
              },
              {
                name: "江西",
                value: 2.3
              },
              {
                name: "湖北",
                value: 3.6
              },
              {
                name: "广西",
                value: 2.0
              },
              {
                name: "甘肃",
                value: 0.6
              },
              {
                name: "山西",
                value: 1.7
              },
              {
                name: "内蒙古",
                value: 0.9
              },
              {
                name: "陕西",
                value: 2.1
              },
              {
                name: "吉林",
                value: 1.1
              },
              {
                name: "福建",
                value: 4.4
              },
              {
                name: "贵州",
                value: 1.0
              },
              {
                name: "广东",
                value: 12.6
              },
              {
                name: "青海",
                value: 0.1
              },
              {
                name: "西藏",
                value: 0.2
              },
              {
                name: "四川",
                value: 4.7
              },
              {
                name: "宁夏",
                value: 0.3
              },
              {
                name: "海南",
                value: 0.6
              },
              {
                name: "台湾",
                value: 0.3
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
.mapHeight {
  height: 100%;
}
</style>