<template>
  <div id="home">
    <el-container>
      <el-header style="padding:0;">
        <MyHeader ></MyHeader>
      </el-header>
      <el-main style="background: #cdcdcd">
<!--        <MyNav></MyNav>-->
        <el-row>
          <el-col :span="4">
            <Leftpro style="margin-top: 30px"></Leftpro>
          </el-col>
          <el-col :span="20">
            <div style="width: 1200px;margin-bottom: 38px;margin-top: 30px">
              <Product ></Product>
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
import logo from '../../assets/logo1.png'
import Leftpro from "../../components/Leftpro";
import Product from "../../components/Dataproduct";
export default {
  name: 'Home',
  methods:{
  },
  components: {
    Product,
    Leftpro,
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
    width: 100%;
    /*background-color: #222;*/
    /*padding: 10px;*/
  }
  nav {
    width: 100vw;
    background-color: #202e51;
    /*padding: 15px;*/
  }
</style>
