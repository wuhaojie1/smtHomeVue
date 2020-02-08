import City from './idCardCity'
// let timer = null;
let isAllowTurn = true;
// let that = this;
export const moveDom = (dom, animateStance, speed, direction, timer) => {
    if (!isAllowTurn) {
        return;
    }
    isAllowTurn = false;
    let oldSpeed = dom.offsetLeft;
    clearInterval(timer);//执行当前动画同时清除之前的动画
    var odiv = dom;
    timer = setInterval(function () {
        //var speed = (animateStance-odiv.offsetLeft)/10;//缓冲动画的速度参数变化值
        //如果速度是大于0，说明是向右走，那么就向上取整
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        //Math.floor();向下取整
        // if(direction==="right"){
        if (direction === "left") {
            if (odiv.offsetLeft == oldSpeed + animateStance) {
                isAllowTurn = true;
                clearInterval(timer);
            } else {
                if (odiv.offsetLeft + speed >= 0) {

                    odiv.style.left = 0 + 'px';
                    isAllowTurn = true;
                    clearInterval(timer);
                } else {
                    odiv.style.left = odiv.offsetLeft + speed + 'px';
                }

            }
        } else if (direction === "right") {
            if (odiv.offsetLeft == oldSpeed - animateStance) {
                clearInterval(timer);
                isAllowTurn = true;
            } else {
                if (odiv.offsetLeft - speed + odiv.offsetWidth - odiv.parentNode.offsetWidth < 0) {
                    odiv.style.left = -odiv.offsetWidth + odiv.parentNode.offsetWidth + 'px';
                    clearInterval(timer);
                    isAllowTurn = true;
                } else {
                    odiv.style.left = odiv.offsetLeft - speed + 'px';
                }
            }
        }
        //clientLeft 返回对象的offsetLeft属性值和到当前窗口左边的真实值之间的距离
    }, 30);
};


//阻止事件冒泡
export const stopEventBubble = (e) => {
    e.cancelBubble = true;
    stopPropagation(e);
};

function stopPropagation(e) {
    e = window.event || e;
    if (document.all) {  //只有ie识别
        e.cancelBubble = true;
    } else {
        e.stopPropagation();
    }
}

//组装数据
export const packAgeSelectData = (data, codeKey, valueKey) => {
    let selectArray = [];
    data.forEach(obj => {
        let selectObj = {
            ...obj,
            code: obj[codeKey],
            value: obj[valueKey],
        };
        selectArray.push(selectObj)
    });
    return selectArray;
};

//日期处理
export const DateFunc = {
    //isDay  是否只是到天
    nowDate: function (isDay) {
        let date = new Date();
        //年
        let year = date.getFullYear();
        //月
        let month = date.getMonth() + 1;
        //日
        let day = date.getDate();
        //时
        let hh = date.getHours();
        //分
        let mm = date.getMinutes();
        //秒
        let ss = date.getSeconds();
        let resultDate = year + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);
        if (!isDay) {
            resultDate += " " + (hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss)
        }

        return resultDate;
    },
    //获取明天
    tomorrowDate: function (isDay) {
        let date = new Date();
        date = new Date(date.valueOf() + 24 * 60 * 60 * 1000);// 当前时间加上
        //年
        let year = date.getFullYear();
        //月
        let month = date.getMonth() + 1;
        //日
        let day = date.getDate();
        //时
        let hh = date.getHours();
        //分
        let mm = date.getMinutes();
        //秒
        let ss = date.getSeconds();
        let resultDate = year + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);
        if (!isDay) {
            resultDate += " " + (hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss)
        }

        return resultDate;
    },
    /*yesterDay(){

    },*/
    //下个月
    lastMonthDate: function (isDay) {
        let date = new Date();

        //月
        let month = date.getMonth() + 2;
        //年
        let year = date.getFullYear();
        year = month === 13 ? (year + 1) : year;
        month = month === 13 ? 1 : month;
        //日
        let day = date.getDate();
        //时
        let hh = date.getHours();
        //分
        let mm = date.getMinutes();
        //秒
        let ss = date.getSeconds();
        let resultDate = year + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);
        if (!isDay) {
            resultDate += " " + (hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss)
        }

        return resultDate;
    },

    dateDiffIncludeToday: function (sDate1, sDate2) {
        let startTime = sDate1.substr(0, 10);//截取时间
        let endTime = sDate2.substr(0, 10);
        let separator = "-"; //日期分隔符
        let startDates = startTime.split(separator);
        let endDates = endTime.split(separator);
        let startDate = new Date(startDates[0], startDates[1] - 1, startDates[2]);
        let endDate = new Date(endDates[0], endDates[1] - 1, endDates[2]);
        let resultDate = parseInt(Math.abs(endDate - startDate) / 86400000);
        resultDate = resultDate < 0 ? -resultDate : resultDate;
        return resultDate;//把相差的毫秒数转换为天数
    },
    //时间加减天
    countDate: function (date, count, isHH) {
        let resultDate = new Date(date);
        resultDate = new Date(resultDate.valueOf() + count * 24 * 60 * 60 * 1000);// 当前时间加上
        // let date=new Date();
        //年
        let year = resultDate.getFullYear();
        //月
        let month = resultDate.getMonth() + 1;
        //日
        let day = resultDate.getDate();
        //时
        let hh = resultDate.getHours();
        //分
        let mm = resultDate.getMinutes();
        //秒
        let ss = resultDate.getSeconds();
        let time = year + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);
        if (isHH) {
            time += " " + (hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss)
        }
        // console.log(time)
        return time;
    },
    // 2019-11-13 16:59:48传入时间格式必须为这样
    /*
    nested exception is org.apache.ibatis.binding.BindingException: Parameter 'roomTypeId' not found. Available parameters are [roomPricePlan, param1]
    */
    isDuringData: function (startTime, endTime) {
        // debugger
        let nowDate = this.nowDate(false);
        let times_now = new Date(nowDate).getTime();
        let times_start = new Date(startTime).getTime();
        let times_end = new Date(endTime).getTime();
        let flag = false;
        // console.log(times_start < times_now && times_now < times_end);
        if(times_start < times_now && times_now < times_end){
            flag = true
        }
        return flag;
    },
    addHours: function (startTime, addTime) {//+ -  小时
        let resultDate = new Date();
        if(startTime){
            resultDate = new Date(startTime);
        }
        resultDate = new Date(resultDate.valueOf() + addTime * 60 * 60 * 1000);// 当前时间加上
        //年
        let year = resultDate.getFullYear();
        //月
        let month = resultDate.getMonth() + 1;
        //日
        let day = resultDate.getDate();
        //时
        let hh = resultDate.getHours();
        //分
        let mm = resultDate.getMinutes();
        //秒
        let ss = resultDate.getSeconds();
        let time = year + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);
        time += " " + (hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss)
        let date = year + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);
        let dateHour = (hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm)
        return {
            time,
            date,
            dateHour
        }
    }

};
//检查数据
export const checkDataFunc = {
    //身份证号验证
    idcard(data) {
        // let pass = true;
        // let that = this;
        let idcard = data.trim();
        //身份证号合法性验证
        //支持15位和18位身份证号
        //支持地址编码、出生日期、校验位验证
        // let tip = "";
        let home = "";
        let birthday = "";
        let sex = "";
        let reg = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/;
        let city = City;
        if (!idcard || !idcard.match(reg)) {
            return false;
        } else if (!city[idcard.substr(0, 2)]) {
            return false;
        } else {
            //18位身份证需要验证最后一位校验位
            if (idcard.length == 18) {
                idcard = idcard.split('');
                //∑(ai×Wi)(mod 11)
                //加权因子
                let factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
                //校验位
                let parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
                let sum = 0;
                let ai = 0;
                let wi = 0;
                for (let i = 0; i < 17; i++) {
                    ai = idcard[i];
                    wi = factor[i];
                    sum += ai * wi;
                }
                // let last = parity[sum % 11];
                if (parity[sum % 11] != idcard[17]) {
                    return false;
                }
            }
        }
        //省份
        home = city[data.substring(0, 2)];
        //生日
        birthday = data.substring(6, 10) + '-' + data.substring(10, 12) + '-' + data.substring(12, 14);
        //性别
        if (data.length == 15) {
            sex = data.substring(14, 15) % 2 == 0 ? '女' : '男';
        } else if (data.length == 18) {
            sex = data.substring(14, 17) % 2 == 0 ? '女' : '男';
        }
        return {
            birthday, home, sex
        };
    },
    //基础检查数据   长度lenght  数字isNumber  是否为空isNull
    //检查的均为object类型 data Obj
    //检查来源为数组 checkArray  Array
    //checkArray中对象格式
    // obj ={
    // 	name:"用户名",
    //	checkKey:"username"
    // 	checkType:["isNumber"],//默认检查是否为空  长度lenght  数字isNumber  是否为空isNull  手机号isPhone  身份证号isIdcard
    //   minLenght:6
    //   maxLenght:6
    // }
    checkBasics: function (that, data, checkArray) {
        let __that = this;
        //电话
        let regPhone = /^1[0-9]{10}$/;
        //身份证
        // var regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        // let reg = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/;
        let isReturn = true;
        checkArray.some(element => {
            let checkType = element.checkType ? element.checkType : ["isNull"];
            let checkVal = data[element.checkKey].toString();
            //先判断空
            isReturn = true;
            if (!checkVal || checkVal === null || checkVal === undefined || checkVal.trim() === "") {
                that.$bus.$emit('tip', {text: element.name + "不能为空", type: 'error'});
                isReturn = false
            } else {
                checkType.some(item => {
                    if (item === "isNumber") {
                        if (parseFloat(checkVal).toString() === "NaN") {
                            that.$bus.$emit('tip', {text: element.name + "不正确", type: 'error'});
                            isReturn = false
                        }
                    } else if (item === "lenght") {
                        let minLenght = element.minLenght ? element.minLenght : 6;
                        let maxLenght = element.maxLenght ? element.maxLenght : 20;
                        if (minLenght && checkVal.length < minLenght) {
                            that.$bus.$emit('tip', {text: element.name + "长度不能小于" + minLenght, type: 'error'});
                            isReturn = false
                        }
                        if (maxLenght && checkVal.length > maxLenght) {
                            that.$bus.$emit('tip', {text: element.name + "长度不能大于" + maxLenght, type: 'error'});
                            isReturn = false
                        }
                    } else if (item === "isPhone") {
                        if (!regPhone.test(checkVal)) {
                            that.$bus.$emit('tip', {text: element.name + "格式不正确", type: 'error'});
                            isReturn = false
                        }
                    } else if (item === "isIdcard") {
                        let pass = __that.idcard(checkVal);
                        if (!pass) {
                            that.$bus.$emit('tip', {text: element.name + "格式不正确", type: 'error'});
                            isReturn = false
                        }
                    }
                    return !isReturn;
                })
            }
            return !isReturn;
        });
        return isReturn
    },

    //检查数组
    checkArrayData: function (that, data, checkArray) {
        let isReturn = false;
        if (!data || data === null || data.length === 0) {
            that.$bus.$emit('tip', {text: "未选择或填写任何数据", type: 'error'});
            return isReturn;
        }
        data.some(element => {
            isReturn = this.checkBasics(that, element, checkArray);
            return !isReturn
        });
        return isReturn;
    }
};
//检查数据
export const getPosition = {
    getTop: function (e) {
        let offset = e.offsetTop;
        // if(e.offsetParent!=null) offset+=this.getTop(e.offsetParent);
        return offset;
    },
    geLeft: function (e) {
        let offset = e.offsetLeft;
        // if(e.offsetParent!=null) offset+=this.getLeft(e.offsetParent);
        return offset;
    },
    getPos: function (e) {
        // left and top value
        let left = 0;
        let top = 0;

        // offsetParent返回一个指向最近的定位元素,标准模式如果没有就返回html/body,表示迁移量都是相对其中来计算.
        while (e.offsetParent) {
            // 计算偏移量
            left += e.offsetLeft + (e.currentStyle ? this.intval(e.currentStyle.borderLeftWidth) : 0);
            top += e.offsetTop + (e.currentStyle ? this.intval(e.currentStyle.borderTopWidth) : 0);

            // 最近的定位元素或者body
            e = e.offsetParent;
        }

        left += e.offsetLeft + (e.currentStyle ? this.intval(e.currentStyle.borderLeftWidth) : 0);
        top += e.offsetTop + (e.currentStyle ? this.intval(e.currentStyle.borderTopWidth) : 0);

        return {
            x: left,
            y: top
        };
    },
    intval: function (v) {
        v = parseInt(v);
        return isNaN(v) ? 0 : v;
    }

};
//模糊判断数据属于与否
export const findObjByKey = (dataArray, key, value, isBelong) => {
    let result = false;
    dataArray.some(element => {
        let isReturn = false;
        isReturn = (element[key] === value);
        if (isBelong) {
            isReturn = (element[key].indexOf(value) != -1);
        }
        result = element;
        return isReturn
    });
    return result;
};
// //根据身份证号提取信息
//导出exele文件
export const excelExport = (data, fileName) => {
    // debugger
    const blob = new Blob([data]);
    const filename = fileName;
    const elink = document.createElement('a');
    elink.download = filename;
    elink.style.display = 'none';
    elink.href = URL.createObjectURL(blob);
    document.body.appendChild(elink);
    elink.click();
    URL.revokeObjectURL(elink.href); // 释放URL 对象
    document.body.removeChild(elink);
};

// export const IdentityCodeValid = (code) => {


// }
//输出结果

