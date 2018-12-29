<template>
  <el-container>
    <el-header>
      <!--引入主体内容的标题组件-->
      <ConHeader :title=title></ConHeader>
    </el-header>
    <el-main>
        <!--主体内容的中部的侧边栏组件-->
        <ConMainAside :name="name" :data="data"></ConMainAside>
        <!--主体内容的右边的内容组件-->
        <MainRight :rightTitle="rightTitle"></MainRight>
    </el-main>
    </el-container>
</template>

<script>
  import ConHeader from '../../../../components/ContainerHeader'
  import ConMainAside from '../../../../components/ConMainAside'
  import MainRight from '../../../../components/dangjian/DangjianMainRight'

  export default {
    name: "Three",
    data() {
      return {
        title: '党员列表',
        name: '党组织',
        rightTitle:'党员列表',
        data: [
          {
            label: '高新区区委',
            children: [{
              label: '开发区街道工委',
              children:[
                {
                  label: '开发区街道工委1',
                }
              ]
            },
              {
                label: '天桥区街道工委',
                children:[
                  {
                    label: '天桥区街道工委1',
                  }
                ]
              },
              {
                label: '舜泰街道工委',
                children:[
                  {
                    label: '舜泰街道工委1',
                  }
                ]
              },
              {
                label:'湛西街道工委',
                children:[
                  {
                    label: '湛西街道工委1',
                  }
                ]
              }
            ]
          }],
      }
    },
    components: {
      ConHeader,
      ConMainAside,
      MainRight
    },
  }
</script>

<style scoped>
  .el-header {
    background-color: #fff !important;
    height: 40px !important;
    line-height: 38px;
    color: #aaa;
  }
  .el-main{
    padding:20px 0 0 0;
  }
</style>
