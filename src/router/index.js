import Vue from 'vue'
import Router from 'vue-router'
// import home from '../views/home/home'
// import subject from '../views/subject/subject'
// import  shopcar from '../views/shopCar/shopcar'
// import  me from '../views/me/me'
// import  shoplist from '../views/shopList/shopList'
// import shopmsg from '../pages/homeMssage/shopMsg'
import banners from '../pages/bannerMssage/banners'
import Login from '../pages/Login/Login'
import myOrder from '../pages/myCenter/myOrder'
import Mobile from '../pages/Login/Mobile'
// import orderPay from '../pages/myCenter/orderPay'
import search from '../pages/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import("../views/home/home"),
      meta:{
        showFooter:true
      }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import("../views/home/home"),
      meta:{
        showFooter:true
      }
    },
   {
     path: '/subject',
       name: 'subject',
     component: () => import("../views/subject/subject"),
     meta:{
       showFooter:true
     }
   },
    {
      path: '/shopcar',
      name: 'shopcar',
      component:() => import("../views/shopCar/shopcar"),
      meta:{
        showFooter:true
      }
    },
    {
      path: '/me',
      name: 'me',
      component:() => import("../views/me/me"),
      meta:{
        showFooter:true
      }
    },
    {
      path: '/shoplist',
      name: 'shoplist',
      component: () => import("../views/shopList/shopList"),
      meta:{
        showFooter:true
      }
    },
    {
      path: '/shopmsg/:id',
      name: 'shopmsg',
      component:  () => import("../pages/homeMssage/shopMsg"),
    },
    {
      path: '/banners/:id',
      component: banners
    },
    {
      path: '/Login',
      component: Login,
    },
    {
      path: '/myOrder',
      name: 'myOrder',
      component: myOrder,

    },
    {
      path: '/Mobile',
      name: 'Mobile',
      component: Mobile,
    },
    {
      path: '/search',
      name: 'search',
      component: search,
    }
  ],
  mode:'history'
})
