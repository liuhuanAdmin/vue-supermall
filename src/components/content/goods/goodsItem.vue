<template>
  <div class="goods-item" @click="goodsItemclick">
    <img :src="goodsItem.show.img" alt="" @load="imgload">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{'￥'+goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
name: "goodsItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
      /*点击商品item进入详情页*/
    goodsItemclick() {
      console.log("进入详情页");/*动态路由传递参数*/
      this.$router.push({
        path: '/goodsdetail',
        query: {
          iid: this.goodsItem.iid
        }
      })
    },
    imgload() {
      /*console.log('11111')*/
      this.$bus.$emit('imgItemLoad') /*发送事件总线*/
    },
  }
}
</script>

<style scoped>
.goods-item {
  padding-bottom: 15px;
  width: 45%;
  position: relative;
}
.goods-item img {
  width: 100%;
  border-radius: 10px; /*圆角*/
}
.goods-info {
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.goods-info p {
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
  text-align: right;
}
.goods-info .collect {
  position: relative;
  text-align: left;
}
.goods-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px; /*在他内容前面加一个星号*/
}
</style>
