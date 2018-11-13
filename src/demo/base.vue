<template>
  <section class="base">


   <h4>第一个指令：双向绑定,v-model</h4>
   <div class="pl">
   <span>姓名：</span>
   <input type="text" v-model="name">
   <p>提示你输入的姓名是：{{name}}</p>
  </div>




 <h4>第二个指令：数组循环1,for in </h4>
 <div class="pl"> 
   <ul>
   <li v-for="(item,index) in name1" :key="index">{{item}}</li>
   </ul>
 </div>





 <h4>第三个指令：对象数组循环2,for in </h4>
 <div class="pl">
   <ul>
     <li v-for="(v,k) in name2" :key="k" class="m">
       <p><span>序值：</span>{{k+1}}</p>
       <p><span>姓名：</span>{{v.name}}</p>
       <p><span>战力：</span>{{v.id}}</p>
       <p><span>技能：</span>{{v.skill}}</p>
     </li>
   </ul>
 </div>




<h4>第四个指令：事件指令v-on 常用@代替</h4>
<div class="pl ws">
 <ul>
 <li v-on:click="click1">单击事件</li>
 <li @mouseover="click2">从我上面经过触发事件</li>
 <li @mouseout="click3">从我上面离开触发事件</li>
 <li @dblclick="click4">双击事件</li>
</ul>
</div>







<h4>第五个指令：v-show</h4>
<div class="pl"> 
  <div class="tt" style="background:green" v-show="flg1" @click="change">我是第一区域块</div>
  <div class="tt" style="background:blue" v-show="!flg1" @click="change">我是第二区域块</div>
</div>



<h4>第六个指令：v-if else</h4>
<div class="pl">
<div v-if="flg1">
   中华第一区，第二区被remove
</div>
 <div v-else>
   中华第二区,第一区被remove
</div>
</div>


<h4>第七个指令 :src</h4>
<div class="pl">
   <div class="img"> 
   <img :src="img1" alt="">
   </div>
</div>


<h4>第八个指令 :class 与 :style</h4>
<div class="pl">

 <div :class="get1" :style="get2()">看看我的字体颜色</div> 
 <div :class="get3()" :style="get4">看看再看看，多看看</div>

 
 <div :class="['sh', 'xh']">多个class</div>
 <div :class="{'xh':flg1,xhs:!flg1}">字体变大，或变小</div>
</div>



<h4>事件---获取本身的文字</h4>
<div class="pl">
<button @click="getTxt($event)">按钮点击获取按钮上的文字</button>
</div>




<h4>事件---冒泡</h4>
<div class="pl">
  <div @click="pt1">
     <div @click="pt2">冒泡</div>
  </div>

  <div @click="pt1" style="margin-top:10px">
       <div @click="pt3">冒泡处理原生方法</div>
  </div>


  <div @click="pt1" style="margin-top:10px">
       <div @click.prevent="pt3">用stop或prevent冒泡处理原生方法（采用修饰符）</div>
  </div>

  <div style="margin-top:10px">
    <a href="http://baidu.com" @click.prevent="pt4">点链接阻止默认(行为)的链接跳转,网址没有变更,原生方法是 e.preventDefault()</a>
  </div>
 
</div>






<h4>点击事件---对数组值进行更改</h4>
<div @click="shuiJI" class="pl">
 <div>数组原值:{{num}}</div>
 <div v-if="num">
    <div  v-for="(t,index) in num" :key="index">{{t}}</div>
 </div> 
</div>





<h4>------键盘事件-----</h4>
<div class="pl">
<p><input type="text" @keydown="sl1" placeholder="随便输入"></p>
<p><input type="text" @keydown.enter="sl2" placeholder="Enter触发"></p>
<p><input type="text" @keydown.delete="sl3" placeholder="删除触发"></p>
<p><input type="text" @keydown.65.prevent="sl4" placeholder="a按键触发"></p>
<p><input type="text" @keydown.a="sl4" placeholder="a按键触发"></p>
</div>




<h4>其它指令----模板指令</h4>
<div class="pl">

<div style="margin-top:10px" v-cloak>{{flg1}} 防止加载的情况下出现双括号闪烁,也叫单向法</div>

<div style="margin-top:10px" v-text="html">纯文本输出，也是单向法</div>

<div style="margin-top:10px" v-html="html">可以带标签输出，html标签可能导致xss攻击，不要使用用户提供的内容插值</div>

<div style="margin-top:10px" @click="sl5"  v-once>{{num2}},显示的值不可更改</div>

<div style="margin-top:10px" v-pre>{{num2}},与v-text类似</div>
</div>



</section>
</template>
<script>
export default{
  data(){
    return{
      name:"123412",
      name1:["葫芦娃","东方不败", "风清扬", "奥特曼","孙悟空"],
      name2:[
        {name:"葫芦娃",id:"89890",skill:"喷水"},
        {name:"东方不败",id:"63630",skill:"葵花宝典"},
        {name:"风清扬",id:"57579",skill:"独孤九剑"},
        {name:"奥特曼",id:"13135",skill:"死亡光线"},
        {name:"孙悟空",id:"26269",skill:"三棒夺魂"},
      ],
      flg1:true,
      num:[],
      img1:"https://www.baidu.com/img/baidu_jgylogo3.gif",
      html:"<h3>我可以显示</h3>",
      num2: "123"
    }
  },
  methods:{
    click1(){
      alert("单击事件触发了！")
    },
    click2(){
      alert("你碰到我了！！")
    },
    click3(){
      alert("你是要走了吗！！")
    },
    click4(){
      alert("双击,double kill")
    },
    change(){
      this.flg1 = !this.flg1
    },
    shuiJI(){
      let m1 = Math.floor(Math.random() * (100 - 1+1)) + 1;
      this.num.push(m1)
    },
    get2(){
      return "font-size: 20px"
    },
    get3(){
      return 'xh'
    },
    getTxt(e){
         const m1= e.target.innerText;
         alert(m1)
    },
    pt1(){
      alert('我冒泡了11111！')
    },
    pt2(){
      alert('我冒泡了222222！')
    },
    pt3(e){
      alert("我没有冒泡33333！")
      e.stopPropagation()//防止冒泡到父级以上的元素
    },
    pt4(){
      alert("没有跳转页面")
    },
    sl1(){
      alert("键盘下压事件")
    },
    sl2(){
      alert("Enter解发事件")
    },
    sl3(){
      alert("删除被触发")
    },
    sl4(){
      alert("自定义键盘事件")
    },
    sl5(){
      console.log("不可更改");
      this.num2 = "7890"
    }
    
  },
  computed:{
    get1(){
      return 'sh'
    },
    get4(){
      return "color:navy"
    }
  }
}
</script>
<style scoped>
.base{
  margin-bottom: 50px
}
  h4{
    margin-left: 15%;
    padding: 10px 0;
    overflow: hidden
  }

  .pl{
    padding-left: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid red

  }
 p{
   margin: 5px 0
 }
 .m{
   margin-bottom: 10px;
   border:1px dashed green
 }

 .ws ul li{
     height: 30px;
     line-height: 30px;
     background-color: bisque;
     margin-bottom: 10px;
     text-align: center
     
 }
 .tt{
   height: 30px;
   line-height: 30px;
   color:wheat
 }

 .img{
   width: 120px;

 }

 .img img{
   width: 100%;
   
 }

 .sh{
   color:orangered
 }
 .xh{
   font-size: 10px;
   margin-top: 15px
 }
</style>