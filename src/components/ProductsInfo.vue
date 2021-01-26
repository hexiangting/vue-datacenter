<template>
  <div class="products-info" @click="goProductsPage()">
<!--    <div class="products-image">-->
<!--      <img v-lazy="productsImage">-->
<!--    </div>-->
    <div class="products-title">{{productsTitle}}</div>
<!--    <div class="products-price">￥{{ goodsPrice.toFixed(2) }}</div>-->
  </div>
</template>

<script>
export default {
  name: "ProductsInfo",
  // x页传过来的
  props: ["productId" , "productsTitle" , "productsImage"],
  data() {
    return {};
  },
  methods: {
    goProductsPage() {
      // 跳转到products.vue商品详情页面,name为products.vue页面路由配置里的的name属性
      this.$router.push({name:"products",query:{productId:this.productId}})
    }
  }
};
</script>

<style lang="scss" scoped>
.goods-info {
  padding-bottom: 0.2rem;
  .goods-image {
    text-align: center;
    img{
      width: 95%;vertical-align: middle;
    }
  }
  .goods-name {
    padding: 0 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .goods-price {
    text-align: center;
    color: #e5017d;
  }
}
</style>
