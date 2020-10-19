<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if="!isActive"><slot  name="item-icon"></slot></div>
    <div v-else><slot  name="item-icon-active"></slot></div>
    <div :style="activesty"><slot  name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
name: "tab-bar-item",
  props:{
   path: String,
   activeColor: {
     type: String,
     default: 'red'
   }
  },
  data(){
  return{
    /*isActive:true,*/
  }
  },
  computed:{
    isActive(){       //$route那个路由对象最活跃就是那个对象的路径 ，判断包不包含我点击的path、!== -1就是点击了
      return this.$route.path.indexOf(this.path)!== -1 ;
    },
    activesty(){
      return this.isActive? {color: this.activeColor} : {}
    },
  },

  methods:{
    itemclick(){
      //点击导航栏做跳转功能 $route是当前活跃的路由对象 $router 可以使用history改变前端路径
      this.$router.push(this.path)
    }
  },
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 10px;
}
.tab-bar-item img {
  width: 28px;
  height: 28px;
  margin-top: 3px; /*距离上方原件距离3个像素*/
  vertical-align: middle; /*去掉图片下方距离文字三个像素*/
  margin-bottom: 2px;
}
/*.active {
  color: red;
}*/
</style>
