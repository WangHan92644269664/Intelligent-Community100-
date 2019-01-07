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
                label: '开发区专职巡防队伍',
              },
              {
                label: '高新区专职巡防队伍',
              },
              {
                label: '度假区专职巡防队伍',
              },
              {
                label:'工业区巡防队伍'
              }
            ],
          },
          {
            label: '群防群治-义务巡防队伍',
            children: [
              {
                label: '义务巡防队伍',
              },
              {
                label: '开发区专职巡防队伍',
              },
              {
                label: '高新区专职巡防队伍',
              },
              {
                label: '度假区专职巡防队伍',
              },
              {
                label: '工业区巡防队伍',
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
                label: '开发区保安服务公司',
              },
              {
                label: '高新区保安服务公司',
              },
              {
                label:'工业区保安服务公司'
              }
            ],
          },
          {
            label: '群防群治-志愿者队伍',
            children: [
              {
                label: '高新区志愿者队伍',
              },
              {
                label: '工业区志愿者队伍',
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
