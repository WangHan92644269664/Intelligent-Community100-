<template>
  <div class="sidebar dangjian" >
    <el-menu class="sidebar-el-menu subdang" :default-active="activeIndex" unique-opened router>
      <p index="#" class="leftTitle" style="margin: 0;">{{title}}</p>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title" class="first">
              <span slot="title">{{item.title}}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template slot="title" class="second">
                  {{subItem.title}}
                </template>
                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index" class="three">
                  {{threeItem.title}}
                </el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index" class="first">
                {{subItem.title}}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "ContainerAside",
    data(){
      return{
      }
    },
    props:{
      items:Array,
      activeIndex:String,
      title:String,
    },
  }
</script>
<style>
  .dangjian .el-submenu__title{
    color: #c9c9c9 !important;
    font-weight: bolder;
    padding: 0 125px;
  }
  .dangjian  .el-menu-item{
    color:#777!important;
    line-height: 34px!important;
    height: 34px!important;
  }
  .dangjian .el-submenu .el-menu-item{
    padding: 0 105px;
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
.subdang>li{
    text-align: left!important;
    border-bottom: 2px solid #3a3a3a;
}
  .sidebar .leftTitle{
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
