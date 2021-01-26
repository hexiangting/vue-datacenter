<template>
  <v-chart :options="chartData" id="bbb"/>
</template>

<script>
import ECharts from "echarts";
export default {
  components: {
    'vue-chart': ECharts
  },
  data(){
    return{
      chartData:{
        title : {
          text: '按类型统计各个类型的传感器数量',
          subtext: '动态数据',
          x:'center'
        },
        xAxis: {
          type: 'category',
          data: ['气象站', '雨量站', '测量车', '湿度计', '摄像头',]
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
        }]
      }
    }
  }
}
</script>

<style scoped>
.echarts {
  width: 110%;
  height: 100%;
}
#bbb{
  display: inline;
  float: left;
  width: 100%;
  height: 300px;
  margin-top: 10px;
}
</style>
