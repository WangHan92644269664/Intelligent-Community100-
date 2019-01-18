<template>
  <Aside :active="activeIndex" :title="title" :lists="lists"></Aside>
</template>

<script>
  import Aside from '../Aside'
export default {
  data() {
    return {
      activeIndex: "/gis/map",
      title:'安防平台',
      lists:[
        {
          index:'/gis/map',
          name:'GIS地图'
        },
        {
          index:'/gis/zhian',
          name:'社会治安'
        },
        {
          index:'/gis/street',
          name:'智慧街道'
        },
        {
          index:'/gis/community',
          name:'智慧社区'
        },
        {
          index:'/gis/car',
          name:'车辆识别门禁'
        },
      ]
    };
  },
  components:{
    Aside
  },
  mounted(){
    //解决页面刷新的时候路由不高亮显示的问题
    this.activeIndex=this.$route.matched[1].path;
  }
};
</script>
<style>
.el-submenu__title {
  color: #c9c9c9;
  font-weight: bolder;
}
.el-menu-item-group .el-menu-item {
  color: #777 !important;
  line-height: 34px !important;
  height: 34px !important;
}
</style>
<style scoped>
ul {
  position: fixed;
  bottom: 0;
  top: 70px;
  width:200px;
  left: 0;
  background: #202020;
  z-index: 999;
}
.submenu li.leftTitle {
  background: #008aff;
  color: #fff;
  text-align: center !important;
  border: none !important;
  height: 70px;
  line-height: 70px;
  font-size: 20px;
  font-weight: bolder;
}
.el-submenu .el-menu-item {
  min-width: 160px;
}
.el-menu-item.is-active {
  color: #0077ff !important;
  background: #eef2fa;
  font-weight: bolder;
  border-left: 2px solid #0077ff;
}
.el-menu-item,
.el-submenu__title {
  height: 60px;
  line-height: 60px;
  color: #c9c9c9;
  font-size: 14px;
}
.submenu li:nth-of-type(1) {
  text-align: center;
}
.submenu > li {
  text-align: left !important;
}
.submenu > li i {
  margin-right: 10px;
  color: #555;
}
.submenu li:last-child {
  border-bottom: 1px solid #3a3a3a;
}
.el-menu-item:focus, .el-menu-item:hover{
    background:#121212;
}
.el-menu-item.is-active{
    background:#121212;
    border-left:0;
}
</style>
