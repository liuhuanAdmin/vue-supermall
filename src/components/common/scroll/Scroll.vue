<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
/*import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'

BScroll.use(Pullup)*/
 export default {
  name: "Scroll",
   props: {
    probeType: {
      type:Number,
      default(){
        return  0
      }
    },
     pullUpload1: {
      type:Boolean,
    default(){
        return  false
      }
    }
   },
   data() {
    return {
      scroll: null,
    }
  },
   methods: {
    backtop(x,y,time=500){ /*判断是否有值再执行操作*/
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
     /*完成加载更多*/
     refresh() {
       this.scroll && this.scroll.refresh()
       console.log('重新计算高度');
     },
    finishpullup() {
      this.scroll && this.scroll.finishPullUp()
    }
   },
  mounted() {
    /*创建BScroll对象选择包裹层*/
    this.scroll = new BScroll(this.$refs.wrapper,{
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpload1 /*特别注意！！！！！！！！！！！！！*/
    })
    /*监听滚动的的位置*/
    this.scroll.on('scroll',(position) => {
      /*console.log(position);*/
      this.$emit('scroll',position)
    })
    /*监听上拉加载的事件*/
    this.scroll.on('pullingUp',()=>{
      /*console.log('上拉加载更多');*/
      this.$emit('pullingUp')
    })
  }
}
</script>

<style scoped>

</style>
<!--页面滚动插件-->
