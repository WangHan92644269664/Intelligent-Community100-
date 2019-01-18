<template>
<Aside :active="activeIndex" :title="title" :lists="lists"></Aside>
</template>

<script>
  import Aside from '../Aside'
    export default {
        name: "ContainerAside",
      data(){
          return{
            activeIndex:'/zhengwu/poverty/record',
            title:'政务平台',
            lists:[
              {
                index:'/zhengwu/three',
                name:'三务公开'
              },
              {
                index:'#666',
                name:'精准扶贫',
                childs:[
                  {
                    index:'/zhengwu/poverty/people',
                    name:'贫困人员'
                  },
                  {
                    index:'/zhengwu/poverty/record',
                    name:'精准扶贫记录'
                  },
                  {
                    index:'/zhengwu/poverty/policy',
                    name:'精准扶贫政策'
                  }
                ]
              },
              {
                index:'#777',
                name:'智慧养老',
                childs:[
                  {
                    index:'/zhengwu/wisdom/old',
                    name:'老人信息'
                  },
                  {
                    index:'/zhengwu/wisdom/health',
                    name:'健康档案'
                  },
                  {
                    index:'/zhengwu/wisdom/serve',
                    name:'服务档案'
                  }
                ]
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
