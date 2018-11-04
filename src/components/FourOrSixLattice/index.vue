<template>
    <section class="Lattice" v-if="isShow">
        <!--栏目标题-->
        <div class="pro_banner ">{{datas.title}}</div>
        <!--盒子内容-->
        <div class="box">
            <!--左侧-->
           <ul>
               <router-link  tag="li" to="/" v-for="(item,index) in Data1" :key="index">
                   <div class="title">
                       <p>{{item.title}}</p>
                       <p>{{item.text}}</p>
                   </div>
                   <div class="imgs">
                       <img :src="item.imgUrl" alt=""/>
                   </div>
               </router-link>
            </ul>
            <!--右侧-->
             <ul :class="six">
                <router-link tag="li" to="/" v-for="(item,index) in Data2" :key="index">
                    <div class="title">
                        <p>{{item.title}}</p>
                        <p>{{item.text}}</p>
                    </div>
                    <div class="imgs">
                        <img :src="item.imgUrl" alt=""/>
                    </div>
                </router-link>
             </ul>
        </div>
    </section>
</template>

<script>
    export default {
        props:['datas'],
        computed:{
            //获取左侧数组
            Data1(){
                const Data = (this.datas).Mun;
                if(Data.length) {
                  const Datas = Data.slice(0,2);
                    return Datas
                }
            },
            // 获取右侧数组
            Data2(){
                const Data = (this.datas).Mun;
                if(Data.length) {
                    const Datas = Data.slice(2,Data.length+1);
                    return Datas
                }
            },

            // 当两个数组长度值为真时显示此组件
            isShow(){
                 if(this.Data1.length&&this.Data2.length){
                     return true
               }

            },

            //根据右侧数组长度判断右侧显示的方式
            six(){
                if(this.Data2.length>2){
                    return 'six'
                }else{
                    return 'sixs'
                }



            }
        }
    }
</script>

<style scoped lang="scss">
    .Lattice{
        .pro_banner{
            width: 100%;
            height: 31px;
            font-size: 16px;
            text-align: center;
            color: #3ca7df;
            background-image: url("img/floor-blue.png");
            background-size: 100% 100%;
            background-repeat:no-repeat ;
            line-height: 31px;
            font-weight: bold
        }
        .box {
            display: flex;
            ul{
                flex: 1;
                overflow: hidden;
                box-sizing: border-box;
                li{
                    overflow: hidden;
                    box-sizing: border-box;
                    border-bottom: 1px solid #e8e8e8;
                    height: 10em;
                    padding-bottom: 4px;}
                li:last-child{border-bottom: none}
             }
             ul:nth-child(1){
                border-right: 1px solid #e8e8e8;
            }
            .six{
                li{
                    position: relative;
                    height: 5em;
                    padding-bottom: 2px;
                }
                .title{
                    width: 45%;
                }
                .imgs{
                width: 4.37em;
                right: 6.4%;
                position: absolute;
                top: 4px;
                margin-right: 0;
              }

            }

        }
        .title{margin-left:7.6%}
        .title p:nth-child(1){
           font-size: 14px;
           padding-top: 0.68em;
           line-height: 1em;
           height: 1em;
           overflow: hidden;
        }
        .title p:nth-child(2){
           font-size: 12px;
           margin-top: 0.3em;
           margin-bottom: 0.2em;
           color: #898989;
           line-height: 1em;
           height: 1em;
           verflow: hidden;
        }
        .imgs{
          width: 7em;
          margin-right: 6.4%;
          float: right;
          img{
            width: 100%;
            height: 100%;
          }

        }

    }

</style>