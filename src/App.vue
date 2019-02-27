<template>
  <div id="app">
    <router-view/>
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
  data(){
    return {
      active: 0,
      tabbar: [
        {
          name: '精选',
          path: '/aheader',
          pathName: 'aheader',
          icon: 'home-o',
          dot: false,
          info: ''
        },
        {
          name: '分类',
          path: '/towpage',
          pathName: 'towpage',
          icon: 'home-o',
          dot: false,
          info: ''
        },
        {
          name: '购物车',
          path: '/shopcar',
          pathName: 'shopcar',
          icon: 'home-o',
          dot: false,
          info: ''
        },
        {
          name: '我的',
          path: '/user',
          pathName: 'me',
          icon: 'home-o',
          dot: false,
          info: ''
        }
      ]
    }
  },
}
</script>

<style>
</style>
