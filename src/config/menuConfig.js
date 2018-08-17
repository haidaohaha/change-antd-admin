import React from 'react';
import { Icon } from 'react-fa';
// 控制显示一级模块
export const qh_menus = [
    {
        key: 'home',
        id: 'HOME',
        title: '首页',
        path: '/home',
        icon: <Icon name="home" />
    },
    {
        key: 'dashboard',
        id: 'DISPLAY',
        title: '综合展示',
        path: '/dashboard',
        icon: <Icon name="map" />
    },
    {
        key: 'overall',
        id: 'MANAGE',
        title: '综合管理',
        path: '/overall/gointo/executive',
        icon: <Icon name="cubes" />
    },
    {
        key: 'invest',
        id: 'INVEST',
        title: '投资管理',
        path: '/invest/investmanageset',
        icon: <Icon name="jpy" />
    },
    {
        key: 'datum',
        id: 'DATUM',
        title: '资料管理',
        path: '/datum',
        icon: <Icon name="book" />
    },
    {
        key: 'design',
        id: 'DESIGN',
        title: '设计管理',
        path: '/design',
        icon: <Icon name="edit" />
    },
    {
        key: 'quality',
        id: 'QUALITY',
        title: '质量管理',
        path: '/quality',
        icon: <Icon name="list-alt" />
    },
    {
        key: 'schedule',
        id: 'SCHEDULE',
        title: '进度管理',
        path: '/schedule/scheduleshow',
        icon: <Icon name="random" />
    },
    {
        key: 'safety',
        title: '安全管理',
        id: 'SAFETY',
        path: '/safety',
        icon: <Icon name="shield" />
    },
    {
        key: 'cost',
        id: 'COST',
        title: '造价管理',
        path: '/cost',
        icon: <Icon name="jpy" />
    },
    {
        key: 'video',
        title: '三维全景',
        id: 'VIDEO',
        path: '/video/monitor',
        icon: <Icon name="video-camera" />
    },
    {
        key: 'selfcare',
        id: 'SELFCARE',
        title: '个人中心',
        path: '/selfcare',
        icon: <Icon name="user" />
    },
    {
        key: 'milepost',
        id: 'MILEPOST',
        title: '里程碑管理',
        path: '/milepost',
        icon: <Icon name="bars" />
    },
    {
        key: 'system',
        id: 'SYSTEM',
        title: '系统设置',
        path: '/system',
        icon: <Icon name="cogs" />
    },
    {
        key: 'setup',
        id: 'SETUP',
        title: '系统管理',
        path: '/setup',
        icon: <Icon name="gear" />
    }
];
// 控制显示二级菜单
export const qh_MODULES = [
    {
        id: 'HOME',
        name: '首页'
    },
    {
        id: 'DISPLAY',
        name: '综合展示',
        children: [
            {
                id: 'DISPLAY.2DGIS',
                name: '现场信息'
            },
            {
                id: 'DISPLAY.3DGIS',
                name: '规划信息'
            },
            {
                id: 'DISPLAY.DGNMODULE',
                name: '项目信息'
            }
        ]
    },
    {
        id: 'MANAGE',
        name: '综合管理',
        children: [
            {
                id: 'MANAGE.GOINTO5',
                name: '人员进离场管理'
            },
            {
                id: 'MANAGE.GOINTO2',
                name: '机械设备进离场管理'
            },
            {
                id: 'MANAGE.GOINTO3',
                name: '物料进场管理'
            },
            /* {
		id: 'MANAGE.GOINTO4',
		name: '人料机设置'
	}, */ {
                id: 'MANAGE.STATISTICS',
                name: '考勤统计'
            },
            {
                id: 'MANAGE.QUERY',
                name: '考勤查询'
            },
            {
                id: 'MANAGE.SETTING',
                name: '考勤设置'
            },
            {
                id: 'MANAGE.NEWS',
                name: '新闻公告'
            },
            {
                id: 'MANAGE.SENDRECIEVE',
                name: '现场收发文'
            },
            {
                id: 'MANAGE.APPROVAL',
                name: '项目报批'
            }
        ]
    },
    {
        id: 'INVEST',
        name: '投资管理',
        children: [
            {
                id: 'INVEST.INVESTMANAGESET',
                name: '投资管理设置'
            },
            {
                id: 'INVEST.INVESTSUMMARY',
                name: '项目投资汇总表'
            },
            {
                id: 'INVEST.THREEYEARPLANSUMMARY',
                name: '三年计划汇总表'
            },
            {
                id: 'INVEST.THREEYEARPLANREPORT',
                name: '三年计划填报'
            },
            {
                id: 'INVEST.THREEYEARPLANAPPROVE',
                name: '三年计划审批'
            },
            {
                id: 'INVEST.ANNUALPLANSUMMARY',
                name: '年度计划汇总表'
            },
            {
                id: 'INVEST.ANNUALPLANREPORT',
                name: '年度计划填报'
            },
            {
                id: 'INVEST.ANNUALPLANAPPROVE',
                name: '年度计划审批'
            },
            {
                id: 'INVEST.MONTHLYREPORTSUMMARY',
                name: '投资月报汇总表'
            },
            {
                id: 'INVEST.MONTHLYREPORTREPORT',
                name: '投资月报填报'
            },
            {
                id: 'INVEST.MONTHLYREPORTAPPROVE',
                name: '投资月报审批'
            }
        ]
    },
    {
        id: 'DATUM',
        name: '资料管理',
        children: [
            {
                id: 'DATUM.STANDARD',
                name: '制度标准'
            },
            {
                id: 'DATUM.ENGINEERING',
                name: '工程文档'
            }
        ]
    },
    {
        id: 'DESIGN',
        name: '设计管理',
        children: [
            {
                id: 'DESIGN.STATISTICS',
                name: '统计分析'
            },
            {
                id: 'DESIGN.PLAN1',
                name: '交付计划'
            },
            {
                id: 'DESIGN.PLAN2',
                name: '发起计划'
            },
            {
                id: 'DESIGN.PLAN3',
                name: '填报计划'
            },
            {
                id: 'DESIGN.PLAN4',
                name: '计划审查'
            },
            {
                id: 'DESIGN.PLAN5',
                name: '变更计划'
            },
            {
                id: 'DESIGN.PLAN6',
                name: '变更审查'
            },
            {
                id: 'DESIGN.DESIGNRESULTSEARCH',
                name: '成果查询'
            },
            {
                id: 'DESIGN.REPORTRESULT',
                name: '设计上报'
            },
            {
                id: 'DESIGN.APPROVALRESULT',
                name: '设计审查'
                // }, {
                // 	id: 'DESIGN.CREATEMODIFY',
                // 	name: '发起变更',
            },
            {
                id: 'DESIGN.MODIFY',
                name: '设计变更'
            },
            {
                id: 'DESIGN.MODIFYAPPROVAL',
                name: '变更审查'
            },
            {
                id: 'DESIGN.REMIND',
                name: '进度提醒'
            },
            // 设计交底
            { id: 'DESIGN.EXPLAINQUERY', name: '交底查询' },
            { id: 'DESIGN.EXPLAINSUBMIT', name: '交底填报' },
            { id: 'DESIGN.EXPLAINHANDLE', name: '交底审查' }
        ]
    },
    {
        id: 'QUALITY',
        name: '质量管理',
        children: [
            {
                id: 'QUALITY.TONGJI',
                name: '统计分析'
            },
            {
                id: 'QUALITY.QUERY',
                name: '验收查询'
            },
            {
                id: 'QUALITY.HUAFEN',
                name: '检验批划分'
            },
            {
                id: 'QUALITY.JYP.REPORT',
                name: '检验批填报'
            },
            {
                id: 'QUALITY.JYP.EXAMINE',
                name: '检验批审查'
            },
            {
                id: 'QUALITY.FX.REPORT',
                name: '分项填报'
            },
            {
                id: 'QUALITY.FX.EXAMINE',
                name: '分项审查'
            },
            {
                id: 'QUALITY.FB.REPORT',
                name: '分部填报'
            },
            {
                id: 'QUALITY.FB.EXAMINE',
                name: '分部审查'
            },
            {
                id: 'QUALITY.DW.REPORT',
                name: '单位工程填报'
            },
            {
                id: 'QUALITY.DW.EXAMINE',
                name: '单位工程审查'
            },
            {
                id: 'QUALITY.MONITORING',
                name: '质量监控'
            },
            {
                id: 'QUALITY.DEFECT.QUERY',
                name: '缺陷查询'
            },
            {
                id: 'QUALITY.DEFECT.NOTICE',
                name: '缺陷通知'
            },
            {
                id: 'QUALITY.DEFECT.CORRECTIVE',
                name: '缺陷整改'
            },
            {
                id: 'QUALITY.DEFECT.CHECK',
                name: '整改审核'
            }
        ]
    },
    {
        id: 'SAFETY',
        name: '安全管理',
        children: [
            {
                id: 'SAFETY.STATISTICS',
                name: '统计分析'
            },
            {
                id: 'SAFETY.SCHEME',
                name: '安全策划书'
            },
            {
                id: 'SAFETY.ORGANIZATIONALSTRUCTURE',
                name: '组织架构'
            },
            {
                id: 'SAFETY.MANAGEMENTINSTITUTION',
                name: '安全管理制度'
            },
            {
                id: 'SAFETY.EMERGENCYPLAN',
                name: '应急预案'
            },
            {
                id: 'SAFETY.SAFETYGOAL',
                name: '安全目标'
            },
            {
                id: 'SAFETY.RESPONSIBILITYSYSTEM',
                name: '安全责任制'
            },
            {
                id: 'SAFETY.RISKEVALUATION',
                name: '风险评价'
            },
            {
                id: 'SAFETY.UNBEARABLE',
                name: '不可承受风险'
            },
            {
                id: 'SAFETY.RISKFACTOR',
                name: '重大危险因素'
            },
            {
                id: 'SAFETY.DYNAMICREPORT',
                name: '动态报表'
            },
            {
                id: 'SAFETY.DISCIPLINE',
                name: '安全规程'
            },
            {
                id: 'SAFETY.SOLUTION',
                name: '专项方案'
            },
            {
                id: 'SAFETY.PLAN',
                name: '监测方案'
            },
            {
                id: 'SAFETY.QUERY',
                name: '监测数据查询'
            },
            {
                id: 'SAFETY.PROJECT',
                name: '监测项目'
            },
            {
                id: 'SAFETY.STATIONS',
                name: '监测点'
            },
            {
                id: 'SAFETY.MONITORING',
                name: '监测数据'
            },
            {
                id: 'SAFETY.SAFETYINSPECTION',
                name: '检查管理'
            },
            {
                id: 'SAFETY.HIDDENDANGER',
                name: '安全隐患'
            },
            {
                id: 'SAFETY.QUALIFICATIONVERIFICATION',
                name: '安全资质验证'
            },
            {
                id: 'SAFETY.EDUCATIONREGISTER',
                name: '安全教育登记'
            },
            {
                id: 'SAFETY.ACTIONSRECORD',
                name: '安全活动记录'
            },
            {
                id: 'SAFETY.TECHNICALDISCLOSURE',
                name: '安全技术交底'
            },
            {
                id: 'SAFETY.FACILITIESACCEPTANCE',
                name: '设备设施验收'
            },
            {
                id: 'SAFETY.REGISTER',
                name: '事故登记'
            },
            {
                id: 'SAFETY.REPORT',
                name: '事故报告'
            },
            {
                id: 'SAFETY.TREATMENT',
                name: '事故处理'
            },
            {
                id: 'SAFETY.INVESTIGATION',
                name: '事故调查'
            }
        ]
    },
    {
        id: 'SCHEDULE',
        name: '进度管理',
        children: [
            {
                id: 'SCHEDULE.ANALYZE',
                name: '统计分析'
            },
            {
                id: 'SCHEDULE.SCHEDULESHOW',
                name: '进度展示'
            },
            {
                id: 'SCHEDULE.PLANSCHEDULEREPORT',
                name: '计划进度填报'
            },
            {
                id: 'SCHEDULE.PLANREPORT',
                name: '计划填报'
            },
            {
                id: 'SCHEDULE.PLANAPPROVE',
                name: '计划审批'
            },
            {
                id: 'SCHEDULE.ACTUALSCHEDULE',
                name: '实际进度'
            },
            {
                id: 'SCHEDULE.SCHEDULEREPORT',
                name: '进度填报'
            },
            {
                id: 'SCHEDULE.DAILYREPORT',
                name: '每日填报'
            },
            {
                id: 'SCHEDULE.SCHEDULEAPPROVE',
                name: '进度审批'
            },
            {
                id: 'SCHEDULE.REPORTSMANAGE',
                name: '报表管理'
            },
            {
                id: 'SCHEDULE.WARNINGANALYZE',
                name: '预警分析'
            }
        ]
    },
    {
        id: 'COST',
        name: '造价管理',
        children: [
            {
                id: 'COST.COSTESTIMATE',
                name: '造价估算'
            },
            {
                id: 'COST.COSTSCHEDULE',
                name: '造价进度'
            },
            {
                id: 'COST.COSTCOMPARISON',
                name: '造价对比'
            },
            {
                id: 'COST.INFOSHOW',
                name: '工程量信息展示'
            },
            {
                id: 'COST.DATAMAINTENANCE',
                name: '工程量数据维护'
            },
            {
                id: 'COST.WORKESTIMATE',
                name: '重要工程量预估'
            }
        ]
    },
    {
        id: 'VIDEO',
        name: '三维全景',
        children: [
            {
                name: '视频监控',
                id: 'VIDEO.VIDEO'
            },
            {
                name: '摄像头管理',
                id: 'VIDEO.CAMERAMANAGE'
            },
            {
                name: '全景图',
                id: 'VIDEO.PANORAMAMANAGE'
            },
            {
                name: '全景图管理',
                id: 'VIDEO.PANORAMACONTROLLER'
            }
        ]
    },
    {
        id: 'SELFCARE',
        name: '个人中心',
        children: [
            {
                id: 'SELFCARE.TASK',
                name: '个人任务'
            },
            {
                id: 'SELFCARE.QUERY',
                name: '个人考勤'
            },
            {
                id: 'SELFCARE.MESSAGE',
                name: '个人消息'
            },
            {
                id: 'SELFCARE.INFORMATION',
                name: '个人信息'
            }
        ]
    },
    {
        id: 'MILEPOST',
        name: '里程碑管理',
        children: [
            {
                id: 'MILEPOST.SETTING',
                name: '里程碑设置'
            },
            {
                id: 'MILEPOST.PLANLIST',
                name: '里程碑一栏表'
            },
            {
                id: 'MILEPOST.PLANSUBMIT',
                name: '里程碑计划-填报'
            },
            {
                id: 'MILEPOST.PLANTRIAL',
                name: '里程碑计划-审查'
            },
            {
                id: 'MILEPOST.TRACKINGSUBMIT',
                name: '里程碑跟踪-填报'
            },
            {
                id: 'MILEPOST.TRACKINGTRIAL',
                name: '里程碑跟踪-审查'
            }
        ]
    },
    {
        id: 'SYSTEM',
        name: '系统设置',
        children: [
            {
                id: 'SYSTEM.ROLE',
                name: '角色设置'
            },
            {
                id: 'SYSTEM.PERMISSION',
                name: '权限设置'
            },
            {
                id: 'SYSTEM.MAJOR',
                name: '专业设置'
            },
            {
                id: 'SYSTEM.PROJECT',
                name: '项目设置'
            },
            {
                id: 'SYSTEM.STAFFING',
                name: '工种配置'
            },
            {
                id: 'SYSTEM.MATERIEL',
                name: '物料配置'
            },
            {
                id: 'SYSTEM.MECHANICAL',
                name: '机械设备配置'
            },
            {
                id: 'SYSTEM.TAG',
                name: '工程量项'
            },
            {
                id: 'SYSTEM.QUANTITIES',
                name: '分项工程量'
            },
            {
                id: 'SYSTEM.HAZARD',
                name: '安全隐患'
            },
            {
                id: 'SYSTEM.QUALITY',
                name: '质量缺陷'
            },
            {
                id: 'SYSTEM.ACCIDENT',
                name: '安全事故'
            },
            {
                id: 'SYSTEM.ORG',
                name: '组织设置'
            },
            {
                id: 'SYSTEM.TEMPLATE',
                name: '模板设置'
            },
            {
                id: 'SYSTEM.ICON',
                name: '图标设置'
            },
            {
                id: 'SYSTEM.WORKFLOW',
                name: '流程设置'
            },
            {
                id: 'SYSTEM.DOCUMENT',
                name: '文档设置'
            },
            {
                id: 'SYSTEM.MILLSTONETAG',
                name: '里程碑节点'
            },
            {
                id: 'SYSTEM.MILLSTONEPROJECT',
                name: '里程碑工程'
            }
        ]
    },
    {
        id: 'SETUP',
        name: '系统管理',
        children: [
            {
                id: 'SETUP.AREA',
                name: '区域地块'
            },
            {
                id: 'SETUP.PROJECT',
                name: '项目管理'
            },
            {
                id: 'SETUP.UNIT',
                name: '单位工程'
            },
            {
                id: 'SETUP.SECTION',
                name: '施工包划分'
            },
            {
                id: 'SETUP.SITE',
                name: '工程部位'
            },
            {
                id: 'SETUP.ROLE',
                name: '角色管理'
            },
            {
                id: 'SETUP.PERMISSION',
                name: '权限管理'
            },
            {
                id: 'SETUP.ORG',
                name: '组织机构'
            },
            {
                id: 'SETUP.PERSON',
                name: '用户管理'
            },
            {
                id: 'SETUP.STANDARD',
                name: '制度标准'
            },
            {
                id: 'SETUP.ENGINEERING',
                name: '工程目录'
            },
            {
                id: 'SETUP.KEYWORD',
                name: '工程字段'
            },
            {
                id: 'SETUP.TEMPLATE',
                name: '模板配置'
            },
            {
                id: 'SETUP.DICTIONARIES',
                name: '工程文档字典'
            },
            {
                id: 'SETUP.FEEDBACK',
                name: '用户反馈'
            }
        ]
    }
];
