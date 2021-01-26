<template>
  <div>
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark">
        <div class="deployTitle">
          <p>用户自定义</p>
        </div>
        <div class="deployBox">
          <el-steps :active="active" finish-status="success">
            <el-step title="基本信息"></el-step>
            <el-step title="配置信息"></el-step>
            <el-step title="参数配置"></el-step>
            <el-step title="权限配置"></el-step>
          </el-steps>
          <div class="basicInfo" v-if="active === 0"><step1/></div>
          <div class="basicConfig" v-if="active === 1"></div>
          <div class="basicParameter" v-if="active === 2"></div>
          <div class="basicPermission" v-if="active === 3"></div>
          <div class="deployBtn">
            <el-button style="margin-top: 12px;" @click="prev" v-if="active==1||active==2||active==3">上一步</el-button>
            <el-button style="margin-top: 12px;" @click="next" v-if="active==0||active==1||active==2">下一步</el-button>
            <el-button style="margin-top: 12px;" v-if="active==3">提交</el-button>
          </div>
        </div>
      </div></el-col>
    </el-row>

  </div>
</template>

<script>
import step1 from '@/components/step/step1'
export default {
  name: "index",
  components:{
    step1
  },
  data(){
    return{
      active:0
    }
  },
  methods:{
    prev(){
      --this.active;
      if(this.active < 0) this.active = 0
    },
    next(){
      if(this.active++ > 3) this.active = 0;
    }
  }
}
</script>

<style scoped>
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    width: 75%;
    margin-left: 13%;
  }
  .bg-purple-dark {
    background: white;
  }
  .el-step >>>.el-step__title {
    font-size: 0.295556rem;
    line-height: 0.644444rem;
  }
  .el-step >>> .el-step__main {
    white-space: normal;
    text-align: center;
  }
  .deployTitle{
    background-color: #337ab7;
    color: white;
    font-weight: bold;
    font-size: 13px;
    height: 40px;
    padding:0.03em;
    margin-top: 15px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
  .el-step >>>.el-step__head {
    position: relative;
    width: 100%;
    margin-top: 10px;
  }
  .el-step>>>.el-step__line {

    display: flex;
  }
  .el-step.is-horizontal {
     display: inline-block;
    flex-basis: 26.3333%! important;
   }
</style>
