<template>
  <el-menu  class="submenu" :default-active="activeIndex" unique-opened router>
    <el-menu-item index="#" class="leftTitle">政务平台</el-menu-item>
    <el-menu-item index="/zhengwu/three">三务公开</el-menu-item>
    <el-submenu index="#666">
      <template slot="title">精准扶贫</template>
      <el-menu-item-group>
        <el-menu-item index="/zhengwu/poverty/people">贫困人员</el-menu-item>
        <el-menu-item index="/zhengwu/poverty/record">精准扶贫记录</el-menu-item>
        <el-menu-item index="/zhengwu/poverty/policy">精准扶贫政策</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="#777">
      <template slot="title">智慧养老</template>
      <el-menu-item-group>
        <el-menu-item index="/zhengwu/wisdom/old">老人信息</el-menu-item>
        <el-menu-item index="/zhengwu/wisdom/health">健康档案</el-menu-item>
        <el-menu-item index="/zhengwu/wisdom/serve">服务档案</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
    export default {
        name: "ContainerAside",
      data(){
          return{
            activeIndex:'/zhengwu/poverty/record'
          }
      },
      methods:{

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
    background:#121212;
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
  .el-menu-item:focus, .el-menu-item:hover{
    background:#121212;
  }
</style>
