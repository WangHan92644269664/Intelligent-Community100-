<template>
  <div class="sidebar" >
    <h5>党建</h5>
    <el-menu class="sidebar-el-menu" :default-active="onRoutes" active-text-color="#1951C1" unique-opened router style="height: 100%">
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title" class="first">
              <i class="iconfont icon-home"></i><span slot="title">{{item.title}}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template slot="title" class="second">
                  {{subItem.title}}
                </template>
                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index" class="three">
                  {{threeItem.title}}
                </el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index" class="first">
                {{subItem.title}}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i class="iconfont icon-home"></i><span slot="title">{{item.title}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "ContainerAside",
    data(){
      return{
        items:[
          {
            index:'1',
            title:'党建中心',
            subs:[
              {
                index:'#1-1',
                title:'党组织管理',
                subs:[
                  {
                      index:'#1-1-1',
                    title:'党组织管理1'
                  },
                  {
                    index:'#1-1-2',
                    title:'党组织管理2'
                  }
                ],
              },
              {
                index:'#1-2',
                title:'党内职务管理'
              },
              {
                index:'#1-3',
                title:'党员管理',
                subs:[
                  {
                    index:'list',
                    title:'党员列表'
                  },
                  {
                    index:'#1-3-2',
                    title:'历史党员'
                  },
                  {
                    index:'outstanding',
                    title:'优秀党员'
                  }
                ],
              },
              {
                index:'#1-4',
                title:'党员发展纪实'
              },
              {
                index:'#1-5',
                title:'党员关系转移',
                subs:[
                  {
                    index:'#1-5-1',
                    title:'党员关系转移1'
                  },
                  {
                    index:'#1-5-2',
                    title:'党员关系转移2'
                  }
                ],
              },
              {
                index:'#1-6',
                title:'活动党员',
                subs:[
                  {
                    index:'#1-6-1',
                    title:'活动党员1'
                  },
                  {
                    index:'#1-6-2',
                    title:'活动党员2'
                  }
                ],
              },
              {
                index:'#1-7',
                title:'党费缴纳记录'
              },
              {
                index:'#1-8',
                title:'政治生日'
              },
            ],
          },
          {
            index:'#2',
            title:'学习平台',
            subs:[
              {
                index:'setting',
                title:'专题设置'
              },
              {
                index:'#2-2',
                title:'学习资料管理',
                subs:[
                  {
                    index:'column',
                    title:'学习资料栏目'
                  },
                  {
                    index:'#2-2-2',
                    title:'学习资料列表'
                  }
                ],
              },
              {
                index:'#2-3',
                title:'题库管理'
              },
              {
                index:'#2-4',
                title:'考试中心'
              },
              {
                index:'#2-5',
                title:'学习笔记'
              },
            ]
          },
          {
            index:'#3',
            title:'活动中心',
            subs:[
              {
                index:'#3-1',
                title:'三会一课',
                subs:[
                  {
                    index:'origan',
                    title:'组织会议'
                  },
                  {
                    index:'#3-1-2',
                    title:'会议列表'
                  },
                  {
                    index:'#3-1-3',
                    title:'会议记录'
                  },
                ]
              },
              {
                index:'#3-2',
                title:'组织生活'
              },
              {
                index:'#3-3',
                title:'主题党日',
                subs:[
                  {
                    index:'#3-3-1',
                    title:'主题党日1'
                  },
                  {
                    index:'#3-3-2',
                    title:'主题党日2'
                  },
                ]
              },
              {
                index:'#3-4',
                title:'品牌党建',
                subs:[
                  {
                    index:'construction_party',
                    title:'品牌党建建设'
                  },
                  {
                    index:'dynamic_party',
                    title:'品牌党建动态'
                  },
                  {
                    index:'log_party',
                    title:'品牌党建日志'
                  },
                ]
              },
              {
                index:'#3-5',
                title:'第一书记',
                subs:[
                  {
                    index:'first_setting',
                    title:'第一书记设置'
                  },
                  {
                    index:'first_dynamic',
                    title:'第一书记动态'
                  },
                  {
                    index:'first_log',
                    title:'第一书记日志'
                  },
                ]
              },
              {
                index:'#3-6',
                title:'志愿者服务',
                subs:[
                  {
                    index:'#3-6-1',
                    title:'志愿者服务1'
                  },
                  {
                    index:'#3-6-2',
                    title:'志愿者服务2'
                  },
                ]
              },
              {
                index:'#3-7',
                title:'民主评议',
              },
            ]
          }
        ],
      }
    },
    methods:{

    },
    computed:{
      onRoutes(){
        return this.$route.path.replace('/','');
      }
    }
  }
</script>
<style scoped>
  .sidebar{
    display: block;
    position: absolute;
    left: 20px;
    top: 70px;
    bottom: 0;
  }
  .sidebar-el-menu:not(.el-menu--collapse){
    width: 200px;
  }
  .sidebar ul>li{
    text-align: left!important;
    border-bottom: 2px solid #f0f0f0;
  }
  .sidebar::-webkit-scrollbar{
    width: 0;
  }
  .sidebar h5{
    background: #1D5BDA;
    color:#fff;
    text-align: center!important;
    line-height: 50px;
    height: 50px;
  }
  .sidebar ul>li>div span{
    font-weight: bolder;
    margin-left: 10px;
  }
  .el-menu-item.is-active {
    color: #1951C1;
    background: #EBF0FA;
    font-weight: bolder;
    border-left: 2px solid #1951C1;
  }
</style>
