import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from './api/axios';
import api from './api/api'

Vue.use(ElementUI);

Vue.config.productionTip = false;

Vue.prototype.axios = axios;
Vue.prototype.api = api;

new Vue({
  el:'#app',
  router,
  store,
  render: h => h(App),

  data(){
    return{
      BaseUrl:'https://webblog.yolostudio.cn',
      headers:{headers:{
        Authorization:''
      }
    }
    }
  }
}).$mount('#app');
