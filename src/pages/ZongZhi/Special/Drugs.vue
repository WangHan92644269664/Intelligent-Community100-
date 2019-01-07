<template>
  <el-container>
    <!--主体内容的中部的侧边栏组件-->
    <ConMainAside :name="name" :data="data"></ConMainAside>
    <el-main>
      <!--主体内容的右边的内容组件-->
      <MainRight :rightTitle="rightTitle"></MainRight>
    </el-main>
  </el-container>
</template>

<script>
  import ConMainAside from '../../../components/ConMainAside'
  import MainRight from '../../../components/zongzhi/Special/DrugsMain'

  export default {
    name: "PovertyPeople",
    data() {
      return {
        name:'网格列表',
        rightTitle:'吸毒人员',
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
      ConMainAside,
      MainRight
    }
  }
</script>

<style scoped>

</style>
