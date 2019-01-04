import Vue from 'vue'
import Router from 'vue-router'
import ZhengWu from '../pages/ZhengWu/ZhengWu'
import Three from '../pages/ZhengWu/Three/Three'
import ProvertyPeople from '../pages/ZhengWu/Poverty/PovertyPeople'
import ProvertyRecord from '../pages/ZhengWu/Poverty/PovertyRecord'
import ProvertyPolicy from '../pages/ZhengWu/Poverty/PovertyPolicy'
import WisdomHealth from '../pages/ZhengWu/Wisdom/Health'
import WisdomServe from '../pages/ZhengWu/Wisdom/Serve'
import WisdomOld from '../pages/ZhengWu/Wisdom/Old'
import Working from '../pages/Working/Working'
import WorkingPlan from '../pages/Working/Plan/PlanMy'
import WorkingUndo from '../pages/Working/Plan/Undo'
import WorkingDept from '../pages/Working/Plan/Dept'
import WorkingNoticeMange from '../pages/Working/Notice/NoticeMange'
import WorkingLog from '../pages/Working/Log/Log'
import WorkingLogAudit from '../pages/Working/Log/LogAudit'
import WorkingAdvertise from '../pages/Working/Advertise/Advertise'
import WorkinEssayCarousel from '../pages/Working/Advertise/Carousel'
import WorkingEssayColumn from '../pages/Working/Advertise/Column'
import Data from '../pages/Data/Data'
import Gis from '../pages/GIS/GIS'
import Dangjian from '../pages/DangJian/DangJian'
import DangjianOutstanding from '../pages/DangJian/Building/MemberMange/OutstandingParty'
import Organization from '../pages/DangJian/Activity/Three/Organization'
import BuildingPeople from '../pages/DangJian/Building/MemberMange/PartyList'
import StudySetting from '../pages/DangJian/Study/ProjectSetting/ProjectSetting'
import StudyColumn from '../pages/DangJian/Study/ProjectSetting/StudyColumn'
import BrandConstruction from '../pages/DangJian/Activity/Brand/Construction'
import BrandDynamic from '../pages/DangJian/Activity/Brand/Dynamic'
import BrandLog from '../pages/DangJian/Activity/Brand/Log'
import FirstSetting from '../pages/DangJian/Activity/First/Setting'
import FirstDynamic from '../pages/DangJian/Activity/First/Dynamic'
import FirstLog from '../pages/DangJian/Activity/First/Log'
import ZongZhi from '../pages/ZongZhi/ZongZhi'
import ZongZhiOrigin from '../pages/ZongZhi/Organization/Organization'
import ZongZhiGroup from '../pages/ZongZhi/Organization/Group'
import ZongZhiSpecial from '../pages/ZongZhi/Special/Special'
import ImportantArea from '../pages/ZongZhi/Society/ImportantArea'
import ZongZhiSchool from '../pages/ZongZhi/Campus/School'
import ZongZhiProtect from '../pages/ZongZhi/Protect/ProtectRoad'
import DisputeFoundReport from '../pages/ZongZhi/Dispute/FoundReport'
import DataDoor from '../pages/Data/DataDoor'
import DataPeople from '../pages/Data/DataPeople'
import DataActual from '../pages/Data/DataActual'
import DataZongzhi from '../pages/Data/DataZongzhi'
import DataShequ from '../pages/Data/DataCommunity'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/data',
      component:Data
    },
    {
      path:'/gis',
      component:Gis
    },
    {
      path:'/zhengwu',
      component:ZhengWu,
      meta:{
        showHeader:true
      },
      children:[
        {
          path:'/zhengwu/three',
          component:Three,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/zhengwu/poverty/record',
          component:ProvertyRecord,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/zhengwu/poverty/policy',
          component:ProvertyPolicy,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/zhengwu/poverty',
          component:ProvertyPeople,
          meta:{
            showHeader:true
          },
          children:[
            {
              path:'/zhengwu/poverty/people',
              component:ProvertyPeople,
              meta:{
                showHeader:true
              },
            },
          ],
        },
        {
          path:'/zhengwu/wisdom',
          component:WisdomOld,
          meta:{
            showHeader:true
          },
          children:[
            {
              path:'/zhengwu/wisdom/old',
              component:WisdomOld,
              meta:{
                showHeader:true
              },
            },
          ],
        },
        {
          path:'/zhengwu/wisdom/health',
          component:WisdomHealth,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/zhengwu/wisdom/serve',
          component:WisdomServe,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/zhengwu',
          redirect:'/zhengwu/three'
        }
      ]
    },
    {
      path:'/working',
      component:Working,
      meta:{
        showHeader:true
      },
      children:[
        {
          path:'/working/plan',
          component:WorkingPlan,
          meta:{
            showHeader:true
          },
          children:[
            {
              path:'/working/plan/my',
              component:WorkingPlan,
              meta:{
                showHeader:true
              },
            },


          ]
        },
        {
          path:'/working/plan/dept',
          component:WorkingDept,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/working/plan/undo',
          component:WorkingUndo,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/working/essay/column',
          component:WorkingEssayColumn,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/working/essay/carousel',
          component: WorkinEssayCarousel,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/working/notice',
          component:WorkingNoticeMange,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/working/logmanage',
          component:WorkingLog,
          meta:{
            showHeader:true
          },
          children:[
            {
              path:'/working/logmanage/log',
              component:WorkingLog,
              meta:{
                showHeader:true
              },
            },

          ],

        },
        {
          path:'/working/logmanage/audit',
          component:WorkingLogAudit,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/working/advertise',
          component:WorkingAdvertise,
          meta:{
            showHeader:true
          },
          children:[
            {
              path:'/working/advertise/essay',
              component:WorkingAdvertise,
              meta:{
                showHeader:true
              },
            },
          ]
        },
        {
          path:'/working',
          redirect:'/working/plan'
        }
      ]
    },
    {
      path: '/dangjian',
      component: Dangjian,
      meta:{
        showHeader:true
      },
      children: [
        {
          path:'/dangjian/activity/three/origan',
          component:Organization,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/dangjian/activity/three/list',
          component:BuildingPeople,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/dangjian/activity/three/outstanding',
          component:DangjianOutstanding,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/dangjian/activity/three/column',
          component:StudyColumn,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/dangjian/activity/three/setting',
          component:StudySetting,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/dangjian/activity/three/construction_party',
          component:BrandConstruction,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/dangjian/activity/three/dynamic_party',
          component:BrandDynamic,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/dangjian/activity/three/log_party',
          component:BrandLog,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/dangjian/activity/three/first_setting',
          component:FirstSetting,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/dangjian/activity/three/first_dynamic',
          component:FirstDynamic,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/dangjian/activity/three/first_log',
          component:FirstLog,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/dangjian',
          redirect: '/dangjian/activity/three/origan'
        }
      ],

    },
    {
      path:'/zongzhi',
      component:ZongZhi,
      meta:{
        showHeader:true
      },
      children:[
        {
          path:'/zongzhi',
          redirect: '/zongzhi/organ/institution'
        },
        {
          path:'/zongzhi/organ/institution',
          component:ZongZhiOrigin,
          meta:{
            showHeader:true
          }
        },
        {
          path:'/zongzhi/organ/group',
          component:ZongZhiGroup,
          meta:{
            showHeader:true
          }
        },
        {
          path:'/zongzhi/special/release',
          component:ZongZhiSpecial,
          meta:{
            showHeader:true
          }
        },
        {
          path: '/zongzhi/socity/important',
          component: ImportantArea,
          meta: {
            showHeader: true
          }
        },
        {
          path: '/zongzhi/dispute/found',
          component: DisputeFoundReport,
          meta: {
            showHeader: true
          },
        },
        {
          path:'/zongzhi/campus/school',
          component:ZongZhiSchool,
          meta:{
            showHeader:true
          }
        },
        {
          path:'/zongzhi/protect/road',
          component:ZongZhiProtect,
          meta:{
            showHeader:true
          }
        }
      ]
    },
    {
      path:'/',
      redirect:'/working/plan'
    },
    {
      path:'/data/door',
      component:DataDoor
    },
     {
      path:'/data/people',
      component:DataPeople
    },
    {
      path:'/data/actual',
      component:DataActual
    },
    {
      path:'/data/zongzhi',
      component:DataZongzhi
    },
    {
      path:'/data/shequ',
      component:DataShequ
    },

  ]
})
