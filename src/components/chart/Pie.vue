<template>
  <v-chart :options="polar" id="aaa"/>
</template>

<script>
import ECharts from "echarts";
export default {
  name: "Pie",
  components: {
    'vue-chart': ECharts
  },
  data() {
    return {
      polar: {
        title: {
          text: '按平台统计传感器数量及其占比',
          subtext: '动态数据',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          show: true,
          orient: 'vertical',
          left: 'left',
          top: '10%',
          data: ['地面传感器', '航空传感器', '航天传感器']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            top: '10%',
            radius: '55%',
            data: [
              {value: 335, name: '地面传感器'},
              {value: 310, name: '航空传感器'},
              {value: 234, name: '航天传感器'},
              // {value: 135, name: '湿度计'},
              // {value: 1548, name: '摄像头'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            grid:{
              left: '6%',   // 与容器左侧的距离
              right: '5%', // 与容器右侧的距离
              //top: '5%',   // 与容器顶部的距离
              //bottom: '10%', // 与容器底部的距离
            },
          },
        ]
      },
    }
  }
}
</script>

<style scoped>
  .echarts {
    width: 100%;
    height: 100%;
  }
  #aaa{
    display: inline;
    float: left;
    width: 100%;
    height: 300px;
    /*border-radius: 4px;*/
    /*border: #3b4151 solid 2px;*/
    /*border-right-width: 1px;*/
    margin-top: 10px;
  }
</style>
