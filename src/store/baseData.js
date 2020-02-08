import axios from '../api/axios';

// import Vue from 'vue'
// import Vuex from 'vuex'
const GETPUBLICINFO = 'GETPUBLICINFO'; // 公共数据 public_info
// const GETROOMTYPELIST = 'GETROOMTYPELIST'; // 公共数据 public_info
// const GETCODELIST = "GETCODELIST"; // 字典数据 //性别  民族  证件类型
// const GETUSERLIST = "GETUSERLIST";//用户列表
// const GETROLELIST = "GETROLELIST";// 角色列表
// const GETEMPLOYEELIST = "GETEMPLOYEELIST";   //员工列表
// const GETGOODSLIST = "GETGOODSLIST";   //商品列表
// const GETCOLORDEFULT = "GETCOLORDEFULT"; //默认颜色组
// const GETBUILDLIST = "GETBUILDLIST"; //楼栋
// const GETSMSTEMPLATELIST = "GETSMSTEMPLATELIST"; //短信模板
// // const GETCOSTTYPELIST = "GETCOSTTYPELIST";// 费用类型列表
// const GETVIPTYPELIST = "GETVIPTYPELIST";//会员类型列表
// Vue.use(Vuex)
export default {
    state: {
        // 公共 public Info 数据
        publicInfo: null,
        /*// 房型列表数据
        RoomTypeList: [],

        // 用户列表
        userList: [],
        // 角色列表
        roleList: [],
        //员工
        employeeList: [{code:null,value:"无"}],
        //商品
        goodsList: [],
        //楼栋
        buildList: [],
        //短信模板
        smsTemplate: [],
        //会员类型
        vipTypeList: [],
        // 字典数据 //性别  民族  证件类型
        codeList: {
                roomFeatures: [],//房间特征
                payBy: [],//支付方式
                credentialType: [],//证件类型
                ethnic: [],//民族
                sex: [//性别
                    {id: 1, code: 1, value: "男", name: "男", text: "男", children: null, status: null},
                    {id: 0, code: 0, value: "女", name: "女", text: "女", children: null, status: null},

                    // {id: 2,code:2,value:"其他",name: "其他",text:"其他",children: null,status: null},
                ],
                checkOutReason: [],//退房原因
                openRoomTypeList: [//开房方式
                    //（1天房 2钟点房 3自用房 4午夜房）
                    {id: 1, code: 1, value: "天房", name: "天房", text: "天房"},
                    {id: 2, code: 2, value: "钟点房", name: "钟点房", text: "钟点房"},
                    {id: 3, code: 3, value: "自用房", name: "自用房", text: "自用房"},
                    {id: 4, code: 4, value: "午夜房", name: "午夜房", text: "午夜房"},
                ],
                bookTypeList: [//预定类型
                    {id: 1, code: 1, value: "预付", name: "预付", text: "预付"},
                    {id: 2, code: 2, value: "现付", name: "现付", text: "现付"},
                    {id: 3, code: 3, value: "信用住", name: "信用住", text: "信用住"},

                ],
                //预定来源（1前台预定 2微酒店预定 3中央预定 4渠道）
                bookSource: [
                    {id: 1, code: 1, value: "前台预定", name: "前台预定", text: "前台预定"},
                    {id: 2, code: 2, value: "微酒店预定", name: "微酒店预定", text: "微酒店预定"},
                    {id: 3, code: 3, value: "中央预定", name: "中央预定", text: "中央预定"},
                    {id: 4, code: 4, value: "渠道", name: "渠道", text: "渠道"},
                ],
                //usePrice
                usePriceList: [
                    {code: "normalPrice", value: "标准价"},
                    {code: "vipPrice", value: "会员价"},
                    {code: "weekendPrice", value: "周末价"},
                    {code: "microPrice", value: "微会员"},
                    {code: "midnightPrice", value: "午夜价"}
                ],
                bookOrderStatusList: [//预定状态
                    //1-待确认，2-预定，3-预定+部分入住，4-入住，5-取消，6-预定未达，7-拒绝
                    {id: 1, code: 1, value: "待确认", name: "待确认", text: "待确认"},
                    {id: 2, code: 2, value: "已预定", name: "已预定", text: "已预定"},
                    {id: 3, code: 3, value: "部分入住", name: "部分入住", text: "部分入住"},
                    {id: 4, code: 4, value: "已入住", name: "已入住", text: "已入住"},
                    {id: 5, code: 5, value: "已取消", name: "已取消", text: "已取消"},
                    {id: 6, code: 6, value: "预定未达", name: "预定未达", text: "预定未达"},
                    {id: 7, code: 7, value: "已拒绝", name: "已拒绝", text: "已拒绝"},
                ],
                timeList: [//时间
                    {id: 0, code: 0, value: "00:00", name: "00:00", text: "00:00",},
                    {id: 1, code: 1, value: "01:00", name: "01:00", text: "01:00",},
                    {id: 2, code: 2, value: "02:00", name: "02:00", text: "02:00",},
                    {id: 3, code: 3, value: "03:00", name: "03:00", text: "03:00",},
                    {id: 4, code: 4, value: "04:00", name: "04:00", text: "04:00",},
                    {id: 5, code: 5, value: "05:00", name: "05:00", text: "05:00",},
                    {id: 6, code: 6, value: "06:00", name: "06:00", text: "06:00",},
                    {id: 7, code: 7, value: "07:00", name: "07:00", text: "07:00",},
                    {id: 8, code: 8, value: "08:00", name: "08:00", text: "08:00",},
                    {id: 9, code: 9, value: "09:00", name: "09:00", text: "09:00",},
                    {id: 10, code: 10, value: "10:00", name: "10:00", text: "10:00",},
                    {id: 11, code: 11, value: "11:00", name: "11:00", text: "11:00",},
                    {id: 12, code: 12, value: "12:00", name: "12:00", text: "12:00",},
                    {id: 13, code: 13, value: "13:00", name: "13:00", text: "13:00",},
                    {id: 14, code: 14, value: "14:00", name: "14:00", text: "14:00",},
                    {id: 15, code: 15, value: "15:00", name: "15:00", text: "15:00",},
                    {id: 16, code: 16, value: "16:00", name: "16:00", text: "16:00",},
                    {id: 17, code: 17, value: "17:00", name: "17:00", text: "17:00",},
                    {id: 18, code: 18, value: "18:00", name: "18:00", text: "18:00",},
                    {id: 19, code: 19, value: "19:00", name: "19:00", text: "19:00",},
                    {id: 20, code: 20, value: "20:00", name: "20:00", text: "20:00",},
                    {id: 21, code: 21, value: "21:00", name: "21:00", text: "21:00",},
                    {id: 22, code: 22, value: "22:00", name: "22:00", text: "22:00",},
                    {id: 23, code: 23, value: "23:00", name: "23:00", text: "23:00",},
                    {id: 24, code: 24, value: "24:00", name: "24:00", text: "24:00",},
                ],
                monthList: [
                    {code: 1, value: "一月", text: "01"},
                    {code: 2, value: "二月", text: "02"},
                    {code: 3, value: "三月", text: "03"},
                    {code: 4, value: "四月", text: "04"},
                    {code: 5, value: "五月", text: "05"},
                    {code: 6, value: "六月", text: "06"},
                    {code: 7, value: "七月", text: "07"},
                    {code: 8, value: "八月", text: "08"},
                    {code: 9, value: "九月", text: "09"},
                    {code: 10, value: "十月", text: "10"},
                    {code: 11, value: "十一月", text: "11"},
                    {code: 12, value: "十二月", text: "12"},
                ],
                educationList: [],//学历
                costTypeList: [],//费用
                priceType:[],
                protocolUnit:[],
                budgetItems:[],
                teamType:[],
                gustFromList:[],
                borrowList:[],
                payByList: [{code: 1, value: "现付"}, {code: 2, value: "预付"}],


        },*/
    },
    actions: {
        // 获取 public_info 数据
        // getPublicInfo({ commit }) {
        //   axios({
        //     url: "roomType/list",
        //     method: 'post',
        //   }).then((data) => {
        //     if (data.code === '0') {
        //       commit('GETPUBLICINFO', data.data);
        //     }
        //   });
        // },
        //获取默认颜色
        getColorDefult({commit}) {
            axios({
                url: "roomColor/current",
                method: 'post',
            }).then((data) => {
                if (data.code.toString() === '1') {
                    let resultData = data.data;
                    if (resultData != null && resultData != undefined && resultData.toString() != "{}") {
                        commit('GETCOLORDEFULT', resultData);
                    }

                }
            });
        },
        //获取楼栋
        getBuildList({commit}) {
            axios({
                url: 'building/list',
                method: 'post',
            }).then((data) => {
                if (data.code.toString() === '1') {
                    let resultData = getCodeArray(data.data);
                    commit('GETBUILDLIST', resultData);
                    // this.$bus.$emit('tip', { text: "成功", type: 'success' });
                } else {
                    // this.$bus.$emit('tip', { text: "失败", type: 'error' });
                }
            });
        },
        //获取商品
        getGoodsList({commit}) {
            let postData = {
                current: 1,
                searchObj: {},
                size: 999999
            };
            axios({
                url: "goods/list",
                method: 'post',
                params: JSON.stringify(postData),
            }).then((data) => {
                if (data.code.toString() === '1') {
                    let resultData = getCodeArray(data.data.records);
                    commit('GETGOODSLIST', resultData);
                }
            });
        },
        getUserList({commit}) {
            let postData = {
                current: 1,
                searchObj: {},
                size: 999999
            };
            axios({
                url: "user/list",
                method: 'post',
                params: JSON.stringify(postData),
            }).then((data) => {
                if (data.code.toString() === '1') {
                    let resultData = getCodeArray(data.data.records);
                    commit('GETUSERLIST', resultData);
                }
            });
        },

        // 获取 RoomTypeList 数据
        getRoomTypeList({commit}) {
            let postData = {};
            axios({
                url: "roomType/list",
                method: 'post',
                params: JSON.stringify(postData),
            }).then((data) => {
                if (data.code.toString() === '1') {
                    let result = getCodeArray(data.data);
                    commit('GETROOMTYPELIST', result);
                }
            });
        },
        //获取角色
        getRoleList({commit}) {
            let postData = {
                current: 1,
                searchObj: {},
                size: 999999
            };
            axios({
                url: "role/list",
                method: 'post',
                params: JSON.stringify(postData),
            }).then((data) => {
                if (data.code.toString() === '1') {
                    let resultData = getCodeArray(data.data.records);
                    commit('GETROLELIST', resultData);
                }
            });
        },
        //获取员工
        getEmployeeList({commit}) {
            let postData = {
                current: 1,
                searchObj: {},
                size: 999999
            };
            axios({
                url: "employee/list",
                method: 'post',
                params: JSON.stringify(postData),
            }).then((data) => {
                if (data.code.toString() === '1') {
                    let resultData = getCodeArray(data.data.records);
                    commit('GETEMPLOYEELIST', resultData);
                }
            });
        },
        //获取短信模板
        getSmsTemplateList({commit}) {
            axios({
                url: "smsTemplate/list",
                method: 'post',
            }).then((data) => {
                if (data.code.toString() === '1') {
                    // console.log(data.data)
                    let resultData = getCodeArray(data.data);
                    // console.log(resultData)
                    commit('GETSMSTEMPLATELIST', resultData);
                }
            });
        },

        // 获取 字典表 数据
        getCodeList({commit}) {
            axios({
                url: "dictionary/list/tree",
                method: 'post',
            }).then((data) => {
                if (data.code.toString() === '1') {
                    let codeList = {
                        roomFeatures: [],//房间特征
                        payBy: [],//支付方式
                        credentialType: [],//证件类型
                        ethnic: [],//民族
                        sex: [//性别
                            {id: 0, code: 0, value: "女", name: "女", text: "女", children: null, status: null},
                            {id: 1, code: 1, value: "男", name: "男", text: "男", children: null, status: null},
                            // {id: 2,code:2,value:"其他",name: "其他",text:"其他",children: null,status: null},
                        ],
                        checkOutReason: [],//退房原因
                        openRoomTypeList: [//开房方式
                            //（1天房 2钟点房 3自用房 4午夜房）
                            {id: 1, code: 1, value: "天房", name: "天房", text: "天房"},
                            {id: 2, code: 2, value: "钟点房", name: "钟点房", text: "钟点房"},
                            {id: 3, code: 3, value: "自用房", name: "自用房", text: "自用房"},
                            {id: 4, code: 4, value: "午夜房", name: "午夜房", text: "午夜房"},
                        ],
                        bookTypeList: [//预定类型
                            {id: 1, code: 1, value: "预付", name: "预付", text: "预付"},
                            {id: 2, code: 2, value: "现付", name: "现付", text: "现付"},
                            {id: 3, code: 3, value: "信用住", name: "信用住", text: "信用住"},

                        ],
                        //预定来源（1前台预定 2微酒店预定 3中央预定 4渠道）
                        bookSource: [
                            {id: 1, code: 1, value: "前台预定", name: "前台预定", text: "前台预定"},
                            {id: 2, code: 2, value: "微酒店预定", name: "微酒店预定", text: "微酒店预定"},
                            {id: 3, code: 3, value: "中央预定", name: "中央预定", text: "中央预定"},
                            {id: 4, code: 4, value: "渠道", name: "渠道", text: "渠道"},
                        ],
                        //usePrice
                        usePriceList: [
                            {code: "normalPrice", value: "标准价"},
                            {code: "vipPrice", value: "会员价"},
                            {code: "weekendPrice", value: "周末价"},
                            {code: "microPrice", value: "微会员"},
                            {code: "midnightPrice", value: "午夜价"}
                        ],
                        bookOrderStatusList: [//预定状态
                            //1-待确认，2-预定，3-预定+部分入住，4-入住，5-取消，6-预定未达，7-拒绝
                            {id: 1, code: 1, value: "待确认", name: "待确认", text: "待确认"},
                            {id: 2, code: 2, value: "已预定", name: "已预定", text: "已预定"},
                            {id: 3, code: 3, value: "部分入住", name: "部分入住", text: "部分入住"},
                            {id: 4, code: 4, value: "已入住", name: "已入住", text: "已入住"},
                            {id: 5, code: 5, value: "已取消", name: "已取消", text: "已取消"},
                            {id: 6, code: 6, value: "预定未达", name: "预定未达", text: "预定未达"},
                            {id: 7, code: 7, value: "已拒绝", name: "已拒绝", text: "已拒绝"},
                        ],
                        timeList: [//时间
                            {id: 0, code: 0, value: "00:00", name: "00:00", text: "00:00",},
                            {id: 1, code: 1, value: "01:00", name: "01:00", text: "01:00",},
                            {id: 2, code: 2, value: "02:00", name: "02:00", text: "02:00",},
                            {id: 3, code: 3, value: "03:00", name: "03:00", text: "03:00",},
                            {id: 4, code: 4, value: "04:00", name: "04:00", text: "04:00",},
                            {id: 5, code: 5, value: "05:00", name: "05:00", text: "05:00",},
                            {id: 6, code: 6, value: "06:00", name: "06:00", text: "06:00",},
                            {id: 7, code: 7, value: "07:00", name: "07:00", text: "07:00",},
                            {id: 8, code: 8, value: "08:00", name: "08:00", text: "08:00",},
                            {id: 9, code: 9, value: "09:00", name: "09:00", text: "09:00",},
                            {id: 10, code: 10, value: "10:00", name: "10:00", text: "10:00",},
                            {id: 11, code: 11, value: "11:00", name: "11:00", text: "11:00",},
                            {id: 12, code: 12, value: "12:00", name: "12:00", text: "12:00",},
                            {id: 13, code: 13, value: "13:00", name: "13:00", text: "13:00",},
                            {id: 14, code: 14, value: "14:00", name: "14:00", text: "14:00",},
                            {id: 15, code: 15, value: "15:00", name: "15:00", text: "15:00",},
                            {id: 16, code: 16, value: "16:00", name: "16:00", text: "16:00",},
                            {id: 17, code: 17, value: "17:00", name: "17:00", text: "17:00",},
                            {id: 18, code: 18, value: "18:00", name: "18:00", text: "18:00",},
                            {id: 19, code: 19, value: "19:00", name: "19:00", text: "19:00",},
                            {id: 20, code: 20, value: "20:00", name: "20:00", text: "20:00",},
                            {id: 21, code: 21, value: "21:00", name: "21:00", text: "21:00",},
                            {id: 22, code: 22, value: "22:00", name: "22:00", text: "22:00",},
                            {id: 23, code: 23, value: "23:00", name: "23:00", text: "23:00",},
                            // {id: 24, code: 24, value: "24:00", name: "24:00", text: "24:00",},
                        ],
                        monthList: [
                            {code: 1, value: "一月", text: "01"},
                            {code: 2, value: "二月", text: "02"},
                            {code: 3, value: "三月", text: "03"},
                            {code: 4, value: "四月", text: "04"},
                            {code: 5, value: "五月", text: "05"},
                            {code: 6, value: "六月", text: "06"},
                            {code: 7, value: "七月", text: "07"},
                            {code: 8, value: "八月", text: "08"},
                            {code: 9, value: "九月", text: "09"},
                            {code: 10, value: "十月", text: "10"},
                            {code: 11, value: "十一月", text: "11"},
                            {code: 12, value: "十二月", text: "12"},
                        ],
                        educationList: [],//学历
                        costTypeList: [],//费用
                        borrowList:[],
                        payByList: [{code: 1, value: "现付"}, {code: 2, value: "预付"}],
                        commodityUnit:[],

                    };
                    let codeListParent = {};
                    data.data.forEach(element => {
                        // debugger
                        let elCode = element.code&&element.code!==null?element.code.toString():"";
                        switch (elCode) {
                            case "fang_jian_te_zheng":
                                codeList.roomFeatures = getCodeArray(element.children);
                                codeListParent.roomFeatures = element;
                                break;
                            case "zhi_fu_fang_shi":
                                codeList.payBy = getCodeArrayPay(element.children);
                                codeListParent.payBy = element;
                                break;
                            case "zheng_jian_lei_xing":
                                codeList.credentialType = getCodeArray(element.children);
                                codeListParent.credentialType = element;
                                break;
                            case "min_zu":
                                codeList.ethnic = getCodeArray(element.children);
                                codeListParent.ethnic = element;
                                break;
                            case "haun_fang_yuan_yin":
                                codeList.checkOutReason = getCodeArray(element.children);
                                codeListParent.checkOutReason = element;
                                break;
                            case "xue_li":
                                codeList.educationList = getCodeArray(element.children);
                                codeListParent.educationList = element;
                                break;
                            case "fei_yong_lei_bie":
                                codeList.costTypeList = getCodeArray(element.children);
                                codeListParent.costTypeList = element;
                                break;
                            case "ke_ren_lai_yuan":
                                // debugger
                                codeList.gustFromList = getCodeArray(element.children);
                                codeListParent.gustFromList = element;
                                break;
                            // case "wang_luo_ding_dan":
                            //     codeList.netWorkOrderList = getCodeArray(element.children);
                            //     codeListParent.netWorkOrderList = element;
                            //     break;
                            case "jia_ge_lei_xing":
                                codeList.priceType = getCodeArray(element.children);
                                codeListParent.priceType = element;
                                break;
                            case "xie_yi_lei_bie":
                                codeList.protocolUnit = getCodeArray(element.children);
                                codeListParent.protocolUnit = element;
                                break;
                            case "shou_zhi_xiang_mu":
                                codeList.budgetItems = getCodeArray(element.children);
                                codeListParent.budgetItems = element;
                                break;
                            case "tuan_dui_lei_bie":
                                codeList.teamType = getCodeArray(element.children);
                                codeListParent.teamType = element;
                                break;
                            case "wu_pin_jie_yong":
                                codeList.borrowList = getCodeArray(element.children);
                                codeListParent.borrowList = element;
                                break;
                            case "shang_pin_dan_wei":
                                codeList.commodityUnit = getCodeArray(element.children);
                                codeListParent.commodityUnit = element;
                                break;
                            case "wei_xiu_yuan_yin":
                                codeList.maintenanceReason = getCodeArray(element.children);
                                codeListParent.maintenanceReason = element;
                                break;
                        }
                    });
                    codeList.codeListParent = codeListParent;
                    commit('GETCODELIST', codeList);
                }
            });
        },

        //获取会员类型
        getVipTypeList({commit}) {
            axios({
                url: "/vipType/list",
                method: 'post',
            }).then((data) => {
                if (data.code.toString() === '1') {
                    // console.log(data.data)
                    let resultData = getCodeArray(data.data);
                    // console.log(resultData)
                    commit('GETVIPTYPELIST', resultData);
                }
            })
        },
    },
    mutations: {
        [GETPUBLICINFO](state, result) {
            state.publicInfo = result;
        },
        // [GETROOMTYPELIST](state, result) {
        //     state.RoomTypeList = result;
        // },
        // [GETCODELIST](state, result) {
        //     state.codeList = result;
        // },
        // [GETUSERLIST](state, result) {
        //     state.userList = result;
        // },
        // [GETROLELIST](state, result) {
        //     state.roleList = result;
        // },
        // [GETEMPLOYEELIST](state, result) {
        //     state.employeeList = result;
        // },
        // [GETGOODSLIST](state, result) {
        //     state.goodsList = result;
        // },
        // [GETCOLORDEFULT](state, result) {
        //     state.colorDefult = result;
        // },
        // [GETBUILDLIST](state, result) {
        //     state.buildList = result;
        // },
        // [GETSMSTEMPLATELIST](state, result) {
        //     state.smsTemplate = result;
        // },
        // [GETVIPTYPELIST](state, result) {
        //     state.vipTypeList = result
        // },

    }
}

function getCodeArray(data) {
    let list = [];
    data.forEach(childElement => {
        let obj = {
            ...childElement,
            value: childElement.name,
            text: childElement.name,
            code: childElement.id,
        };
        list.push(obj)
    });
    return list;
}
function getCodeArrayPay(data) {
    let list = [];
    data.forEach(childElement => {
        // console.log(childElement);
        if(childElement.name !== '入账'){
            let obj = {
                ...childElement,
                value: childElement.name,
                text: childElement.name,
                code: childElement.id,
            };
            list.push(obj)
        }
    });
    return list;
}
