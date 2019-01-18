<template>
  <div class="sidebar" >
    <p style="background: #008aff;color:#fff;height: 70px;line-height: 70px;font-size:20px;font-weight: bolder;margin: 0;">党建平台</p>
    <el-menu class="sidebar-el-menu" :default-active="$route.path" unique-opened router>
      <el-menu-item index="#" class="leftTitle">党建平台</el-menu-item>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title" class="first">
             <span slot="title">{{item.title}}</span>
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
           <span slot="title">{{item.title}}</span>
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
            title:'党务中心',
            subs:[
              {
                index:'#1-1',
                title:'党组织管理',
                subs:[
                  {
                      index:'organ_list',
                    title:'党组织列表'
                  },
                  {
                    index:'outstanding_organ',
                    title:'优秀党组织'
                  }
                ],
              },
              {
                index:'party_posts',
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
                index:'party_develop',
                title:'党员发展全纪实'
              },
              {
                index:'#1-5',
                title:'党员关系转移',
                subs:[
                  {
                    index:'relation_into',
                    title:'党员关系转入'
                  },
                  {
                    index:'#relationOut',
                    title:'党员关系转出'
                  }
                ],
              },
              {
                index:'#1-6',
                title:'流动党员',
                subs:[
                  {
                    index:'flowInto',
                    title:'流动党员转入'
                  },
                  {
                    index:'#flowOut',
                    title:'流动党员转出'
                  }
                ],
              },
              {
                index:'fee',
                title:'党费缴纳记录'
              },
              {
                index:'birthday',
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
                index:'study_base',
                title:'题库管理'
              },
              {
                index:'study_exam',
                title:'考试中心'
              },
              {
                index:'study_note',
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
                index:'#origan',
                title:'组织生活'
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

    },
  }
</script>
<style>
  .el-submenu__title{
    color:#c9c9c9;
    font-weight: bolder;
  }
  .el-menu-item-group .el-menu-item{
    color:#777!important;
    line-height: 34px!important;
    height: 34px!important;
  }
</style>
<style scoped>
  ul{
    position: fixed;
    bottom: 0;
    top: 70px;
    width:200px;
    left: 0;
    background: #202020;
    z-index: 999;
  }

  .sidebar .leftTitle{
    background: #008aff;
    color:#fff;
    text-align: center!important;
    border:none!important;
    height: 70px;
    line-height: 70px;
    font-size: 20px;
    font-weight: bolder;
  }
  .el-submenu .el-menu-item{
    min-width: 160px;
  }
  .el-menu-item.is-active {
    color: #0077ff!important;
    background:#121212;
    font-weight: bolder;
    border-left: 2px solid #0077ff;
  }
  .el-menu-item, .el-submenu__title{
    height: 60px;
    line-height: 60px;
    color:#c9c9c9;
    font-size:14px
  }
  .submenu li:nth-of-type(1){
    text-align: center;
  }
  .submenu>li{
    text-align: left!important;
    border-bottom: 2px solid #3a3a3a;
  }
  .submenu>li i{
    margin-right: 10px;
    color:#555
  }
  .el-menu-item:focus, .el-menu-item:hover{
    background:#121212;
  }

</style>
