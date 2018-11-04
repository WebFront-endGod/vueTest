<template>
  <section class="fast box" v-if="fastList">
     <div class="box">
       <ul>
         <router-link
           tag="li"
           to="/"
           v-for="(item, index) in fastList"
           :key = "index" :class="listClass"
           :style="hiddeBL(index+1)">
           <img :src="item.imgUrl" alt=""/>
           <p>{{item.text}}</p>
         </router-link>
          <!--若是json没有值呢-->
         <router-link v-if="isShow" to="/" tag="li" :class="listClass" style="border-bottom: none">
           <p>更多</p>
         </router-link>
       </ul>
     </div>
  </section>
</template>

<script>
    export default {

      props:['fastList','Type'],

      computed:{

         listClass () {

           const val = parseInt( 100 / this.Type );

           if( this.Type === 4 ){

             return 'width' + val + ' ' + 'lineShow ' + ' ' + 'lineNone' + this.Type

           } else {

             return 'width' + val
           }
         },

        isShow(){

         if ( this.Type === 4 ) {

           return false

         } else {

           return true
         }

        }

      },

      methods:{
        // 获取整排的数量 * 单排个数  再与本排的序数相比 若超过完整排 则是最后一排的序数
        hiddeBL ( val ) {

          if( this.Type === 4 ){
             // 设参
             let init;

             let arryLength = this.fastList.length;

             let rows = this.Type;

             let lineNum =  arryLength / rows ;

             let flg = (/^\+?[1-9][0-9]*$/).test( lineNum );　

              if(flg){

               init = (lineNum -1) * rows

             } else {

               init = parseInt( lineNum ) * rows
             }

             // init 就是完整排（除最后一排）的序数

             if(val > init){

               return "border-bottom:none"
            }

           }
        }

      }
    }
</script>

<style scoped lang="scss">
.fast{
  .box {
    li{
      padding-top: 10px;
      float: left;
      height: 5.5em;
      overflow: hidden;
      box-sizing: border-box;
      img{
        width: 44%;
        display: block;
        margin: 0 auto;
      }
      p{
        color: #333;
        text-align: center;
        padding-top: 10px;
        font-size: 11px;
      }
    }

  }
}
</style>
