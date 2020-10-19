<template>
  <div class="recommend">
     <div v-for="item in recommends" class="recommend-item">
       <a :href="item.link">
         <img :src="item.image" alt="">
         <div>{{item.title}}</div>
       </a>
     </div>
  </div>
</template>

<script>
export default {
name: "homeRecommendView",
  props: {
    recommends:{
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
 .recommend {
   display: flex; /*水平布局*/
   width: 100%; /*宽度百分之百*/
   text-align: center; /*内容居中*/
   font-size: 12px;
   padding: 15px 0 30px;/*上下左右空白*/
   border-bottom: 10px solid #eee;

 }
 .recommend-item {
   flex: 1;
 }
 .recommend-item img {
   width: 65px;
   height: 65px;
   margin-bottom: 10px;/*距离下方文字十个像素*/
 }
</style>
