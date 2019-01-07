import Vue from 'vue'
import Router from 'vue-router'

import ZhengWu from '../pages/ZhengWu/ZhengWu'
import Three from '../pages/ZhengWu/Three/Three'
//工作
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
//党建
import Dangjian from '../pages/DangJian/DangJian'
import DangjianFlowInto from '../pages/DangJian/Building/Flow/FlowInto'
import DangjianOrganList from '../pages/DangJian/Building/Organ/OrganList'
import DangjianOrganOutstanding from '../pages/DangJian/Building/Organ/OrganOutstanding'
import DangjianRelationInto from '../pages/DangJian/Building/Relation/RelationInto'
import DangjianBirthday from '../pages/DangJian/Building/Birthday'
import DangjianFee from '../pages/DangJian/Building/Fee'
import DangjianPartyDevelop from '../pages/DangJian/Building/PartyDevelop'
import DangjianPartyPosts from '../pages/DangJian/Building/PartyPosts'
import DangjianOutstanding from '../pages/DangJian/Building/MemberMange/OutstandingParty'
import Organization from '../pages/DangJian/Activity/Three/Organization'
import BuildingPeople from '../pages/DangJian/Building/MemberMange/PartyList'
import StudySetting from '../pages/DangJian/Study/ProjectSetting/ProjectSetting'
import StudyBase from '../pages/DangJian/Study/ProjectSetting/StudyBase'
import StudyExam from '../pages/DangJian/Study/ProjectSetting/StudyExam'
import StudyNote from '../pages/DangJian/Study/ProjectSetting/StudyNote'
import StudyColumn from '../pages/DangJian/Study/ProjectSetting/StudyColumn'
import BrandConstruction from '../pages/DangJian/Activity/Brand/Construction'
import BrandDynamic from '../pages/DangJian/Activity/Brand/Dynamic'
import BrandLog from '../pages/DangJian/Activity/Brand/Log'
import FirstSetting from '../pages/DangJian/Activity/First/Setting'
import FirstDynamic from '../pages/DangJian/Activity/First/Dynamic'
import FirstLog from '../pages/DangJian/Activity/First/Log'

//综治
//综治----综治组织
import ZongZhi from '../pages/ZongZhi/ZongZhi'
import ZongZhiOrigin from '../pages/ZongZhi/Organization/Organization'
import ZongZhiGroup from '../pages/ZongZhi/Organization/Group'
import ZongZhiLong from '../pages/ZongZhi/Organization/Long'
//综治----特殊人群
import ZongZhiSpecialAids from '../pages/ZongZhi/Special/Aids'
import ZongZhiSpecialCorrect from '../pages/ZongZhi/Special/Correct'
import ZongZhiSpecialDrugs from '../pages/ZongZhi/Special/Drugs'
import ZongZhiSpecialPsychosis from '../pages/ZongZhi/Special/Psychosis'
import ZongZhiSpecialRelease from '../pages/ZongZhi/Special/Release'
//综治----社会治安
import SocietyCheckRenovate from '../pages/ZongZhi/Society/CheckRenovate'
import SocietyImportantEvent from '../pages/ZongZhi/Society/ImportantEvent'
import SocietyLifeBase from '../pages/ZongZhi/Society/LifeBase'
import SocietyLifeCommit from '../pages/ZongZhi/Society/LifeCommit'
import SocietyLogisticsSafety from '../pages/ZongZhi/Society/LogisticsSafety'
import ImportantArea from '../pages/ZongZhi/Society/ImportantArea'
//综治----校园安全
import ZongZhiCampusSchool from '../pages/ZongZhi/Campus/School'
import ZongZhiCampusAround from '../pages/ZongZhi/Campus/Around'
import ZongZhiCampusTeachSafe from '../pages/ZongZhi/Campus/TeachSafe'
//综治----护路护线
import ZongZhiProtect from '../pages/ZongZhi/Protect/ProtectRoad'
import ZongZhiIncludeRoad from '../pages/ZongZhi/Protect/IncludeRoad'
//综治----事件/矛盾纠纷
import DisputeAcceptSend from '../pages/ZongZhi/Dispute/AcceptSend'
import DisputeDealFeedback from '../pages/ZongZhi/Dispute/DealFeedback'
import DisputeDeferAudit from '../pages/ZongZhi/Dispute/DeferAudit'
import DisputeEventCheck from '../pages/ZongZhi/Dispute/EventCheck'
import DisputeFinishAnalysis from '../pages/ZongZhi/Dispute/FinishAnalysis'
import DisputeTaskCheck from '../pages/ZongZhi/Dispute/TaskCheck'
import DisputeFoundReport from '../pages/ZongZhi/Dispute/FoundReport'
//综治----信访管理
import BelieveAccount from '../pages/ZongZhi/Believe/Account'
import BelievePetitionManage from '../pages/ZongZhi/Believe/PetitionManage'

//大数据
import Data from '../pages/Data/Data'
import DataDoor from '../pages/Data/DataDoor'
import DataPeople from '../pages/Data/DataPeople'
import DataActual from '../pages/Data/DataActual'
import DataZongzhi from '../pages/Data/DataZongzhi'
import DataShequ from '../pages/Data/DataCommunity'

//GIS
import Gis from '../pages/GIS/GIS'
import GISMap from '../pages/GIS/GISPage/GISMap'
import GISZhian from '../pages/GIS/GISPage/GISZhian'
import GISStreet from '../pages/GIS/GISPage/GISStreet'
import GISCommunity from '../pages/GIS/GISPage/GISCommunity'
import GISCar from '../pages/GIS/GISPage/GISCar'

//网格
import Grid from '../pages/Grid/Grid'
import GridActualHouseManage from '../pages/Grid/ActualHouse/Manage'
import GridActualHouseRental from '../pages/Grid/ActualHouse/Rental'
import GridActualPeopleAll from '../pages/Grid/ActualPeople/All'
import GridCardChild from '../pages/Grid/Card/Child'
import GridDomicileManage from '../pages/Grid/Domicile/Manage'
import GridSocialPublic from '../pages/Grid/Social/Public'
import GridUnitManage from '../pages/Grid/Unit/Manage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/data',
      component:Data
    },
    {
      path:'/gis',
      component:Gis,
      meta:{
        showHeader:true
      },
      children: [
        {
          path: '/gis/map',
          component: GISMap,
          meta: {
            showHeader: true
          }
        },
        {
          path: '/gis/zhian',
          component: GISZhian,
          meta: {
            showHeader: true
          }
        },
        {
          path: '/gis/street',
          component: GISStreet,
          meta: {
            showHeader: true
          }
        },
        {
          path: '/gis/community',
          component: GISCommunity,
          meta: {
            showHeader: true
          }
        },
        {
          path: '/gis/car',
          component: GISCar,
          meta: {
            showHeader: true
          }
        },
        {
          path:'/gis',
          redirect:'/gis/map'
        }
      ]
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
          redirect:'/zhengwu/poverty/record'
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
          path:'/dangjian/activity/three/study_base',
          component:StudyBase,
          meta:{
            showHeader:true
          },
        },{
          path:'/dangjian/activity/three/study_exam',
          component:StudyExam,
          meta:{
            showHeader:true
          },
        },{
          path:'/dangjian/activity/three/study_note',
          component:StudyNote,
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
          path:'/dangjian/activity/three/flowInto',
          component:DangjianFlowInto,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/dangjian/activity/three/organ_list',
          component:DangjianOrganList,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/dangjian/activity/three/outstanding_organ',
          component:DangjianOrganOutstanding,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/dangjian/activity/three/relation_into',
          component:DangjianRelationInto,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/dangjian/activity/three/birthday',
          component: DangjianBirthday,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/dangjian/activity/three/fee',
          component:DangjianFee,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/dangjian/activity/three/party_develop',
          component:DangjianPartyDevelop,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/dangjian/activity/three/party_posts',
          component:DangjianPartyPosts,
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
        //综治组织
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
          path:'/zongzhi/organ/network/long',
          component:ZongZhiLong,
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
        //特殊人群
        {
          path:'/zongzhi/special/release',
          component:ZongZhiSpecialRelease,
          meta:{
            showHeader:true
          }
        },
        {
          path:'/zongzhi/special/correct',
          component: ZongZhiSpecialCorrect,
          meta:{
            showHeader:true
          }
        },
        {
          path:'/zongzhi/special/drugs',
          component:ZongZhiSpecialDrugs,
          meta:{
            showHeader:true
          }
        },
        {
          path:'/zongzhi/special/psychosis',
          component:ZongZhiSpecialPsychosis,
          meta:{
            showHeader:true
          }
        },
        {
          path:'/zongzhi/special/aids',
          component:ZongZhiSpecialAids,
          meta:{
            showHeader:true
          }
        },
        //社会治安
        {
          path: '/zongzhi/socity/important_event',
          component:SocietyImportantEvent,
          meta: {
            showHeader: true
          }
        },
        {
          path: '/zongzhi/socity/life_base',
          component:SocietyLifeBase,
          meta: {
            showHeader: true
          }
        },
        {
          path: '/zongzhi/socity/check_renovate',
          component:SocietyCheckRenovate,
          meta: {
            showHeader: true
          }
        },
        {
          path: '/zongzhi/socity/life_commit',
          component:SocietyLifeCommit,
          meta: {
            showHeader: true
          }
        },
        {
          path: '/zongzhi/socity/important_area',
          component: ImportantArea,
          meta: {
            showHeader: true
          }
        },
        {
          path: '/zongzhi/socity/logistics_safety',
          component:SocietyLogisticsSafety,
          meta: {
            showHeader: true
          }
        },
        //事件/矛盾纠纷
        {
          path: '/zongzhi/dispute/found',
          component: DisputeFoundReport,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/zongzhi/dispute/accept_send',
          component: DisputeAcceptSend,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/zongzhi/dispute/deal_feedback',
          component: DisputeDealFeedback,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/zongzhi/dispute/task_check',
          component: DisputeTaskCheck,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/zongzhi/dispute/finish_analysis',
          component: DisputeFinishAnalysis,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/zongzhi/dispute/defer_audit',
          component: DisputeDeferAudit,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/zongzhi/dispute/event_check',
          component: DisputeEventCheck,
          meta: {
            showHeader: true
          },
        },
        //信访管理
        {
          path:'/zongzhi/believe/account',
          component:BelieveAccount,
          meta:{
            showHeader:true
          }
        },
        {
          path:'/zongzhi/believe/petition_manage',
          component:BelievePetitionManage,
          meta:{
            showHeader:true
          }
        },
        //校园安全
        {
          path:'/zongzhi/campus/school',
          component:ZongZhiCampusSchool,
          meta:{
            showHeader:true
          }
        },
        {
          path:'/zongzhi/campus/around',
          component:ZongZhiCampusAround,
          meta:{
            showHeader:true
          }
        },
        {
          path:'/zongzhi/campus/teachers_safe',
          component:ZongZhiCampusTeachSafe,
          meta:{
            showHeader:true
          }
        },
        //护路护线
        {
          path:'/zongzhi/protect/road',
          component:ZongZhiProtect,
          meta:{
            showHeader:true
          }
        },
        {
          path:'/zongzhi/include/road',
          component:ZongZhiIncludeRoad,
          meta:{
            showHeader:true
          }
        }
      ]
    },
    //网格平台
    {
      path:'/grid',
      component:Grid,
      meta:{
        showHeader:true
      },
      children:[
        {
          path:'/grid/people/child',
          component:GridCardChild,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/grid/actual_people/all',
          component:GridActualPeopleAll,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/grid/actual_house/manage',
          component:GridActualHouseManage,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/grid/actual_house/rental',
          component:GridActualHouseRental,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/grid/social_public',
          component:GridSocialPublic,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/grid/domicile_manage',
          component:GridDomicileManage,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/grid/unit_manage',
          component:GridUnitManage,
          meta:{
            showHeader:true
          },
        },
        {
          path:'/grid',
          redirect:'/grid/actual_house/manage'
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
    }
  ]
})
