<template>
  <div>
    <nav-bar>
      <div slot="left" class="back"><img src="@/assets/img/common/back.svg" alt=""></div>
      <div slot="center" class="title">
        <div v-for="(item,index) in title"
             class="title-item"
             :class="{activa: index === currentIndex}"
              @click="titleclick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "detailNavbar",
  components: {
    NavBar

  },
  data() {
    return {
      title: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  methods: {
    titleclick(index) {
      /*点击那个标题就变红色*/
      this.currentIndex = index
    }
  }

}
</script>

<style scoped>
.back img{
  margin-top: 13px ; /*距离上方3个像素*/
}
.title {
  display: flex;
  font-size: 12px;
}
.title-item {
  flex: 1;
}
.activa {
  color: var(--color-high-text);
  border-bottom: 1px solid var(--color-high-text);

}

</style>
