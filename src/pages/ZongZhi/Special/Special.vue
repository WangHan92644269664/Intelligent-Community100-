<template>
  <el-container>
    <el-header height="40px">
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
  import ConHeader from '../../../components/ContainerHeader'
  import ConMainAside from '../../../components/ConMainAside'
  import MainRight from '../../../components/poverty/PovertyMainRight'

  export default {
    name: "PovertyPeople",
    data() {
      return {
        title: '刑满释放人员',
        name:'网格列表',
        data: [
          {
            label: '高新区',
            children: [
              {
                label: '开发区',
              },
              {
                label: '天桥办事处',
              },
              {
                label: '舜泰办事处',
              },
              {
                label: '软件园办事处',
              },
              {
                label: '湛西办事处',
              },
              {
                label: '花园路社区',
              },
              {
                label: '平西路社区',
              },
            ]
          }],
        formInline: {
          sex: '',
          time: '',
          key:''
        },
      }
    },
    components: {
      ConHeader,
      ConMainAside,
      MainRight
    }
  }
</script>

<style scoped>
  .el-header {
    background: #fff;
    height: 38px;
    line-height: 38px;
  }
</style>
