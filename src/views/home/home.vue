<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>  <!--导航栏-->
    <TabController :titles="['流行','新款','精选']"  @tabClick="tabClick"  ref="tabcontrol1" class="tab-control" v-show="isTabFixed"></TabController>
    <scroll class="content" ref="scroll"
            :probe-type="3"
            :pull-upload1="true"
            @scroll="contentScroll"
            @pullingUp="loadMore">
      <home-swiper :banners="banners" @imageLoad="swiperImgload"></home-swiper> <!--轮播图-->
      <home-recommend-view :recommends="recommends"></home-recommend-view> <!--下面四个-->
      <feature-view></feature-view>  <!--特性-->
      <TabController :titles="['流行','新款','精选']"  @tabClick="tabClick"  ref="tabcontrol2"></TabController>
      <goods-list :goods=showGoods></goods-list>
    </scroll>
    <BackTop @click.native="backClick" v-show="topshow"></BackTop> <!--组件添加点击事件要在后面加native-->
  </div>
</template>

<script>
import homeSwiper from "@/views/home/childComps/homeSwiper";   /*子组件*/
import homeRecommendView from "@/views/home/childComps/homeRecommendView";
import featureView from "@/views/home/childComps/featureView";

import TabController from "@/components/content/tabController/TabController";/*公共组件*/
import NavBar from "@/components/common/navbar/NavBar";
import GoodsList from "@/components/content/goods/GoodsList";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/content/backTop/BackTop";


import {getHomeMultidata,
        getHomeGoodsData
} from "@/network/home";/*js或util*/
import {debounce} from "@/common/utils";

export default {
  name: "home",
  components: {
    homeSwiper,
    homeRecommendView,
    featureView,
    NavBar,
    TabController,
    GoodsList,
    Scroll,
    BackTop,
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
      currentType:  'pop'/*当前类型*/,
      topshow: true,
      tabOffSetTop: 0,
      isTabFixed: false
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    },
    /*活跃方法与不活跃方法*/

  },
  created() {

    //请求多个数据，生命周期函数,轮播图的数据
    this.getHomeMultidata()
    //请求商品列表参数
    this.getHomeGoodsData('pop')
    this.getHomeGoodsData('new')
    this.getHomeGoodsData('sell')
    /*监听事件总线*/
  },
  mounted() {

    /*监听imgItem事件完成*/
    this.$bus.$on('imgItemLoad',()=>{
      /*console.log('监听到图片加载完成');*/
      refresh()
    })
    const refresh = debounce(this.$refs.scroll.refresh,200) /*,导入的函数不需要加this,千万不能加小括号.加小括号放进去的就是这个方法的返回值*/

  },
  methods: {

    /*轮播图照片加载完成*/
    swiperImgload() {
      /*tabOffSetTop赋值*/
      this.tabOffSetTop = this.$refs.tabcontrol2.$el.offsetTop
    },
    /*底部上拉加载更多商品*/
    loadMore() {
      console.log('上拉加载更多');
      this.getHomeGoodsData(this.currentType)
      /*重新计算可滚动的区域*/
      this.$refs.scroll.scroll.refresh();

    },
    /*获得滑动的坐标*/
    contentScroll(position) {
      /*决定backtop是否显示*/
      if (position.y < -1000){
        this.topshow = true
      }else {
        this.topshow = false
      }
      /*决定tabcontroll组件是否吸顶*/
      this.isTabFixed = (-position.y) > this.tabOffSetTop
    },
    /*回到顶部*/
    backClick() {
      this.$refs.scroll.backtop(0,0) /*将坐标回显到最上方500毫秒*/
    },
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
      this.$refs.tabcontrol1.currentIndex = index;
      this.$refs.tabcontrol2.currentIndex = index;
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
        this.goods[type].list.push(...res.data.list); /*获取到一页的数据后将商品数据加入进去*/
        this.goods[type].page += 1;

        this.$refs.scroll.finishpullup();
        /*刷新完成重新刷新事件，和刷新页面的高度*/
      })
    }
  }

}
</script>

<style scoped>
#home {
  /*padding-top: 44px;*/ /*!*固定顶部44高度不遮盖*!*/
  height: 100vh;
  position: relative; /*采用相对定位*/
}
.home-nav {
  background-color: var(--color-tint);
  color: #f6f6f6;
/*  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;*/
}
/*.tab-bar-control {
  position: sticky; !*到达44px的时候将position属性变成flext固定不动,只能适配与移动端，ie浏览器不支持*!
  top: 44px;
  z-index: 8;
}*/
/*.content {
  height: 300px;
  margin-top: 44px;
}*/
/*采用相对定位*/
.content {
 overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
}
.tab-control {
  position: relative; /*相对定位*/
  z-index: 9;
}
</style>
