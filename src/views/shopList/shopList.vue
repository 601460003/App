<template>
  <div>
    <!--左边的导航栏-->
    <v-header title="商品分类"></v-header>
    <div class="shop-main">
      <div class="shopMenu">
        <ul>
          <li class="active">爱的王子专区</li>
          <li>统一专区</li>
          <li>力豹仕专区</li>
          <li>Yamalube专区</li>
          <li>美浮专区</li>
          <li>嘉实多专区</li>
        </ul>
      </div>
      <!--右边商品区-->
      <div class="shopGoods">
        <div class="shopGoods-img">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552270656&di=33d05870678077f351d9deefd9442c39&imgtype=jpg&er=1&src=http%3A%2F%2Fwww3.autoimg.cn%2Fnewsdfs%2Fg19%2FM15%2FE1%2F71%2F620x0_1_autohomecar__wKgFWFbpoySAGIQAABh7Lnlip8s036.jpg"/>
        </div>
        <div class="shopGoods-Menu">
          <ul>
            <li>
              <div class="shopGoods-Menu-one">
                <img
                  src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=346771149,3997140247&fm=15&gp=0.jpg"/>
                <span>爱的王子</span>
              </div>
            </li>
            <li>
              <div class="shopGoods-Menu-one">
                <img
                  src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2208736512,1980892191&fm=26&gp=0.jpg"/>
                <span>昆仑</span>
              </div>
            </li>
            <li>
              <div class="shopGoods-Menu-one">
                <img
                  src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=824712023,4271835882&fm=26&gp=0.jpg"/>
                <span>美孚</span>
              </div>
            </li>
            <li>
              <div class="shopGoods-Menu-one">
                <img
                  src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=346771149,3997140247&fm=15&gp=0.jpg"/>
                <span>爱的王子</span>
              </div>
            </li>
            <li>
              <div class="shopGoods-Menu-one">
                <img
                  src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2208736512,1980892191&fm=26&gp=0.jpg"/>
                <span>昆仑</span>
              </div>
            </li>
            <li>
              <div class="shopGoods-Menu-one">
                <img
                  src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=824712023,4271835882&fm=26&gp=0.jpg"/>
                <span>美孚</span>
              </div>
            </li>
            <li>
              <div class="shopGoods-Menu-one">
                <img
                  src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=346771149,3997140247&fm=15&gp=0.jpg"/>
                <span>爱的王子</span>
              </div>
            </li>
            <li>
              <div class="shopGoods-Menu-one">
                <img
                  src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2208736512,1980892191&fm=26&gp=0.jpg"/>
                <span>昆仑</span>
              </div>
            </li>
            <li>
              <div class="shopGoods-Menu-one">
                <img
                  src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=824712023,4271835882&fm=26&gp=0.jpg"/>
                <span>美孚</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <v-tabber></v-tabber>
  </div>
</template>

<script>
  import tabbers from '@/components/tabbers'
  import header from '@/components/header'

  export default {
    components: {
      'v-header': header,
      'v-tabber': tabbers,
    },
    data() {
      return {}
    },

  }
</script>

<style scoped>
  .shop-main {
    display: flex;
  }

  .shopMenu {
    padding-left: 10px;
    width: 85px;
    height: 600px;
    font-size: 13px;
    line-height: 50px;
    color: #333;
    padding-right: 10px;
    border-right: 1px solid #999;
    flex: 1;
  }

  .active {
    color: #f44;
    font-size: 12px;
  }

  .shopGoods {
    flex: 2;
  }

  .shopGoods-img img {
    width: 245px;
    height: 100px;
    padding: 10px 10px;

  }

  .shopGoods-Menu li {
    display: inline-block;
    padding: 17px;
    text-align: center;
  }

  .shopGoods-Menu-one img {
    width: 50px;
    height: 50px;
    display: block;
    border-radius: 40px;
  }

</style>
