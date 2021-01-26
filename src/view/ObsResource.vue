<template>
  <div id="home">
    <el-container>

      <el-header style="padding:0;">
        <MyHeader></MyHeader>
      </el-header>

<!--      <MyNav></MyNav>-->

      <div class="cash-title">
        <span>观测数据详情</span>
      </div>

      <el-main style="height: 50%;width: 100%">
        <leftdrop style="float: left;width: 13%"></leftdrop>
        <Table style="float: left;width: 87%"></Table>


      </el-main>

      <el-footer>
        <MyFooter style="height: 67px;padding-top: 18px"></MyFooter>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import leftdrop from "@/components/Leftdrop";
import Table from "@/components/Table/Table";
export default {
  name: "ObsResource",
  components:{
    Table,
    leftdrop
  }
}
</script>

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
.el-footer{
  height: 0!important;
}
nav {
  width: 100vw;
  background-color: #202e51;
  /*padding: 15px;*/
}
.cash-title{
  background-color: #f4f6fa;
  float: left;
  text-align: left;
  line-height: 50px;
  padding-left: 20px;
  font-weight: 999;
  font-size: 15px;
}

</style>
