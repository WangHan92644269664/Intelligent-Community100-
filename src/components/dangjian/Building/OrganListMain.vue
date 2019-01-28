<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="float: left">新天社区区委 简介</span>
        <el-button style="float: right; padding: 3px 10px;border-radius: 0" type="primary">修改</el-button>
      </div>
      <div style="color:#777;text-align:left;font-size:14px">
        贵阳新天社区区委会工作职责有应急办公室、组织部、宣传部、纪工委(审计监察局)、政法委员会(信访局)、发展改革局(金融工作办公室)、科技经济局、商务局、投资服务局
        (安全生产监管局)、市场监督管理局、财政局、建设局、城市管理局(城市管理行政执法局)、郑州市国土资源局高新技术产业开发区分局、社会保障局(人民武装部)、
        社会事务局、机关党委、总工会17个
      </div>
    </el-card>
    <el-card class="box-card" style="margin-top: 20px;">
      <div slot="header" class="clearfix">
        <span style="float: left">党组织数据</span>
      </div>
      <div class="img">
        <ul>
          <li>
            <img :src="party" alt="">
            <div>
              <p>党员</p>
              <p>20</p>
            </div>
          </li>
          <li>
            <img :src="organ" alt="">
            <div>
              <p>党组织</p>
              <p>22</p>
            </div>
          </li>
          <li>
            <img :src="metting" alt="">
            <div>
              <p>会议</p>
              <p>0</p>
            </div>
          </li>
          <li>
            <img :src="fee" alt="">
            <div>
              <p>党费</p>
              <p>0</p>
            </div>
          </li>
        </ul>
      </div>
    </el-card>
    <el-card class="box-card" style="margin-top: 20px;">
      <div slot="header" class="clearfix">
        <span style="float: left">党组织主要负责人</span>
      </div>
      <div style="float: left;padding-left: 30px;">
        <img :src="header" alt="" style="width: 40px;border-radius: 50%">
        <p>吴功杰</p>
        <p>17378451232</p>
      </div>
    </el-card>
    <el-card class="box-card" style="margin-top: 20px;">
      <div slot="header" class="clearfix">
        <span style="float: left">党组织风采</span>
      </div>
      <div style="height: 38px;">

      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    props:{
      rightTitle:String
    },
    data() {
      return {
       fee:require('../images/fee.png'),
        party:require('../images/party.png'),
        metting:require('../images/meeting.png'),
        organ:require('../images/organ.png'),
        header:require('../../images/header.jpg'),
        currentPage4: 1,
      }
    },
    methods: {
    }
  }
</script>
<style scoped>
  .img>ul{
    overflow: hidden;
    list-style: none;
    padding: 0;
  }
  .img>ul>li{
    float: left;
    width: 23.85%;
    background: #f0f0f0;
    margin-right: 20px;
    box-sizing: border-box;
    border-radius: 4px;
  }
  .img>ul>li:last-child{
    margin-right:0;
  }
 .img>ul>li>img{
   float: left;
   padding: 20px;
 }
  .img>ul>li>div{
   float: right;
    padding-right:50px;
  }
  .img>ul>li>div>p{
    font-size: 16px;
    font-weight: bolder;
    color:#555
  }
  .img>ul>li>div>p:first-child{
    padding-top: 30px;
  }
  .img>ul>li>div>p:last-child{
    font-size: 22px;
    font-weight:600;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
    height: 25%;
  }
</style>
