<template>
  <div class="hello">
    <div style="text-align: center">

    </div>
    <div class="top-input">
      <input type="text" placeholder="搜索一下">
    </div>
    <!--//轮播图-->
    <div class="lunbotu">
      <van-swipe :autoplay="3000" indicator-color="white" style="height: 160px">
        <van-swipe-item><img
          src="http://img20.360buyimg.com/imgzone/jfs/t1/28835/36/6791/660414/5c611cb3E58a9e524/9c7dee9555c3ee33.jpg"
          width="100%"/></van-swipe-item>
        <van-swipe-item><img src="https://img3.tuhu.org/activity/image/FsSd5Sgfn2LfCsT_6BGmzY62fiTX_w1080_h747.png"
                             width="100%/"></van-swipe-item>
        <van-swipe-item><img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551204052982&di=aecf408533b263b00759ed567868b711&imgtype=0&src=http%3A%2F%2Fimg.cheshi-img.com%2Fcenter%2F600%2F44%2F29%2F93%2F1faf4ccd9fd682bdc36d3b02d5.jpeg"
          width="100%" height="200px"/></van-swipe-item>
      </van-swipe>
    </div>
    <div class="imgs-title">
      <span>8小时内快速发货</span>
      <span>30天内无忧退货</span>
      <span>48小时内快速退货</span>
    </div>
    <div class="main-shop">
      <!--机油坐标-->
      <div class="shop-left">
        <img src="https://img12.360buyimg.com/n1/jfs/t23473/74/482244842/170026/fc1f221c/5b3198b4N68e9a576.jpg"
             width="100" height="100"/>
        <h4>踏板车专用机油</h4>
        <h5>爱的王子 壳牌</h5>
        <span>￥35</span>
      </div>
      <!--机油右边-->
      <div class="shop-left">
        <img src="http://img4.imgtn.bdimg.com/it/u=984688191,620967733&fm=15&gp=0.jpg" width="100" height="100"/>
        <h4>踏板车专用机油</h4>
        <h5>爱的王子 壳牌</h5>
        <span>￥30</span>
      </div>
    </div>
    <!--人气推介-->
    <div style="text-align: center ;background: white ;border-bottom: 1px solid #999;padding: 10px ;margin-top: 10px">
      人气推介 >
    </div>
    <div style="background: white;line-height: 20px;display: flex">
      <div style="padding: 20px">
        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2230420930,1248625412&fm=26&gp=0.jpg"
             width="150px" height="150px"/>
      </div>
      <div>
        <p style="padding-top: 20px">正新轮胎</p>
        <p style="color: #999">90/90-18真空轮胎摩托车</p>
        <span style="color: red">￥199</span>
      </div>
    </div>
    <div style="background: white;line-height: 20px;display: flex">
      <div style="padding: 20px">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551208404800&di=e7228ee2e354a60aceb076570065c1f4&imgtype=0&src=http%3A%2F%2Fimg4.99114.com%2Fgroup1%2FM00%2F5B%2FE9%2FwKgGTFdw8SeADipnAAE80NG6E0U440.jpg"
          width="150px" height="150px"/>
      </div>
      <div>
        <p style="padding-top: 20px">米奇轮胎</p>
        <p style="color: #999">90/90-20真空轮胎摩托车</p>
        <span style="color: red">￥250</span>
      </div>
    </div>
    <!--专题精选-->
    <div style="background: white">
      <div style="padding: 15px;text-align: center;margin-top: 10px">
        专题精选 >
      </div>
      <div style="line-height: 10px;padding-left: 10px">
        <img src="https://img12.360buyimg.com/n1/jfs/t28771/205/431406045/382489/8f831c01/5bf39e46N6551e007.jpg"
             width="100%" height="200px"/>
        <div>
          <span style="float: right;color: red;padding-right: 10px">159元起</span>
          <p>朝阳轮胎</p>
        </div>
        <p style="color: #999;font-size: 14px">朝阳3:00-10大力神667无气可行驶 6层正空</p>
      </div>
    </div>
    <!--<div>-->
    <!--<van-tabbar v-model="active" active-color="#07c160" fixed="true" >-->
    <!--<van-tabbar-item icon="home-o" >首页</van-tabbar-item>-->
    <!--<van-tabbar-item icon="search" to="/towpage">专题</van-tabbar-item>-->
    <!--<van-tabbar-item icon="search">分类</van-tabbar-item>-->
    <!--<van-tabbar-item icon="setting-o">购物车</van-tabbar-item>-->
    <!--</van-tabbar>-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: 'aheader',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped>
  .hello{}
  @import "./aheader.css";
</style>
