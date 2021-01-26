// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "./assets/icons/iconfont.css"
import "vuex-i18n"
import './icons'
import header_bar from '@/components/common/Headerbar'
import footer_bar from '@/components/common/Footerbar'
import nav_bar from '@/components/common/Navbar'
import {Dialog} from "element-ui"
import components from '@/components/index.js'
import uploader from 'vue-simple-uploader'
import { NoticeBar } from 'vant';

import global from '@/utils/Global'
Vue.prototype.Global = global

//设置反向代理，前端请求默认发送到http://192.168.31.9:8081/
var axios = require('axios')
// axios.defaults.baseURL = 'http://192.168.0.135:9999'
axios.defaults.baseURL = 'http://192.168.0.135:8081'
//全局注册，之后可在其他组件中通过this.$axios发送数据
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(NoticeBar);
Vue.use(components)
Vue.use(Dialog)
Vue.use(uploader)
Vue.use(ElementUI)
Vue.config.productionTip = false

/*注册全局组件*/
Vue.component('MyHeader', header_bar);
Vue.component('MyFooter', footer_bar);
Vue.component('MyNav', nav_bar);

//引入flexible
import 'lib-flexible'
/* eslint-disable no-new */

// datav
import dataV from '@jiaminghi/data-view'
Vue.use(dataV)

//引入echart
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})

// axios.interceptors.request.use(
//   config => {
//     // 判断是否存在token，如果存在的话，则每个http header都加上token
//     let token = this.Global.accessToken;
//     if (true) {
//       config.headers.Authorization = token;
//     }
//     console.log("222")
//     return config;
//   },
//   error => {
//     console.log("222")
//     return Promise.reject(error);
//   });

/* leaflet icon */
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });
