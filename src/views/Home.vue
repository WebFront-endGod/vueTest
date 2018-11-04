<template>
  <section class="home">
      <!--搜索与下载--组件1-->
      <DownloadSearch></DownloadSearch>
      <!--轮播图--组件2-->
      <Broadcast :banners="indexDatas.BannerList"></Broadcast>
      <!--广告-->
       <Banner :banner="indexDatas.Banners[0]"></Banner>
      <!--业务快速入口-->
      <FastEntrance :fastList = "indexDatas.FastEntrance" :Type="5"></FastEntrance>
      <!--快讯与秒杀-->
      <FastNew></FastNew>
      <!--九宫格-->
      <NineLattice :NineData="indexDatas.NineLattice" :colors="colors"></NineLattice>
      <!--全球热卖-->
      <FourOrSixLattice :datas="indexDatas.Global_Hot_sale"></FourOrSixLattice>
      <!--广告2-->
      <!--享受美食-->
      <FourOrSixLattice :datas="indexDatas.Enjoy_Gourmet"></FourOrSixLattice>
      <!--广告3-->
      <!--潮流智能-->
      <!--广告4-->
      <!--爱家生活-->
      <!--广告5-->
      <!--靓装服饰-->
      <!--广告6-->
      <!--珠宝风尚-->
      <!--广告7-->
      <!--出游惠玩-->
      <!--广告8-->
      <!--文化娱乐-->
      <!--广告9-->
      <!--名车好房-->
      <!--广告10-->
      <!--企业服务-->
      <!--名店推荐--组件7-->
      <Recommend :Rec_data = "indexDatas.Famous_Store" :info="info1"></Recommend>
      <!--猜你喜欢--组件8-->
      <Recommend :Rec_data = "indexDatas.GuessLike" :info="info2"></Recommend>
  </section>
</template>

<script>
import DownloadSearch from '../components/DownloadSearch/index'
import NineLattice from '../components/NineLattice/index'
import FourOrSixLattice from '../components/FourOrSixLattice/index'
import Recommend from '../components/Recommend/index'
import Broadcast from '../components/Broadcast/index'
import FastEntrance from  '../components/FastEntrance/index'
import Banner from '../components/Banner/index'
import FastNew from '../components/FastNew/index'

export default {
    data(){
        return{
            indexDatas: require('../assets/json/index'),
            //九宫格每格标题的颜色
            colors:[],
            //指定组件特殊元素
            info1:"pro_banner1",
            info2:"pro_banner2"
        }
    },
  components: {
      DownloadSearch,
      NineLattice,
      FourOrSixLattice,
      Recommend,
      Broadcast,
      FastEntrance,
      Banner,
      FastNew
  },
  methods:{
        start(){
            //指定九宫格标题颜色
            this.colors= [
                ['#dd3a25','#5fba7e','#f5b227'],
                ['#dd3a25','#46bdf5','#f5b227'],
                ['#46bdf5','#dd3a25','#ee791c']
            ]
        }
  },
  created(){
        this.start()
  }
}
</script>
<style lang="scss">
    .home{margin-bottom:4.17em;margin-top: 3em}
</style>
