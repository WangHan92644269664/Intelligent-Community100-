<template>
  <div>
    <el-row>
      <el-col :span="12">
        <ul class="top-link-left">
          <li class="back-index">
            <i></i>
            返回首页
          </li>
          <li class="link-other">门户页</li>
          <li class="link-other">实有人口</li>
        </ul>
      </el-col>
      <el-col :span="12">
        <ul class="top-link-right">
          <li class="link-other">实有数据</li>
          <li class="link-other">综治数据</li>
          <li class="link-other">社区工作</li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>

<style scoped>
ul {
  list-style: none;
}
.top-link-left {
  color: #fff;
  text-align: center;
  text-align: left;
  padding-left: 10%;
  height: 40px;
}
.top-link-left li {
  float: left;
  margin-right: 2%;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.top-link-right {
  float: right;
  color: #fff;
  text-align: center;
  height: 40px;
  text-align: right;
}
.top-link-right li {
  display: inline-block;
  text-align: center;
  line-height: 40px;
  margin-right: 20px;
}
.back-index {
  background: url("../../assets/images/data/back_index_default.png") no-repeat;
  background-size: 100% 100%;
  width: 100px !important;
  font-size: 14px;
}
.back-index:hover {
  background: url("../../assets/images/data/back_hover.png") no-repeat;
  background-size: 100% 100%;
}
.link-other {
  background: url("../../assets/images/data/link_other_default.png") no-repeat;
  background-size: 100% 100%;
  width: 130px;
}
.link-other:hover {
  background: url("../../assets/images/data/link_other_hover.png") no-repeat;
  background-size: 100% 100%;
}
</style>