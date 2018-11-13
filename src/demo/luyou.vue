<template>
   <div class="cs">
       <p>路由的测试,params</p>
       <p @click="to1">测试一</p>
       <p>
        <router-link :to="{name:'demo6',params:{post:'778899'}}">测试二</router-link>
       </p>
      
        <p>路由的测试,query</p> 
        <p @click="to2">测试三</p>
         <p>
        <router-link :to="{name:'demo7',query:{post:'****@@@@#####'}}">测试四</router-link>
       </p>


   

     <!-- 重定向 -->

     <!-- { path: '/a', redirect: to => {
      // 方法接收 目标路由 作为参数
      // return 重定向的 字符串路径/路径对象
    }} -->


   <!-- 别名的用法：别名就是增加一个新的访问路径 -->
   <!-- { path: '/home', component: Home,

      children: [
      
        { path: 'foo', component: Foo, alias: '/foo' },
       


        { path: 'bar', component: Bar, alias: 'bar-alias' },
     

        { path: 'baz', component: Baz, alias: ['/baz', 'baz-alias'] }

      ]
    } -->




   </div> 
</template>
<script>
export default {
    methods:{
        to1(){
            this.$router.push({ name: 'demo6', params:{post:"uu99"}})
        },
        to2(){
            this.$router.push({ name: 'demo7', query:{post:"www000"}})
        },
      
    }
   
}
</script>
<style lang="scss" scoped>
p{
    margin-top: 30px
}
.cs{
    width: 500px;
    margin: 100px auto
}
</style>
