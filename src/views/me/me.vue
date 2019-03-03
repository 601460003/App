<template>
    <div>
      <div>
        <img class="user-poster" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551360999932&di=00c95a87b6850940982986135bf0d195&imgtype=0&src=http%3A%2F%2Fp4.ssl.cdn.btime.com%2Ft0179296d244cd01a3b.jpg%3Fsize%3D564x266 "width="100%"/>
        <van-cell-group class="user-group">
          <van-cell icon="records" title="我的订单" is-link />
        </van-cell-group>
   <!--分栏-->
<div class="top-top">
  <van-row class="user-links">
    <van-col span="6">
      <van-icon name="pending-payment" />
      <div>待付款</div>
    </van-col>
    <van-col span="6">
      <van-icon name="records" />
      <div>待接单</div>
    </van-col>
    <van-col span="6">
      <van-icon name="tosend" />
      <div>待发货</div>
    </van-col>
    <van-col span="6">
      <van-icon name="logistics" />
      <div>已发货</div>
    </van-col>
  </van-row>
</div>
        <van-cell-group class="user-group">
          <van-cell icon="like" title="我的拼团订单" is-link  />
        </van-cell-group>

      <div style="font-size: 16px">
        <van-cell-group>
          <van-cell icon="points" title="我的积分" is-link />
          <van-cell icon="gold-coin" title="我的优惠券" is-link />
          <van-cell icon="gift-o" title="我收到的礼物" is-link />
          <!--第二栏-->
          <van-cell icon="service-o" title="在线客服" is-link />
          <van-cell icon="question-o" title="帮助中心" is-link />
          <van-cell icon="setting-o" title="系统设置" is-link />
        </van-cell-group>
      </div>
      </div>
    </div>
</template>

<script>
  import { Row, Col, Icon, Cell, CellGroup } from 'vant';
    export default {
        name: "me",
      components: {
        [Row.name]: Row,
        [Col.name]: Col,
        [Icon.name]: Icon,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup
      }
    }
</script>

<style scoped>
  .top-top {
    text-align: center;
    margin: 10px auto;
    font-size: 13px;
  }

  .van-icon {
    font-size: 20px;
  }

  .van-cell {
    font-size: 15px;
  }

  .van-icon-like:before {
    color: red;
  }
</style>
