<template>
  <div>
    <div class="large-view">
      <div class="large-view-area">
        <img src="../../../assets/images/gis/zhian/1.png" alt>
      </div>
    </div>
    <div class="small-view">
      <el-col :span="6" v-for="(item,index) in imgData" :key="index">
        <div @click="imgTab(index)" class="small-view-area" >
          <img :src="item.imgSrc" alt>
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
          imgSrc: require("../../../assets/images/gis/zhian/1.png")
        },
        {
          imgSrc: require("../../../assets/images/gis/zhian/2.png")
        },
        {
          imgSrc: require("../../../assets/images/gis/zhian/3.png")
        },
        {
          imgSrc: require("../../../assets/images/gis/zhian/4.png")
        }
      ]
    }
  },
  methods:{
      imgTab:function(index){
       var img_src= $($('.small-view-area img')[index]).attr('src');
       console.log($($('.small-view-area img')[index]).attr('src'))
       $('.large-view-area img')[0].src = img_src;
      }
  }
};
</script>

<style scoped>
.large-view {
  height: 78%;
  padding: 0 20px 20px 20px;
}
.large-view img,
.small-view img {
  width: 100%;
  height: 100%;
}
.small-view {
  height: 20%;
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
  border: 1px solid #000;
  margin: 0 auto;
}
</style>
