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
  import MainRight from '../../../components/poverty/PovertyMainRight'

  export default {
    name: "PovertyPeople",
    data() {
      return {
        title: '刑满释放人员',
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
