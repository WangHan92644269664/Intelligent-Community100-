<template>
  <el-menu  class="submenu" :default-active="activeIndex" unique-opened router>
    <el-menu-item index="#" class="leftTitle">综治</el-menu-item>
    <el-submenu index="1">
      <template slot="title">综治组织</template>
      <el-menu-item-group>
        <el-menu-item index="/zongzhi/organ/institution">综治机构</el-menu-item>
        <el-menu-item index="/zongzhi/organ/group">群防群治组织</el-menu-item>
        <el-submenu index="#2">
          <template slot="title">网络队伍</template>
          <el-menu-item-group>
            <el-menu-item index="/zongzhi/organ/network/long">楼栋长</el-menu-item>
            <el-menu-item index="22">综治领导责任制</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">综治视联网信息中心</template>
      <el-menu-item-group>
        <el-menu-item index="21">综治视联网信息中心1</el-menu-item>
        <el-menu-item index="22">综治视联网信息中心2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">特殊人群</template>
      <el-menu-item-group>
        <el-menu-item index="/zongzhi/special/release">刑满释放人员</el-menu-item>
        <el-menu-item index="222">社区矫正人员</el-menu-item>
        <el-menu-item index="223">吸毒人员</el-menu-item>
        <el-menu-item index="334">精神病人员</el-menu-item>
        <el-menu-item index="224">艾滋病危险人员</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">重点青少年</template>
      <el-menu-item-group>
        <el-menu-item index="41">重点青少年1</el-menu-item>
        <el-menu-item index="42">重点青少年2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">两断组织</template>
      <el-menu-item-group>
        <el-menu-item index="51">两断组织1</el-menu-item>
        <el-menu-item index="25">两断组织2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="6">
      <template slot="title">社会治安</template>
      <el-menu-item-group>
        <el-menu-item index="/zongzhi/socity/important_area">重点地区排查整治</el-menu-item>
        <el-menu-item index="/zongzhi/socity/check_renovate">排查整治情况</el-menu-item>
        <el-menu-item index="/zongzhi/socity/life_base">命案基本信息</el-menu-item>
        <el-menu-item index="/zongzhi/socity/life_commit">命案犯罪嫌疑人</el-menu-item>
        <el-menu-item index="/zongzhi/socity/logistics_safety">寄递物流安全管理</el-menu-item>
        <el-menu-item index="/zongzhi/socity/important_event">重特大案(事)件</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="7">
      <template slot="title">信访管理</template>
      <el-menu-item-group>
        <el-menu-item index="71">信访管理1</el-menu-item>
        <el-menu-item index="72">信访管理2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="8">
      <template slot="title">事件/矛盾纠纷</template>
      <el-menu-item-group>
        <el-menu-item index="/zongzhi/dispute/found">发现上报</el-menu-item>
        <el-menu-item index="2-2">事件/矛盾纠纷2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="9">
      <template slot="title">校园安全</template>
      <el-menu-item-group>
        <el-menu-item index="/zongzhi/campus/school">学校</el-menu-item>
        <el-menu-item index="92">校园周边重点人员</el-menu-item>
        <el-menu-item index="93">涉及师生安全的案件</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="11">
      <template slot="title">护路护线</template>
      <el-menu-item-group>
        <el-menu-item index="/zongzhi/protect/road">护路护线</el-menu-item>
        <el-menu-item index="94">涉及线、路案(事)件</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
  export default {
    data(){
      return{
        activeIndex:'/zongzhi/organ/institution'
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
