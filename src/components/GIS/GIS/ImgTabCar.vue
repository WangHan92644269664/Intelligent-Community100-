<template>
  <div>
    <div class="large-view">
      <div class="large-view-area">
        <img src="../../../assets/images/gis/car/1.png" alt>
      </div>
    </div>
    <div class="small-view">
      <el-col :span="6" v-for="(item,index) in imgData" :key="index">
        <div @click="imgTab(index)" class="small-view-area">
          <img :src="item.imgSrc" alt>
          <p>{{item.imgInfo}}</p>
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
          imgSrc: require("../../../assets/images/gis/car/1.png"),
          imgInfo: "社区东门实时监控"
        },
        {
          imgSrc: require("../../../assets/images/gis/car/2.png"),
          imgInfo: "社区北门实时监控"
        },
        {
          imgSrc: require("../../../assets/images/gis/car/3.png"),
          imgInfo: "社区南门实时监控"
        },
        {
          imgSrc: require("../../../assets/images/gis/car/4.png"),
          imgInfo: "社区西门实时监控"
        }
      ]
    };
  },
  methods: {
    imgTab: function(index) {
      var img_src = $($(".small-view-area img")[index]).attr("src");
      console.log($($(".small-view-area img")[index]).attr("src"));
      $(".large-view-area img")[0].src = img_src;
    }
  }
};
</script>

<style scoped>
.large-view {
  height: 78%;
  padding: 0 20px 20px 0;
}
.large-view img,
.small-view img {
  width: 100%;
  height: 100%;
}
.small-view {
  height: 23%;
}
.large-view-area {
  width: 100%;
  height: 100%;
  border: 6px solid #000;
}
.small-view {
  padding: 0 5px;
}
.small-view .el-col {
  height: 100%;
}
.small-view-area {
  width: 90%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0);
  /* color: rgba(0, 119, 255, 1); */

  /* margin: 0 auto; */
}
.small-view-area img {
  height: 88%;
}
.small-view-area:hover {
  border: 1px solid #000;
  color: rgba(0, 119, 255, 1);
  font-weight: 600;
}
</style>
