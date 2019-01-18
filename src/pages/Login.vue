<template>
  <div class="content" id="content" ref="homePage">
    <div class="header">
      <img src="../assets/images/login/title.png" alt>
    </div>
    <div class="auto-div">
      <el-col class="left" :span="14">
        <img src="../assets/images/login/building.png" alt>
      </el-col>
      <el-col class="right" :span="10">
        <div class="login-info">
          <p>您好，欢迎登录智慧社区一体化平台！</p>
          <el-form
            :model="ruleForm2"
            status-icon
            :rules="rules2"
            ref="ruleForm2"
            label-width="100px"
          >
            <el-form-item prop="name">
              <el-input
                placeholder="请输入用户名"
                type="text"
                v-model="ruleForm2.name"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item prop="pass">
              <el-input
                placeholder="请输入密码"
                type="password"
                v-model="ruleForm2.pass"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item class="submit">
              <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
              <span class="forget-password">忘记密码？</span>
              <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script>
export default {
  name: "Data",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    return {
      screenHeight: document.documentElement.clientHeight, //屏幕高度
      ruleForm2: {
        pass: "",
        name: ""
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        name: [{ validator: validateName, trigger: "blur" }]
      }
    };
  },
  components: {},
  mounted() {
    var _this = this;
    //页面加载时赋值id全屏高度
    var oIframe = document.getElementById("content");
    oIframe.style.height = document.documentElement.clientHeight + "px";
    // 加载时echarts的高度
    window.onresize = function() {
      // 定义窗口大小变更通知事件
      _this.screenHeight = document.documentElement.clientHeight; //窗口高度
    };
  },
  watch: {
    screenHeight: function(val) {
      //监听屏幕高度变化
      var oIframe = document.getElementById("content");
      oIframe.style.height = Number(val) + "px"; //'120'是页面布局调整，可去除
    }
  },
  created() {},
  methods: {
    //登录
    submitForm(formName) {
        this.$router.push({path: '/type'});
      //登录待用部分
      //   this.$refs[formName].validate(valid => {
      //     if (valid) {
      //       alert("submit!");
      //     } else {
      //       console.log("error submit!!");
      //       return false;
      //     }
      //   });
    }
    //重置
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // }
  }
};
</script>
<style>
.login-info .el-input__inner {
  height: 50px !important;
  border-radius: 5px;
}
</style>

<style scoped>
#content {
  width: 100%;
  height: 100%;
  background: url("../assets/images/login/login_bg.png") no-repeat;
  background-size: 100% 100%;
}
.header {
  padding-top: 2%;
}
.auto-div {
  height: 40%;
  width: 70%;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.auto-div .left {
  text-align: left;
  height: 100%;
}
.auto-div .left img {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.auto-div .right {
  height: 100%;
}
.login-info {
  width: 360px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.login-info p {
  color: #fff;
  width: 390px;
  padding-left: 100px;
}
.submit {
  text-align: left;
}
.el-form {
  width: 420px;
}
.el-button {
  padding: 8px 40px;
}
.forget-password {
  display: block;
  float: right;
  color: rgba(165, 165, 165, 1);
  font-size: 14px;
}
</style>

