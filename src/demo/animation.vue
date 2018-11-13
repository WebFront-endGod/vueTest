<template>
    <div>

      <!-- 单元素/组件的过渡 -->

      <!-- 过渡类名 -->


      <!-- 1.v-enter(进入过渡的开始状态)
      2.v-enter-active(进入过渡生效时的状态)
      3.v-enter-to(进入过渡的结束状态) -->

      <!-- 4.v-leave(离开过渡的开始状态)
      5.v-leave-active（离开过渡生效时的状态）
      6.v-leave-to（离开过渡的结束状态） -->

      <!-- 一般我们使用 v-enter-active 和 v-leave-active  -->

     <div class="a1" v-text="text"></div>
     <div class="a1">
           <transition name="fade">
            <div class="t1" v-if="show"></div>
            </transition>
        <button v-on:click="show = !show">
            开始动画--透明与隐藏
        </button>  
     </div>

    <!-- 样式控制动画 -->
    <div class="a1">
    <transition name="bounce">
    <div style="width:140px;height:140px;border;1px solid red;overflow:hidden" v-if="show1">
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. 
        Mauris facilisis enim libero, 
        at lacinia diam fermentum id. 
        Pellentesque habitant morbi tristique senectus et netus.
    </div>
   </transition>

     <button @click="show1 = !show1">开始动画---闪烁</button>
    </div>

     <div class="b1">
         <!-- 可使用第三方插件库 -->
         <!-- 动画效果参考网址：http://www.dowebok.com/demo/2014/98/ -->
           <!-- <transition
            
                name="custom-classes-transition"

                enter-active-class="animated tada"

                leave-active-class="animated bounceOutRight">

               <p v-if="show">hello</p>

            </transition> -->
     </div>


    <!-- duration 属性定制一个显性的过渡持续时间 (以毫秒计)： -->
    <!-- <transition :duration="1000">...</transition> -->
    <!-- <transition :duration="{ enter: 500, leave: 800 }">...</transition> -->


   <!-- JavaScript 钩子 -->
  <!-- <transition
  v-on:before-enter="beforeEnter"
  v-on:enter="enter"
  v-on:after-enter="afterEnter"
  v-on:enter-cancelled="enterCancelled"

  v-on:before-leave="beforeLeave"
  v-on:leave="leave"
  v-on:after-leave="afterLeave"
  v-on:leave-cancelled="leaveCancelled"
 >

</transition> -->

<!-- 调用的方法,自行测试，不作过多的说明，一般情况，不使用此类方法 -->

  <!-- methods: {
 
   // 
  // 进入中
  // 


  beforeEnter: function (el) {
    // ...
  },


  // 当与 CSS 结合使用时
  // 回调函数 done 是可选的
  enter: function (el, done) {
    // ...
    done()
  },


  afterEnter: function (el) {
    // ...
  },


  enterCancelled: function (el) {
    // ...
  },





  // 
  // 离开时
  // 

  beforeLeave: function (el) {
    // ...
  },



  // 当与 CSS 结合使用时
  // 回调函数 done 是可选的
  leave: function (el, done) {
    // ...
    done()
  },


  afterLeave: function (el) {
    // ...
  },


  // leaveCancelled 只用于 v-show 中
  leaveCancelled: function (el) {
    // ...
  }



} -->





</div>
</template>
<script>
export default {
    data(){
        return{
            show:false,
            show1:false,
            text:"如果你使用了 name='my-transition'那么 v-enter（默认前缀）会替换为 my-transition-enter"

        }
    }
    
}
</script>
<style lang="scss" scoped>
.a1{
    margin-left: 15%;
    margin-top: 50px;
}
.t1{
    width: 140px;
    height: 140px;
    background-color: darkmagenta
}

// 第一个 只是透明度与隐藏
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

// 第二个
.bounce-enter-active {animation: bounce-in .5s;}
.bounce-leave-active {animation: bounce-in .5s reverse;}
@keyframes bounce-in {
  0% {transform: scale(0);}
  50% {transform: scale(1.5);}
  100% {transform: scale(1);}
}






</style>

