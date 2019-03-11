<template>
  <div class="hello">
    <!--头部-->
    <v-header title="华升车行"></v-header>
    <!--搜索框-->
    <van-search
      placeholder="搜索商品，共21303款好货"
      show-action
      shape="round"
      input-align="center"
      @click="searchList"
      background="#fff"
    >
      <div slot="action" >搜索</div>
    </van-search>
    <!--//轮播图组件-->
    <div style="background: #f3f5f7;padding: 0 10px">
      <div class="slideshow">
        <van-swipe :autoplay="3000" indicator-color="white" style="height: 200px">
          <van-swipe-item v-for="(img,index) in Banner" :key="index" @click="Banners(img.id)">
            <img :src="img.poster" width="100%" height="200px"/>
          </van-swipe-item>
        </van-swipe>
      </div>
      <!--8小时内快速发货-->
      <div class="imgs-title">
        <span>8小时内快速发货</span>
        <span>30天内无忧退货</span>
        <span>48小时内快速退货</span>
      </div>
    </div>
    <div class="main-shop">
      <!--机油坐标-->
      <ul class="shop_box">
        <li v-for="goods in HotGoods">
          <!--商品图片-->
          <div class="shop-left" @click="shopMSG(goods.id)">
            <img :src="goods.img"/>
            <!--商品内容-->
            <div class="goods-goods">
              <div style="text-align: left">
                <van-tag type="danger">{{goods.name}}</van-tag>
                <span class="goods-describe">{{goods.describe}}</span>
              </div>
            </div>
            <!--商品价格-->
            <div class="goods_price">
              <span class="goods-price">￥{{goods.price}}</span>
              <span><van-tag plain type="danger">满减</van-tag></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!--人气推介-->
    <div >
      <!--人气标题-->
      <div class="host_title">
        <span class="host_title_right">更多 ></span>
        <span>人气推荐</span>
      </div>
      <!--人气商品-->
      <div class="getChoice" v-for="(hots,index) in getChoice" :key="index" @click="shopMSG(hots.id)" >
        <div style="padding: 20px">
          <img :src="hots.img" width="100px" height="100px" />
        </div>
        <div >
          <p class="host_shop_name">{{hots.name}}</p>
          <p class="host_shop_describe">{{hots.describe}}</p>
          <span class="host_shop_price">￥{{hots.price}}</span>
        </div>
      </div>
    </div>
    <!--专题精选-->
    <div style="background: white;padding: 0 10px">
      <div style="padding: 10px;margin-top: 10px;color: rgb(85, 85, 85);font-size: 15px">
        <span class="host_title_right">更多 ></span>
        <span>专题精选</span>
      </div>
      <!--专题内容-->
      <div class="subject_box">
        <!--专题图片-->
        <img :src="subject.poster" width="100%" height="200px"/>
        <!--专题标题-->
        <div>
          <h3>{{subject.title}}</h3>
        </div>
        <!--内柔-->
        <p class="subject-content">{{subject.content}}</p>
      </div>
    </div>
    <!--<v-tabber :active="active"></v-tabber>-->
  </div>
</template>

<script>
import header from '@/components/header'
// import vTabber from '@/components/tabbers.vue'
  export default {
    name: 'home',
    data() {
      return {
        // active:0,
        Banner: [],
        HotGoods: [],
        getChoice: [],
        subject: {},
      }
    },
    components:{
      'v-header':header,
      // 'vTabber':vTabber
    },
    // 第一天项目插入了四个接口，然后编辑方法str.id跳转到路由
    created() {
      // 第一个伦播图接口
      this.$axios.get('home/getBanner')
        .then(res => {
          this.Banner = res.data.data;
        });
      // 第二个商品接口
      this.$axios.get('home/getHotGoods')
        .then(res => {
          this.HotGoods = res.data.data;
        });
      // 第三个接口人气推介
      this.$axios.get('home/getChoice')
        .then(res => {
          this.getChoice = res.data.data;
        });
      //最后一个接口
      this.$axios.get('home/getSponsor')
        .then(res => {
          this.subject = res.data.data;
          // console.log(this.subject)
        })
    },

    methods: {
      Banners(str) {
        let path = '/banners/' + str;
        this.$router.push({path: path})
      },

      shopMSG(str) {
        let path = '/shopmsg/' + str;
        this.$router.push({path: path})
      },
      searchList(){
        this.$router.push({path:'/search'})
      }
    }
  }
</script>

<style scoped>
  .shop_box {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 0 5px;
  }
  .hello {
    background: #f3f5f7;
  }
  .van-tag{
    padding:1px 2px;
    font-size: 10px;
    text-align: center;
  }

  .goods-describe {
    font-size: 12px;
    color:#999;
  }
  .goods-price{
    font-size: 12px;
    padding-left: 2px;
  }

  .top-input input {
    width: 100%;
    margin: 10px auto;
    text-align: center;
    font-size: 12px;
    padding: 3px 0;
    border-radius: 15px;
    border: 1px solid #999;
  }

  .imgs-title {
    font-size: 12px;
    color: rgb(162, 49, 62);
    display: flex;
    justify-content: space-around;
    margin-top: 8px;
    padding: 10px;
    background: white;

  }

  /*.imgs-title span {*/
    /*!*background: url("../../assets/radio button.png") no-repeat;*!*/
    /*background-size: 15px;*/
    /*padding-left: 18px;*/
  /*}*/
  .main-shop{
    margin-top: 5px;
    padding-left: 3px;
  }

  .shop-left {
    text-align: center;
    padding-top: 20px;
    background: white;
    width: 170px;
    margin: 5px;

  }

  .shop-left img {
    padding-bottom: 5px;
    width: 100px;
    height: 100px;
  }

  .goods_price{
    color: #f44;
    font-size: 14px;
    text-align: left;
    margin-top: 1px;
    text-indent: 2px;
    padding-bottom: 3px;
  }

  .getChoice {
    background: white;
    display: flex;
    border-bottom: 1px solid #F4F0EA;
    padding-right: 10px;
  }

  .goods-goods {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    padding: 0 5px;
    letter-spacing: 1px;
    line-height: 20px;
  }

  .subject-content {
    color: #999;
    font-size: 12px;
    line-height: 16px;
    text-indent: 27px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    padding-right: 2px;
    /*这里指商品多字时第三行显示隐藏跟省略号*/
  }

  .host_title {
    padding: 10px;
    margin-top: 10px;
    color: rgb(85, 85, 85);
    border-bottom: 1px solid #F4F0EA;
    font-size: 15px;
    background: white;
  }

  .host_title_right {
    float: right;
    padding-top: 2px;
    font-size: 13px;
  }

  .host_shop_name {
    color: #333;
    font-size: 14px;
    padding-top: 10px;
    margin-top: 8px;
  }

  .host_shop_describe {
    color: #999;
    margin: 5px 0;
    font-size: 12px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    padding-right: 2px;

  }
  .host_shop_price{
    color: #f44;
    font-size: 14px;
  }

  .subject_box {
    line-height: 10px;
    margin-bottom: 60px;
    margin-top: 5px;
  }

</style>
