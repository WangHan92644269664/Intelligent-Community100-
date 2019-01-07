<template>
  <el-menu  class="submenu"   :default-active="activeIndex" unique-opened router>
    <el-menu-item index="#" class="leftTitle">网格平台</el-menu-item>
    <el-submenu index="/grid/people_card">
      <template slot="title">人口卡片管理</template>
      <el-menu-item-group>
        <el-menu-item index="/grid/people/child">育龄人员</el-menu-item>
        <el-menu-item index="#">烈士人员</el-menu-item>
        <el-menu-item index="#">实物房屋管理</el-menu-item>
        <el-menu-item index="#">运动人员</el-menu-item>
        <el-menu-item index="#">俩劳回归人员</el-menu-item>
        <el-menu-item index="#">残疾人员</el-menu-item>
        <el-menu-item index="#">留守儿童人员</el-menu-item>
        <el-menu-item index="#">低保人员</el-menu-item>
        <el-menu-item index="#">闲散青少年</el-menu-item>
        <el-menu-item index="#">空巢老人</el-menu-item>
        <el-menu-item index="#">>失业人员</el-menu-item>
        <el-menu-item index="#">伤残军人</el-menu-item>
        <el-menu-item index="#">留守人员</el-menu-item>
        <el-menu-item index="#">社区纠正人员</el-menu-item>
        <el-menu-item index="#">刑满释放人员</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="/grid/actual_people">
      <template slot="title">实有人口管理</template>
      <el-menu-item-group>
        <el-menu-item index="/grid/actual_people/all">全部人口</el-menu-item>
        <el-menu-item index="#3">户籍人口</el-menu-item>
        <el-menu-item index="#4">常住人口</el-menu-item>
        <el-menu-item index="#5">流动人口</el-menu-item>
        <el-menu-item index="#6">外出人口</el-menu-item>
        <el-menu-item index="#7">空挂人口</el-menu-item>
        <el-menu-item index="#8">未落户人口</el-menu-item>
        <el-menu-item index="#9">境外人口</el-menu-item>
        <el-menu-item index="#10">闲散青少年</el-menu-item>
        <el-menu-item index="#11">空巢老人</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="/grid/actual_house">
      <template slot="title">实有房屋管理</template>
      <el-menu-item-group>
        <el-menu-item index="/grid/actual_house/manage">实有房屋管理</el-menu-item>
        <el-menu-item index="/grid/actual_house/rental">出租房</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="#">
      <template slot="title">实有建筑管理</template>
      <el-menu-item-group>
        <el-menu-item index="#1">实有建筑管理</el-menu-item>
        <el-menu-item index="#2">出租房</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="/grid/social_public">社情民意</el-menu-item>
    <el-menu-item index="/grid/domicile_manage">户籍管理</el-menu-item>
    <el-menu-item index="/grid/unit_manage">部件管理</el-menu-item>

  </el-menu>
</template>

<script>
    export default {
        name: "ContainerAside",
      data(){
          return {
            activeIndex:'/working/plan/my'
          }
      }
    }
</script>
<style>
  .el-submenu__title{
    color:#c9c9c9;
    font-weight: bolder;
  }
  .el-menu-item-group .el-menu-item{
    color:#777!important;
    line-height: 34px!important;
    height: 34px!important;
  }
</style>
<style scoped>
  ul{
    position: absolute;
    bottom: 0;
    top: 70px;
    width: 160px;
    left: 0;
    background: #202020;
  }
  .submenu li.leftTitle{
    background: #008aff;
    color:#fff;
    text-align: center!important;
    border:none!important;
    height: 70px;
    line-height: 70px;
    font-size: 20px;
    font-weight: bolder;
  }
  .el-submenu .el-menu-item{
    min-width: 160px;
  }
  .el-menu-item.is-active {
    color: #0077ff!important;
    background: #eef2fa;
    font-weight: bolder;
    border-left: 2px solid #0077ff;
  }
  .el-menu-item, .el-submenu__title{
    height: 60px;
    line-height: 60px;
    color:#c9c9c9;
    font-size:14px
  }
  .submenu li:nth-of-type(1){
    text-align: center;
  }
  .submenu>li{
    text-align: left!important;
    border-bottom: 2px solid #3a3a3a;
  }
  .submenu>li i{
    margin-right: 10px;
    color:#555
  }
</style>
