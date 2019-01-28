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
        rightTitle:'政治生日列表',
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
