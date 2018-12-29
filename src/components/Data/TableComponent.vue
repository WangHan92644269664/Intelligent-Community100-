<template>
  <div>
    <div class="report-con">
      <h5>待办事项</h5>
      <ul class="report">
      <li v-for="(item,index) in report" :key="index">
        <span class="report-data">{{item.date}}</span>
        <span>{{item.info}}</span>
      </li>
    </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "EchartsComponents",
  props: {},
  data() {
    return {
      report: [
        {
          date: "2018-12-12",
          info: "您有一条新公告"
        },
        {
          date: "2016-05-02",
          info: "您有一条新公告"
        },
        {
          date: "2016-05-04",
          info: "您有一条新公告"
        },
        {
          date: "2016-05-01",
          info: "您有一条新公告"
        },
        {
          date: "2016-05-08",
          info: "您有一条新公告"
        },
        {
          date: "2016-05-06",
          info: "您有一条新公告"
        },
        {
          date: "2016-05-07",
          info: "您有一条新公告"
        },
        {
          date: "2016-05-07",
          info: "您有一条新公告"
        },
        {
          date: "2016-05-07",
          info: "您有一条新公告"
        },
        {
          date: "2016-05-07",
          info: "您有一条新公告"
        }
      ]
    };
  },
  methods: {},
  computed: {},
  mounted: function() {
    const vm = this;
    vm.$nextTick(() => {
      //   vm.drawChart();
    });
  },
  created: () => {}
};
</script>

<style scoped>
ul,
li {
  list-style: none;
  color: #fff;
}

li {
  text-align: left;
  margin-top: 3%;
  padding-bottom: 3%;
  border-bottom:1px solid #334171;
}
li span {
  display: inline-block;
}
.report-con{
  max-height: 260px;
  overflow-y: auto;
}
.report-data {
  background: orange;
  padding: 0 10px;
  border-radius: 15px;
}
.report-con h5{
  margin:0 auto;
  color:#fff;
  text-align: left;
  padding-left:8%;
  background:rgba(17,38,109,.5);
  padding:10px 0 10px 3%;
  width:100%;
  position:absolute;
  top:0;
}
.report{
  margin-top:48px;
}
/* 滚动条美化 */
::-webkit-scrollbar {
  width: 14px;
  height: 14px;
}
 
::-webkit-scrollbar-track,
::-webkit-scrollbar-thumb {
  border-radius: 999px;
  border: 5px solid transparent;
}
 
::-webkit-scrollbar-track {
  box-shadow: 1px 1px 5px rgba(0,0,0,.2) inset;
}
 
::-webkit-scrollbar-thumb {
  min-height: 20px;
  background-clip: content-box;
  box-shadow: 0 0 0 5px rgba(0,0,0,.2) inset;
}
 
::-webkit-scrollbar-corner {
  background: transparent;
}

</style>