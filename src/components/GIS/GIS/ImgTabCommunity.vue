<template>
  <div>
    <div class="main-tab">
      <el-col class="left" :span="6" style="padding:0;">
        <el-col style="padding:0;" :span="24" v-for="(item,index) in imgData" :key="index">
          <div @click="imgTab1(index)" class="small-view-area-L">
            <img :src="item.imgSrc" alt>
          </div>
        </el-col>
      </el-col>
      <el-col class="right" :span="18">
        <div class="large-view" style>
          <div class="large-view-area">
            <img src="../../../assets/images/gis/street/1.png" alt>
          </div>
        </div>
        <div class="small-view">
          <el-col :span="8" v-for="(item,index) in imgData2" :key="index">
            <div @click="imgTab(index)" class="small-view-area">
              <img :src="item.imgSrc" alt>
              <p></p>
            </div>
          </el-col>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgData: [
        {
          imgSrc: require("../../../assets/images/gis/community/1.png")
        },
        {
          imgSrc: require("../../../assets/images/gis/community/2.png")
        },
        {
          imgSrc: require("../../../assets/images/gis/community/3.png")
        },
        {
          imgSrc: require("../../../assets/images/gis/community/4.png")
        }
      ],
      imgData2: [
        {
          imgSrc: require("../../../assets/images/gis/community/5.png")
        },
        {
          imgSrc: require("../../../assets/images/gis/community/6.png")
        },
        {
          imgSrc: require("../../../assets/images/gis/community/7.png")
        }
      ]
    };
  },
  methods: {
    imgTab: function(index) {
      var img_src = $($(".small-view-area img")[index]).attr("src");
      console.log($($(".small-view-area img")[index]).attr("src"));
      $(".large-view-area img")[0].src = img_src;
    },
    imgTab1: function(index) {
      var img_src = $($(".small-view-area-L img")[index]).attr("src");
      console.log($($(".small-view-area-L img")[index]).attr("src"));
      $(".large-view-area img")[0].src = img_src;
    }
  }
};
</script>

<style scoped>
.main-tab {
  width: 100%;
  height: 100%;
}
.right {
  height: 100%;
  /* float: left; */
}
.large-view {
  height: 75.1%;
  padding: 0 20px 20px 20px;
}
.large-view img,
.small-view img {
  width: 100%;
  height: 100%;
}

.large-view-area {
  width: 100%;
  height: 100%;
  border: 6px solid #000;
}
.small-view {
  padding: 0 5px;
  height: 25%;
  margin: 0;
}
.small-view .el-col {
  height: 100%;
}
.small-view-area {
  width: 90%;
  height: 100%;
  border: 1px solid rgba(0,0,0,0);
  margin: 0 auto;
}
.small-view-area:hover{
     border: 1px solid #000;
}
.small-view-area img {
  height: 88%;
}
.left {
  height: 100%;
}
.left .el-col {
  height: 25%;
}
.left .small-view-area-L {
  width: 90%;
  height: 100%;
  border: 1px solid rgba(0,0,0,0);
  margin: 0 auto;
}
.left .small-view-area-L:hover {
  border: 1px solid #000;
}
.left .small-view-area-L img {
  width: 100%;
  height: 88%;
}
</style>
