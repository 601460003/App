<template>
    <div>
      <div>
        <img class="user-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png">
        <van-cell-group class="user-group">
          <van-cell icon="records" title="我的订单" is-link />
        </van-cell-group>
        <van-row class="user-links">
          <van-col span="6">
            <van-icon name="pending-payment" />
            待付款
          </van-col>
          <van-col span="6">
            <van-icon name="records" />
            待接单
          </van-col>
          <van-col span="6">
            <van-icon name="tosend" />
            待发货
          </van-col>
          <van-col span="6">
            <van-icon name="logistics" />
            已发货
          </van-col>
        </van-row>

        <van-cell-group class="user-group">
          <van-cell icon="records" title="我的拼团订单" is-link />
        </van-cell-group>

        <van-cell-group>
          <van-cell icon="points" title="我的积分" is-link />
          <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
          <van-cell icon="gift-o" title="我收到的礼物" is-link />
        </van-cell-group>
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

</style>
