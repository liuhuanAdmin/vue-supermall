<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "tab-bar"
}
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed; /*将原件放在下面*/
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -2px 1px rgba(100,100,100,.2) ; /*设置投影，x偏移量y偏移量 多大的阴影 什么颜色类型*/
  z-index: 9;
}

</style>
