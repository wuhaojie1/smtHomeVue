// 创建  获取  删除cookie
const { location } = window;
// 创建cookie
export const setCookie = (name, value) => {
    const exp = new Date();
    exp.setTime(exp.getTime() + 36500 * 24 * 60 * 60 * 1000);
    const domain = `.${location.host.split('.')[1]}.${location.host.split('.')[2]}`;
    if (location.host.split('.')[3]) {
        document.cookie = `${name}=${escape(value)};expires=${exp.toGMTString()};path=/`;
    } else if (location.host.split('.')[2]) {
        document.cookie = `${name}=${escape(value)};expires=${exp.toGMTString()};domain=${domain};path=/`;
    } else {
        document.cookie = `${name}=${escape(value)};expires=${exp.toGMTString()};path=/`;
    }
};
// 获取cookie
export const getCookie = (name) => {
    let arrd = null;
    const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
    if (document.cookie.match(reg)) {
        arrd = document.cookie.match(reg);
        return unescape(arrd[2]);
    }
    return null;
};
// 删除cookie
export const removeCookie = (name) => {
    const domain = `.${location.host.split('.')[1]}.${location.host.split('.')[2]}`;
    if (location.host.split('.')[3]) {
        document.cookie = `${name}="";expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/`;
    } else if (location.host.split('.')[2]) {
        document.cookie = `${name}="";expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=${domain};path=/`;
    } else {
        document.cookie = `${name}="";expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/`;
        // document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString() + ';path=/'
    }
};