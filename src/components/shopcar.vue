<template>
  <div class="header-header-header">
    <div class="header-header">
      <span style="float: right;font-size: 16px ">编辑</span><span>购物车</span>
    </div>
    <div class="imgs-title">
      <span>8小时内快速发货</span>
      <span>30天内无忧退货</span>
      <span>48小时内快速退货</span>
    </div>
    <div>
      <div style="background: white;">
        <div style="float: left">
          <input type="radio">
          <img src="http://img4.imgtn.bdimg.com/it/u=1838738605,2394694095&fm=26&gp=0.jpg"
               width="100px" height="100px" style="vertical-align: middle;padding-right: 10px;margin-left: 10px"/>
        </div>
        <div style="margin-top: 15px"><span style="float: right;padding-right: 15px">×2</span>
          <p style="font-weight: normal">正新轮胎35-10</p></div>
        <p style="padding-top: 30px;color: #f44">￥68.00</p>
      </div>
      <!--提交订单-->
      <div>
        <van-submit-bar
          :price="13600"
          button-text="结算"
          style="bottom: 50px;margin-left: 3px"
        >
          <!--v-model="checked"-->
          <van-checkbox >全选</van-checkbox>
          <span slot="tip">
    你的收货地址不支持同城送, <span>修改地址.</span>
  </span>
        </van-submit-bar>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "shopcar"
  }
</script>

<style scoped>

  .header-header {
    text-align: center;
    font-size: 18px;
    padding: 10px;
    background-color: #f44;
    color: #fff;
  }

  .imgs-title {
    font-size: 12px;
    color: #d10643;
    display: flex;
    justify-content: space-around;

    padding: 8px;
    border-color: rgb(235, 235, 235);
    background-color: rgb(244, 244, 244);
  }

  .imgs-title span {
    background: url("../assets/icon.png") no-repeat;
    background-size: 15px;
    padding-left: 20px;
  }
</style>
