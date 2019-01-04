<template>
  <el-menu  class="submenu"   :default-active="activeIndex" unique-opened router>
    <el-menu-item index="#" class="leftTitle">工作平台</el-menu-item>
    <el-submenu index="/working/advertise">
      <template slot="title"><i class="iconfont icon-home"></i>宣传管理</template>
      <el-menu-item-group>
        <el-menu-item index="/working/advertise/essay">文章管理</el-menu-item>
        <el-menu-item index="/working/essay/column">文章栏目管理</el-menu-item>
        <el-menu-item index="/working/essay/carousel">轮播图管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="/working/logmanage">
      <template slot="title"><i class="iconfont icon-home"></i>日志管理</template>
      <el-menu-item-group>
        <el-menu-item index="/working/logmanage/log">工作日志</el-menu-item>
        <el-menu-item index="/working/logmanage/audit">日志审核</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="/working/plan">
      <template slot="title"><i class="iconfont icon-home"></i>工作计划</template>
      <el-menu-item-group>
        <el-menu-item index="/working/plan/my">我的工作计划</el-menu-item>
        <el-menu-item index="/working/plan/undo">我安排的工作</el-menu-item>
        <el-menu-item index="/working/plan/dept">部门工作计划</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="/working/notice"><i class="iconfont icon-home"></i>公告管理</el-menu-item>

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
