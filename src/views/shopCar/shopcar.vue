<template>
  <div class="shopping">
    <!--购物车头部-->
    <v-header title="购物车">
      <span class="title_right" slot="right">编辑</span>
    </v-header>
    <!--8小时内快速发货-->
    <div class="imgs-title">
      <span>8小时内快速发货</span>
      <span>30天内无忧退货</span>
      <span>48小时内快速退货</span>
    </div>
    <!--没有商品时显示的东西-->
    <div class="none_shop" v-if="this.shoppingMiss.length==0">
           <div class="none_shop_img">
             <img src="http://img3.imgtn.bdimg.com/it/u=4214290751,1455904856&fm=26&gp=0.jpg"/>
             <p>购物车空空如也，去逛逛吧～</p>
           </div>
    </div>
    <!--购物车商品-->
    <div>
      <div style="background: white;">
        <div class="shop-containter" v-for="(shops,index) in shoppingMiss" :key="index" >
          <!--商品前面的圈圈-->
          <div class="icon-box">
            <div class="footer-button icon-button" @click="onceChecke(shops)">
              <i class="icon iconfont iconxuanze-yixuan " v-if="shops.isChecked"></i>
            </div>
          </div>
          <!--商品图片-->
          <div class="shop_img" @click="toShopMsg(shops.goodId)">
            <img :src="shops.img"/>
          </div>
          <!--商品内容-->
         <div class="shop_price">
           <div style="margin-top: 25px" @click="toShopMsg(shops.goodId)">
             <p class="shops_describe">{{shops.describe}}</p>
           </div>
           <!--商品价格-->
             <p id="box">
             <mark>{{shops.price|moneyFrom(shops.price)}}</mark>
             <span class="shops_count"><van-stepper v-model="shops.amount"/></span>
           </p>
         </div>
    </div>
      </div>
      <!--底部下单板块-->
      <van-submit-bar button-text="下单" style="bottom: 55px;margin-left: 3px" @submit="buyShopCar()" v-if="this.shoppingMiss.length>0">
        <div class="footer-button" @click="allCheckeds(allChecked)">
          <i class="icon iconfont iconxuanze-yixuan" v-show="allChecked"></i>
        </div>
        <!--总价-->
        <div class="shop-sum">
          <span class="shop-sum-money">{{totalMoney|moneyFrom(totalMoney)}}</span>
        </div>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
  import spilt from '@/components/spilt'
  import header from '@/components/header'

  export default {
    data() {
      return {
        allChecked: false,
        totalMoney: 0,
        totalAmount: 0,
        shoppingMiss: [],
      }
    },

    created() {
      /**
       *通过localStorage获取手机号码的id
       */
        var user = localStorage.getItem("user");
      if (user) {
        this.mobileID = JSON.parse(user).id;
        // 通过get请求返回数据获取购物车的信息
        this.$axios.get('home/getAllCar?sessionId=' + this.mobileID)
          .then(res => {
            if (res.data.code == 100) {
              if (res.data.data) {
                this.shoppingMiss = res.data.data;
              }
            }
          })
        // 如果没登录，跳转到登录页面
      }else {
        this.$router.push({path:'/Login'})
      }
    },
    /**
     *
     *0定义一个过滤器
     */
    filters: {
      moneyFrom(money) {
        return '￥' + money.toFixed(2)
      }
    },

    // 方法methods
    methods: {
      /**
       *
       *1全选跟反选的方法
       */
      allCheckeds(flag) {
        this.allChecked = !flag;
        this.shoppingMiss.forEach(shops => {
          if (!shops.isChecked) {
            this.$set(shops, 'isChecked', shops.isChecked)
          }
          shops.isChecked = !shops.isChecked;
        });
        this.sumMoney();
      },

      /**
       *2单个控制是否选中
       */
      onceChecke(shops) {
        this.$set(shops, 'isChecked', !shops.isChecked)
        this.__isAllChecke();
        this.sumMoney();
      },

      /**
       *3用一个方法来定义是否被总控制。当全部选中的时候才选中。
       * 然后调用这个方法
       * 利用数组的长度进行判断
       *
       */
      __isAllChecke() {
        let isAllChecked = 0;
        this.shoppingMiss.forEach(shops => {
          if (shops.isChecked) {
            isAllChecked++;
          }
        });
        // 利用列表的长度来定义是否长度一样，来判断是否全部选中
        if (isAllChecked == this.shoppingMiss.length) {
          this.allChecked = true
        } else {
          this.allChecked = false
        }
      },
      /**
       * 4一个计算总价格的方法
       */
      sumMoney() {
        this.totalMoney = 0;

        this.shoppingMiss.forEach(shops => {
          if (shops.isChecked) {
            this.totalMoney += shops.price * shops.amount
          }
        })
      },
      /**
       * 5路由到商品信息
       */
      toShopMsg(str) {
        let path = '/shopmsg/' + str;
        this.$router.push({path: path})
      },
      /**
       *6在购物车直接下单。成功后需要重新刷新
       * 利用get接口重新刷新页面达到效果
       */
      buyShopCar() {
        var carList=[];
        this.shoppingMiss.forEach(shop => {
          if (shop.isChecked) {
            carList.push(shop.id)
          }
        });
        //循环结束
        var car = {
          "carIds": carList,
          "type": 2,
          "sessionId": this.mobileID
        };
        //判断购物车里面有没有商品，才能下单
        if(carList.length>0){
          this.$axios.post('home/addOrder', car)
            .then(res => {
              if (res.data.code == 100) {
                this.$toast('下单成功');
                //利用接口刷新页面
                this.$axios.get('home/getAllCar?sessionId=' + this.mobileID)
                  .then(res => {
                    if (res.data.code == 100) {
                      if (res.data.data) {
                        this.shoppingMiss = res.data.data;
                        //没有商品时重置状态
                        this.allChecked = false;
                        this.totalMoney = 0;
                      }
                    }
                   })
              }
            })
          // 如果没有商品则提示信息
        }else {
          this.$toast('你的购物车为空');
        }

      }
    },

      /**
       * 7引入的组件
       */
      components: {
        'v-header': header,
        spilt
      },
  }
</script>

<style scoped>
  #box{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .shop-containter{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .imgs-title {
    font-size: 12px;
    color: #fff;
    background: #f44;
    display: flex;
    justify-content: space-around;
    padding: 8px;
  }
  .shop-containter{
    border-bottom: 10px solid #f3f5f7 ;
  }

  .icon-box {
    flex: 1;
  }
  .footer-button {
    width: 20px;
    height: 20px;
    border: 1px solid #999;
    border-radius: 18px;
    margin-left: 5px;
  }

  .icon {
    font-size: 22px;
    color: #f44;
    margin-top: -2px;
   margin-left:-1px;
    display: inline-block
  }

  .icon-button {
    /*position: absolute;*/
    top: 45px;
  }

  .shop-sum {
    padding-left: 160px;
  }

  .shop-sum-money {
    color: #f44;
  }

  mark {
    padding-top: 10px;
    color: #f44;
    font-size: 14px;
    background: white;
  }

  .title_right {
    font-size: 13px;
    position: absolute;
    right: 11px;
    top: 12px;
  }

  .shop_img {
    flex: 1;
  }
  .shop_img img {
    width: 100px;
    height: 92px;
    padding-right: 10px;
  }

  .hidden {
    display: none;
  }
  .shops_count{
   margin-right: 10px;
    margin-top: 10px;
  }

  .shops_describe{
    font-size: 12px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    padding-right: 10px;
  }
  .none_shop{
    width: 100%;
    background: #f3f5f7;
    height: 200px;
  }
  .none_shop_img{
    text-align: center;
    color: #999;
    font-size: 13px;
  }
  .none_shop_img img{
    margin-top: 20px;
    width: 100px;
    height: 100px;
    border-radius: 55px;
  }
  .none_shop_img p {
    text-indent: 22px;
    margin: 0;
  }

</style>
