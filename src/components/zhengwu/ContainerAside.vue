<template>
  <el-menu  class="submenu" :default-active="activeIndex" unique-opened router>
    <el-menu-item index="#" class="leftTitle">政务</el-menu-item>
    <el-menu-item index="#1"><i class="iconfont icon-home"></i>辖区简介</el-menu-item>
    <el-menu-item index="#2"><i class="iconfont icon-home"></i>调查问卷</el-menu-item>
    <el-menu-item index="#3"><i class="iconfont icon-home"></i>投票管理</el-menu-item>
    <el-menu-item index="#4"><i class="iconfont icon-home"></i>留言建议</el-menu-item>
    <el-menu-item index="/zhengwu/three"><i class="iconfont icon-home"></i>三务公开</el-menu-item>
    <el-submenu index="#5">
      <template slot="title"><i class="iconfont icon-home"></i>在线办事</template>
      <el-menu-item-group>
        <el-menu-item index="#51">在线办事1</el-menu-item>
        <el-menu-item index="#52">在线办事2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="#666">
      <template slot="title"><i class="iconfont icon-home"></i>精准扶贫</template>
      <el-menu-item-group>
        <el-menu-item index="/zhengwu/poverty/people">贫困人员</el-menu-item>
        <el-menu-item index="#62">精准扶贫记录</el-menu-item>
        <el-menu-item index="#63">精准扶贫政策</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="#777">
      <template slot="title"><i class="iconfont icon-home"></i>智慧养老</template>
      <el-menu-item-group>
        <el-menu-item index="/zhengwu/wisdom/old">老人信息</el-menu-item>
        <el-menu-item index="#73">健康档案</el-menu-item>
        <el-menu-item index="#72">服务档案</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
    export default {
        name: "ContainerAside",
      data(){
          return{
            activeIndex:'/zhengwu/three'
          }
      },
      methods:{

      }
    }
</script>
<style>
  .el-submenu__title{
    color: #444;
    font-weight: bolder;
  }
  .el-menu-item-group .el-menu-item{
    color:#777!important;
  }
</style>
<style scoped>
ul{
  position: absolute;
  bottom: 0;
  top: 70px;
  width: 200px;
}
  .submenu li.leftTitle{
    background: #1D5BDA;
    color:#fff;
    text-align: center!important;
    border:none!important;
  }
  .el-menu-item.is-active {
    color: #1951C1;
    background: #EBF0FA;
    font-weight: bolder;
    border-left: 2px solid #1951C1;
  }
  .el-menu-item,.el-submenu__title{
    color: #444;
    font-weight: bolder;
  }
  .el-menu-item, .el-submenu__title{
    height: 50px;
    line-height: 50px;
  }
  .submenu li:nth-of-type(1){
    text-align: center;
  }
  .submenu>li{
    text-align: left!important;
    border-bottom: 2px solid #f0f0f0;
  }
  .submenu>li i{
    margin-right: 10px;
    color:#555
  }
</style>
