<template>
  <div>
    <el-tree
      :data="data"


      @node-click=""
      style="background: #202e51;width: 200px;height: 610px;border-bottom-color: #202e51;color: white;"
    ></el-tree>
<!--    <el-menu-->
<!--      style="height: 610px;width: 200px;background: #202e51;"-->
<!--      default-active="2"-->
<!--      class="el-menu-vertical-demo">-->
<!--      &lt;!&ndash;    @open="handleOpen"&ndash;&gt;-->
<!--      &lt;!&ndash;    @close="handleClose">&ndash;&gt;-->

<!--      <el-submenu index="1" class="res">-->
<!--        <template slot="title" >-->
<!--          <i class="el-icon-map-location"></i>-->
<!--          <span slot="title" class="title">原位传感器</span>-->
<!--        </template>-->
<!--        <el-menu-item-group>-->
<!--          <el-menu-item index="1-1">选项1</el-menu-item>-->
<!--          <el-menu-item index="1-2">选项2</el-menu-item>-->
<!--          <el-menu-item index="1-3">选项3</el-menu-item>-->
<!--          <el-menu-item index="1-4">选项4</el-menu-item>-->
<!--        </el-menu-item-group>-->
<!--      </el-submenu>-->
<!--      <el-submenu index="2">-->
<!--        <template slot="title" >-->
<!--          <i class="el-icon-files"></i>-->
<!--          <span slot="title" class="title">数据中心集</span>-->
<!--        </template>-->
<!--        <el-menu-item-group>-->
<!--          <el-menu-item index="2-1">选项1</el-menu-item>-->
<!--          <el-menu-item index="2-2">选项2</el-menu-item>-->
<!--          <el-menu-item index="2-3">选项3</el-menu-item>-->
<!--        </el-menu-item-group>-->
<!--      </el-submenu>-->
<!--      <el-submenu index="3">-->
<!--        <template slot="title">-->
<!--          <i class="el-icon-video-camera"></i>-->
<!--          <span slot="title" class="title">移动传感器</span>-->
<!--        </template>-->
<!--        <el-menu-item-group>-->
<!--          <el-menu-item index="3-1">选项1</el-menu-item>-->
<!--          <el-menu-item index="3-2">选项2</el-menu-item>-->
<!--          <el-menu-item index="3-3">选项3</el-menu-item>-->
<!--        </el-menu-item-group>-->
<!--      </el-submenu>-->
<!--    </el-menu>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // data:[{
      //   label: '',
      //   children: [{
      //     label: '二级 1-1',
      //
      //   }]
      // },{
      //   label: '一级 2',
      //   children: [{
      //     label: '二级 2-1',
      //
      //   }, {
      //     label: '二级 2-2',
      //
      //   }]
      // }],
      data:[],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      isCollapse: true
    };
  },
  mounted() {
    this.init()
  },
  methods: {
    init(){
      var _this = this
      this.$axios.get('sensor/getAllProcedureInfo' ,{

      }).then(resp => {
        console.log(resp.status)
        if(resp.status === 200){
          var procedures = resp.data;
          for (var i=0;i<procedures.length;i++) {
            var children = []
            var sensors = procedures[i].sensors;
            for (var j=0; j<sensors.length; j++) {
              var sensor = sensors[j];
              var child = {
                label: sensor.name,
                id:sensor.procedureId
              }
              children.push(child);
            }
            var procedureInfo = {
              label: procedures[i].name,
              children: children
            }
            _this.data.push(procedureInfo);
          }
          console.log("获取成功")
          console.log(_this.data)
        }else{
          _this.$message({
            message: resp.data.msg,
            type:'warning'
          })
        }
      })
    },
    // handleNodeClick() {
    //   var _this = this
    //   this.$axios.get('sensor/getAllProcedureInfo' ,{
    //
    //   }).then(resp => {
    //     console.log(resp.status)
    //     if(resp.status === 200){
    //       var procedures = resp.data;
    //       for (var i=0;i<procedures.length;i++) {
    //         var children = []
    //         var sensors = procedures[i].sensors;
    //         for (var j=0; j<sensors.length; j++) {
    //           var sensor = sensors[j];
    //           var child = {
    //             label: sensor.name,
    //             id:sensor.procedureId
    //           }
    //           children.push(child);
    //         }
    //         var procedureInfo = {
    //           label: procedures[i].name,
    //           children: children
    //         }
    //         _this.data.push(procedureInfo);
    //       }
    //       console.log("获取成功")
    //       console.log(_this.data)
    //     }else{
    //       _this.$message({
    //         message: resp.data.msg,
    //         type:'warning'
    //       })
    //     }
    //   })
    //
    // }
  }
}
</script>

<style>
  .title{
    color: white;
  }

  .el-tree-node:focus > .el-tree-node__content {
    background-color: #66b1ff87 !important;

  }
  .el-tree-node__content:hover {    background-color: #66b1ff87;
  }
  .el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content {
    background-color: #66b1ff87;
  }
  .el-tree-node__label {
    width: auto;
    margin-top: 2px;
    float: right;
    font-family: “Trebuchet MS”, Arial, Helvetica, sans-serif;
    font-size: 12px;
    line-height: 25px;
    letter-spacing: 1px;
  }

</style>
