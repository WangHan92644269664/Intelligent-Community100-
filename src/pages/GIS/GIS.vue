<template>
  <el-container style>
    <!--主体内容的侧边栏-->
    <el-aside width="200px" style="height: 100%">
      <!--左侧侧边栏组件-->
      <GISAside></GISAside>
    </el-aside>
    <el-container id="content">
      <!--子路由显示的地方-->
      <router-view/>
    </el-container>
  </el-container>
</template>

<script>
import GISAside from "../../components/GIS/GISAside";
export default {
  name: "Gis",
  data() {
    return {
      screenHeight: document.documentElement.clientHeight //屏幕高度
    };
  },
  components: {
    GISAside
  },
  mounted() {
    var _this = this;
    //页面加载时赋值id全屏高度
    var oIframe = document.getElementById("content");
    oIframe.style.height = document.documentElement.clientHeight - 70 + "px";
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
      oIframe.style.height = Number(val) - 70 + "px"; //'120'是页面布局调整，可去除
    }
  }
};
</script>
<style scoped>
#content{
  margin-top:70px;
  padding:30px;
  height: 100%;
  width:100%;
  background:#f4f4f4;
}
</style>
