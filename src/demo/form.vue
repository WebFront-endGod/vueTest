<template>
    <section class="form">
       <ul>
			<form @submit.prevent="submit" action="" method="post" id="app" novalidate="true">
                <!-- 因为type=email的时候浏览有自带的校验，要使用自定义方法使用novalidate="true"禁用 -->

                <li>
                    <span>姓名：</span>
                    <input type="text" name="name" v-model="inputtext.name" placeholder="请输入姓名"><br>
                </li>


				<li>
                    <span>年龄：</span>
                    <input type="number" name="age" v-model="inputtext.age" min="0" placeholder="请输年龄"><br>
                </li>


				<li>
                    <span>邮箱：</span>
                    <input type="email" name="email" v-model="inputtext.email" placeholder="请输入邮箱"><br>
               </li>


                <li>
                    <span>电话：</span> 
                    <input type="tel" v-model="inputtext.mobile" placeholder="请输入电话"><br>
                </li>


            <!--错误提示-->
            <li v-if="error">
               <span>{{error}}</span> 
            </li>

            <!-- 按钮 -->
            <li>
              <input type="submit"  :disabled="getTo"  value="提交">
              <button @click.stop = "reset">重置</button>
            </li>
        </form>


            <!-- 下面元素不在表单内 -->


               <!-- 多行文本 -->
                
                <li>
                    <span>简介：</span>
                    <textarea v-model="message" placeholder="请输入你的自我介绍"></textarea>
                </li>


                <!-- 多选   -->
                <li>
                 <span>爱好：</span>
                 <input type="checkbox" id="cbox1" value="游泳" v-model="checkedN"><label for="cbox1">游泳</label>
                 <input type="checkbox" id="cbox2" value="唱歌" v-model="checkedN"><label for="cbox2">唱歌</label>
                 <input type="checkbox" id="cbox3" value="足球" v-model="checkedN"><label for="cbox3">足球</label>
                 <input type="checkbox" id="cbox4" :value="a" v-model="checkedN"><label for="cbox4">篮球</label>
                </li>
                <li v-if="checkedN.length"><span>您的爱好有：</span>{{checkedN}}</li>


                <!-- 单选 -->
                <li>
                  <span>性别：</span>
                  <input type="radio" id="one" value="男" v-model="sex"><label for="one">男</label>
                  <input type="radio" id="two" value="女" v-model="sex"><label for="two">女</label><br>
                </li>
                <li v-if="sex"><span>您的性别：</span>{{sex}}</li>

                 <!-- 下拉列表 -->
                <li>
                <span>城市：</span>
                                <select v-model="selected" multiple >
                                    <!-- <option v-for="option in options" v-bind:value="option.value"> -->
                                    <option disabled value="">请选择</option>
                                    <option value="123">北京</option>
                                     <!-- 值的绑定 -->
                                    <option :value="{number:123}">上海</option>
                                    <option>天津</option>
                                </select><br>
                 <span style="margin-top:10px;display:inline-block">期望工作城市: {{ selected }}</span>

            </li>

             <li>
                 <span>协议：</span>  <input type="checkbox" true-value="yes" false-value="no" v-model="agrre"><br>
                 <span style="margin-top:10px;display:inline-block">是否同意协议: {{ agrre }}</span>
             </li>


            <!-- 修饰符 -->
            <li>
               <span>.lazy是同步变成与change同步</span>  
               <input v-model.lazy="msg" type="text" @change="get1"> <span>{{msg}} </span>
            </li>

            <li>
              <span>.number,若输入的值不是数字则会清空</span>
              <input v-model.number="age1" type="number"> <span>{{age1}}</span>
            </li>

            <li>
              <span>.trim自动过滤到用户输入首尾为空的情况</span>
              <input v-model.trim="msg1" type="text"> <span>{{msg1}}</span>
            </li>


           
				
			
		</ul>
    </section>
</template>
<script>
export default {
    data(){
        return{
            inputtext:{
                name:"",
                age:"",
                mobile:"",
                email:"",
                },
            message:"",
            checkedN:[],
            sex:"",
            selected:[],
            agrre:"",
            a:"篮球s",
            msg:"",
            age1:"",
            msg1:"",
            error:"",
            defaultData:""
        }
    },
    methods:{
        submit(e){
            console.log("676767")
            if (!this.inputtext.email) {
                this.error ='Email 是必真项'
               } else if (!this.validEmail(this.inputtext.email)) {
                 this.error = 'Email 输入格式不正确.'
            }
            e.preventDefault();
        },
        get1(){
            console.log(this.msg)
        },
       //  自定义的方法  
      validEmail: function (email) {
      var re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
      return re.test(email);
      },
      reset(e){
          this.inputtext = Object.assign(this.inputtext, this.defaultData)
          e.preventDefault();
      }
    },
    computed:{
        getTo(){
            if(this.inputtext.name&&this.inputtext.age&&this.inputtext.mobile){
              return this.disabled = false
            } else {
              return this.disabled = true
            }
        }
    },
    created(){
        this.defaultData = JSON.parse(JSON.stringify(this.$data.inputtext))
    }
}
</script>
<style scoped>
   form{
       border: 1px dashed darkgoldenrod
   }
  .form{
      margin-bottom: 50px
  }
  .form ul li{
      margin-left: 15px;
      margin-top: 15px
  }
</style>
