<template>
  <div class="goods">
    <goods-item v-for="item in goods" :goods-item="item"></goods-item>
  </div>
</template>

<script>
import goodsItem from "@/components/content/goods/goodsItem";
export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default(){
        return []
      }
    }
  },
  components: {
    goodsItem
  }

}
</script>

<style scoped>
.goods {
  padding-top: 10px;
  display: flex; /*flex水平布局*/
  flex-wrap: wrap; /*设置包裹，将子组件自定义大小后按照屏幕的大小水平分布几个*/
  justify-content: space-evenly; /*水平居中分布对齐*/
}
</style>
