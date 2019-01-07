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
  import MainRight from '../../../components/zongzhi/Organization/OrganizationMain'

  export default {
    data() {
      return {
        name:'综治机构列表',
        rightTitle:'综治机构列表',
        data: [
          {
            label: '综治机构-综治委',
            children: [
              {
                label: '高新区综治委',
              },
              {
                label: '开发区综治委',
              },
              {
                label: '旅游区综治委',
              },
              {
                label: '工业区综治委',
              },
              {
                label: '度假区综治委',
              },
            ],
          },
          {
            label: '综治机构-综治办',
            children: [
              {
                label: '综治办',
              },
              {
                label: '天桥区综治办',
              },
              {
                label: '顺泰综治办',
              },
              {
                label: '软件园综治办',
              },
              {
                label: '港区综治办',
              },
              {
                label: '平西综治办',
              },
              {
                label: '历下综治办',
              },
            ],
          },
          {
            label: '综治机构-综治工作室(站)',
            children: [
              {
                label: '平山村综治工作室',
              },
              {
                label: '四合村综治工作室',
              },
              {
                label: '智慧村综治工作室',
              },
            ],
          },
          {
            label: '综治机构-综治中心',
            children: [
              {
                label: '综治中心',
              },
              {
                label: '度假区综治中心',
              },
            ],
          },
          ],
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
