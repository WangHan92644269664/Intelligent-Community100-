<template>
  <el-container>
    <el-header style="background: #273B56;">
      <el-row>
        <el-col :span="5" style="color:#fff;text-align: left;padding-left: 30px;padding-top: 13px;">
          <i class="iconfont icon-guohui"></i> 智慧街道云平台
        </el-col>
        <el-col :span="14" style="text-align: center;margin:0 auto" id="two">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#273B56"
            text-color="#fff"
            active-text-color="#fff" router>
            <el-menu-item index="/gis" class="left">GIS</el-menu-item>
            <el-menu-item index="/data">大数据</el-menu-item>
            <el-menu-item index="/#3">智能终端</el-menu-item>
            <el-menu-item index="/#4">网格化</el-menu-item>
            <el-menu-item index="/zongzhi">综治</el-menu-item>
            <el-menu-item index="/dangjian">党建</el-menu-item>
            <el-menu-item index="/zhengwu">政务</el-menu-item>
            <el-menu-item index="/working" >工作</el-menu-item>
            <el-menu-item index="/#2">系统</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="5" id="three">
          <el-row style="padding-top: 15px;">
            <el-col :span="5" >
              <i class="iconfont icon-huiyitongzhi"></i>
            </el-col>
            <el-col :span="5">
              <i class="iconfont icon-phone"></i>
            </el-col>
            <el-col :span="7" style="color:#fff">
             超级管理员 <i class="iconfont icon-icon_arrow_bottom" style="font-size:10px"></i>
            </el-col>
            <el-col :span="7">
              <i class="iconfont icon-ellipsis"></i>
            </el-col>
          </el-row>
        </el-col>
      </el-row>

    </el-header>
  </el-container>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        activeIndex: '/working',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
  }
</script>

<style scoped>
  .el-header {
    padding: 0;
  }

  .el-menu-item {
    padding: 0 40px;
  }

  .el-menu--horizontal > .el-menu-item {
    border-bottom: none !important;
  }

  .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: none;
    background: #1951C1 !important;
  }

  .iconfont {
    color: #fff;
    font-size: 20px;
  }
  @media (min-width: 500px) and (max-width: 1770px) {
    #two{
      width: 75%;
    }
    #three{
      display:none;
    }
  }
</style>
