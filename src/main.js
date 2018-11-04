import Vue from 'vue';
// import './plugins/axios'
import Lodash from 'lodash';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import App from './App.vue';
import router from './router';
import 'swiper/dist/css/swiper.css';

Vue.prototype._ = Lodash;
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);

// 1.安装axios的方法是错误的 办法 重新新建项目 采用npm install axios --save-dev
// 2.是需要配置vue.config.js

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
