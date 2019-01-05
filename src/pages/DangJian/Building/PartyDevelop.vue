<template>
  <el-container>
    <ConMainAside :name="name" :data="data" ></ConMainAside>
    <el-main>
      <!--主体内容的右边的内容组件-->
      <MainRight :rightTitle="rightTitle"></MainRight>
    </el-main>
  </el-container>
</template>

<script>
  import ConMainAside from '../../../components/ConMainAside'
  import MainRight from '../../../components/dangjian/Building/PartyDevelopMain'

  export default {
    name: "Three",
    data() {
      return {
        name: '状态',
        rightTitle:'党员发展全纪实列表',
        data: [
          {
            label: '入党申请书',
            },
              {
                label: '入党积极分子',
              },
              {
                label: '党员发展对象',
              },
              {
                label:'预备党员',
              },
          {
            label:'考察未通过'
          },
          {
            label:'正式党员审核'
          }
            ]
      }
    },
    components: {
      ConMainAside,
      MainRight
    },
  }
</script>

<style scoped>
  .el-main{
    padding: 0;
  }
</style>
