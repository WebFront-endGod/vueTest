<template>
    <section class="Nine box" v-if="Datas.length">
        <ul>
            <router-link tag="li" :to="go()" v-for="(items,index) in Datas" :key="index">
                <div v-for="(item,indexs) in items" :key="indexs" class="items">
                  <h3 :style="getColors(index,indexs)">{{item.title}}</h3>
                  <p>{{item.text}}</p>
                  <img :src="item.imgUrl" alt=""/>
                </div>
            </router-link>
        </ul>
    </section>
</template>

<script>
    export default {
        props:['NineData','colors','goTo'],
        computed:{

            Datas(){
                const length = this.NineData.length;
                // 若传入的值的长度为0.则反回空数组，组件页面不显示
                if(!length){
                    return []
                }
                let index =0 ;
                let resIndex =0;
                // 设一个空数组的变量，并计算出分割出来数组的长度
                let result = new Array(Math.ceil(length/3))
                while (index < length) {
                    //循环过程中设置result[0]和result[1]的值。该值根据array.slice切割得到。
                    result[resIndex++] = this.NineData.slice(index, (index += 3))
                }

                return result
            }
        },
        methods:{
            //颜色随机
            getColor(){
               const colorNum = Math.floor(Math.random()*10);
               const array = ['green','red','prink','darkblue','salmon','teal','hotpink','lawngreen','blue','aqua']
               return 'color:'+array[colorNum]
            },
            //页面传值给组件,值也可以是class名，方法一样的
            getColors(m,n){
                    const color = (this.colors)[m];
                    return 'color:'+color[n]
            },
            //也可以是后台返参。to的值也可以父组件传值过来
            go(){
                return '/'
            }

        }

    }
</script>

<style scoped lang="scss">
    .Nine{
        ul li {
            display: flex;
            text-align: center;
            border-bottom: 1px solid #e8e8e8;
            .items{
                flex:1;
                box-sizing: border-box;
                overflow: hidden;
                h3{
                    line-height: 1.067em;
                    margin-top: 0.93em;
                    padding: 0 0.3em;
                    font-weight: bold;
                    height: 1.067em;
                    overflow: hidden;
                    word-break: break-word;

                }
                p{
                    font-size: 0.75em;
                    color: #898989;
                    line-height: 1.5em;
                    padding: 0 0.375em;
                    height: 1.5em;
                    overflow: hidden;
                    word-break: break-word;

                }
                img{
                    width: 90.32%;
                    padding-bottom: 2px
                }
            }

            .items:nth-child(2){
                border-left: 1px solid #e8e8e8;
                border-right: 1px solid #e8e8e8;
            }
        }
        ul li:last-child{
            border-bottom: none;
        }
    }

</style>
