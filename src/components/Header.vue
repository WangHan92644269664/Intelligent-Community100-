<template>
  <el-container>
    <el-header style="background: #055295;box-shadow: 4px 0 20px rgba(0,0,0,0.3);height: 70px;">
      <el-row>
        <el-col
          :xl="7"
          :lg="5"
          style="color:#fff;text-align: left;padding-top: 13px;font-size:26px"
        >
          <img :src="left" alt style="margin-right: 10px;">智慧社区云平台
        </el-col>
        <el-col :xl="14" :lg="16" style="text-align: center;margin:0 auto;" id="two">
          <el-menu
            :default-active="active"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#055295"
            text-color="#fff"
            active-text-color="#fff"
            router
          >
            <el-menu-item index="/type" class="left">首页</el-menu-item>
            <el-menu-item index="/data">大数据平台</el-menu-item>
            <el-menu-item index="/gis">安防平台</el-menu-item>
            <el-menu-item index="/grid">网格平台</el-menu-item>
            <el-menu-item index="/zongzhi">综治平台</el-menu-item>
            <el-menu-item index="/dangjian">党建平台</el-menu-item>
            <el-menu-item index="/zhengwu">政务平台</el-menu-item>
            <el-menu-item index="/working">工作平台</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :xl="3" :lg="3" id="three" style="padding-right: 35px;">
          <el-row style="padding-top: 15px;">
            <el-col :span="5">
              <img :src="header" height="40px" style="border-radius: 50%">
            </el-col>
            <el-col
              :span="13"
              :offset="1"
              style="color:#fff;font-size:12px;line-height: 40px;"
            >管理员 : 黄佩珊</el-col>
            <el-col :span="2" :offset="1">
              <el-button type="primary" id="headerBtn">退出</el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-header>
  </el-container>
</template>

<script>
import Bus from '../assets/js/bus'
export default {
  name: "Header",
  data() {
    return {
      active: '',
      header: require("./images/header.jpg"),
      left: require("./images/nav_icon.png")
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleCommand(command) {
      if (command == "loginout") {
        localStorage.removeItem("ms_username");
        this.$router.push("/login");
      }
    }
  },
  mounted() {
    //解决页面刷新导航不高亮的问题
    this.active = this.$route.matched[0].path;
    let self = this;
    Bus.$on("activeIndex", defaultActive => {
      self.active = defaultActive;
    });
  }
};
</script>

<style scoped>
.el-menu {
  height: 70px !important;
  border-bottom: none !important;
}
.el-header{
  z-index:999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
#headerBtn {
  background: #0077df;
  font-size: 12px;
  color: #222;
  border: none;
  padding: 7px 12px;
  position: relative;
  top: 7px;
}
.el-menu--horizontal > .el-menu-item {
  border-bottom: none !important;
  line-height: 70px;
  height: 70px;
  font-size: 16px;
}

.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
  background: #0088ff !important;
}

.iconfont {
  color: #fff;
  font-size: 20px;
}
.el-menu-item[data-v-61dd7a3d] {
  padding: 0 30px;
}
@media screen and (max-width: 1720px) {
  .el-menu-item[data-v-61dd7a3d] {
    padding: 0 28px !important;
  }
}
@media screen and (max-width: 1500px) {
  .el-menu-item[data-v-61dd7a3d] {
    padding: 0 25px !important;
  }
}
@media screen and (max-width: 1400px) {
  .el-menu-item[data-v-61dd7a3d] {
    padding: 0 23px !important;
  }
}
@media screen and (max-width: 1366px) {
  .el-menu-item[data-v-61dd7a3d] {
    padding: 0 20px !important;
  }
}
</style>
