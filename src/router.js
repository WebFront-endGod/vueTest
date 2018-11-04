import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Assortment from './views/Assortment.vue'
import ShoppingCart from './views/ShoppingCart.vue'
import MyMall from './views/MyMall.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/assortment',
      name: 'assortment',
      component: Assortment
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: ShoppingCart
    },
    {
      path: '/myMall',
      name: 'myMall',
      component: MyMall
    }


    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
