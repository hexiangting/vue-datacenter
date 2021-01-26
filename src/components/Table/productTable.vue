<template>
  <div>
    <table style="width: 100%" class="myTable">
      <tr v-for="(item,i) in statDatas" :key="i">
        <td class="column" style="width: 88px">{{ item.key }}</td>
        <td class="column" style="text-align: left">{{ item.value }}</td>
      </tr>
    </table>
    <table class="mailTable"  v-if="s_showByRow">
      <tr v-for="index in rowCount">
        <td class="column" style="width: 225px">{{tableData[index*2-2].key}}</td>
        <td>{{tableData[index*2-2].value}}</td>
        <td class="column" style="width: 225px">{{tableData[index*2-1] !== undefined ? tableData[index*2-1].key : ''}}</td>
        <td>{{tableData[index*2-1] !== undefined ? tableData[index*2-1].value : ''}}</td>
      </tr>
    </table>
    <table class="mailTable"  v-else>
      <tr v-for="index in rowCount">
        <td class="column" >{{tableData[index-1].key}}</td>
        <td>{{tableData[index-1].value}}</td>
        <td class="column">{{tableData[rowCount+index-1] !== undefined ? tableData[rowCount+index-1].key : ''}}</td>
        <td>{{tableData[rowCount+index-1] !== undefined ? tableData[rowCount+index-1].value : ''}}</td>
      </tr>
    </table>
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
        {key: '编号', value: '40702020620183873400'},
        {key: '产品名称', value: '长江中游城市群资源分布图'},
        {key: '产品描述', value: '长江中游城市群资源分布图'},
        {key: '关键词', value: '长江中游城市群，资源分布图'},
      ],
      otherDatas:[
        {key:'服务对象名称',value:'专业应用研究，社会公众服务'},
        {key:'服务地址',value:'' +
            ''},
        {key:'下载地址',value:''}
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
}
</script>

<style lang="scss" scoped>
   .mailTable, .mailTable tr, .mailTable tr td{ border:1px solid #cad9ea; }
　　.mailTable{ font-size: 12px; color: #71787E;}
　　 tr , td{  width: 700px; height: 40px; line-height: 35px;  padding: 0 10px; text-align: left}
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
</style>
