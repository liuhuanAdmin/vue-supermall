<template>
  <div class="tab-controller">
    <div v-for="(item, index) in titles" class="tab-controller-item"
         :class="{active:index == currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabController",
  props: {
    titles: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
        this.currentIndex = index;
        /*子组件先父组件传递事件，自定义事件*/
        this.$emit('tabClick',index);
    }
  }

}
</script>

<style scoped>
.tab-controller {
  display: flex;
  text-align: center;
  font-size: 14px;
  background-color: #eeeeee;
}
.tab-controller-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.tab-controller-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);

}
.active span {
  border-bottom: 3px solid var(--color-high-text);
}
</style>
