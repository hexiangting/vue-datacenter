<!--<template>-->
<!--  <div id="login">-->
<!--    <el-form :model="loginForm" ref="loginForm" :rules="loginRules">-->
<!--      <h2>登录</h2>-->
<!--        <el-form-item prop="username">-->
<!--          <el-input v-model="loginForm.username" name="username" placeholder="请输入用户名/手机号" auto-complete="on"></el-input>-->
<!--        </el-form-item>-->

<!--        <el-form-item  prop="password">-->
<!--          <el-input v-model="loginForm.password" name="password" placeholder="请输入密码" auto-complete="on"></el-input>-->
<!--        </el-form-item>-->

<!--        <el-form-item>-->
<!--          <el-button type="primary" @click="handleLogin">登录</el-button>-->
<!--        </el-form-item>-->
<!--    </el-form>-->
<!--  </div>-->
<!--</template>-->


<!--<script>-->
<!--import {loginReq} from '@/apis/login' //引入接口-->
<!--export default {-->
<!--  name: "login",-->

<!--  data() {-->
<!--    return {-->
<!--      loginRules: {-->
<!--        username: [-->
<!--          {-->
<!--            required: true,-->
<!--            message: "请输入用户名",-->
<!--            trigger: "blur"-->
<!--          }-->
<!--        ],-->
<!--        password: [-->
<!--          {-->
<!--            required: true,-->
<!--            message: '请输入密码',-->
<!--            trigger: 'blur'-->
<!--          }-->
<!--        ],-->
<!--      },-->
<!--      loginForm: {-->
<!--        username: '',-->
<!--        password: '',-->
<!--      },-->
<!--    }-->

<!--  },-->
<!--  methods: {-->
<!--    handleLogin() {-->
<!--      this.$refs.loginForm.validate((valid) => {-->
<!--        if (valid) {-->
<!--          loginReq(this.loginForm.username, this.loginForm.password).then((res) => {-->
<!--            console.log(res.data.status);-->
<!--          }),-->
<!--            this.$router.push({-->
<!--              name: "home",-->
<!--              params: {-->
<!--                username: this.loginForm.username-->
<!--              }-->
<!--            });-->
<!--        } else {-->
<!--          // console.log('用户名或密码错误')-->
<!--          this.$message.error("用户名或密码错误");-->
<!--        }-->
<!--      })-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->
<!--<style scoped>-->
<!--.el-input {-->
<!--   width:300px;-->
<!--}-->
<!--</style>-->
<template>
  <div>

    <div class="login-container">
<!--      <div class="img1"></div>-->
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">

        <div class="title-container">
          <h3 class="title">登&#12288&#12288录</h3>
        </div>

        <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
          <el-input
            ref="username"
            v-model="loginForm.username"
            placeholder="Username"
            name="username"
            type="text"
            tabindex="1"
            autocomplete="on"
          />
        </el-form-item>

        <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
          <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
            <el-input
              :key="passwordType"
              ref="password"
              v-model="loginForm.password"
              :type="passwordType"
              placeholder="Password"
              name="password"
              tabindex="2"
              autocomplete="on"
              @keyup.native="checkCapslock"
              @blur="capsTooltip = false"
              @keyup.enter.native="handleLogin"
            />
            <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
          </el-form-item>
        </el-tooltip>

        <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">立即登录</el-button>

        <div style="position:relative">
          <div class="tips">
            <span>Username : admin</span>
            <span>Password : any</span>
          </div>
          <div class="tips">
            <span style="margin-right:18px;">Username : editor</span>
            <span>Password : any</span>
          </div>

          <el-button class="thirdparty-button" type="primary" @click="showDialog=true">
            其他方式
          </el-button>
        </div>
      </el-form>

      <el-dialog title="Or connect with" :visible.sync="showDialog">
        Can not be simulated on local, so please combine you own business simulation! ! !
        <br>
        <br>
        <br>
        <social-sign />
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'
import SocialSign from './components/SocialSignin'
import {loginReq} from '@/server/apis/login'
import qs from 'Qs'
export default {
  name: 'Login',
  components: { SocialSign },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('The password can not be less than 5 digits'))
      } else {


        callback()
      }
    }
    return {
      loginForm: {
        // username: 'admin',
        // password: '111111',
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {},
      password:''
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted() {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    checkCapslock(e) {
      const { key } = e
      this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$axios.post('/auth/oauth/token',qs.stringify({

        grant_type: 'password',
        username: 'sensorweb',
        password: '12345'
      }),{
        auth:{
          username : 'sensorweb',
          password: '12345'
        },
        // headers:{
        //   Authorization: this.Global.accesstoken
        // }
      }).then(res => {
        this.Global.accesstoken = res.data.access_token;
        this.Global.refreshtoken = res.data.refresh_token;
        this.$router.push({ path: this.redirect || '/home', query: this.otherQuery })
        // console.log(res.data.refresh_token)
      })
      // alert("!!!");
      // this.$refs.loginForm.validate(valid => {
      //   if (valid) {
      //     this.loading = true
      //     // this.$store.dispatch('user/login', this.loginForm)
      //
      //       loginReq(this.loginForm.username, this.loginForm.password).then((res) => {
      //       console.log(res.data.status);
      //       })
      //       // .then(() => {
      //       //   this.$router.push({ path: this.redirect || '/home', query: this.otherQuery })
      //
      //       // })
      //       .catch(() => {
      //         this.loading = false
      //       })
      //
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
    // afterQRScan() {
    //   if (e.key === 'x-admin-oauth-code') {
    //     const code = getQueryObject(e.newValue)
    //     const codeMap = {
    //       wechat: 'code',
    //       tencent: 'code'
    //     }
    //     const type = codeMap[this.auth_type]
    //     const codeName = code[type]
    //     if (codeName) {
    //       this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
    //         this.$router.push({ path: this.redirect || '/' })
    //       })
    //     } else {
    //       alert('第三方登录失败')
    //     }
    //   }
    // }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 10px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg:#283443;
//$bg:url('~@/assets/img/img1.jpg');
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 450px;
    max-width: 100%;
    padding: 160px 35px ;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    text-align: left;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
  .img1{
    background-size: 100% 100%;
    background: url('~@/assets/img/img1.jpg') center center no-repeat;
    height: 100%;
    position: fixed;
    width: 100%
  }
}
</style>
