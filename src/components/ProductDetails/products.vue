<!--<template>-->
<!--  <pro1Detail></pro1Detail>-->
<!--</template>-->

<!--<script>-->
<!--import pro1Detail from "@/components/ProductDetails/pro1Detail";-->
<!--export default {-->
<!--  name: "products",-->
<!--  components:{-->
<!--    pro1Detail,-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
<template>
  <div>商品详情页</div>
</template>

<script>
import url from "@/server/apis/products.js";
export default {
  name: "products",
  data() {
    return {
      productId: "",
    };
  },
  created () {
    // 接收ProductsInfo.vue传过来的productsId
    this.productId = this.$route.query.productId
    console.log(this.productId)
    this.getProductsInfo();
  },
  methods: {
    getProductsInfo() {
      let that = this;
      this.$http
        .post('/apis/products/searchProduct',{productId: that.productId})
        .then(response => {
          //根据productsId获取对应的商品详情信息
          console.log(response)
        })
        .catch(error => {

        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
