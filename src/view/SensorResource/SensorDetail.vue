<template>
  <div id="home">
    <el-container>
      <el-header style="padding:0;">
        <MyHeader ></MyHeader>
      </el-header>
      <el-main>
        <MyNav></MyNav>
        <div class="cash-title">
          <span>传感器详情</span>
        </div>
        <el-row>
          <el-col :span="20">
            <div style="width: 1200px;height: 650px;float: right;margin-top: 50px" >
              <sensorTable :tableStyle="{ width:'600px' }"></sensorTable>
            </div>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>
        <MyFooter></MyFooter>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import sensorTable from "@/components/Table/sensorTable";
export default {
  name: 'pro1Detail',
  methods:{
  },
  components: {
    sensorTable
  },
  data () {
    return {

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
  width: 100vw;
  /*background-color: #222;*/
  padding: 10px;
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
  background-color: #f4f6fa;
  /*float: left;*/
  text-align: left;
  line-height: 50px;
  padding-left: 20px;
  font-weight: 999;
  z-index: 1;
  font-size: 16px;
}

</style>
