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
import ZongZhi from '../pages/ZongZhi/ZongZhi'
import ZongZhiOrigin from '../pages/ZongZhi/Organization/Organization'
import ZongZhiGroup from '../pages/ZongZhi/Organization/Group'
import SocietyCheckRenovate from '../pages/ZongZhi/Society/CheckRenovate'
import SocietyImportantEvent from '../pages/ZongZhi/Society/ImportantEvent'
import SocietyLifeBase from '../pages/ZongZhi/Society/LifeBase'
import SocietyLifeCommit from '../pages/ZongZhi/Society/LifeCommit'
import SocietyLogisticsSafety from '../pages/ZongZhi/Society/LogisticsSafety'
import ImportantArea from '../pages/ZongZhi/Society/ImportantArea'
import ZongZhiSchool from '../pages/ZongZhi/Campus/School'
import ZongZhiProtect from '../pages/ZongZhi/Protect/ProtectRoad'
import DisputeFoundReport from '../pages/ZongZhi/Dispute/FoundReport'
import DataDoor from '../pages/Data/DataDoor'
import DataPeople from '../pages/Data/DataPeople'
import DataActual from '../pages/Data/DataActual'
import DataZongzhi from '../pages/Data/DataZongzhi'
import DataShequ from '../pages/Data/DataCommunity'
import GISMap from '../pages/GIS/GISPage/GISMap'
import GISZhian from '../pages/GIS/GISPage/GISZhian'
import GISStreet from '../pages/GIS/GISPage/GISStreet'
import GISCommunity from "../pages/GIS/GISPage/GISCommunity"
import GISCar from "../pages/GIS/GISPage/GISCar"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/data',
      component: Data
    }, 
    {
      path: '/gis',
      component: Gis,
      meta: {
        showHeader: true
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
        }
      ]
    },
    {
      path: '/zhengwu',
      component: ZhengWu,
      meta: {
        showHeader: true
      },
      children: [
        {
          path: '/zhengwu/three',
          component: Three,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/zhengwu/poverty/record',
          component: ProvertyRecord,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/zhengwu/poverty/policy',
          component: ProvertyPolicy,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/zhengwu/poverty',
          component: ProvertyPeople,
          meta: {
            showHeader: true
          },
          children: [
            {
              path: '/zhengwu/poverty/people',
              component: ProvertyPeople,
              meta: {
                showHeader: true
              },
            },
          ],
        },
        {
          path: '/zhengwu/wisdom',
          component: WisdomOld,
          meta: {
            showHeader: true
          },
          children: [
            {
              path: '/zhengwu/wisdom/old',
              component: WisdomOld,
              meta: {
                showHeader: true
              },
            },
          ],
        },
        {
          path: '/zhengwu/wisdom/health',
          component: WisdomHealth,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/zhengwu/wisdom/serve',
          component: WisdomServe,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/zhengwu',
          redirect: '/zhengwu/three'
        }
      ]
    },
    {
      path: '/working',
      component: Working,
      meta: {
        showHeader: true
      },
      children: [
        {
          path: '/working/plan',
          component: WorkingPlan,
          meta: {
            showHeader: true
          },
          children: [
            {
              path: '/working/plan/my',
              component: WorkingPlan,
              meta: {
                showHeader: true
              },
            },


          ]
        },
        {
          path: '/working/plan/dept',
          component: WorkingDept,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/working/plan/undo',
          component: WorkingUndo,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/working/essay/column',
          component: WorkingEssayColumn,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/working/essay/carousel',
          component: WorkinEssayCarousel,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/working/notice',
          component: WorkingNoticeMange,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/working/logmanage',
          component: WorkingLog,
          meta: {
            showHeader: true
          },
          children: [
            {
              path: '/working/logmanage/log',
              component: WorkingLog,
              meta: {
                showHeader: true
              },
            },

          ],

        },
        {
          path: '/working/logmanage/audit',
          component: WorkingLogAudit,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/working/advertise',
          component: WorkingAdvertise,
          meta: {
            showHeader: true
          },
          children: [
            {
              path: '/working/advertise/essay',
              component: WorkingAdvertise,
              meta: {
                showHeader: true
              },
            },
          ]
        },
        {
          path: '/working',
          redirect: '/working/plan'
        }
      ]
    },
    {
      path: '/dangjian',
      component: Dangjian,
      meta: {
        showHeader: true
      },
      children: [
        {
          path: '/dangjian/activity/three/origan',
          component: Organization,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/dangjian/activity/three/list',
          component: BuildingPeople,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/dangjian/activity/three/outstanding',
          component: DangjianOutstanding,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/dangjian/activity/three/column',
          component: StudyColumn,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/dangjian/activity/three/study_base',
          component: StudyBase,
          meta: {
            showHeader: true
          },
        }, {
          path: '/dangjian/activity/three/study_exam',
          component: StudyExam,
          meta: {
            showHeader: true
          },
        }, {
          path: '/dangjian/activity/three/study_note',
          component: StudyNote,
          meta: {
            showHeader: true
          },
        },


        {
          path: '/dangjian/activity/three/setting',
          component: StudySetting,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/dangjian/activity/three/construction_party',
          component: BrandConstruction,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/dangjian/activity/three/dynamic_party',
          component: BrandDynamic,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/dangjian/activity/three/log_party',
          component: BrandLog,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/dangjian/activity/three/first_setting',
          component: FirstSetting,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/dangjian/activity/three/first_dynamic',
          component: FirstDynamic,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/dangjian/activity/three/first_log',
          component: FirstLog,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/dangjian/activity/three/flowInto',
          component: DangjianFlowInto,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/dangjian/activity/three/organ_list',
          component: DangjianOrganList,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/dangjian/activity/three/outstanding_organ',
          component: DangjianOrganOutstanding,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/dangjian/activity/three/relation_into',
          component: DangjianRelationInto,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/dangjian/activity/three/birthday',
          component: DangjianBirthday,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/dangjian/activity/three/fee',
          component: DangjianFee,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/dangjian/activity/three/party_develop',
          component: DangjianPartyDevelop,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/dangjian/activity/three/party_posts',
          component: DangjianPartyPosts,
          meta: {
            showHeader: true
          },
        },
        {
          path: '/dangjian',
          redirect: '/dangjian/activity/three/origan'
        }
      ],

    },
    {
      path: '/zongzhi',
      component: ZongZhi,
      meta: {
        showHeader: true
      },
      children: [
        {
          path: '/zongzhi',
          redirect: '/zongzhi/organ/institution'
        },
        {
          path: '/zongzhi/organ/institution',
          component: ZongZhiOrigin,
          meta: {
            showHeader: true
          }
        },
        {
          path: '/zongzhi/organ/group',
          component: ZongZhiGroup,
          meta: {
            showHeader: true
          }
        },
      
        {
          path: '/zongzhi/socity/important_event',
          component: SocietyImportantEvent,
          meta: {
            showHeader: true
          }
        },
        {
          path: '/zongzhi/socity/life_base',
          component: SocietyLifeBase,
          meta: {
            showHeader: true
          }
        },
        {
          path: '/zongzhi/socity/check_renovate',
          component: SocietyCheckRenovate,
          meta: {
            showHeader: true
          }
        },
        {
          path: '/zongzhi/socity/life_commit',
          component: SocietyLifeCommit,
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
          component: SocietyLogisticsSafety,
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
          path: '/zongzhi/campus/school',
          component: ZongZhiSchool,
          meta: {
            showHeader: true
          }
        },
        {
          path: '/zongzhi/protect/road',
          component: ZongZhiProtect,
          meta: {
            showHeader: true
          }
        }
      ]
    },
    {
      path: '/',
      redirect: '/working/plan'
    },
    {
      path: '/data/door',
      component: DataDoor
    },
    {
      path: '/data/people',
      component: DataPeople
    },
    {
      path: '/data/actual',
      component: DataActual
    },
    {
      path: '/data/zongzhi',
      component: DataZongzhi
    },
    {
      path: '/data/shequ',
      component: DataShequ
    },
  ]
})




