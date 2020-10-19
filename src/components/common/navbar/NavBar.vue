<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  line-height: 44px;
  height: 44px;
  text-align: center;
  box-shadow: 0 2px 1px rgba(100,100,100,.2) ; /*设置投影，x偏移量y偏移量 多大的阴影 什么颜色类型*/
}
.left,.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>
