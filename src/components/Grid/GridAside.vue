<template>
  <Aside :active="activeIndex" :title="title" :lists="lists"></Aside>
</template>

<script>
  import Aside from '../Aside'
    export default {
        name: "ContainerAside",
      data(){
          return {
            activeIndex:'/grid/actual_people/all',
            title:'网格平台',
            lists:[
              {
                index:'/grid/people_card',
                name:'人口卡片管理',
                childs:[
                  {
                    index:'/grid/people/child',
                    name:'育龄人员'
                  },
                  {
                    index:'#1',
                    name:'烈士人员'
                  },
                  {
                    index:'#2',
                    name:'实物房屋管理'
                  },
                  {
                    index:'#3',
                    name:'运动人员'
                  },
                  {
                    index:'#4',
                    name:'俩劳回归人员'
                  },
                  {
                    index:'#5',
                    name:'残疾人员'
                  },
                  {
                    index:'#6',
                    name:'留守儿童人员'
                  },
                  {
                    index:'#7',
                    name:'低保人员'
                  },
                  {
                    index:'#8',
                    name:'闲散青少年'
                  },
                  {
                    index:'#9',
                    name:'空巢老人'
                  },
                  {
                    index:'#10',
                    name:'失业人员'
                  },
                  {
                    index:'#11',
                    name:'伤残军人'
                  },
                  {
                    index:'#12',
                    name:'留守人员'
                  },
                  {
                    index:'#13',
                    name:'社区纠正人员'
                  },
                  {
                    index:'#14',
                    name:'刑满释放人员'
                  },
                ]
              },
              {
                index:'/grid/actual_people',
                name:'实有人口管理',
                childs:[
                  {
                    index:'/grid/actual_people/all',
                    name:'全部人口',
                  },
                  {
                    index:'#16',
                    name:'户籍人口'
                  },
                  {
                    index:'#17',
                    name:'常住人口'
                  },
                  {
                    index:'#18',
                    name:'流动人口'
                  },
                  {
                    index:'#19',
                    name:'外出人口'
                  },
                  {
                    index:'#20',
                    name:'空挂人口'
                  },
                  {
                    index:'#21',
                    name:'未落户人口'
                  },
                  {
                    index:'#22',
                    name:'境外人口'
                  },
                  {
                    index:'#23',
                    name:'闲散青少年'
                  },
                  {
                    index:'#24',
                    name:'空巢老人'
                  },
                ]
              },
              {
                index:'/grid/actual_house',
                name:'实有房屋管理',
                childs:[
                  {
                    index:'/grid/actual_house/manage',
                    name:'实有房屋管理',
                  },
                  {
                    index:'/grid/actual_house/rental',
                    name:'出租房',
                  }
                ]
              },
              {
                index:'#23',
                name:'实有建筑管理',
                childs:[
                  {
                    index:'#24',
                    name:'实有建筑管理'
                  },
                  {
                    index:'#25',
                    name:'出租房'
                  }
                ]
              },
              {
                index:'/grid/social_public',
                name:'社情民意'
              },
              {
                index:'/grid/domicile_manage',
                name:'户籍管理'
              },
              {
                index:'/grid/unit_manage',
                name:'部件管理'
              }
            ]
          }
      },
      components:{
          Aside
      },
      mounted(){
        //解决页面刷新的时候路由不高亮显示的问题
        this.activeIndex=this.$route.matched[1].path;
      }
    }
</script>

<style scoped>
</style>
