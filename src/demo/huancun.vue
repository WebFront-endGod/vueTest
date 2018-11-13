<template>
<section class="huancun">  
     
     <div class="vb1">
     <router-link to="/demo6" >1111</router-link> |<router-link to="/demo7" >1111</router-link>
     </div>



    <!-- 普通的组件不能保存信息 1111111-->

     <div class="vb2">
       <router-view></router-view>
     </div>

     
     <!-- 组件可以保存信息 2222222222-->

     <!-- <div class="vb2">
       <keep-alive> 
       <router-view></router-view>
       </keep-alive>
     </div> -->
     
     <!-- include属性表示只有组件名为XXX的会被缓存 ，其它都不会 3333333-->
     
      <!-- <div class="vb2">
       <keep-alive include="cd1"> 
       <router-view></router-view>
       </keep-alive>
     </div> -->

  
   <!-- exclude属性表示组件名为XXX的不会被缓存，其它的都会 44444444444-->
   <!-- <keep-alive include="demo6" include="a,b">  -->
   <!-- <keep-alive include="demo6" include="/a|b/">  -->
   <!-- 若是组件内初始值设置与组件name名一致 -->

    <!-- <div class="vb2">
       <keep-alive exclude="cd1"> 
       <router-view></router-view>
       </keep-alive>
     </div> -->


    


      <!-- 通过router来处理缓存 5555555555-->
      <!-- (1)在针对相关页面路由中加 meta:{keepAlive:false} false不需要缓存，true是需要 -->
      <!-- 若下一个页面不需要缓存  通过beforeRouterLeave这个钩子来对路由里面的keepAlive进行赋值 false -->
      <!-- <div class="vb2">
         <keep-alive exclude="cd1"> 
              <router-view v-if= "$route.meta.keepAlive"></router-view>
        </keep-alive>
              <router-view v-if= "!$route.meta.keepAlive"></router-view>
        </div> -->

</section>   
</template>
<script>
export default {
     //设置下一个路由的meta
    // beforeRouterLeave(to,from,next) {
    //     // B页面跳转A时，让A缓存不刷新，若为false 不缓存即刷新
    //     to.meta.keepAlive = false;
    //     next();
    // },
    
}
</script>
<style scoped>
  .huancun{
      margin: 50px 0 100px 15%
  }
  .vb2{
    margin-top: 30px;
    overflow: hidden;

  }
  .active{
      color:coral
  }
</style>
