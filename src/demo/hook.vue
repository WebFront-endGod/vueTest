<template>
<section class="hook">
        <form action="" novalidate="true" method="post" id="app" @submit.prevent="submit">
          <ul style="margin-top:50px;margin-left:15%">
              <li>
                  <label for="name">姓名：</label>
                  <input type="text" id="name" name="name" v-model.trim="name" placeholder="请输入姓名"><br>
                  <span v-text="error[0]" class="error"></span>
              </li>


              <li>
                 <label for="tel">电话：</label> 
                 <input type="text" id="tel" name="tel" v-model.trim="tel" placeholder="请输入手机号"><br>
                 <span v-text="error[1]" class="error"></span>
              </li>

              <li>
                 <label for="email">邮箱：</label> 
                 <input type="text" id="email" name="email" v-model.trim="email" placeholder="请输入常用邮箱"><br>
                 <span v-text="error[2]" class="error"></span>
              </li>

          </ul>
          <div style="margin-top:10px;margin-left:25%">
            <input type="submit" value="确定" :disabled="Disto" :class="btn">
            <button @click.stop = "rest">重置</button>
          </div>
        </form>

        <div class="box2">
            <div class="box3">
                <div class="A1">序号</div>
                <div class="A2">姓名</div>
                <div class="A2">电话</div>
                <div class="A2">邮箱</div>
                <div class="A2">操作</div>
             </div>
            <ul v-if="data5">
             <li v-for="(v,k) in data5" :key="k" class="box4">
                <div class="A1">{{k+1}}</div>
                <div class="A2">{{v.name}}</div>
                <div class="A2">{{v.tel}}</div>
                <div class="A2">{{v.email}}</div>
                <div class="A2"><button @click= "Delete(k)">删除</button></div>
             </li>
           </ul>
           <div><button @click="Delete(-1)">删除全部</button></div>
       </div> 

        
         
         
         
         
        <div style="margin-top:100px;margin-left:15%;overflow:hidden"> 
        <h4>理解钩子函数</h4>
        <div class="a1" :style="changeColor">{{data1}}</div>
        <div class="a1" @click="changeNum">更改数据</div>
        <div class="a1" @click="destroyed">销毁组件</div>
        </div>


        <div style="margin-top:100px;margin-left:15%;overflow:hidden"> 

         <h4 v-text="text"></h4>

          <div class="box"> 
           <ul style="margin-bottom:20px;overflow:hidden">
               <li v-for="(v,i) in data3" :key="i" :style="bottom_line(i+1)">{{v}}</li>
           </ul>
         


           <div class="tt" style="margin-top:20px"> 
              <p><input type="number" name="number" v-model.trim="data4"></p>
               <!-- 感觉不对计算 -->
               <span @click="add">+</span>
                <span>{{unt}}</span>
                <span @click="det">-</span>
            </div>
            
         </div>
        </div>

          
       




    </section>
</template>
<script>
// 表单校验插件1   https://github.com/monterail/vuelidate
// 表单校验插件2   https://baianat.github.io/vee-validate/
export default {
    name: "hook",
    data(){
       return{
           name:"",
           tel:"",
           email:"",
           message: 'Vue的生命周期',
           data1:"",
           error:[],//用来存放错误信息列表
           data2: [0, 0, 0],//用来存放输入信息完成的状态
           data3:[1,2,3,4,5,6,7,8,9],//设置列表假数据
           data4: 2,// 设置初始假数据
           data5:[], // 设置展示用户的数据
           nellUser:{},//空对象用来存放临时数据
       }
    },
    computed:{ //非触发条件型事件放在这里
        changeColor(){
           if(this.data1<20){
               return "background-color: aqua;color:white"
           } else if(this.data1<40) {
               return "background-color: darkblue;color:white"
           } else if(this.data1<80) {
               return "background-color: darkmagenta;color:white"
           } else {
               return "background-color: orange;color:white"
           }
       },
       Disto(){
         if(this.data2[0] && this.data2[1] && this.data2[2]){
             return this.disabled = false
         }else{
             return this.disabled = true
         }
       },
       btn(){
         if(this.data2[0] && this.data2[1] && this.data2[2]){
             return 'a3 a4'
         } else {
            return 'a2 a4'
         } 
       },
       // 上面返回的都是样式与class名,下面返回的是文本
       text(){
          return "我正在学习Vue的计算属性,是文本输出"
       },
       unt(){
           if(this.data4){
              return parseInt(this.data4) + 1
           }
           
       }

    },
    watch:{ // 监听事件
         name(valueNew, valueOlde){
            //  此处可以异步处理从后台获取值
          if(!this.testName(valueNew)){
              this.error[0] = "请正确输入你的姓名"
              this.$set(this.data2,0,0)
          }else{
              this.error[0] = ""
              this.$set(this.data2,0,1)
          }
         },
         tel(vNew,vOld){
             const m1 = /^1[3,4,5,7,8]\d{9}$/
             if(!m1.test(vNew)){
                 this.error[1] = "您输入的手机号不正确"
                 this.$set(this.data2,1,0)
             } else {
                 this.error[1] = ""
                 this.$set(this.data2,1,1)
             }
         },
         email(vNew,vOld){
             const m1 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
             if(!m1.test(vNew)){
                this.error[2] = "您输入的邮箱格式不正确"
                this.$set(this.data2,2,0)
             }else{
                this.error[2] = ""
                this.$set(this.data2,2,1)
            }
        }
    },
    methods:{// 触发型事件放在这里
        submit:function(e){
            console.log("----触发提交按钮------")
        this.data5.push({
                name:this.name,//获取name属性值
                tel:this.tel, //获取tel属性值
                email:this.email //获取email属性值
        });
        this.name=""
        this.tel=""
        this.email=""
        e.preventDefault();
        },
        changeNum(){
            let sn = Math.floor(Math.random() * (100 - 1+1)) + 1
            this.data1 = sn
        },
        testName(m){
             const m1 = /^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{1,20})$/
             const m2 = m1.test(m) 
             return m2 
        },
        // 组件销毁方法1，组件销毁方法二是退出当前页面
        destroyed(){
            this.$destroy()
        },
        // 计算属性不能传参,能用方法解决的，尽量不用计算属性
        // 若此方法放到计算属性中 会报错。
        bottom_line(M){
            let m3 = this.data3.length
            let m4 
            // 整正数
            let m5 = /^[1-9]+[0-9]*]*$/
            if(m5.test(m3/5)){
                m4 = parseInt(m3/5) -1
            }else{
                m4 = parseInt(m3/5)
            }
          if(M>m4*5){
              return "border-bottom:none"
          }
        },
        add(){
            this.data4 = parseInt(this.data4) +1
        },
        det(){
            this.data4 = parseInt(this.data4) -1
        },
        rest(e){
            // this.$data是当前的data数据
            const that =this
            that.data = Object.assign(that.$data, that.defaultData)
            e.preventDefault();
        },
        Delete(value){
            alert("确定要删除"+this.data5[value].name+"当前数据吗");
          if(value>-1){
            this.data5.splice(this.data5.indexOf(value),1)
          }else{
            this.data5=[]
          }
        }
    },
    // 生命周期钩子函数
    beforeCreate(){
        console.log("-------模板创建之前-----11")
        console.log("%c%s", "color:red" , "name     : " + this.$el); 
        console.log("%c%s", "color:red","data   : " + this.$data); 
        console.log("%c%s", "color:red","message: " + this.message) 
    },
    created(){
        console.log("-------模板创建成功-----22")
        console.log("%c%s", "color:red" , "name    : " + this.$el); 
        console.log("%c%s", "color:red","data   : " + this.$data); 
        console.log("%c%s", "color:red","message: " + this.message) 
        this.defaultData = JSON.parse(JSON.stringify(this.$data))
        // this.$data vue实例初始化时的data数据
    },
    beforeMount(){
        console.log("-------模板挂载之前-----33")
        console.log("%c%s", "color:red" , "name     : " + this.$el); 
        console.log("%c%s", "color:red","data   : " + this.$data);  
        console.log("%c%s", "color:red","message: " + this.message) 
    },
    mounted(){
        console.log("-------模板挂载成功-----44")
        console.log("%c%s", "color:red" , "name     : " + this.$el); 
        console.log("%c%s", "color:red","data   : " + this.$data); 
        console.log("%c%s", "color:red","message: " + this.message) 
    },
    beforeUpdate(){
        console.log("-------模板更新之前-----55")
        console.log("%c%s", "color:red" , "name     : " + this.$el); 
        console.log("%c%s", "color:red","data   : " + this.$data); 
        console.log("%c%s", "color:red","message: " + this.message) 
    },
    updated(){
        console.log("-------模板更新成功-----66")
        console.log("%c%s", "color:red" , "name    : " + this.$el); 
        console.log("%c%s", "color:red","data   : " + this.$data); 
        console.log("%c%s", "color:red","message: " + this.message) 
    },
    beforeDestroy(){
        console.log("-------模板销毁之前-----77")
        console.log("%c%s", "color:red" , "name    : " + this.$el); 
        console.log("%c%s", "color:red","data   : " + this.$data); 
        console.log("%c%s", "color:red","message: " + this.message) 
    },
    destroyed:function(){
        console.log("-------模板销毁成功-----88")
        console.log("%c%s", "color:red" , "name     : " + this.$el); 
        console.log("%c%s", "color:red","data   : " + this.$data); 
        console.log("%c%s", "color:red","message: " + this.message) 
    }
}
</script>
<style scoped>
  .hook{
      margin-bottom: 100px
  }
  .a1{
      margin-top: 10px;
      border: 1px dashed darkgreen;
      height: 30px;
      line-height: 30px;
      width: 30%;
      padding: 10px;
  }
  .error{
      color: red;
      display: inline-block;
      padding: 10px 0 10px 50px;
      font-size: 13px
  }
  .a4{
      border: 1px solid white;
      height: 20px;
      line-height: 20px;
      width: 30%;
      padding:5px;
      box-sizing: content-box;
      -moz-box-sizing: content-box;
      -webkit-box-sizing: content-box;
  }

  .a2{
      color:slategray
  }
  .a3{
      color: brown
  }


  .box ul li{
      width: 20%;
      height: 20px;
      float: left;
      text-align: center;
      border-right: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      overflow: hidden;
      box-sizing: border-box
  }

  .tt span{
      display: block;
      width: 30%;
      float: left;
      text-align: center;
}
.tt span:nth-child(3){
    border-left:1px solid #ddd;
    border-right:1px solid #ddd;
}

.box2{
    margin-top:20px ;
    margin-left: 15%;
}

.box3{display: flex;text-align: center;background-color: teal;color: #fff; }
.box3 .A1,.box4 .A1{width: 60px}
.box3 .A2,.box4 .A2{flex: 1}
.box4{display: flex;text-align: center;font-size: 14px;line-height: 40px}
</style>
