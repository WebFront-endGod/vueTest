<template>
  <div id="app">
    <router-view/>
    <NavBottom></NavBottom>
  </div>
</template>
<script>
  import NavBottom from './components/NavBottom/index'
    export default {
      components:{
          NavBottom
      }
    }
</script>
<style>
    @import "./assets/css/rest.css";
#app {
    font-size: 100%;
    font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif;
    font-weight: normal;
    word-wrap: break-word;
    word-break: break-all;
 }

</style>
