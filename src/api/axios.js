import axios from 'axios';
import bus from '../assets/js/bus';
import {getCookie} from '../assets/js/cookie';
import router from '../router/index'
import api from './api';

let isLogin = true;
// 请求头
const formatHeaders = (acHeaders) => {
    let headers = {};
    headers['Content-type'] = 'application/json';
    headers["__token"] = getCookie("tooken");
    if (acHeaders) {
        headers = {...headers, ...acHeaders};
    }
    return headers;
};
const http = ({
                  url, headers, params, method, hostType, responseType
              }) => {
    let timestamp = (new Date()).valueOf();
    let prefix = '';
    switch (hostType) {
        case 'IDreader':
            // prefix = '/xz-holtel-IDreader'; // 身份证阅读
            prefix = api.localApi;
            break;
        default:
            prefix = api.commApi;
    }
    return new Promise((resolve, reject) => {
        if (isLogin) {
            axios({
                url: `${prefix}/${url}?&&t=${timestamp}`, //
                headers: formatHeaders(headers),
                // data: formatParams(params),
                data: params,
                method: method || 'post',
                responseType: responseType || '',
            }).then((data) => {
                if (data.config.responseType === 'blob') {
                    resolve(data.data)
                } else if (data.data.code.toString() === '0') {
                    bus.$emit('tip', {text: data.data.msg, type: 'error'});
                } else if (data.data.code.toString() === '-1') {
                    router.push('/login')
                    // isLogin = false
                } else {
                    resolve(data.data);
                }


            }).catch((err) => {
                reject(err);
            });
        }
    });

};
export default http;
