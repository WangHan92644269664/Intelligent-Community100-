<template>
  <el-container>
    <ConMainAside :name="name" :data="data" ></ConMainAside>
    <el-main>
        <MainRight :rightTitle="rightTitle"></MainRight>
    </el-main>
    </el-container>
</template>

<script>
  import ConHeader from '../../../../components/ContainerHeader'
  import ConMainAside from '../../../../components/ConMainAside'
  import MainRight from '../../../../components/dangjian/OutstandingPartyMain'

  export default {
    name: "Three",
    data() {
      return {
        title: '优秀党员',
        name: '党组织',
        rightTitle:'优秀党员列表',
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
      ConHeader,
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
