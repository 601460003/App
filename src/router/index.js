import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home/home'
import subject from '../views/subject/subject'
import  shopcar from '../views/shopCar/shopcar'
import  me from '../views/me/me'
import  shoplist from '../views/shopList/shopList'
import shopmsg from '../pages/homeMssage/shopMsg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
   {
     path: '/subject',
       name: 'subject',
     component: subject
   },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: shopcar
    },
    {
      path: '/me',
      name: 'me',
      component: me
    },
    {
      path: '/shoplist',
      name: 'shoplist',
      component: shoplist
    },
    {
      path: '/shopmsg',
      name: 'shopmsg',
      component: shopmsg
    }
  ],
  mode:'history'
})
