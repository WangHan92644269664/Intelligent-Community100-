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
  import MainRight from '../../../components/zongzhi/Special/AidsMain'

  export default {
    name: "PovertyPeople",
    data() {
      return {
        name:'网格列表',
        rightTitle:'艾滋病危险人员',
        data: [
          {
            label: '新天社区政法委',
            children: [{
              label: '九庄镇政法委',
              children:[
                {
                  label: '九庄镇政法委',
                }
              ]
            },
              {
                label: '开阳县政法委',
                children:[
                  {
                    label: '开阳县政法委',
                  }
                ]
              },
              {
                label: '久安乡政法委',
                children:[
                  {
                    label: '久安乡政法委',
                  }
                ]
              },
              {
                label:'大石乡政法委',
                children:[
                  {
                    label: '大石乡政法委',
                  }
                ]
              }
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
