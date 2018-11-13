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
      },
      watch:{
        $route( to , from ){   
        //  console.log( to , from )
        // to , from 分别表示从哪跳转到哪，都是一个对象
        // to.path  ( 表示的是要跳转到的路由的地址 eg: /home );
        }
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
