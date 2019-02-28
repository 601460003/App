import Vue from 'vue'
import Router from 'vue-router'
import aheader from '@/components/aheader'
import towpage from '@/components/towpage'
import  shopcar from '@/components/shopcar'
import  me from '@/components/me'
import  moreshop from '@/components/moreshop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: aheader
    },
    {
      path: '/aheader',
      name: 'aheader',
      component: aheader
    },
   {
     path: '/towpage',
       name: 'towpage',
     component: towpage
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
      path: '/moreshop',
      name: 'moreshop',
      component: moreshop
    }
  ],
  mode:'history'
})
