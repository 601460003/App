<template>
<div>
  <van-tabbar v-model="active" style="z-index: 1999">
    <van-tabbar-item
      v-for="(tab, index) in tabbar"
      :icon="tab.icon"
      :to="tab.path"
      :dot="tab.dot"
      :info="tab.info"
      :key="index">
      {{tab.name}}
    </van-tabbar-item>
  </van-tabbar>
</div>
</template>

<script>
    export default {
        name: "v-tabber",
      data(){
          return{
            active: 0,
            tabbar: [
              {
                name: '精选',
                path: '/aheader',
                pathName: 'aheader',
                icon: 'wap-home',
                dot: false,
                info: ''
              },
              {
                name: '专题',
                path: '/towpage',
                pathName: 'towpage',
                icon: 'vip-card-o',
                dot: false,
                info: ''
              },
              {
                name: '分类',
                path: '/moreshop',
                pathName: 'moreshop',
                icon: 'orders-o',
                dot: false,
                info: ''
              },
              {
                name: '购物车',
                path: '/shopcar',
                pathName: 'shopcar',
                icon: 'shopping-cart-o',
                dot: false,
                info: ''
              },
              {
                name: '个人',
                path: '/me',
                pathName: 'me',
                icon: 'manager-o',
                dot: false,
                info: ''
              }

            ]
          }
      },
    }
</script>

<style scoped>

</style>
