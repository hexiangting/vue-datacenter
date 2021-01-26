<template>
  <v-chart :options="chartData_1" id="ccc"/>
</template>

<script>
import ECharts from "echarts";
export default {
  name: "Bar",
  components: {
    'vue-chart': ECharts
  },
  data() {
    return {
      chartData_1: {
        // title: {
        //   text: '周数据',
        //   subtext: '动态数据',
        //   x: 'center'
        // },
        // xAxis: {
        //   type: 'category',
        //   data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        // },
        // yAxis: {
        //   type: 'value'
        // },
        // series: [{
        //   data: [120, 200, 150, 80, 70, 110, 130],
        //   type: 'bar',
        //   left: '10px',
        //   barCategoryGap:50,
        //
        // }],
        // grid:{
        //   left: '6%',   // 与容器左侧的距离
        //   right: '5%', // 与容器右侧的距离
        //   //top: '5%',   // 与容器顶部的距离
        //   bottom: '10%', // 与容器底部的距离
        // },
        title: {
          text: '数据接入量',
          subtext: 'xxxxxxxxx'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['原有总量', '新增总量']
        },
        toolbox: {
          show: true,
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '原有总量',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            markPoint: {
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
              ]
            },
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            }
          },
          {
            name: '新增总量',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            markPoint: {
              data: [
                {name: '年最高', value: 182.2, xAxis: 7, yAxis: 183},
                {name: '年最低', value: 2.3, xAxis: 11, yAxis: 3}
              ]
            },
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            }
          }
        ],
        grid:{
          left: '6%',   // 与容器左侧的距离
          right: '5%', // 与容器右侧的距离
          //top: '5%',   // 与容器顶部的距离
          bottom: '10%', // 与容器底部的距离
        },
      }
    }
  }
}
</script>

<style scoped>
#ccc{
  display: inline;
  float: left;
  width: 100%;
  height: 400px;
  margin-top: 1%;
  margin-right: 50%;
  /*border-radius: 8px;*/
  /*border: #3b4151 solid 2px;*/

}
</style>
