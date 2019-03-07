<template>
<div>
  <!--头部-->
<v-header title="我的订单">
  <span class="icon iconfont iconfanhui" slot="left" @click="back"></span>
</v-header>
  <!--分页栏组件-->
  <div class="order-title">
    <van-tabs v-model="active">
      <van-tab title="全部">
        <div class="order-img">
          <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3388954924,2759328804&fm=26&gp=0.jpg" />
          <p>还没有任何订单呢</p>
        </div>
      </van-tab>
        <van-tab title="待付款">
          <div class="order-img">
            <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3388954924,2759328804&fm=26&gp=0.jpg" />
            <p>还没有任何订单呢</p>
          </div>
        </van-tab>
      <van-tab title="待发货">
        <div class="order-img">
          <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3388954924,2759328804&fm=26&gp=0.jpg" />
          <p>还没有任何订单呢</p>
        </div>
      </van-tab>
      <van-tab title="已发货">
        <div class="order-img">
          <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3388954924,2759328804&fm=26&gp=0.jpg" />
          <p>还没有任何订单呢</p>
        </div>
      </van-tab>

    </van-tabs>
  </div>
</div>
</template>

<script>
  import header from '@/components/header'
    export default {
    data(){
      return{
        active:0,
      }
    },
        components:{
          'v-header':header,
        },
      methods:{
          back(){
            this.$router.go(-1)
          },
      },
    }
</script>

<style scoped>
.icon{
  position: absolute;
  left: 10px;
  top: 13px;
  cursor: pointer;
}
  .order-title{
    margin: 0;
    padding: 0;
  }
  .order-img{
    text-align: center;
    margin-top: 150px;
  }
  .order-img img{
    width: 120px;
    height: 120px;
  }
  .order-img p{
    margin: 0;
    padding: 0;
    font-size: 14px;
    color: #999;
  }
</style>
