<template>
    <section class="Recommend" v-if="dataList">
        <!--info是用来更换图片与字体颜色，并确定是否显示-->
        <div :class="getClass(info)"  v-if="info">{{Rec_data.title}}</div>
        <div class="box">
            <ul :class="Love">
                <li v-for="(items,indexs) in dataList" :key="indexs">
                    <router-link tag="div" to="/" class="Rec_Big_pic">
                        <img :src="items.imgUrl" alt="">
                        <div class="Rec_commodity" v-if="items.subtitle">
                            <p>{{items.subtitle}}</p>
                            <p>{{items.price}}</p>
                        </div>
                    </router-link>

                    <router-link v-if = "items.smallMap" tag="div" to="/" v-for="(item,index) in items.smallMap" :key="index" class="Rec_min_pic">
                        <img :src="item" alt="">
                    </router-link>


                    <router-link v-if="(items.logo)&&(items.storeName)" tag="div" to="/" class="Rec_shop">
                        <div class="logo"><img :src="items.logo" alt=""></div>
                        <div class="name">{{items.storeName}}</div>
                    </router-link>

                </li>
             </ul>
        </div>
    </section>
</template>

<script>
    export default {
        props:['Rec_data','info'],
        computed:{
            dataList () {
                if(this.Rec_data){
                   let Data = [];
                   Data = this.Rec_data.list;
                   return Data
                }
            },
            Love(){
                if(this.Rec_data.commodity){
                    return 'Love'
                }else{
                    return ''
                }
            }

        },
        methods:{
            getClass(init){
                return init
            }
        }
    }
</script>

<style scoped lang="scss">
    .Recommend{
        .pro_banner1{
            width: 100%;
            height: 2em;
            text-align: center;
            font-size: 100%;
            line-height: 2em;
            font-weight: bold;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            overflow: hidden;
            color:#e83d26;
            background-image: url("img/s-bj04.png");
        }
        .pro_banner2{
            @extend .pro_banner1;
            color:#ec7809;
            background-image: url("img/2x.png");
        }
        .box{
            /*猜您喜欢*/
            .Love{
               li{padding-top:0}
               .Rec_commodity{
                   display: block;
                   p:nth-child(1){
                       font-size: 14px;
                       color: #272727;
                       height: 32px;
                       overflow: hidden;
                       text-overflow: ellipsis;
                       display: -webkit-box;
                       -webkit-line-clamp: 2;
                       -webkit-box-orient: vertical;
                       line-height: 16px;
                       padding: 9px 10px 0 10px
                   }
                   p:nth-child(2){
                       color: #c00;
                       font-weight: bold;
                       overflow: hidden;
                       text-overflow: ellipsis;
                       white-space: nowrap;
                       height: 23px;
                       padding: 9px 10px 10px 10px;
                   }
               }
               .Rec_Big_pic{
                   width: 100%;
                   margin-left: 0;
               }
               .Rec_shop,.Rec_min_pic{display: none;}
            }
            /*名店推荐*/
            .Rec_commodity{display: none;}
            .Rec_shop{
                width: 100%;
                overflow: hidden;
                margin: 0em 0.32em 1.2em 0.625em;
                padding-top: 0.625em;
                .logo{
                    width: 2em;
                    height: 2em;
                    display: inline-block;
                    float: left;
                }
                .name{
                    float: left;
                    line-height: 2em;
                    margin-left: 0.32em;
                    font-size: 0.9em;
                    color: #2d2d2d;
                    width: 68%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    vertical-align: middle;
                }
            }
            ul li{
                padding-top: 4px;
                float: left;
                overflow: hidden;
                box-sizing: border-box;
                width: 50%;
                border-bottom: 1px solid #e8e8e8;
                border-right: 1px solid #e8e8e8;
                    /*大图*/
                    .Rec_Big_pic{
                        float: left;
                        margin-left: 0.1875em;
                        width: 63.5%;
                    }
                    /*小图*/
                    .Rec_min_pic{
                        float: right;
                        width: 31.5%;
                        margin-right: 3px;
                    }
                    img{width: 100%;}
            }
            /*隐藏右侧线的颜色保度宽度左右一致*/
            ul li:nth-child(2n){border-right: 1px solid #fff;}
            /*清除最后两个底部边框线*/
            ul li:last-child,ul li:nth-last-child(2){border-bottom: none;}
        }

    }

</style>
