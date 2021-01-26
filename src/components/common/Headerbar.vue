<template>
  <header class="hed">
    <div id="vheader" >
      <img :src="logoUrl" id="logo" @click="toIndex"/>

      <span class="demonstration user" >
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <strong>admin<i class="el-icon-caret-bottom el-icon--right"></i></strong>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
         </el-dropdown>
      </span>
      <el-button @click="goToSignup" type="text">注册</el-button>
      <el-button @click="goToLogin" type="text">登录</el-button>
      <MyNav style="z-index: 999;background: transparent;padding-top: 7px;"></MyNav>
<!--      <span class="demonstration search">-->
<!--        <el-input-->
<!--          placeholder="search"-->
<!--          icon="search"-->
<!--          prefix-icon="fontFamily el-icon-umpsousuo"-->
<!--          v-model="searchCriteria"-->
<!--          :on-icon-click="handleIconClick">-->
<!--        </el-input>-->
<!--      </span>-->
    </div>
  </header>
</template>
<script>
import logo from '@/assets/logog.png'
export default {
  data() {
    return {
      searchCriteria:'',
      logoUrl: logo,
    }
  },
  methods:{
    handleIconClick(ev){
      console.log(ev);
    },
    goToLogin(){
      //指定跳转的位置
      this.$router.replace('/')
    },
    goToSignup(){
      //指定跳转的位置
      this.$router.replace('/')
    },
    toIndex(){
      this.$router.push({
        path:'/home'
      })
    }
  },

}
</script>

<style scoped>
  #vheader {
    width:100%;
    height:50px;
    /*background-color: #636363;*/
    overflow: hidden;
    padding: 0px;
    background: url("../../assets/img/top_bg.png");

  }
  #logo {
    width: 6.22rem;
    height: 0.87rem;
    float:left;
    /*background-color:rgb(99,99,99);*/
    border-right-color: rgb(99 99 99);
    background: transparent;
    padding-top: 5px;
    color: #4de8ff;
  }
  .demonstration.user {
    float:right;
    padding-top:16px;
    margin-right:1%
  }
  .demonstration.search {
    float:right;
    /*padding:5px;*/

    /*color:white;*/
    margin-left:2%;
    width:15%
  }
  .el-button{
    float: right;
    font-weight: 700;
    color: #0086b3;
    /*padding-left: 8px;*/
    /*padding-right: 8px;*/
    /*padding-bottom: 18px;*/
    padding-top: 18px;
    margin-top: 5px;
    margin-left: 0px;
    margin-right: 3px;
    line-height: 0;
  }
  .el-button:hover{
    color: #ee9900;
  }
  #logo{
    cursor: pointer;
  }


</style>
