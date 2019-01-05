<template>
  <el-menu class="submenu" :default-active="activeIndex" unique-opened router>
    <el-menu-item index="#" class="leftTitle">安防平台</el-menu-item>
    <el-menu-item index="/gis">
      <span slot="title">GIS地图</span>
    </el-menu-item>
    <el-menu-item index="/gis/zhian">
      <span slot="title">社会治安</span>
    </el-menu-item>
    <el-menu-item index="/gis/street">
      <span slot="title">智慧街道</span>
    </el-menu-item>
    <el-menu-item index="/gis/community">
      <span slot="title">智慧社区</span>
    </el-menu-item>
    <el-menu-item index="/gis/car">
      <span slot="title">车辆识别门禁</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/gis"
    };
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
  position: absolute;
  bottom: 0;
  top: 0px;
  width: 160px;
  left: 0;
  background: #202020;
}
.submenu {
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
</style>
