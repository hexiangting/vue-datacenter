<template>
  <footer id="footer">
    {{info}}
  </footer>
</template>

<script>
export default {
  data() {
    return {
      info: '版权所有 中国地质大学·地球空间感知与计算研究中心 Copyright © 2021'
    }
  },
}
</script>

<style scoped>
    #footer{
      background: url("../../assets/img/foot_bg.png") top center;
      color: #4de8ff;
      text-align: center;
      line-height: 35px;
      font-size: 13px;
      padding: 3px;

    }
    .el-footer{
      height: 0!important;
    }
</style>
