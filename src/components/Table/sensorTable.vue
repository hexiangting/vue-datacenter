<template>
  <div>
    <el-button class="btn" type="primary" @click="toObsdata">查看详细观测数据</el-button>
    <table style="width: 100%" class="myTable">
      <tr v-for="(item,i) in statDatas" :key="i">
        <td class="column" style="width: 88px">{{ item.key }}</td>
        <td class="column" style="text-align: left">{{ item.value }}</td>
      </tr>
    </table>

<!--    <template v-for="(item,num) in tData" >-->
<!--      <tr :key="num">-->
<!--        <td :rowspan="item.rowSpanData.length * item.rowSpanData[0].data.length">{{item.rowSpanName}}</td>-->
<!--        <td :rowspan="item.rowSpanData[0].data.length">{{item.rowSpanData[0].value01}}</td>-->
<!--        <td>bb</td>-->
<!--        <td>bb</td>-->
<!--      </tr>-->
<!--      <tr v-for="(ele,inx) in item.rowSpanData[0].data.length-1" :key="num+'-'+inx">-->
<!--        <td>s</td>-->
<!--        <td>s</td>-->
<!--      </tr>-->
<!--      <template v-for="(te,index) in item.rowSpanData.length-1">-->
<!--        <tr  :key="index">-->
<!--          <td :rowspan="item.rowSpanData[0].data.length">{{item.rowSpanData[0].value01}}</td>-->
<!--          <td>bb</td>-->
<!--          <td>bb</td>-->
<!--        </tr>-->
<!--        <tr v-for="(ele,inx) in item.rowSpanData[0].data.length-1" :key="index+'-'+inx">-->
<!--          <td>s</td>-->
<!--          <td>s</td>-->
<!--        </tr>-->
<!--      </template>-->
<!--    </template>-->

    <table style="width: 100%" class="myTable">
      <tr v-for="(item,i) in otherDatas" :key="i">
        <td class="column" style="width: 88px">{{ item.key }}</td>
        <td class="column" style="text-align: left">{{ item.value }}</td>
      </tr>
    </table>



  </div>
</template>

<script>
export default {
  name:'mailTable',
  data() {
    return {
      s_showByRow: true,
      statDatas:[
        {key: '名称', value: '武昌紫阳'},
        {key: '描述信息', value: '湖北省环境监测站武昌紫阳站点'},
        {key: '所属平台', value: '湖北省环境监测站'},
        {key: '关键字', value: 'CO2，CO，NO，NO2，03'},
        {key: '特征', value: ''},
        {key: '能力', value: ''},
      ],
      otherDatas:[
        {key:'联系信息',value:'湖北省环境监测站'},
        {key:'文件地址',value:'http://192.168.31.9:8081/sensor/dghjnujngyftrfynyutt.xml'},
      ],
      tData:[
        {
          rowSpanName:"一级菜单",
          rowSpanData:[
            {
              value01:"二级菜单",
              data:[{value:"a"},{value:"a"}]
            },
            {
              value01:"二级菜单",
              data:[{value:"a"},{value:"a"}]
            },
            {
              value01:"二级菜单",
              data:[{value:"a"},{value:"a"}]
            },
          ]
        }
      ]
    };
  },
  props: ['tableData', 'tableStyle', 'showByRow'],
  computed: {
    rowCount: function() {
      return Math.ceil(this.tableData.length/2);
    }
  },
  created() {
    this.styleObject = this.tableStyle;
    if(this.showByRow !== undefined){
      this.s_showByRow = this.showByRow;
    }
  },
  methods:{
    toObsdata(){
      this.$router.push({path:'/obsResource'})
    }
  }
}
</script>

<style lang="scss" scoped>
   .mailTable, .mailTable tr, .mailTable tr td{ border:1px solid #cad9ea; }
　　.mailTable{ font-size: 12px; color: #71787E; }
　　 tr , td{  width: 340px; height: 40px; line-height: 35px;  padding: 0 10px; text-align: left}
　　 tr , td.column { background-color: #EFF3F6; color: #393C3E;text-align: center }

    .myTable {
      border-collapse: collapse;
      margin: 0 auto;
      text-align: center;
      position: relative;
      font-size: 12px;
    }
    .myTable td.column{
      text-align: center;
    }
    .myTable td ,
    .myTable th {
      border: 1px solid #cad9ea;
      color: #666;
      height: 40px;
      text-align: left;
    }
    .btn{
      margin-left: 102%;
      margin-bottom: -50px;
    }
</style>
