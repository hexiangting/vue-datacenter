<template>
  <div class="note" >
    <el-container>
<!--      <dv-loading v-if="loading">Loading...</dv-loading>-->
      <el-header class="hed" style="padding:0px;">
        <!-- 看板头部 -->
        <div class="d-flex jc-center">
          <dv-decoration-10 style="width:33.3%;height:.0625rem;" />
          <div class="d-flex jc-center">
            <dv-decoration-8 :color="['#568aea', '#000000']" style="width:2.5rem;height:.625rem;" />
            <div class="title">
              <!--        <MyHeader></MyHeader>-->
              <span class="title-text">地学大数据注册中心</span>
              <dv-decoration-6
                class="title-bototm"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
                style="width:3.125rem;height:.1rem;"
              />
            </div>
            <dv-decoration-8
              :reverse="true"
              :color="['#568aea', '#000000']"
              style="width:2.5rem;height:.625rem;"
            />
          </div>
          <dv-decoration-10 style="width:33.3%;height:.0625rem; transform: rotateY(180deg);" />
        </div>
      </el-header>
<!--      <el-main>-->
        <MyNav style="z-index: 99;background: transparent"></MyNav>
        <div >
<!--          &lt;!&ndash; 左边主体 &ndash;&gt;-->
<!--          <div class="left-box" style="z-index: 99;position: relative;width: 340px">-->
<!--            <div class="panel">-->
<!--              <pie />-->
<!--              <div class="panel-under"></div>-->
<!--            </div>-->

<!--            <div class="panel">-->
<!--              <centerLeft1 />-->
<!--              <div class="panel-under"></div>-->
<!--            </div>-->
<!--          </div>-->
          <AddMap style="position: absolute;z-index: 0;left: 0;height: 83%"></AddMap>
        </div>

<!--        <panel-group @handleSetLineChartData="handleSetLineChartData" />-->

<!--        <el-card style="width: 30%;margin-left: 7px;"><Pie></Pie></el-card>-->
<!--        <el-card class="lll"><vLine></vLine></el-card>-->
<!--        <el-card style="width: 61%;margin-top: 6px;margin-left: 7px;"><Bar></Bar></el-card>-->


<!--      </el-main>-->
<!--      <el-footer>-->
<!--        <MyFooter></MyFooter>-->
<!--      </el-footer>-->
    </el-container>
  </div>
</template>

<script>
import ECharts from "echarts";
import Pie from '../components/chart/Pie'
import Bar from "../components/chart/Bar"
import vLine from "../components/chart/Line";
import PanelGroup from "@/view/dashboard/components/PanelGroup";
import AddMap from "@/view/Homepage/Map";
import pie from '@/components/chart/pie1/index'
import centerLeft1 from "@/components/chart/centerLeft1";
export default {
  methods:{
    handleIconClick(ev){
      console.log("ev");
    },
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
    }
  },
  components: {
    Pie,
    vLine,
    Bar,
    PanelGroup,
    'vue-chart': ECharts,
    AddMap,
    pie,
    centerLeft1
  },
  data () {
    return {
      loading: true,
      dataimg: [{
        src: require('../assets/img/img01_03.png'),
        txt: '"Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."',
        txt2: '一站式服务',
        txt3: 'Miami, FL'
      },
        {
          src: require('../assets/img/img02_03.png'),
          txt: '"Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor."',
          txt2: '传感器服务',
          txt3: 'Greensboro, NC'
        },
        {
          src: require('../assets/img/img02_05.png'),
          txt: '"Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."',
          txt2: '全网渠道',
          txt3: 'Charlotte, NC'
        }
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
    padding: 10px;
  }
  .el-footer{
    height: 0!important;
  }
  nav {

    //background-color: #202e51;
    /*padding: 15px;*/
    margin-top: 10px;
  }
  .echarts {
    width: 100%;
    height: 100%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 17px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .text {
    font-size: 14px;
    text-align: left;
  }
  .item {
    margin-bottom: 18px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .box-card {
    width: 455px;
    height: 330px;
    float: right;
    position: absolute;
    margin-left: 790px;
    margin-top: -765px;
  }
  .lll{
    width: 30%;
    margin-left: 400px;
    position: absolute;
    margin-top: -332px
  }
  .note{
    padding: 0.2rem 0.2rem 0 0.2rem;
    background-image:url("../assets/img/bg.jpg");
    background-size: cover;
    //background-position: center center;
  }
  //.hed{
  //  background-image: url("../assets/img/head_bg.png");
  //  background-position: center center;
  //}
  .title {
    position: relative;
    width: 6.25rem;
    text-align: center;
    background-size: cover;
    background-repeat: no-repeat;
    .title-text {
      font-size: 15px;
      position: absolute;
      //bottom: 0.375rem;
      left: 50%;
      transform: translate(-50%);
      color: #e2eeff;
    }
    .title-bototm {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
    }
  }
  .d-flex {
    display: flex;
  }
  .panel {
    position: relative;
    // height: 3.75rem;
    border:1px solid rgba(19, 25, 47, 0.8);
    margin: 10px 0;
    background-color: rgba(19, 25, 47, 0.2);

    &-under {
      width: 100%;
    }

    &-under::before {
      position: absolute;
      content: "";
      left:0;
      bottom:0;
      width: 10px;
      height: 10px;
      border-left:2px solid rgba(124, 231, 253, 0.9);
      border-bottom:2px solid rgba(124, 231, 253, 0.8);
    }

    &-under::after {
      position: absolute;
      content: "";
      right:0;
      bottom:0;
      width: 10px;
      height: 10px;
      border-right:2px solid rgba(124, 231, 253, 0.9);
      border-bottom:2px solid rgba(124, 231, 253, 0.8);
    }
  }
  .panel::before {
    position: absolute;
    content: "";
    left:0;
    top:0;
    width: 10px;
    height: 10px;
    border-left:2px solid rgba(124, 231, 253, 0.9);
    border-top:2px solid rgba(124, 231, 253, 0.8);
  }

  .panel::after {
    position: absolute;
    content: "";
    right:0;
    top:0;
    width: 10px;
    height: 10px;
    border-right:2px solid rgba(124, 231, 253, 0.9);
    border-top:2px solid rgba(124, 231, 253, 0.8);
  }



</style>
