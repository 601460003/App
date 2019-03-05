<template>
<div>
  <!--v-model="isActive"-->
  <van-tabbar v-model="active" style="z-index: 1999"   >
    <van-tabbar-item
      v-for="(tab,index) in tabbar"
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
      // props:{
      //   active:{
      //     type:Number,
      //     value:0
      //   }
      // },
      // 这是第一种方法利用props传参显示导航tab
      // computed: {
      //   isActive: {
      //     get: function () {
      //       return this.active
      //     },
      //     set() {
      //     }
      //   }
      // },
      data(){
          return{
            active:0,
            tabbar: [
              {
                name: '精选',
                path: '/home',
                pathName: 'home',
                icon: 'wap-home',
                dot: false,
                info: '',
              },
              {
                name: '专题',
                path: '/subject',
                pathName: 'subject',
                icon: 'vip-card-o',
                dot: false,
                info: '',
              },
              {
                name: '分类',
                path: '/shoplist',
                pathName: 'shoplist',
                icon: 'orders-o',
                dot: false,
                info: '',
              },
              {
                name: '购物车',
                path: '/shopcar',
                pathName: 'shopcar',
                icon: 'shopping-cart-o',
                dot: false,
                info: '',
              },
              {
                name: '个人',
                path: '/me',
                pathName: 'me',
                icon: 'manager-o',
                dot: false,
                info: '',
              }

            ]
          }
      },
    }
</script>

<style scoped>

</style>
