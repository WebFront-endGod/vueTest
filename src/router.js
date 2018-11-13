import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Assortment from './views/Assortment.vue';
import ShoppingCart from './views/ShoppingCart.vue';
import MyMall from './views/MyMall.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/assortment',
      name: 'assortment',
      component: Assortment,
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: ShoppingCart,
    },
    {
      path: '/myMall',
      name: 'myMall',
      component: MyMall,
      alias: '/demoss',
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: () => import('./demo/base.vue'),
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: () => import('./demo/form.vue'),
    },
    {
      path: '/demo3',
      name: 'demo3',
      component: () => import('./demo/hook.vue'),
    },
    {
      path: '/demo4',
      name: 'demo4',
      component: () => import('./demo/watch.vue'),
    },
    {
      path: '/demo5',
      name: 'demo5',
      component: () => import('./demo/huancun.vue'),
      children: [
        {
          // path: '/demo6',
          path: '/demo6/:post',
          name: 'demo6',
          component: () => import('./demo/cs1.vue'),
        },
        {
          // path: '/demo7',
          path: '/demo7/:post',
          name: 'demo7',
          component: () => import('./demo/cs2.vue'),
        },
      ],
    },
    {
      path: '/demo8',
      name: 'demo8',
      component: () => import('./demo/animation.vue'),
    },
    {
      path: '/demo9',
      name: 'demo9',
      component: () => import('./demo/vuex.vue'),
    },
    {
      path: '/demo10',
      name: 'demo10',
      component: () => import('./demo/ziDingYi.vue'),
    },
    {
      path: '/demo11',
      name: 'demo11',
      component: () => import('./demo/luyou.vue'),
    },
  ],
});
