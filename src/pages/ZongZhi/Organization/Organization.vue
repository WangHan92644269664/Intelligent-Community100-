<template>
  <div>
    <el-header style="height: 40px;">
      <!--引入主体内容的标题组件-->
      <ConHeader :title=title></ConHeader>
    </el-header>
    <el-main>
      <el-row :gutter="40">
        <!--主体内容的中部的侧边栏组件-->
        <ConMainAside :name="name" :data="data"></ConMainAside>
        <!--主体内容的右边的内容组件-->
        <MainRight></MainRight>
      </el-row>
    </el-main>
  </div>
</template>

<script>
  import ConHeader from '../../../components/ContainerHeader'
  import ConMainAside from '../../../components/ConMainAside'
  import MainRight from '../../../components/zongzhi/OrganizationMain'

  export default {
    data() {
      return {
        title: '综治机构',
        name:'综治机构列表',
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
      ConHeader,
      ConMainAside,
      MainRight
    }
  }
</script>

<style scoped>
  .el-header {
    background: #fff;
    height: 38px;
    line-height: 38px;
  }
  .el-menu-item.is-active {
    color: #1951C1;
    background: #EBF0FA;
    font-weight: bolder;
    border-left: 2px solid #1951C1;
  }
  .el-main .borderBottom {
    border-bottom: 1px solid #eee;
    text-align: left;
    padding-left: 15px;
    padding-bottom: 15px;
    font-size: 14px;
    color: #777;
    font-weight: bolder;
    letter-spacing: 0.1em;
    margin-bottom: 15px;
  }
  .el-main .mainRight {
    background: #fff;
    padding: 15px 0 !important;
  }

  .el-main .search .el-button--primary {
    background-color: #FF6400 !important;
    border-color: #FF6400 !important;
  }

  .el-main .info {
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    padding: 0 15px;
    height: 40px;
    line-height: 40px;
    color: #ababab;
  }

  .el-main .el-button {
    border-radius: 2px;
  }
</style>
