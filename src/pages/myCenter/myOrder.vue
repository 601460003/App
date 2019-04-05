<template>
  <div>
    <!--头部-->
    <v-header title="我的订单">
      <span class="icon iconfont iconfanhui" slot="left" @click="back"></span>
    </v-header>
    <!--分页栏组件-->
    <div class="order-title">
      <van-tabs v-model="active">
        <!--全部订单-->
        <van-tab title="全部">
          <div class="order-img" v-for="allShop in carShops">
            <h3>
              <van-tag mark type="primary">订单号：</van-tag>
              <span> {{allShop.num}}</span></h3>
            <div v-for="item in allShop.list" class="order-img-box">
              <img :src="item.img"/>
              <div class="order-img-name">
                <span>{{item.name}}</span>
                <span class="order_price">{{item.price|toMoney(item.price)}}</span>
                <p class="order_describe">{{item.describe}}</p>
                <span class="order_amount">x{{item.amount}}</span>
              </div>
            </div>
            <div>
              <p class="sum_price">共{{allShop.list.length}}件商品 <span>合计：{{allShop.totalPrice|toMoney(allShop.totalPrice)}}</span>
              </p>
            </div>
            <spilt></spilt>
          </div>
        </van-tab>
        <!--待发货-->
        <van-tab title="待发货">
          <div class="order-img" v-for="allShop in waitShops">
           <div>
             <span style="float: right;color: red;padding-right: 10px">待发货</span>
             <h3>
               <van-tag mark type="primary">订单号：</van-tag>
               <span> {{allShop.num}}</span></h3>
           </div>
            <div v-for="item in allShop.list" class="order-img-box">
              <img :src="item.img"/>
              <div class="order-img-name">
                <span>{{item.name}}</span>
                <span class="order_price">{{item.price|toMoney(item.price)}}</span>
                <p class="order_describe">{{item.describe}}</p>
                <span class="order_amount">x{{item.amount}}</span>
              </div>
            </div>
            <div>
              <p class="sum_price">共{{allShop.list.length}}件商品 <span>合计：{{allShop.totalPrice|toMoney(allShop.totalPrice)}}</span>
              </p>
            </div>
            <spilt></spilt>
          </div>
        </van-tab>
        <!--已发货-->
        <van-tab title="已发货">
          <div class="order-img" v-for="allShop in overShops">
            <div>
              <span style="float: right;color: red;padding-right: 10px">已发货</span>
              <h3>
                <van-tag mark type="primary">订单号：</van-tag>
                <span> {{allShop.num}}</span></h3>
            </div>
            <div v-for="item in allShop.list" class="order-img-box">
              <img :src="item.img"/>
              <div class="order-img-name">
                <span>{{item.name}}</span>
                <span class="order_price">{{item.price|toMoney(item.price)}}</span>
                <p class="order_describe">{{item.describe}}</p>
                <span class="order_amount">x{{item.amount}}</span>
              </div>
            </div>
            <div>
              <p class="sum_price">共{{allShop.list.length}}件商品 <span>合计：{{allShop.totalPrice|toMoney(allShop.totalPrice)}}</span>
              </p>
            </div>
            <spilt></spilt>
          </div>
        </van-tab>
        <!--待评论-->
        <van-tab title="待评价">
          <div class="order_appraise">
            <p>评价都写完了，试试去分享宝贝吧～</p>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
  import header from '@/components/header'
  import spilt from '@/components/spilt'

  export default {
    data() {
      return {
        active: 0,
        carShops:[],
        mobileId:'',
        waitShops:[],
        overShops:[]
      }
    },
    filters:{
      toMoney(money){
        return '￥'+money.toFixed(2);
      }
    },
    created(){
      /**
       *双向绑定active，组件active等于默认数组第0个
       * 通过路由传参：实现效果
       */
      this.active=this.$route.params.active;
      /**
       * 获取get API商品数据信息
       *
       * 0全部
       */
      //全部的API请求
      var user = localStorage.getItem("user");
      if(user){
        this.mobileId= JSON.parse(user).id;
        this.$axios.get("home/getOrderList?"+"&sessionId="+this.mobileId)
          .then(res=>{
            this.carShops=res.data.data;
          })
      }
      /**
       * 1待发货的请求
       */
      if(user){
        this.mobileId= JSON.parse(user).id;
        this.$axios.get("home/getOrderList?status=1&sessionId="+this.mobileId)
          .then(res=>{
            this.waitShops=res.data.data;
          })
      }
      /**
       * 2已发货
       */
      if(user){
        this.mobileId= JSON.parse(user).id;
        this.$axios.get("home/getOrderList?status=2&sessionId="+this.mobileId)
          .then(res=>{
            this.overShops=res.data.data;
          })
        }
      },
    // 引入组件
    components: {
      'v-header': header,
      'spilt':spilt
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
    },
  }
</script>

<style scoped>
  .icon {
    position: absolute;
    left: 10px;
    top: 13px;
    cursor: pointer;
  }

  .order-img {
    border-bottom: 1px solid #F4F0EA;
    border-radius: 20px;
  }
  .order-img-box{
    display: flex;
    padding: 15px 0
  }
  .order-img h3{
    padding-left: 5px;
    border-bottom: 1px solid #F4F0EA;
    padding-bottom: 5px;
    letter-spacing: 1px;
  }

  .order-img img {
    width: 120px;
    height: 100px;
    vertical-align: top;
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 10px;
  }
  .order-img-name{
    flex: 2;
    font-size: 14px;
    position: relative;
  }
 .order_price{
   position: absolute;
   left: 185px;
   color: #333;
 }

  .sum_price {
    text-indent: 205px;
    font-size: 14px;
    color: #333;
  }

  .order_amount {
   position: absolute;
    top: 30px;
    left: 215px;
    color: #999;
  }
  .order_describe{
    font-size: 11px;
    width: 186px;
    color: #999;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
  }
.order_appraise{
  text-align: center;
  font-size: 14px;
  color: #999;
}



</style>
