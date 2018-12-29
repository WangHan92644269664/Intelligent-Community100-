<template>
  <div>
    <div class="content" id="content">
      <div class="title">
        <h2 class="gis-title">GIS 地图</h2>
      </div>
      <div class="left-con">
        <GisLeft/>
      </div>
      <div class="building">
        <div class="building-first">
          <img src="../../assets/images/gis/1.png" alt>
          <div
            class="building-border"
            @mouseover="buildHover"
            @mouseout="buildOut"
            @click="buildClick"
          ></div>
        </div>
      </div>
      <div class="peopleInfo">
        <img src="../../assets/images/gis/info.png" alt>
        <div class="seePeople"></div>
        <div class="info-cancel" @click="cancelInfo"></div>
      </div>
      <div class="secondInfo">
        
      </div>
      <div class="big-data">大数据</div>
      <div class="other-handle">
        <ul>
          <li>距离测量</li>
          <li>面积测量</li>
          <li>地图重载</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import GisLeft from "../../components/GIS/GisLeft";
export default {
  name: "Gis",
  data() {
    return {
      screenHeight: document.documentElement.clientHeight //屏幕高度
    };
  },
  components: { GisLeft },
  mounted() {
    var _this = this;
    //页面加载时赋值id全屏高度
    var oIframe = document.getElementById("content");
    oIframe.style.height = document.documentElement.clientHeight + "px";
    // 加载时echarts的高度
    window.onresize = function() {
      // 定义窗口大小变更通知事件
      _this.screenHeight = document.documentElement.clientHeight; //窗口高度
      console.log(_this.screenHeight);
    };
    console.log(_this.screenHeight);
  },
  watch: {
    screenHeight: function(val) {
      //监听屏幕高度变化
      var oIframe = document.getElementById("content");
      oIframe.style.height = Number(val) + "px"; //'120'是页面布局调整，可去除
    }
  },
  created() {},
  methods: {
    buildHover() {
      $(".building-first img").css("opacity", 1);
    },
    buildOut() {
      $(".building-first img").css("opacity", 0);
    },
    buildClick() {
      $(".peopleInfo").css("display",'block');
    },
    cancelInfo(){
      $(".peopleInfo").css("display",'none');
    }
  }
};
</script>

<style scoped>
#content {
  width: 100%;
  height: 100%;
  background: url("../../assets/images/gis/bg.png") no-repeat;
  background-size: 100% 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}
.title {
  margin: 0 auto;
  text-align: center;
  width: 100%;
}
.gis-title {
  color: #fff;
  width: 400px;
  display: inline-block;
  background-color: #ff7c00;
  padding: 10px 0;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
.left-con {
  height: 100%;
  width: 20%;
  position: absolute;
  top: 0;
}
.left-con div {
  height: 100%;
}
.big-data {
  color: #fff;
  position: absolute;
  right: 0;
  background-color: #ff7c00;
  padding: 4px 30px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}
.other-handle {
  color: #fff;
  position: absolute;
  right: 0;
  bottom: 10%;
}
.other-handle ul li {
  list-style: none;
  float: left;
  background: #0d9bf2;
  margin-right: 10px;
  padding: 4px 20px;
}
.building-first {
  position: absolute;
  bottom: 28%;
  left: 38%;
  width: 20%;
  height: 10%;
}
.building-first img {
  width: 100%;
  opacity: 0;
}
.building-border {
  position: absolute;
  top: 50%;
  width: 270px;
  height: 80px;
  border: 1px solid green;
  transform: rotate(21deg);
  -ms-transform: rotate(21deg);
  /* Internet Explorer 9*/
  -moz-transform: rotate(21deg);
  /* Firefox */
  -webkit-transform: rotate(21deg);
  /* Safari 和 Chrome */
  -o-transform: rotate(21deg);
}

/* 点击楼层弹出 */
.peopleInfo {
  display:none;
  position: absolute;
  left: 50%; /* 定位父级的50% */
  top: 50%;
  transform: translate(-50%, -50%); /*自己的50% */
}
.info-cancel{
  width:40px;
  height: 40px;
  position: absolute;
  top:10px;
  right: 20px;
}
.seePeople{
  position: absolute;
  width:13%;
  height: 200px;
  /* background:green; */
  top:20px;
}
</style>
