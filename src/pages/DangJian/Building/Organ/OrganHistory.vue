<template>
  <el-container>
    <ConMainAside :name="name" :data="data"></ConMainAside>
    <el-main>
      <!--主体内容的右边的内容组件-->
      <MainRight :rightTitle="rightTitle"></MainRight>
    </el-main>
  </el-container>
</template>

<script>
  import ConMainAside from '../../../../components/ConMainAside'
  import MainRight from '../../../../components/dangjian/Building/OrganHistoryMain'

  export default {
    name: "Three",
    data() {
      return {
        name: '状态',
        rightTitle:'历史党员列表',
        data: [
          {
            label: '失联',
            },
              {
                label: '清退',
              },
              {
                label: '死亡',

              },
              {
                label:'系统外传处',
              }
            ]
          ,
      }
    },
    components: {
      ConMainAside,
      MainRight
    },
  }
</script>

<style scoped>
  /*主体内容*/
  .el-header {
    background-color: #fff !important;
    height: 40px !important;
    line-height: 38px;
    color: #aaa;
  }
  .el-main{
    padding: 0;
  }
</style>
