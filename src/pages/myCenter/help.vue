<template>
    <div>
      <div>
        <v-header title="帮助中心">
          <span class="icon iconfont iconfanhui" slot="left" @click="back"></span>
        </v-header>
      </div>
      <h2>常见问题</h2>
      <p>
        <mark>1.问：华升车行的商品都是正品吗？<br></mark>
        &nbsp&nbsp&nbsp答：华升车行秉承网易一贯的严谨态度，对商品的产地、工艺、原材料都严格把关，力求帮消费者甄选到最优质的商品，您可以放心选购。<br>
        <mark>2.问：华升车行的订单如何配送？<br></mark>
        &nbsp&nbsp&nbsp答：华升车行会根据商品所在地、顾客所在地和商品的尺寸重量优选物流配送商，确保优质用户体验。目前暂不支持自选快递，具体物流信息可在下单成功后“我的订单-追踪物流”中查看。<br>
        <mark>3.问：我的包裹多长时间能送到？<br></mark>
        &nbsp&nbsp&nbsp答：我们会在订单支付成功后1-3天内发货（节假日顺延，部分特殊商品七天内发货），送达时间视快递配送时间而定。<br>
        <mark>4.问：如何免运费？<br></mark>
        &nbsp&nbsp&nbsp答：对于单笔所购商品总价金额（不含运费）大于或等于88元，我们提供一次免费送货服务（港澳台地区需大于或等于500元）。<br>
        <mark>5.问：订单生成后我需要在多长时间内支付货款？<br></mark>
        &nbsp&nbsp&nbsp答：下单后我们会为您保留1小时，为确保订单的有效性，需要您在1小时内完成支付。
      </p>
    </div>
</template>

<script>
  import header from '@/components/header'
    export default {
        components:{
          'v-header': header,
        },
      methods:{
        back() {
          this.$router.go(-1)
        },
      }
    }
</script>

<style scoped>
p{
  padding: 5px 10px;
  line-height: 23px;
  font-size: 14px;
  color: #333;
}
  h2{
    padding-left: 10px;
  }
.icon {
  position: absolute;
  left: 10px;
  top: 13px;
  cursor: pointer;
}

</style>
