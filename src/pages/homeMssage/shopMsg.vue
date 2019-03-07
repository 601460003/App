<template xmlns="http://www.w3.org/1999/html">
  <div>
    <!--商品详情头部-->
    <div class="title-aheader">
      <span class="icon iconfont iconfanhui" @click="shopMsg"></span>
      <span>商品详情</span>
    </div>
    <!--内容-->
    <div class="shopping">
      <!--图片显示-->
      <div class="shopping-img">
        <img :src="shopMessage.img"/>
      </div>
      <!--内容详情-->
      <div class="shopping-content">
        <p><span class="shopping-my">自营</span> {{shopMessage.name}}{{shopMessage.describe}}</p>
        <p><span class="shopping-time">此商品于2019-03-10,00点参加闪购特卖,</span></p>
        <div class="shopping-price-box">
          <span class="shopping-price">￥{{shopMessage.price}}</span>
          <span style="position: absolute;right: 10px;color: #e4393c">好评度98.7%</span>
        </div>
        <div class="shopping-kill-box">
          <p><span class="shopping-kill">秒杀预告</span> 秒杀期间可享受超值价格优惠</p>
        </div>
        <div class="shop-vip">
          <p><span>PLUS</span>开通会员，此商品立省￥4.00</p>
        </div>
      </div>
      <spilt></spilt>
      <!--颜色。尺码。数量-->
      <div style="margin-bottom: 40px">
        <div class="shop-size-box">
          <span class="shop-color">颜色</span>
          <span class="shop-size shop-size-active">美孚旋风4T 102-40</span>
          <span class="shop-size">美孚小霸王2T</span>
        </div>
        <div class="shop-size-box">
          <span class="shop-color">尺寸</span>
          <span class="shop-size shop-size-active">1L</span>
        </div>
        <div class="shop-size-box">
          <span class="shop-color">数量</span>
          <span><van-stepper v-model="value"/></span>
        </div>
      </div>
      <spilt></spilt>
      <!--立即购买组件-->
      <div>
        <van-goods-action class="shopping-shopping">
          <van-goods-action-mini-btn
            icon="chat-o"
            text="客服"
          />
          <van-goods-action-mini-btn
            :info="value"
            icon="cart-o"
            text="购物车"
          />
          <van-goods-action-mini-btn
            icon="shop-o"
            text="店铺"
          />
          <van-goods-action-big-btn text="加入购物车" @click="addCars"/>
          <van-goods-action-big-btn
            primary
            text="立即购买"
          />
        </van-goods-action>
      </div>
    </div>
  </div>
</template>

<script>
  import spilt from '@/components/spilt'

  export default {
    data() {
      return {
        shopMessage: [],
        value:1,
        mobileID:'',
      }
    },
    components: {
      spilt
    },
    created(){
      // 利用缓存拿到user的信息，在通过转化JSON获取到使用者的ID
      var user =localStorage.getItem("user");
      this.mobileID=JSON.parse(user).id;
    },

    //home/getGoodById?id=2
    mounted() {
      var getGoodBy = 'home/getGoodById?id=' + this.$route.params.id;
      this.$axios.get(getGoodBy)
        .then(res => {
          this.shopMessage = res.data.data;
        });

    },
    methods: {
      shopMsg() {
        this.$router.go(-1)
      },
      addCars(){
        var shopping={
          goodId: this.shopMessage.id,
          amount:this.value,
          sessionId:this.mobileID
        };
        this.$axios.post('home/addCar',shopping)
          .then(res=>{
            console.log(res)
          })
      },
    },
  }
</script>

<style scoped>
  .title-aheader {
    padding: 10px;
    font-size: 15px;
    background-color: #1989fa;
    color: #fff;
  }

  .shopping-img {
    text-align: center;
    background: white;
  }

  .shopping-img img {
    width: 250px;
    height: 250px;
  }

  .shopping-content {
    padding: 0 8px;
    margin-bottom: 10px;

  }

  .shopping-content p {
    font-size: 14px;

  }

  .shopping-price {
    color: #e4393c;
    font-size: 16px;
  }

  .shopping-price-box {
    margin-top: 10px;
  }

  .shopping-my {
    background: #f44;
    color: white;
    font-size: 12px;
    padding: 2px
  }

  .shopping-time {
    font-size: 12px;
    color: #f44;
  }

  .shopping-kill {
    background: #f44;
    color: white;
    font-size: 10px;
    padding: 1px 5px;
    border-radius: 10px;
  }

  .shopping-kill p {
    font-weight: normal;
    color: #333;
  }

  .shop-vip {
    background: #dee1e6;
    padding: 3px 3px;
    font-size: 12px;
    color: #999;
    border-radius: 3px;
  }

  .shop-vip p {
    margin: 0;
    padding: 0;
    font-size: 12px;
  }

  .shop-vip span {
    background: #363634;
    color: #e5d790;
    margin-right: 3px;
    padding: 1px;
    font-size: 12px;
    border-radius: 5px;
  }

  .shop-size-box {
    margin: 15px 5px;
    position: relative;
  }

  .shop-size {
    background: #dee1e6;
    color: #333;
    font-size: 13px;
    padding: 5px;
    margin-right: 10px;
    border-radius: 3px;
  }

  .shop-size-active {
    background: #f44;
    color: #fff;
  }

  .shop-color {
    color: #999;
    margin-right: 10px;
    font-size: 12px;
  }

  .van-stepper {
    position: absolute;
    top: -7px;
    left: 36px;
  }
  .shopping-kill-box p{
    margin: 10px auto;
    font-size: 12px;
  }


</style>
