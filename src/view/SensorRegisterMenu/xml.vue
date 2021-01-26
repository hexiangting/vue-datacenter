<template>
  <code-mirror ref="codeMirror" style="width: 1000px;margin-top: -196px;"></code-mirror>
</template>

<script>
// 引用刚刚写的codemirror.vue公共组件
import CodeMirror from '@/utils/codemirror.vue'

export default {
  components: {
    CodeMirror
  },
  methods: {
    // 刷新 （如果出现编辑器样式问题，以及不能初始化赋值回显数据，可以进行刷新操作）
    refresh() {
      this.$refs.codeMirror.refresh()
    },
    // 获取编辑器的值
    getValue() {
      return this.$refs.codeMirror.code
    },
    // 回显赋值
    setValue() {
      this.$refs.codeMirror.setValue('回显的值:比如 function aa() {}')
    }
  }
}
</script>
<style>
  .CodeMirror {
    text-align: left!important;
    height: 500px;
  }
</style>
