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
  import ConHeader from '../../../components/ContainerHeader'
  import ConMainAside from '../../../components/ConMainAside'
  import MainRight from '../../../components/zongzhi/Organization/Group'

  export default {
    data() {
      return {
        name:'群防群治组织列表',
        rightTitle:'群防群治组织列表',
        data: [
          {
            label: '群防群治-专职巡防队伍',
            children: [
              {
                label: '群防群治组织',
              },
              {
                label: '专职巡防队伍',
              },
              {
                label: '九庄镇专职巡防队伍',
              },
              {
                label: '久安乡专职巡防队伍',
              },
              {
                label: '大石乡专职巡防队伍',
              },
            ],
          },
          {
            label: '群防群治-义务巡防队伍',
            children: [
              {
                label: '义务巡防队伍',
              },
              {
                label: '九庄镇专职巡防队伍',
              },
              {
                label: '久安乡专职巡防队伍',
              },
              {
                label: '大石乡专职巡防队伍',
              },

            ],
          },
          {
            label: '群防群治-保安服务公司',
            children: [
              {
                label: '保安服务公司',
              },
              {
                label: '九庄镇区保安服务公司',
              },
              {
                label: '久安乡保安服务公司',
              },
              {
                label:'大石乡保安服务公司'
              }
            ],
          },
          {
            label: '群防群治-志愿者队伍',
            children: [
              {
                label: '久安乡志愿者队伍',
              },
              {
                label: '大石乡志愿者队伍',
              },
            ],
          },
        ],
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

</style>
