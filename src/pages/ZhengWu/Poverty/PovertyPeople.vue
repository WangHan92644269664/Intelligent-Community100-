<template>
  <el-container>
      <ConMainAside :name="name" :data="data"></ConMainAside>
    <el-main>
        <!--主体内容的右边的内容组件-->
        <MainRight></MainRight>
    </el-main>
    </el-container>
</template>

<script>
  import ConMainAside from '../../../components/ConMainAside'
  import MainRight from '../../../components/poverty/PovertyMainRight'

  export default {
    name: "PovertyPeople",
    data() {
      return {
        title: '贫困人员',
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
      ConMainAside,
      MainRight
    }
  }
</script>

<style scoped>
 .el-main{
   padding: 0;
 }
</style>
