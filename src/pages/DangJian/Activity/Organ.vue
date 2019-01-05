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
  import MainRight from '../../../components/dangjian/Building/BirthdayMain'

  export default {
    name: "Three",
    data() {
      return {
        name: '党组织',
        rightTitle:'组织生活列表',
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
      ConMainAside,
      MainRight
    },
  }
</script>

<style scoped>

</style>
