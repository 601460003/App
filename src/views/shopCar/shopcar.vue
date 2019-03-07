<template>
  <div class="shopping">
    <v-header title="购物车">
      <span style="font-size: 16px ; position: absolute;right: 11px;top: 12px;" slot="right">编辑</span>
    </v-header>
    <div class="imgs-title">
      <span>8小时内快速发货</span>
      <span>30天内无忧退货</span>
      <span>48小时内快速退货</span>
    </div>
    <div>
      <div style="background: white;">
        <div style="position: relative;padding-top: 10px" v-for="shops in shoppingMiss">
          <div style="float: left">
            <img :src="shops.img"
                 width="100px" height="100px" style="vertical-align: middle;padding-right: 10px;margin-left: 35px"/>
          </div>
          <div style="margin-top: 15px">
            <p style="font-size: 14px;padding-right: 20px">{{shops.content}}</p></div>
            <p style="padding-top: 10px;color: #f44;font-size: 14px">{{shops.price|moneyFrom(shops.price)}}</p>
          <div>
            <div class="footer-button icon-button" >
              <i class="icon iconfont iconxuanze-yixuan" v-show="allChecked"></i>
            </div>
          </div>
          <van-submit-bar button-text="下单" style="bottom: 55px;margin-left: 3px">
            <div class="footer-button" @click="allCheckeds(allChecked)">
              <i class="icon iconfont iconxuanze-yixuan" v-show="allChecked"></i>
            </div>
            <div class="shop-sum">
              <span class="shop-sum-money">{{totalMoney|moneyFrom(totalMoney)}}</span>
            </div>
          </van-submit-bar>
          <spilt></spilt>
        </div>
      </div>
      <!--提交订单-->

    </div>

  </div>
</template>

<script>
  import spilt from '@/components/spilt'
  import header from '@/components/header'

  export default {
    data() {
      return {
        allChecked:false,
        totalMoney: 0,
        shoppingMiss: [
          {
            content: '正新轮胎3.50-10踏板车轮胎电动车摩托车350-10内外胎 单独正新外胎',
            id:1,
            price: 68.00,
            img: 'http://img12.360buyimg.com/n1/jfs/t29500/157/60521869/601317/b1119694/5be69a0cN74fa8760.png'
          },
          {
            content: '正新轮胎3.50-10踏板车轮胎电动车摩托车350-10内外胎 单独正新外胎',
            id:2,
            price: 68.00,
            img: 'http://img12.360buyimg.com/n1/jfs/t29500/157/60521869/601317/b1119694/5be69a0cN74fa8760.png'
          },
          {
            content: '正新轮胎3.50-10踏板车轮胎电动车摩托车350-10内外胎 单独正新外胎',
            id:3,
            price: 68.00,
            img: 'http://img12.360buyimg.com/n1/jfs/t29500/157/60521869/601317/b1119694/5be69a0cN74fa8760.png'
          },
          {
            content: '正新轮胎3.50-10踏板车轮胎电动车摩托车350-10内外胎 单独正新外胎',
            price: 68.00,
            id:4,
            img: 'http://img12.360buyimg.com/n1/jfs/t29500/157/60521869/601317/b1119694/5be69a0cN74fa8760.png'
          },
        ],

      }
    },
    filters: {
      moneyFrom(money) {
        return '￥' + money.toFixed(2)
      }
    },
    methods: {

      allCheckeds(flag){
        this.allChecked = !flag;
      },
    },

    components: {
      'v-header': header,
      spilt
    },
  }
</script>

<style scoped>
  .imgs-title {
    font-size: 12px;
    color: #fff;
    display: flex;
    justify-content: space-around;
    padding: 8px;
    background: #f44;
  }

  .imgs-title span {
    /*background: url("../../assets/radio button.png") no-repeat;*/
    background-size: 15px;
    padding-left: 20px;
  }

  .footer-button {
    width: 20px;
    height: 20px;
    border: 1px solid #e5e5e5;
    border-radius: 18px;
    margin-left: 5px
  }

  .icon {
    font-size: 21px;
    color: #f44;
    margin-top: -2px;
    display: inline-block
  }

  .icon-button {
    position: absolute;
    top: 38px;
  }

  .shop-sum {
    padding-left: 160px;
  }

  .shop-sum-money {
    color: #f44;

  }
</style>
