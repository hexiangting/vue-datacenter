<template>
  <div>
    <div style="position:absolute;top:125px;left:0px;z-index:999;">
      <leftdrop></leftdrop>
    </div>
    <div style="width: 1200px;height: 550px;margin-top: 0px;">
      <MapControl></MapControl>
    </div>
    <div style="position:absolute;top:120px;right:0px;z-index:999;">
<!--      <RightNav></RightNav>-->
    </div>
  </div>
</template>

<script>
import Leftdrop from "@/components/Leftdrop";
import RightNav from "@/components/RightNav";
import MapControl from "./MapControl";
import Table from "./Table/Table";
  export default {
  name: "but",
  components:{
    MapControl,
    Table,
    Leftdrop,
    RightNav
  },
  data(){
    return {
      radioButton: true
    }
  },
  methods:{
    open() {
      const h = this.$createElement;
      this.$msgbox({
        title: '消息',
        message: h('p', null, [
          h('span', null, '内容可以是 '),
          h('i', { style: 'color: teal' }, 'VNode')
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = '执行中...';
            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 300);
            }, 3000);
          } else {
            done();
          }
        }
      }).then(action => {
        this.$message({
          type: 'info',
          message: 'action: ' + action
        });
      });
    }
  }
}
</script>

<style scoped>
  #btn {
    height: 20px;
    width: 500px;
    margin-left: 100px;
  }
  #erg{
    display: revert;
  }
  #erb1{
    height: 20px;
    /*width: 500px;*/
  }
  #erb2{

  }
</style>
