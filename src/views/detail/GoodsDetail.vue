<template>
  <div id="detail">
    <detail-navbar>
      <div slot="1">箭头</div>
      <div slot="2">详情</div>
      <div slot="3">评论</div>
      <div slot="4">细节</div>
    </detail-navbar>
  </div>
</template>

<script>
import DetailNavbar from "@/views/detail/childComp/detailNavbar";
export default {
  name: "GoodsDetail",
  components:{
    DetailNavbar
  },
  data() {
    return {
      iid: null
    }
  },
  created() {
    this.iid = this.$route.query.iid
  }
}
</script>

<style scoped>

</style>
