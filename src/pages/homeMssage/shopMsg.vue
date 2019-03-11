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
          <div><span class="shop-color">颜色</span></div>
          <div v-for="(shop_tyoe,index) in shopType" :key="index" @click="selectType(index)" class="shop_tyoe">
            <span class="shop-size " :class="{shopping_type:highlight===index}">{{shop_tyoe.type}}</span>
          </div>
        </div>
        <div class="shop-size-box">
          <span class="shop-color">尺寸</span>
          <span class="shop-size-active">1L</span>
        </div>
        <div class="shop-size-box">
          <span class="shop-color">数量</span>
          <span><van-stepper v-model="count"/></span>
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
            @click="toShopCar"
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
        value: 0,
        count: 0,
        highlight:0,
        mobileID: '',
        shopType: [
          {
            type: '美孚旋风4T 102-40',
          },
          {
            type: '美孚小霸王2T',
          },
          {
            type: '美孚大霸王8T',
          },
        ],
      }
    },
    components: {
      spilt
    },
    created() {
      /**
       *
       * 利用缓存拿到user的信息，在通过转化JSON获取到使用者的ID
       */
      var user = localStorage.getItem("user");
      /**
       *
       *获取购物车商品信息    //home/getGoodById?id=2
       */
      var getGoodBy = 'home/getGoodById?id=' + this.$route.params.id;
      this.$axios.get(getGoodBy)
        .then(res => {
          this.shopMessage = res.data.data;
        });
      if (user) {
        this.mobileID = JSON.parse(user).id;
        /**
         * 获取购物车的数量信息
         */
        this.$axios.get('home/getCar?sessionId=' + this.mobileID)
          .then(res => {
            if (res.data.code == 100) {
              if (res.data.data) {
                this.value = res.data.data.total
              }
            }
          })
        }
      },
    /**
     *下面写methods方法
     */
      methods: {
      shopMsg() {
        this.$router.go(-1)
      },
      /**
       *把服务器需要的信息 定义成对象post到URL
       */
      addCars() {
        var shopping = {
          goodId: this.shopMessage.id,
          amount: this.count,
          sessionId: this.mobileID
        };
        this.$axios.post('home/addCar', shopping)
          .then(res => {
            if (res.data.code == 100) {

              this.$toast('添加成功');
              /**
               * 添加成功后再次获取商品数量的请求
               */
              this.$axios.get('home/getCar?sessionId=' + this.mobileID)
                .then(res => {
                  console.log(res)
                  if (res.data.code == 100) {
                    if (res.data.data) {
                      this.value = res.data.data.total
                    }
                  }
                })
              }
           });
         },
      /**
       *
       * 点击去购物车页面
       */
      toShopCar(){
        this.$router.push({path:'/shopcar'})
      },
      /**
       *
       * 点击商品类型为高亮
       */
      selectType(id) {
       this.highlight=id;
      }
    },
  }
</script>

<style scoped>
  .title-aheader {
    padding: 10px;
    font-size: 15px;
    background-color: #1989fa;
    color: #fff;
    text-align: center;
  }
  .icon{
    position: absolute;
    left: 10px;
    top: 12px;
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
    font-size: 13px;
    padding-top: 2px;
    padding-left: 3px;
    padding-right: 3px;
    border-radius: 1px;
  }

  .shopping-time {
    font-size: 12px;
    color: #f44;
  }

  .shopping-kill {
    background: #f44;
    color: white;
    font-size: 12px;
    padding: 2px 5px;
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
    padding: 1px 3px;
    font-size: 12px;
    border-radius: 15px;
  }

  .shop-size-box {
    margin: 17px 5px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
  }

  .shop-size {
    background: #dee1e6;
    color: #333;
    font-size: 13px;
    margin-right: 10px;
    border-radius: 3px;
    display: inline-block;
    padding: 3px 5px;
  }

  .shop-size-active {
    background: #f44;
    color: #fff;
    font-size: 13px;
    padding: 5px;
    margin-right: 10px;
    border-radius: 3px;
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

  .shopping-kill-box p {
    margin: 10px auto;
    font-size: 12px;
  }

  .shopping_type {
    background: #f44;
    color: #fff;
  }


</style>
