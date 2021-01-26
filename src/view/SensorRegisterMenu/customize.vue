<template>
  <div class="ttt">
    <Table></Table>
  </div>
</template>

<script>
import Table from '@/components/Table/Table'
export default {
  name: "customize",
  components:{
    Table
  }
}
</script>

<style scoped>
  .ttt{
    position: relative;
    margin-left: 210px;
    margin-top: -165px;
    width: 1200px;
  }
</style>
