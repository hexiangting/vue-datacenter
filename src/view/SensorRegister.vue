<template>
  <div>
    <el-container>
      <el-header style="padding:0;">
        <MyHeader></MyHeader>
      </el-header>
      <el-main style="background: #cdcdcd">
<!--        <MyNav></MyNav>-->
<!--        <el-row class="tac">-->
<!--          <el-col :span="4">-->
<!--            <el-menu default-active="1" class="el-menu-vertical-demo" @select="handleSelect">-->
<!--              <el-menu-item index="1">-->
<!--              <i class="el-icon-menu"></i>-->
<!--              <span slot="title">文件上传</span>-->
<!--              </el-menu-item>-->
<!--              <el-menu-item index="2">-->
<!--                <i class="el-icon-menu"></i>-->
<!--                <span slot="title">XML文件</span>-->
<!--              </el-menu-item>-->
<!--              <el-menu-item index="3">-->
<!--                <i class="el-icon-document"></i>-->
<!--                <span slot="title">用户自定义</span>-->
<!--              </el-menu-item>-->
<!--            </el-menu>-->
<!--            <router-view></router-view>-->
<!--          </el-col>-->
<!--        </el-row>-->
        <div class="panel panel-primary">
          <div class="panel-heading">注册</div>
          <ul>
            <li v-for="(tab,index) in tabs" @click="toggle(index,tab.view)" :class="{active:active == index}">
              {{tab.type}}
            </li>
          </ul>
          <component :is="currentView"></component>
        </div>

      </el-main>

      <el-footer>
        <MyFooter style="height: 67px;padding-top: 18px"></MyFooter>
      </el-footer>

    </el-container>
  </div>
</template>

<script>
import tab1 from '@/view/SensorRegisterMenu/platform'
import tab2 from '@/view/SensorRegisterMenu/sensor'
export default {
  name: "SensorRegister",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key,keyPath){
      switch (key){
        case'1':
          this.$router.push('/sensor');
          break;
        case'2':
          this.$router.push('/xml');
          break;
        case '3':
          this.$router.push('/customize');
          break;
      }
    },
    toggle(i,v){
      this.active = i;
      this.currentView = v;
    }
  },
  data(){
    return{
      link:this.$router.push('/sensor'),
      //默认第一个选项卡
      activeName: "first",
      active: 0,
      currentView:'tab1',
      tabs:[
        {
          type:'按平台注册',
          view:'tab1'
        },
        {
          type:'按传感器注册',
          view:'tab2'
        },
      ]
    }
  },
  components:{
    tab1,
    tab2
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

  nav {
    width: 100vw;
    background-color: #202e51;
    /*padding: 15px;*/
  }
  .el-footer{
    height: 0!important;
  }
  .tac{
    margin-bottom: 0px;
    height: 527px;
    z-index: 999;
  }
  .panel-primary {
    border-color: #337ab7;
    /*width: 70%;*/
    /*margin-left: 15%;*/
    margin-bottom: 25px;
  }
  .panel-primary > .panel-heading {
    color: #fff;
    background-color: #337ab7;
    border-color: #337ab7;
    padding: 10px 15px;
    border-bottom: 1px solid transparent;
    font-weight: bold;
    font-size: 13px;
    font-family: "Lato", "Open Sans", sans-serif;
    width: 75%;
    margin-left: 13%;
    margin-top: 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
  ul{
    width:75%;
    display:flex;
    margin-left: 13%;
  }
  ul li{
    width:100%;
    height:40px;
    background: #d3dce6;
    display: inline-flex;
    /*border-right:1px solid #ddd;*/
    justify-content: center;
    align-items: center;
    cursor:pointer;
    border:1px solid white;
    color: black;
    font-size: 14px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
  ul li.active{
    background: #337ab7;
    color: white;
    font-size: 14px;
    font-weight: bold;
  }
</style>
