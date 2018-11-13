<template>
  <section class="Assortment">
    
    <ul>

     <router-link to="/demo1" tag="li">vue基本指令与事件指令</router-link>

     <router-link to="/demo2" tag="li">vue from 表单元素,计算属性</router-link>

     <router-link to="/demo3" tag="li">vue 生命周期，动态样式绑定，watch</router-link>

     <router-link to="/demo4" tag="li">vue watch 高级用法</router-link>

     <router-link to="/demo5" tag= "li">vue 前端缓存</router-link>

     <router-link to="/demo8" tag= "li">vue 动画</router-link>

     <router-link to="/demo9" tag= "li">状态管理vuex</router-link>

     <router-link to="/demo10" tag= "li">自定义指令</router-link>

     <router-link to="/demo11" tag="li">路由与嵌套路由，动态路由</router-link> 

      <!-- 
     <router-link>
         vue调试方法
     </router-link> --> 
  </ul>
  </section>
</template>
<script>
export default{
  data(){
    return{
      urls:[

      ]
    }
  }
}
</script>
<style scoped>
.Assortment{
  margin: 100px 0;
}
.Assortment ul li{
  margin-top: 15px;
  text-align: center;
  width: 80%;
  margin-left: 10%;
  height: 40px;
  line-height: 40px;
  background: pink
}

</style>
