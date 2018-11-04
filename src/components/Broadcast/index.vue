<template>
  <section class="Broadcast">
    <swiper :options="swiperOption" ref="mySwiper">
      <!--图片展示区-->
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <router-link to="/" tag="div" class="bannerShow">
          <img :src="slide.imgUrl" alt="">
        </router-link>
      </swiper-slide>
      <!--小圆点-->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </section>
</template>

<script>
    export default {
      props:['banners'],
      data() {
        return {
          //swiper组件属性设置
          swiperOption: {
            pagination: {
              el: '.swiper-pagination'
            },
            // 无限循环
            loop : true,
            //自动播放设置,点触拖动后不停止播放
            autoplay: {
              delay: 5000,
              disableOnInteraction: false,
            }
          },
          swiperSlides: this.banners
        }
      },
      mounted() {
        // 指定跳转到首页
        this.swiper.slideTo(1, 1000, false);
      },
      computed:{
        swiper() {
          return this.$refs.mySwiper.swiper;
        }
      }

    }
</script>
<style lang="scss">
  .Broadcast{
     .bannerShow{
       img{width: 100%;}
     }
    .swiper-pagination-fraction,
    .swiper-pagination-custom,
    .swiper-container-horizontal > .swiper-pagination-bullets{
      width: auto;
      right:15px;
      left: auto;
    }

    .swiper-pagination-bullet-active {
      background: #fff;
    }
  }
</style>
