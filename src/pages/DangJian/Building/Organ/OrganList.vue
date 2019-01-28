<template>
  <el-container>
    <ConMainAside :name="name" :data="data"></ConMainAside>
    <MainRight></MainRight>
  </el-container>
</template>

<script>
  import ConMainAside from '../../../../components/ConMainAside'
  import MainRight from '../../../../components/dangjian/Building/OrganListMain'

  export default {
    name: "Three",
    data() {
      return {
        name: '党组织',
        rightTitle:'文章管理列表',
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
