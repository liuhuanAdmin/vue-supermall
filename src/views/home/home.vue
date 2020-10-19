<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">首页</div></nav-bar>  <!--导航栏-->
    <home-swiper :banners="banners"></home-swiper> <!--轮播图-->
    <home-recommend-view :recommends="recommends"></home-recommend-view> <!--下面四个-->
    <feature-view></feature-view>  <!--特性-->
    <TabController :titles="['流行','新款','精选']" class="tab-bar-control" @tabClick="tabClick"></TabController>
    <goods-list :goods=showGoods></goods-list>
  </div>
</template>

<script>
import homeSwiper from "@/views/home/childComps/homeSwiper";   /*子组件*/
import homeRecommendView from "@/views/home/childComps/homeRecommendView";
import featureView from "@/views/home/childComps/featureView";

import TabController from "@/components/content/tabController/TabController";/*公共组件*/
import NavBar from "@/components/common/navbar/NavBar";
import GoodsList from "@/components/content/goods/GoodsList";

import {getHomeMultidata,
        getHomeGoodsData
} from "@/network/home";/*js或util*/

export default {
  name: "home",
  components: {
    homeSwiper,
    homeRecommendView,
    featureView,
    NavBar,
    TabController,
    GoodsList
  },
  props: {
  },
  data() {
    return{
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0,list: []}, /*流行*/
        'new': {page: 0,list: []}, /*新款*/
        'sell': {page: 0,list: []}, /*精选*/
      },
      currentType:  'pop'/*当前类型*/
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    //请求多个数据，生命周期函数,轮播图的数据
    this.getHomeMultidata()
    //请求商品列表参数
    this.getHomeGoodsData('pop')
    this.getHomeGoodsData('new')
    this.getHomeGoodsData('sell')
  },
  methods: {
    /**
     * 事件监听相关方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break
        case 1:
          this.currentType = 'new';
          break
        case 2:
          this.currentType = 'sell';
          break
      }
    },

    /**
     *下面的都是网络请求相关方法
     */
    //请求多个数据，生命周期函数,轮播图的数据
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    //请求商品列表参数
    getHomeGoodsData(type){
      const page = this.goods[type].page+1;
      getHomeGoodsData(type,page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      })
    }
  }

}
</script>

<style scoped>
#home {
  padding-top: 44px; /*固定顶部44高度不遮盖*/
}
.home-nav {
  background-color: var(--color-tint);
  color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-bar-control {
  position: sticky; /*到达44px的时候将position属性变成flext,只能适配与移动端，ie浏览器不支持*/
  top: 44px;
  z-index: 8;
}
</style>
