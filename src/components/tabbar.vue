<template>
  <van-tabbar v-model="active" >
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
</template>

<script>
    export default {
      data(){
        return {
          active: 0,
          tabbar: [
            {
              name: '精选',
              path: '/HelloWorld',
              pathName: 'HelloWorld',
              icon: 'compass-full',
              dot: false,
              info: ''
            },
            {
              name: '分类',
              path: '/towpage',
              pathName: 'towpage',
              icon: 'class-full',
              dot: false,
              info: ''
            },
            {
              name: '购物车',
              path: '/shopcar',
              pathName: 'shopcar',
              icon: 'cart-full',
              dot: false,
              info: ''
            },
            {
              name: '我的',
              path: '/user',
              pathName: 'me',
              icon: 'wode',
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
