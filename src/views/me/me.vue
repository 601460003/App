<template>
  <div>
    <div>
      <!--<img class="user-poster"-->
      <!--src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551360999932&di=00c95a87b6850940982986135bf0d195&imgtype=0&src=http%3A%2F%2Fp4.ssl.cdn.btime.com%2Ft0179296d244cd01a3b.jpg%3Fsize%3D564x266 "-->
      <!--width="100%"/>-->
      <div class="me-me">
        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2955494591,2990420735&fm=26&gp=0.jpg"/>
        <a v-if="mobile">{{mobile}}<span class="mobile_name">手机用户</span></a>
        <router-link to="/Login" v-else="!mobile">{{'登录/注册'}}</router-link>
      </div>
      <div class="me-me-img">
        <img src="http://img4.imgtn.bdimg.com/it/u=430635927,4207059803&fm=26&gp=0.jpg"/>
      </div>
      <van-cell-group class="user-group">
        <router-link to="/myOrder">
          <van-cell icon="records" title="我的订单" is-link/>
        </router-link>
      </van-cell-group>
      <!--分栏-->
      <div class="top-top" @click="payPape(type)">
        <van-row class="user-links">
          <van-col span="6">
            <van-icon name="pending-payment"/>
            <div>待付款</div>
          </van-col>
          <van-col span="6">
            <van-icon name="records"/>
            <div>待接单</div>
          </van-col>
          <van-col span="6">
            <van-icon name="tosend"/>
            <div>待发货</div>
          </van-col>
          <van-col span="6">
            <van-icon name="logistics"/>
            <div>已发货</div>
          </van-col>
        </van-row>
      </div>
      <van-cell-group class="user-group">
        <van-cell icon="like-o" title="我的拼团订单" is-link/>
      </van-cell-group>

      <div>
        <van-cell-group>
          <van-cell icon="points" title="我的积分" is-link/>
          <van-cell icon="balance-list-o" title="我的优惠券" is-link/>
          <van-cell icon="gift-o" title="我收到的礼物" is-link/>
          <!--第二栏-->
          <van-cell icon="service-o" title="在线客服" is-link/>
          <van-cell icon="question-o" title="帮助中心" is-link/>
          <van-cell icon="setting-o" title="系统设置" is-link/>
        </van-cell-group>
      </div>
    </div>
    <!--// 这是第一种方法利用props传参显示导航tab-->
    <!--<v-tabber :active="active"></v-tabber>-->
  </div>
</template>

<script>
  import {Row, Col, Icon, Cell, CellGroup} from 'vant';


  export default {
    name: "me",
    components: {
      [Row.name]: Row,
      [Col.name]: Col,
      [Icon.name]: Icon,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
    },

    data() {
      return {
        mobile: '',

      }
    },
    created() {
      var user = localStorage.getItem("user")
    if(user){
      // mobile
      // get mobile 获取用户
      this.mobile = JSON.parse(user).mobile;
      this.$axios.get('me/getMember?mobile='+this.mobile)
        .then(res=>{
          console.log(res)
          if(res.data.code==100){
            this.mobile=res.data.data.mobile
          }
        })
    }else {
        // this.$router.push({path:'/Login'})
    }


    },
    methods: {
      payPape(e) {
        alert(e)
      }
    },
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
    font-size: 14px;
  }

  /*.van-icon-like:before {*/
  /*color: #f44;*/
  /*}*/

  /*.van-icon-balance-list:before {*/
  /*color: #f44;*/
  /*}*/

  /*.van-icon-gold-coin:before {*/
  /*color: #f44;*/
  /*}*/

  .me-me {
    position: relative;
    padding: 25px;
    height: 55px;
    font-size: 14px;
    background: blanchedalmond
  }

  .me-me a {
    color: #333;
  }

  .me-me img {
    width: 50px;
    height: 50px;
    border-radius: 30px;
    display: inline-block;
    vertical-align: middle;
    padding-right: 10px;
  }

  .me-me-img img {
    width: 50px;
    position: absolute;
    right: 20px;
    top: 25px;
  }

  .mobile_name {
    position: absolute;
    left: 88px;
    top: 64px;
    color: #999;
    font-size: 13px;
  }

</style>
