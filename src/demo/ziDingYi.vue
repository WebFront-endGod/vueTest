<template>
<div style="width:100%;height:100%">
    
    <div v-A1 class="one">

    </div>


<!-- 1.自定义指令需要全局注册或局部注册 -->



<!-- 全局方法说明： -->


<!-- focus 是自定义指令名 -->

<!-- Vue.directive('focus', {

  // inserted:当被绑定的元素插入到 DOM 中时……
   inserted: function (el) {

    // 绑定对象 输入框获得焦点时要处理的事情
    el.focus()
  }

}) -->


<!-- 2.本案例为局部注册  -->

<!-- 3.自定义指令的钩子函数  -->

  <!-- (1) bind：只调用一次，指令第一次绑定到元素时调用 -->
  
  <!-- (2) inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。 -->

  <!-- (3) update：所在组件的 VNode 更新时调用（你可以通过比较更新前后的值来忽略不必要的模板更新） -->

  <!--（4） componentUpdated ：指令所在组件的 VNode 及其子 VNode 全部更新后调用 -->

  <!--（5） unbind：只调用一次，指令与元素解绑时调用 -->

<!-- 钩子函数参数 -->

 <!-- 详情请参考官网 -->

 <!-- https://cn.vuejs.org/v2/guide/custom-directive.html -->








</div>   
</template>
<script>
export default {
 
  directives:{

     A1:{
       bind(el){

         el.onmousedown=function(e){

          var disx= e.clientX- el.offsetLeft;
          var disy= e.clientY- el.offsetTop;

           document.onmouseout=function(e){

              var lef= e.clientX-disx;
              var hei= e.clientY-disy;

              el.style.left=lef+'px';
              el.style.top=hei+'px';

           };
            //停止动画
           document.onmouseup=function(e){

             document.onmousedown=null;
             document.onmouseout=null;

           }
        }
      }

   }

 }



    
}
</script>
<style lang="scss" scoped>
 .one{
     width: 100px;
     height: 100px;
     position:absolute;
     left:0;top:0;
     border:1px solid red
 }
</style>
