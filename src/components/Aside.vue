<template>
  <el-menu  class="submenu"   :default-active="active" unique-opened router>
    <el-menu-item index="#" class="leftTitle">{{title}}</el-menu-item>
    <template v-for="(list,index) in lists">
      <template v-if="list.childs">
        <el-submenu :index="list.index">
          <template slot="title">{{list.name}}</template>
          <el-menu-item-group>
            <template v-for="(child,index) in list.childs">
              <el-menu-item :index="child.index">{{child.name}}</el-menu-item>
            </template>
          </el-menu-item-group>
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item :index="list.index">{{list.name}}</el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<script>
  export default {
    name: "ContainerAside",
    data(){
      return {
      }
    },
    props:{
      active:String,
      title:String,
      lists:Array
    },

  }
</script>
<style>
  .el-submenu__title{
    color:#999!important;
    font-weight: bolder;
  }
  .el-menu-item-group .el-menu-item{
    color:#777!important;
    line-height: 34px!important;
    height: 34px!important;
  }
</style>
<style scoped>
  .el-menu{
    border-right-width: 0;
  }
  ul{
    position: fixed;
    bottom: 0;
    top: 70px;
    width:200px;
    left: 0;
    background: #202020;
    z-index: 999;
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
    min-width: 200px;
  }
  .el-menu-item.is-active {
    color: #0077ff!important;
    background:rgba(0,0,0,0.2)!important;
    font-weight: bolder;
    border-left: 2px solid #0077ff;
  }
  .el-menu-item, .el-submenu__title{
    height: 60px;
    line-height: 60px;
    color:#999;
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
    background:rgba(0,0,0,0.1);
  }
</style>
