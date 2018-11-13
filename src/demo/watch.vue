<template>
<section class="watch">
     




     <div class="boxt">
        <h4>1.watch的一般用法</h4>
        <p><input type="text" v-model="data0"></p>
        <p>{{res[0]}}</p>
        <p> <button @click="clear('0')">清空值</button></p>
     </div>







     <div class="boxt">
        <h4>2.watch的高级用法---immediate</h4>
        <p><input type="text" v-model="data1"></p>
        <p>{{res[1]}}</p>
        <p> <button @click="clear('1')">清空值</button></p>
    </div>







    <div class="boxt">
        <h4>3.watch的高级用法----deep(1)--输入值时不触发watch</h4>
        <p><input type="text" v-model="data2.a"></p>
        <p>{{res[2]}}</p>
        <p> <button @click="clear('2')">清空值</button></p>
    </div>







     <div class="boxt">
        <h4>4.watch的高级用法----deep(2)---输入时触发watch</h4>
        <p><input type="text" v-model="data3.a"></p>
        <p>{{res[3]}}</p>
        <p> <button @click="clear('3')">清空值</button></p>
    </div>



    <div class="boxt">
         <h4>5.watch的高级用法总结</h4>
         <p>第4种方法虽然能成功监听a的属性，但太消耗资源</p>
         <p>建议使用方法3，只需要修改监听对象 'data3.a'</p>
    </div>




 <div class="boxt">
     <h4>路由的监听</h4>
     <p>路由监听需要将监听事件放到app.vue（参考案例）</p>
</div>


  <div class="boxt">
     <input type="text" v-model="ssde" placeholder="">
  </div>

  <router-link to="/demo2">eeeeeeeeeee</router-link>

</section>  
</template>
<script>
export default {
    data(){
        return{
           data0:"",
           data1:"",
           data2:{
               a:""
           },
           data3:{
               a:""
           },
           res:[],
           ssde:""
        }
    },
    watch:{


        ssde:'getNew',

        data0(newName, oldName){
            this.res[0] = newName
            if(!newName){
               console.log("------我是普通用法---------")
              }else{
                console.log("------我是普通用法，己触发--------")   
              }
          },




        data1:{
          handler(newName,oldName) {
              this.res[1] = newName
              if(!newName){
                console.log("------我是immediate, 没有触发己执行-----3333333----")
              }else{
                console.log("------我是immediate, 己触发-----444444----")  
              } 
         },
         immediate: true
        //  immediate:true代表如果在 wacth 里声明了 data1 之后，就会立即先去执行里面的handler方法，
        // 若为false 则与前面默认的效果是一样的
      },






         data2:{
          handler(newName,oldName) {
              this.res[2] = newName
              if(!newName){
                console.log("------我是immediate,没有deep, 没有触发己执行-----55555----")
              }else{
                console.log("------我是immediate,没有deep, 己触发-----666666---")  
              } 
         },
         immediate: true
        //  input 输入值时不触发
        
      },


      data3:{ 
          handler(newName,oldName) {
              this.res[3] = newName
              if(!newName){
                console.log("------我是immediate,有deep, 没有触发己执行-----7777----")
              }else{
                console.log("------我是immediate,有deep, 己触发-----88888---")  
              } 
         },
         immediate: true,
         deep: true
      }

        
    },
    methods:{
       clear(v){
           if(v==0 ) {
               this.data0 = ""
           } else if( v==1 ) {
               this.data1 = ""
           }

       },
       getNew(newValue,oldValue){
           console.log(newValue,)
       }
 
    },
    beforeCreate(){

    },
    beforeDestroy(){
        console.log("组件己销毁");
        // unWatch()
    }
}
</script>
<style scoped lang="scss">
  .watch{
      margin-left: 15%;
      margin-top: 20px;
      margin-bottom: 100px
  }
  .boxt{
      margin-top: 30px
      h4{
          border: 1px solid red
      }
  }
</style>

