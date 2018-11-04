<template>
    <section class="navBottom box">
        <ul>
            <router-link tag="li" to="/">首页</router-link>
            <router-link tag="li" to="/assortment">分类</router-link>
            <router-link tag="li" to="/shoppingCart">购物车</router-link>
            <router-link tag="li" to="/myMall">我的商城</router-link>
        </ul>
    </section>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="scss">
  @import "css/icon.css";
    .navBottom{
        font-size: 0.75em;
        height: 4.17em;
        line-height: 4.17em;
        width: 100%;
        border-top: 1px solid #dedede;
        border-bottom: 1px solid #dedede;
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 1000;
        ul{
            display: flex;
            li{
                flex: 1;
                text-align: center;
                position: relative;
                width: 100%;
            }
        }
    }


</style>
