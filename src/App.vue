<template>
  <div id="app">
     <keep-alive>
       <router-view/>
     </keep-alive>
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
