<template>
    <section class="banner" v-if="banner">
      <router-link tag="div" to="/" class="box">
        <img :src="banner.src" alt="">
      </router-link>
    </section>
</template>

<script>
    export default {
        name: "index",
        props:['banner']
    }
</script>

<style scoped lang="scss">
  .banner{
     .box{
       img{width: 100%;}
     }
  }
</style>
