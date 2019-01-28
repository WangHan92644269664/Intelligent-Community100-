<template>
  <el-container>
    <div class="content">
      <div class="content-right">
        <div class="content-right-info">
          <div class="left-info">
            <leftInfo/>
          </div>
          <div class="title">
            <h2 class="gis-title">GIS 地图</h2>
          </div>

          <div class="building">
            <div class="building-first">
              <img src="../../../assets/images/gis/1.png" alt>
              <div
                class="building-border"
                @mouseover="buildHover"
                @mouseout="buildOut"
                @click="buildClick"
              ></div>
            </div>
          </div>
          <div class="peopleInfo">
            <h5>1号楼1、2、3、4单元</h5>
            <div class="alert1-top">
              <el-col v-for="(item,index) in buildingData" :key="index" :span="6">
                <div>
                  <img :src="item.imgUrl" alt @click="bottom(index)">
                </div>
              </el-col>
            </div>
            <div class="dialog-box dialog-box-3">
              <span class="triangle"></span>
              <div class="qipao">
                <el-col :span="6" v-for="(item,index) in qipaoData" :key="index">
                  <img :src="item.icon" alt @click="bottomInfo(index)">
                  <p>查勘人员状态</p>
                </el-col>
              </div>
            </div>

            <div class="info-cancel" @click="cancelInfo">X</div>
          </div>
          <div class="zhuhu">
            <h4>一号楼-1单元全部住户信息 <span @click="closeZhuhu">X</span></h4>
            <div class="zhuhu-left">
              <div class="door" v-for="(item,index) in doorData" :key="index">
                <el-col class="door-con" :span="6">
                  <span class="door-num">{{item.num}}</span>
                  <img :src="item.doorIcon" alt>
                  <p>{{item.id}}</p>
                </el-col>
              </div>
            </div>
            <div class="zhuhu-right">
              <div class="zhuhu-type">
                <div>
                  <img class="door-img-type" src="../../../assets/images/gis/map/door1.png" alt>
                  <span>正常
                    <br>(34)
                  </span>
                </div>
                <div>
                  <img class="door-img-type" src="../../../assets/images/gis/map/door2.png" alt>
                  <span>含暂住
                    <br>(5)
                  </span>
                </div>
                <div>
                  <img class="door-img-type" src="../../../assets/images/gis/map/door3.png" alt>
                  <span>无住户
                    <br>(1)
                  </span>
                </div>
                <div class="type4">
                  <img src="../../../assets/images/gis/map/user_num.png" alt>
                  <span>住户
                    <br>人数
                  </span>
                </div>
              </div>
              <div class="zhuhu-group">
                <h4>
                  0101住户人员户籍信息
                  
                </h4>
              </div>
            </div>
          </div>
          <div class="secondInfo"></div>
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
    </div>
  </el-container>
</template>
<script>
import leftInfo from "../../../components/GIS/GisLeft";
export default {
  name: "GISMap",
  props: {},
  components: { leftInfo },
  data() {
    return {
      buildingData: [
        {
          imgUrl: require("../../../assets/images/gis/map/building_icon.png")
        },
        {
          imgUrl: require("../../../assets/images/gis/map/building_icon.png")
        },
        {
          imgUrl: require("../../../assets/images/gis/map/building_icon.png")
        },
        {
          imgUrl: require("../../../assets/images/gis/map/building_icon.png")
        }
      ],
      qipaoData: [
        {
          icon: require("../../../assets/images/gis/map/icon1.png"),
          info: "查勘人员状态"
        },
        {
          icon: require("../../../assets/images/gis/map/icon2.png"),
          info: "查看实时监控"
        },
        {
          icon: require("../../../assets/images/gis/map/icon3.png"),
          info: "查看本周人流量"
        },
        {
          icon: require("../../../assets/images/gis/map/icon4.png"),
          info: "查看设备状态"
        }
      ],
      doorData: [
        {
          doorIcon: require("../../../assets/images/gis/map/door1.png"),
          num: 1,
          id: "0101"
        },
        {
          doorIcon: require("../../../assets/images/gis/map/door1.png"),
          num: 4,
          id: "0102"
        },
        {
          doorIcon: require("../../../assets/images/gis/map/door1.png"),
          num: 2,
          id: "0103"
        },
        {
          doorIcon: require("../../../assets/images/gis/map/door1.png"),
          num: 4,
          id: "0104"
        },
        {
          doorIcon: require("../../../assets/images/gis/map/door2.png"),
          num: 5,
          id: "0201"
        },
        {
          doorIcon: require("../../../assets/images/gis/map/door1.png"),
          num: 3,
          id: "0202"
        },
        {
          doorIcon: require("../../../assets/images/gis/map/door3.png"),
          num: 5,
          id: "0203"
        },
        {
          doorIcon: require("../../../assets/images/gis/map/door1.png"),
          num: 2,
          id: "0204"
        },
        {
          doorIcon: require("../../../assets/images/gis/map/door1.png"),
          num: 4,
          id: "0301"
        },
        {
          doorIcon: require("../../../assets/images/gis/map/door3.png"),
          num: 5,
          id: "0302"
        },
        {
          doorIcon: require("../../../assets/images/gis/map/door1.png"),
          num: 2,
          id: "0303"
        },
        {
          doorIcon: require("../../../assets/images/gis/map/door1.png"),
          num: 3,
          id: "0304"
        },
        {
          doorIcon: require("../../../assets/images/gis/map/door1.png"),
          num: 2,
          id: "0401"
        },
        {
          doorIcon: require("../../../assets/images/gis/map/door1.png"),
          num: 2,
          id: "0402"
        },
        {
          doorIcon: require("../../../assets/images/gis/map/door1.png"),
          num: 2,
          id: "0403"
        },
        {
          doorIcon: require("../../../assets/images/gis/map/door1.png"),
          num: 2,
          id: "0404"
        },
        {
          doorIcon: require("../../../assets/images/gis/map/door1.png"),
          num: 2,
          id: "0501"
        }
      ],
      groupData: [{}, {}]
    };
  },
  mounted() {},
  created() {},
  methods: {
    buildHover() {
      $(".building-first img").css("opacity", 1);
    },
    buildOut() {
      $(".building-first img").css("opacity", 0);
    },
    buildClick() {
      $(".peopleInfo").css("display", "block");
    },
    cancelInfo() {
      $(".peopleInfo").css("display", "none");
    },
    bottom(e) {
      if (e == 0) {
        $(".dialog-box").css("display", "block");
      }
    },
    closeZhuhu(){
      $(".zhuhu").css("display", "none");
    },
    bottomInfo(e){
      if (e == 0) {
        $(".zhuhu").css("display", "block");
        $(".peopleInfo").css("display", "none");
      }
    }
  }
};
</script>
<style>
</style>
<style scoped>
.content {
  width: 100%;
  height: 100%;
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
  background: url("../../../assets/images/gis/map/title_bg.png") no-repeat;
  padding: 10px 0;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
.left-con {
  height: 100%;
  width: 160px;
  /* position: absolute;
  top: 0; */
  float: left;
}
.left-con div {
  height: 100%;
}
.content-right {
  width: 100%;
  float: left;
  height: 100%;
}
.content-right-info {
  width: 100%;
  height: 100%;
  background: url("../../../assets/images/gis/bg.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
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
  /* border: 1px solid green; */
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
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: #b9bae5;
  width: 55%;
  height: 60%;
  display: none;
  position: absolute;
  left: 60%; /* 定位父级的50% */
  top: 50%;
  transform: translate(-50%, -50%); /*自己的50% */
}
.peopleInfo h5 {
  background: #055295;
  color: #fff;
  text-align: left;
  padding: 8px 30px;
  font-size: 14px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.info-cancel {
  width: 40px;
  height: 30px;
  line-height: 30px;
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 20px;
  color: #fff;
}
.seePeople {
  position: absolute;
  width: 13%;
  height: 200px;

  top: 20px;
}
.left-info {
  width: 20%;
  position: absolute;
  height: 100%;
}
.left-info div {
  height: 100%;
}
.alert1-top {
  height: 40%;
}
.alert1-top .el-col div {
  margin-top: 10%;
}
/* 气泡 */
.dialog-box {
  display: none;
  width: 85%;
  height: 30%;
  margin: 8% auto;
  border: 1px solid rgba(47, 47, 72, 0.5);
  position: relative;
  background-color: rgba(83, 138, 187, 0.5);
}

.dialog-box-3 .triangle {
  width: 0;
  height: 0;
  border-top: 18px solid transparent;
  border-right: 18px solid transparent;
  border-bottom: 18px solid rgba(47, 47, 72, 0.5);
  border-left: 18px solid transparent;
  position: absolute;
  top: -36px;
  left: 10px;
}
.dialog-box-3 .triangle:after {
  content: "";
  border-top: 18px solid transparent;
  border-right: 18px solid transparent;
  border-bottom: 18px solid rgba(83, 138, 187, 0.5);
  border-left: 18px solid transparent;
  position: absolute;
  top: -18px;
  left: -18px;
}

.qipao .el-col img {
  margin-top: 20px;
}
.qipao .el-col p {
  color: #fff;
}

/* 点击弹出住户信息 */

.zhuhu {
  display:none;
  width: 55%;
  height: 60%;
  position: absolute;
  top: 50%;
  left: 60%;
  background: #88bae5;
  transform: translate(-50%, -50%);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.zhuhu h4 {
  color: #fff;
  font-size: 18px;
  text-align: left;
  background: rgb(5, 82, 149);
  padding: 8px 20px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin: 0;
}
.zhuhu h4 span {
  color: #fff;
  display: block;
  float: right;
  cursor: pointer;
}
.zhuhu-left {
  padding-top: 5%;
  width: 40%;
  float: left;
  height: 100%;
  height: calc(100% - 40px);
  overflow: auto;
}
.zhuhu-left img {
  margin-top: 10px;
}
.zhuhu-right {
  width: 60%;
  float: left;
  height: calc(100% - 40px);
}
.zhuhu-left::-webkit-scrollbar {
  width: 0px;
}
.zhuhu-left::-webkit-scrollbar-track {
  background-color: red;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
}
.zhuhu-left::-webkit-scrollbar-thumb {
  background-color: green;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
}
.door-con {
  height: auto;
  position: relative;
}
.door-con img {
  margin-top: 20px;
}
.door-num {
  display: inline-block;
  width: 32px;
  height: 32px;
  position: absolute;
  top: 10px;
  left: 31%;
  color: #fff;
  background: url("../../../assets/images/gis/map/user_num.png") no-repeat;
}
.zhuhu-type div {
  float: left;
}
.zhuhu-type div span {
  display: inline-block;
  vertical-align: middle;
  height: 100%;
}
.door-img-type {
  width: 40px;
}
.type4 {
  height: 78px;
}
.type4 img {
  display: block;
  float: left;
  margin-top: 20px;
}
.type4 span {
  height: 100%;
  vertical-align: middle;
  display: block !important;
  float: right;
  margin-top: 14px;
}
.zhuhu-group {
  margin-top: 80px;
  width: 95%;
  height: calc(100% - 90px);
  background: rgba(44, 78, 177, 0.5);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.zhuhu-group h4 {
  background: rgb(35, 58, 142);
}
.zhuhu-group h4 span {
}
</style>
