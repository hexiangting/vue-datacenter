<template>
  <el-card :body-style="{ padding: '10px' }">
  <el-card :body-style="{ padding: '5px' }">
    <el-row >
      <el-col :span="5">
        <div>
        <img style="height: 100px;width: 100px" :src="imgUrl1" class="image">
        </div>
      </el-col>
      <el-col :span="4">
        <el-row>
          <el-col :span="24">
            <el-button type="text" class="button" @click="openDetails()" icon="el-icon-paperclip">长江中游城市群资源分布</el-button >
          </el-col>
        </el-row>
        <el-row type="flex" justify="space-between">
          <el-col :span="17">
            <span>关键字：</span>
            长江中游城市群
          </el-col>
        </el-row>

<!--        <el-row type="flex" justify="space-between">-->
<!--          <p :span="24">-->
<!--            <span>产品来源：</span>-->
<!--            中国地质调查局武汉地质调查中心-->
<!--          </p>-->
<!--        </el-row>-->

        <div class="bot-form">产品来源：中国地质调查局武汉地质调查中心</div>
      </el-col>
    </el-row>
    </el-card>
    <el-card :body-style="{ padding: '5px' }">
      <el-row>
        <el-col :span="5">
          <div>
            <img style="height: 100px;width: 100px" :src="imgUrl2" class="image">
          </div>
        </el-col>
        <el-col :span="4">
          <el-row>
            <el-col :span="24">
              <el-button type="text" class="button" icon="el-icon-paperclip">珠江三角洲地区酸雨频率图</el-button >
            </el-col>
          </el-row>
          <el-row type="flex" justify="space-between">
            <el-col :span="25">
              <span>关键字：</span>
              珠江三角洲、酸雨、频率
            </el-col>
          </el-row>
<!--          <el-row type="flex" justify="space-between">-->
<!--            <el-col :span="24">-->
<!--              <span>产品来源：xxxxxxxx</span>-->
<!--            </el-col>-->
<!--          </el-row>-->
          <div class="bot-form">产品来源：中国地质科学院水文地质环境地质研究所</div>
        </el-col>
      </el-row>
    </el-card>
    <el-card :body-style="{ padding: '5px' }">
    <el-row>
      <el-col :span="5">
        <div>
          <img style="height: 100px;width: 100px" :src="imgUrl3" class="image">
        </div>
      </el-col>
      <el-col :span="4">
        <el-row>
          <el-col :span="24">
            <el-button type="text" class="button" icon="el-icon-paperclip">“长江经济带”馆藏实物地质资料目录分布图</el-button >
          </el-col>
        </el-row>
        <el-row type="flex" justify="space-between">
          <el-col :span="26">
            <span>关键字：长江经济带、馆藏目录</span>
          </el-col>
        </el-row>
<!--        <el-row type="flex" justify="space-between">-->
<!--          <el-col :span="24">-->
<!--            <span>产品来源：xxxxxxxx</span>-->
<!--          </el-col>-->
<!--        </el-row>-->
        <div class="bot-form">产品来源：国土资源实物地质资料中心</div>
      </el-col>
    </el-row>
  </el-card>
    <el-card :body-style="{ padding: '5px' }">
      <el-row>
        <el-col :span="5">
          <div>
            <img style="height: 100px;width: 100px" :src="imgUrl4" class="image">
          </div>
        </el-col>
        <el-col :span="4">
          <el-row>
            <el-col :span="24">
              <el-button type="text" class="button" icon="el-icon-paperclip">高寒湿地生态系统气象塔观测数据</el-button >
            </el-col>
          </el-row>
          <el-row type="flex" justify="space-between">
            <el-col :span="24">
              <span>关键字：湿度、大气、温度、净辐射</span>
            </el-col>
          </el-row>
<!--          <el-row type="flex" justify="space-between">-->
<!--            <el-col :span="24">-->
<!--              <span>产品来源：冰冻圈领域特色数据库</span>-->
<!--            </el-col>-->
<!--          </el-row>-->
          <div class="bot-form">产品来源：冰冻圈领域特色数据库</div>
        </el-col>
      </el-row>
    </el-card>
    <el-card :body-style="{ padding: '5px' }">
      <el-row>
        <el-col :span="5">
          <div>
            <img style="height: 100px;width: 100px" :src="imgUrl5" class="image">
          </div>
        </el-col>
        <el-col :span="4">
          <el-row>
            <el-col :span="24">
              <el-button type="text" class="button" icon="el-icon-paperclip">高原降水观测数据（2016-2017）</el-button >
            </el-col>
          </el-row>
          <el-row type="flex" justify="space-between">
            <el-col :span="9">
              <span>关键字：降水</span>
            </el-col>
          </el-row>
<!--          <el-row type="flex" justify="space-between">-->
<!--            <el-col :span="24">-->
<!--              <span>产品来源：xxxxxxxx</span>-->
<!--            </el-col>-->
<!--          </el-row>-->
          <div class="bot-form">产品来源：大数据驱动的第三极环境创新示范平台</div>
        </el-col>
      </el-row>
    </el-card>

  </el-card>
</template>

<script>
export default {
  name: "DataResource",
  data(){
    return{
      imgUrl1:require("../assets/img/pro1.jpg"),
      imgUrl2:require("../assets/img/pro2.jpg"),
      imgUrl3:require("../assets/img/pro3.jpg"),
      imgUrl4:require("../assets/img/pro4.jpg"),
      imgUrl5:require("../assets/img/pro5.jpg"),
    }

  },
  methods:{
    openDetails(){
      //查看详情
      this.$router.push({name:'pro1Detail'})// 跳转的详情页面拼接id
    },
  }
}
</script>

<style scoped>
  .bot-form {
    position: absolute;
    /*bottom: -10px;*/
    left: 203px;
    top:60px;
    color: #404040;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
</style>
