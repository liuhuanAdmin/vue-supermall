<template>
  <div id="app">
    <router-view></router-view>
    <maintabbar></maintabbar>
  </div>
</template>
<script>
import Maintabbar from "@/components/content/maintabbar/Maintabbar";
export default {
  name: 'app',
  components:{
    Maintabbar
  }
}
</script>
<style>
 @import "assets/css/base.css";
</style>
