<template>
  <div id="home">
    <el-container>
      <el-header style="padding:0;">
        <MyHeader ></MyHeader>
      </el-header>
      <el-main style="background: #cdcdcd">
<!--        <MyNav></MyNav>-->
        <div class="cash-title">
          <span>产品详情列表</span>
        </div>
        <el-row>
          <el-col :span="20">
            <div style="width: 1518px;height: 545px;right: 150px" >
              <productTable :tableData="tableData" :tableStyle="{ width:'700px' }"></productTable>
            </div>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>
        <MyFooter style="height: 67px;padding-top: 18px"></MyFooter>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import productTable from "@/components/Table/productTable";
export default {
  name: 'pro1Detail',
  methods:{
  },
  components: {
    productTable
  },
  data () {
    return {
      tableData: [
        {key: '产品一级类别', value: '地质图件'},
        {key: '产品二级类别', value: '环境地质图'},
        {key: '生产日期', value: '20151231'},
        {key: '产品格式名称', value: '电子文档（Word/PDF/其他）,空间数据（MapGis/ArcGIS/其他）,图片（jpg/TIF/其他）'},
        {key: '单位名称', value: '中国地质调查局武汉地质调查中心'},
        {key: '产品密级名称', value: '公开'},
      ],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'montserrat', sans-serif;
}
header {
  width: 100%;
  /*background-color: #222;*/
  /*padding: 10px;*/
}

nav {
  width: 100vw;
  background-color: #202e51;
  /*padding: 15px;*/
}
.el-footer{
  height: 0!important;
}
.cash-title{
  background-color: #337ab7;
  color: white;
  /*float: left;*/
  text-align: left;
  line-height: 50px;
  padding-left: 20px;
  font-weight: 999;
  z-index: 1;
  font-size: 16px;
  margin-top: 40px;
}

</style>
