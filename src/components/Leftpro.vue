<template>
  <div>
    <el-tree
      :data="data"
      @node-click=""
      style="background: #202e51;width: 200px;height: 610px;border-bottom-color: #202e51;color: white;"
    ></el-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data:[{
        label: '全部（5）',
      },{
        label: '环境地质图（2）',
        // children: [{
        //   label: '二级 1-1',
        //
        // }]
      },{
        // label: '一级 2',
        // children: [{
        //   label: '二级 2-1',
        //
        // }, {
        //   label: '二级 2-2',
        //
        // }]
      }],

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

    },

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
