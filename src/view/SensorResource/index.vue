<template>
  <div id="home">
    <el-container>
      <el-header style="padding:0;">
        <MyHeader style="height: 77px;"></MyHeader>
      </el-header>
      <el-main style="background: #cdcdcd">
<!--        <MyNav></MyNav>-->
        <div style="margin-top: 25px;margin-bottom: 10px;margin-left: 220px;width: 850px">
          <el-input placeholder="请输入内容" v-model="input1" class="input-with-select" @blur="queryData" @input="queryData">
            <el-select v-model="select" slot="prepend" placeholder="请选择" style="width: 147px;">
              <el-option v-for="select in sensors" style="width: 127px;"
                         :key="select.value" :label="select.label" :value="select.value"></el-option>
            </el-select>
            <el-button @click="btn()" slot="append" icon="fontFamily el-icon-umpsousuo"></el-button>
          </el-input>
        </div>
        <div class="sensor">
          <div v-for="(item,index) in sensorList" :key="index">
            {{item}}
          </div>
        </div>
        <div style="position:absolute;top:85px;left:0px;z-index:999;">
          <leftdrop></leftdrop>
        </div>
        <div style="width: 1200px;height: 550px;margin-bottom: 30px;">
          <MapControl></MapControl>
        </div>
<!--        <Radiobutton style="margin-bottom: 15px"></Radiobutton>-->
      </el-main>
      <el-footer >
        <MyFooter style="height: 67px;padding-top: 18px"></MyFooter>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import logo from '@/assets/logo1.png';
import Leftdrop from "@/components/Leftdrop";
import MapControl from "@/components/MapControl";
import Radiobutton from "@/components/Radiobutton";
export default {
  name: 'SensorResource',
  methods:{
    queryData(){
      //并没有输入关键字时，就不要再搜索了
      if(this.input1 ===''||this.input1 == null){
        this.sensorList = JSON.parse(JSON.stringify(this.sensorList));
        return;
      }
    },
    btn(){
      //搜索
      let list = this.sensorList.filter(item => item.indexOf(this.input1) >= 0);
      this.sensorList = list;
    }
  },
  props:{
    value:Number
  },
  components: {
    Radiobutton,
    MapControl,
    Leftdrop
  },
  data () {
    return {
      input1: '',
      select: '1',
      sensors:[{
        value:'1',
        label:'原位传感器'
      },{
        value:'2',
        label:'数据中心集'
      },{
        value:'3',
        label:'移动传感器'
      }],
      sensorList:[
        // '气象站',
        // '雨量站',
        // '土壤湿度计',
        // 'FRID',
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
    /*background-color: #222;*/
    /*padding: 10px;*/
  }
  .el-footer{
    height: 0!important;
  }
  nav {
    background-color: #202e51;
    /*padding: 15px;*/
  }
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .el-select-dropdown__item{
    width: 100px;
    text-align:center;
  }
  .el-button{
    margin-bottom: 0px;
  }
</style>
