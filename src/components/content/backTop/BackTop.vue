<template>
  <div class="back-top" >
    <img src="@/assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
name: "BackTop",
  methods: {
 /*   /!*回到顶部*!/
    backClick() {
      /!*子传父*!/
      this.$emit("backClick");
    },*/
  }
}
</script>

<style scoped>
.back-top {
  position: fixed;
  right: 10px;
  bottom: 60px;
}
.back-top img {
  height: 49px;
  width: 49px;
}
</style>
