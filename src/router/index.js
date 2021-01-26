import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
import home from '@/view/home'
import login from '@/view/login'
import sensorResource from '@/view/SensorResource/index'
import sensorRegister from '@/view/SensorRegister'
import ECharts from 'vue-echarts/components/ECharts.vue'
import sensor from "../view/SensorRegisterMenu/sensor";
import xml from "@/view/SensorRegisterMenu/xml"
import productResource from '@/view/ProductResource/index'
import obsResource from '@/view/ObsResource'
import customize from "../view/SensorRegisterMenu/customize";
Vue.use(ECharts)
Vue.component('v-chart', ECharts)
Vue.use(Router)

export default new Router({
  routes: [
    { path:'/', name:'login', component:login},
    { path:'/home', name:'home', component: home},
    {
      path: '/sensorResource',
      name: 'sensorResource',
      component: sensorResource,
    },
    {
      path:'/obsResource',
      name:'obsResource',
      component: obsResource,
    },
    {
      path:'/productResource',
      name:'productResource',
      component: productResource,
    },
      {
        path: '/pro1Detail',
        name:'pro1Detail',
        component: () => import('@/view/ProductResource/pro1Detail.vue'),
      },

    {
      path: '/sensorRegister',
      name:'sensorRegister',
      component: sensorRegister,
      children:[
        { path:'/sensor', name:'sensor', component:sensor},
        { path:'/xml', name:'xml', component: xml},
        { path:'/customize', name:'customize', component: customize}
      ]
    },
    {
      path: '/sensorDetail',
      name:'/sensorDetail',
      component: () => import('@/view/SensorResource/SensorDetail')
    },

  ]
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
