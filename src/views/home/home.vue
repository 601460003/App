<template>
  <div class="hello">
    <v-header title="华升车行"></v-header>
    <div style="background: white;padding: 0 10px">
      <div style="text-align: center">

      </div>
      <div class="top-input">
        <input type="text" placeholder="搜索商品，共21303款好货">
      </div>
      <!--//轮播图-->
      <div class="slideshow">
        <van-swipe :autoplay="3000" indicator-color="white" style="height: 200px">
          <van-swipe-item v-for="(img,index) in Banner" :key="index" @click="Banners(img.id)">
            <img :src="img.poster"
                 width="100%" height="200px"/>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="imgs-title">
        <span>8小时内快速发货</span>
        <span>30天内无忧退货</span>
        <span>48小时内快速退货</span>
      </div>
    </div>
    <div class="main-shop">
      <!--机油坐标-->
      <ul style="display: flex;flex-wrap: wrap;flex-direction: row;">
        <li v-for="goods in HotGoods">
          <div class="shop-left" @click="shopMSG">
            <img :src="goods.img"/>
            <div class="goods-goods">
              <span style="font-size: 14px">{{goods.name}} <span class="goods-describe" style="color:#c8c9cc">{{goods.describe}}</span></span>
            </div>
            <span class="goods-price">￥{{goods.price}}</span>
          </div>
        </li>
      </ul>
    </div>
    <!--人气推介-->
    <div style="background:white;">
      <div
        style="padding: 10px;margin-top: 10px;color: rgb(85, 85, 85);border-bottom: 1px solid #F4F0EA;font-size: 15px">
        <span style="float: right;padding-top: 2px">更多 ></span>
        人气推荐
      </div>
      <div class="getChoice" v-for="hots in getChoice" @click="shopMSG">
        <div style="padding: 20px">
          <img :src="hots.img" width="100px" height="100px"/>
        </div>
        <div>
          <p style="color:#333;font-size: 14px">{{hots.name}}</p>
          <p style="color: #999;">{{hots.describe}}</p>
          <span style="color: #f44;font-size: 16px">￥{{hots.price}}</span>
        </div>
      </div>
    </div>
    <!--专题精选-->
    <div style="background: white;padding: 0 10px">
      <div style="padding: 10px;margin-top: 10px;color: rgb(85, 85, 85);font-size: 15px">
        <span style="float: right;padding-top: 2px">更多 ></span>
        专题精选
      </div>
      <div style="line-height: 10px;margin-bottom: 60px;margin-top: 5px">
        <img :src="subject.poster"
             width="100%" height="200px"/>
        <div>
          <h3 style="color: rgb(85, 85, 85)">{{subject.title}}</h3>
        </div>
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
      shopMSG() {
        this.$router.push({path: '/shopmsg'})
      },
    }
  }
</script>

<style scoped>
  .hello {
    background: #dfe6ec;
    font-family: ' Microsoft Yahei';
  }

  .goods-describe {
    font-size: 12px;
    color: #e3e3e3;
  }

  .top-input input {
    width: 100%;
    margin: 10px auto;
    text-align: center;
    font-size: 12px;
    padding: 6px 0;
    border-radius: 15px;
    border: 1px solid #999;
  }

  .imgs-title {
    font-size: 12px;
    color: rgb(162, 49, 62);
    display: flex;
    justify-content: space-around;
    margin-top: 3px;
    padding: 10px;
    background: white;
  }

  .imgs-title span {
    /*background: url("../../assets/radio button.png") no-repeat;*/
    background-size: 15px;
    padding-left: 18px;
  }
  .main-shop{
    margin-top: 5px;
    padding-left: 3px;
  }

  .shop-left {
    text-align: center;
    padding-top: 20px;
    background: white;
    width: 180px;
    margin: 2px;

  }

  .shop-left img {
    padding-bottom: 5px;
    width: 100px;
    height: 100px;
  }

  .goods-price {
    color: #f44;
    padding-right: 20px;
    font-size: 14px;
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
    text-indent: 25px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
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
</style>
