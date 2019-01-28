<template>
  <div class="content" id="content" ref="homePage">
    <div class="header">
      <el-col class="left" :span="8">
        <img src="../assets/images/systemType/nav_logo.png" alt>
        <span>智慧社区一体化平台</span>
      </el-col>
      <el-col :span="16">
        <div class="right">
          <img src="../assets/images/systemType/touxiang.jpg" alt>
          <span>管理员：王晗</span>
          <button>注销</button>
        </div>
      </el-col>
    </div>
    <div class="auto-div">
      <el-col style="height:50%" :span="3"></el-col>
      <el-col class="top-con" :span="18">
        <!-- <div > -->
        <el-col :span="8" v-for="(item,index) in enterData" :key="index">
          <div
            class="enter-con"
            @click="change(item.pathData)"
            @mouseover="hover(index)"
            @mouseout="out(index)"
          >
            <img :src="item.icon" alt>
            <p>{{item.name}}</p>
            <span></span>
          </div>
        </el-col>
        <!-- </div> -->
      </el-col>
      <el-col style="height:50%" :span="3"></el-col>
      <br>
      <div class="bottom-con">
        <el-col :span="6" v-for="(item,index) in enterData2" :key="index">
          <div
            @click="change2(item.pathData)"
            class="enter-con"
            @mouseover="hover2(index)"
            @mouseout="out2(index)"
          >
            <img :src="item.icon" alt>
            <p>{{item.name}}</p>
            <span></span>
          </div>
        </el-col>
      </div>
    </div>
  </div>
</template>

<script>
import Bus from "../assets/js/bus";
export default {
  name: "Data",
  data() {
    return {
      screenHeight: document.documentElement.clientHeight, //屏幕高度
      active: "",
      enterData: [
        {
          icon: require("../assets/images/systemType/1.png"),
          name: "安防平台",
          pathData: "/gis"
        },
        {
          icon: require("../assets/images/systemType/2.png"),
          name: "综治平台",
          pathData: "/zongzhi"
        },
        {
          icon: require("../assets/images/systemType/3.png"),
          name: "大数据平台",
          pathData: "/data"
        }
      ],
      enterData2: [
        {
          icon: require("../assets/images/systemType/4.png"),
          name: "党建平台",
          pathData: "/dangjian"
        },
        {
          icon: require("../assets/images/systemType/5.png"),
          name: "网格化平台",
          pathData: "/grid"
        },
        {
          icon: require("../assets/images/systemType/6.png"),
          name: "政务平台",
          pathData: "/zhengwu"
        },
        {
          icon: require("../assets/images/systemType/7.png"),
          name: "工作平台",
          pathData: "working"
        }
      ]
    };
  },
  components: {},
  mounted() {
    var _this = this;
    //页面加载时赋值id全屏高度
    var oIframe = document.getElementById("content");
    oIframe.style.height = document.documentElement.clientHeight + "px";
    // 加载时echarts的高度
    window.onresize = function() {
      // 定义窗口大小变更通知事件
      _this.screenHeight = document.documentElement.clientHeight; //窗口高度
    };
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
    hover: function(index) {
      $(".top-con span")
        .eq(index)
        .css({
          width: "90px"
        });
    },
    out: function(index) {
      $(".top-con span")
        .eq(index)
        .css({
          width: "40px"
        });
    },
    hover2: function(index) {
      $(".bottom-con span")
        .eq(index)
        .css({
          width: "90px"
        });
    },
    out2: function(index) {
      $(".bottom-con span")
        .eq(index)
        .css({
          width: "40px"
        });
    },
    change(url) {
      this.$router.push({ path: url });
      Bus.$emit("activeIndex", url);
    },
    change2(url) {
      this.$router.push({ path: url });
      Bus.$emit("activeIndex", url);
    }
  }
};
</script>
<style>
.login-info .el-input__inner {
  height: 50px !important;
  border-radius: 5px;
}
</style>

<style scoped>
#content {
  width: 100%;
  height: 100%;
  background: url("../assets/images/systemType/bg.png") no-repeat;
  background-size: 100% 100%;
}
.header {
  height: 70px;
  width: 100%;
  background: rgba(5, 82, 149, 1);
}
.header .left {
  height: 70px;
  text-align: left;
  padding-left: 30px;
  line-height: 70px;
  color: rgba(253, 253, 253, 1);
  font-size: 28px;
}
.header .right {
  /* width:200px; */
  float: right;
  color: #fff;
  font-size: 14px;
  height: 70px;
  line-height: 70px;
}
.header .right img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 10px;
}
.header .right button {
  line-height: 28px;
  border-radius: 4px;
  border: none;
  outline: none;
  background: rgb(0, 119, 223);
  color: rgb(23, 35, 47);
  margin-left: 10px;
  margin-right: 50px;
  padding:0 10px;
}
.auto-div {
  height: 60%;
  width: 88%;
  margin: 0 auto;
  margin-top: 10%;
  position: relative;
}
.top-con {
  height: 50%;
}
.top-con .el-col {
  height: 100%;
  position: relative;
}
.bottom-con {
  height: 50%;
  margin: 0;
}
.bottom-con .el-col {
  height: 100%;
  position: relative;
}
.enter-con {
  cursor: pointer;
  padding-top: 15%;
  border-radius: 10px;
  width: 92%;
  height: 90%;
  background: -webkit-linear-gradient(
    rgba(0, 95, 177, 0.65),
    rgba(83, 74, 118, 0.65)
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    rgba(0, 95, 177, 0.65),
    rgba(83, 74, 118, 0.65)
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    rgba(0, 95, 177, 0.65),
    rgba(83, 74, 118, 0.65)
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(
    rgba(0, 95, 177, 0.65),
    rgba(83, 74, 118, 0.65)
  ); /* 标准的语法（必须放在最后） */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.enter-con:hover {
  width: 110%;
  height: 110%;
  background: -webkit-linear-gradient(
    rgb(0, 95, 177),
    rgb(83, 74, 118)
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    rgb(0, 95, 177),
    rgb(83, 74, 118)
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    rgb(0, 95, 177),
    rgb(83, 74, 118)
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(
    rgb(0, 95, 177),
    rgb(83, 74, 118)
  ); /* 标准的语法（必须放在最后） */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: show-big 0.15s;
  -webkit-animation: show-big 0.15s;
  /* 阴影 */
}
@keyframes show-big {
  from {
    width: 100%;
    height: 100%;
  }
  to {
    width: 110%;
    height: 110%;
  }
}
@-webkit-keyframes show-big {
  from {
    width: 100%;
    height: 100%;
  }
  to {
    width: 110%;
    height: 110%;
  }
}
.enter-con span {
  height: 4px;
  width: 40px;
  display: inline-block;
  background: #fff;
}
.enter-con p {
  color: #fff;
  font-size: 28px;
  margin: 0;
}
@media screen and (min-width: 1921px) {
  /* .enter-con{
    padding:30%
  } */
  .enter-con img {
    /* width: 30%; */
  }
  .enter-con:hover {
    padding-top: 30%;
    width: 110%;
    height: 110%;
    background: -webkit-linear-gradient(
      rgb(0, 95, 177),
      rgb(83, 74, 118)
    ); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(
      rgb(0, 95, 177),
      rgb(83, 74, 118)
    ); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(
      rgb(0, 95, 177),
      rgb(83, 74, 118)
    ); /* Firefox 3.6 - 15 */
    background: linear-gradient(
      rgb(0, 95, 177),
      rgb(83, 74, 118)
    ); /* 标准的语法（必须放在最后） */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
@media screen and (min-width: 2560px) {
  .enter-con {
    padding: 25%;
  }
  .enter-con img {
    /* width: 30%; */
  }
  .enter-con:hover {
    padding-top: 30%;
    width: 110%;
    height: 110%;
    background: -webkit-linear-gradient(
      rgb(0, 95, 177),
      rgb(83, 74, 118)
    ); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(
      rgb(0, 95, 177),
      rgb(83, 74, 118)
    ); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(
      rgb(0, 95, 177),
      rgb(83, 74, 118)
    ); /* Firefox 3.6 - 15 */
    background: linear-gradient(
      rgb(0, 95, 177),
      rgb(83, 74, 118)
    ); /* 标准的语法（必须放在最后） */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
@media screen and (max-height: 970px) {
  .enter-con img {
    width: 120px;
    height: 124px;
  }
  .enter-con {
    padding: 7%;
  }
  .enter-con:hover {
  }
}
@media screen and (max-height: 840px) {
  /* .enter-con{
    padding:30%
  } */
  .enter-con img {
    /* width: 30%; */
    width: 100px;
    height: 108px;
  }
  .enter-con {
    padding: 10%;
  }
  .enter-con:hover {
  }
}
@media screen and (max-height: 620px) {
  /* .enter-con{
    padding:30%
  } */
  .enter-con img {
    /* width: 30%; */
    /* width:100px;
    height: 108px; */
    width: 70px;
    height: 72px;
  }
  .enter-con {
    padding: 10%;
  }
  .enter-con p {
    font-size: 20px;
  }
  .enter-con span{
    height: 2px;
  }
  .enter-con:hover {
  }
}
</style>

