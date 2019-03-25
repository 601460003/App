<template>
  <div>
    <div>
      <!--src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551360999932&di=00c95a87b6850940982986135bf0d195&imgtype=0&src=http%3A%2F%2Fp4.ssl.cdn.btime.com%2Ft0179296d244cd01a3b.jpg%3Fsize%3D564x266 "-->
      <v-header title="个人中心"></v-header>
      <div class="me-me">
        <img src="https://ww1.sinaimg.cn/large/007i4MEmgy1g1f2ssfh28j30i20i2gm4.jpg"/>
        <a v-if="mobile">{{mobile}}<span class="mobile_name">手机用户</span></a>
        <router-link to="/Login" v-else="!mobile">{{'登录/注册'}}</router-link>
      </div>
      <van-cell-group class="user-group">
        <router-link to="/myOrder/0">
          <van-cell icon="records" title="我的订单" is-link/>
        </router-link>
      </van-cell-group>
      <!--分栏-->
      <div class="top-top">
        <van-row class="user-links"  >
          <van-col span="6">
            <router-link to="/myOrder/0">
            <van-icon name="pending-payment"/>
            <div class="van_icon">全部</div>
            </router-link>
          </van-col>

          <van-col span="6">
            <router-link to="/myOrder/1">
            <van-icon name="tosend"/>
            <div class="van_icon">待发货</div>
            </router-link>
          </van-col>
          <van-col span="6">
            <router-link to="/myOrder/2">
            <van-icon name="logistics"/>
            <div class="van_icon">已发货</div>
            </router-link>
          </van-col>
          <van-col span="6">
            <router-link to="/myOrder/3">
              <van-icon name="records"/>
              <div class="van_icon">待评价</div>
            </router-link>
          </van-col>
        </van-row>
      </div>
        <!--个人中心组件-->
      <spilt></spilt>
      <div>
        <van-cell-group>
          <van-cell icon="points" title="我的积分" is-link @click="myIntegral"/>
          <!--我的优惠卷-->
          <van-cell icon="balance-list-o" title="我的优惠券" is-link @click="myCoupons"/>
          <!--在线客服-->
          <van-cell icon="service-o" title="在线客服" is-link @click="callCenter"/>
          <!--帮助中心-->
            <van-cell icon="question-o" title="帮助中心" is-link @click="helpCenter"/>
        </van-cell-group>
        <!--点击退出的按钮-->
        <div @click="quitEnter" v-if="mobile">
          <button class="over_button">退出当前账户</button>
        </div>
      </div>
    </div>
    <!--// 这是第一种方法利用props传参显示导航tab-->
    <!--<v-tabber :active="active"></v-tabber>-->
  </div>
</template>

<script>
  import header from '@/components/header'
  import  spilt from '@/components/spilt'
  export default {

    components: {
      spilt,
      'v-header':header
    },

    data() {
      return {
        mobile: '',
        active:'',
      }
    },
    created() {
      // 获取localstorage里面的缓存数据
      var user = localStorage.getItem("user");
      if (user) {
        // mobile
        // get mobile 获取用户
        this.mobile = JSON.parse(user).mobile;

        this.$axios.get('me/getMember?mobile=' + this.mobile)
          .then(res => {
            if (res.data.code == 100) {
              this.mobile = res.data.data.mobile
            }
          })
      } else {
        // this.$router.push({path:'/Login'})
      }
    },
    methods: {
      /**
       * 退出登录
       */
      quitEnter(){
        localStorage.removeItem("user");
        this.mobile ='';
     },
      /**
       * 我的优惠券
       */
      myCoupons(){
       if(this.mobile){
         this.$toast('暂无优惠券');
       }else {
         this.$dialog.alert({
           message: '请登录'
         });
       }
      },
      /**
       * 客服中心
       */
      callCenter(){
        if(this.mobile){
          this.$dialog.alert({
            message: '客服联系电话：131-4852-8414'
          });
        }else {
          this.$dialog.alert({
            message: '请登录'
          });
        }
      },
      /**
       * 我的积分
       */
      myIntegral() {
        if (this.mobile) {
          this.$dialog.alert({
            message: '你的积分为0，快去选购你的宝贝呢～'
          });
        } else {
          this.$dialog.alert({
            message: '请登录'
          });
        }
      },
      /**
       * 帮助中心
       */
      helpCenter(){
        if(this.mobile){
          this.$router.push({path:'/help'})
        }else {
          this.$dialog.alert({
            message: '请登录'
          });
        }
      },
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
    color: #323233;
  }

  .van-cell {
    font-size: 14px;
  }
  .van_icon{
    color:#323233 ;
  }


  .me-me {
    position: relative;
    padding-top: 40px;
    padding-left: 15px;
    height: 90px;
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
    top: 85px;
  }

  .mobile_name {
    position: absolute;
    left: 79px;
    top: 75px;
    color: #999;
    font-size: 13px;
  }
  .over_button{
    width: 100%;
    padding: 12px;
    font-size: 14px;
    color: #fff;
    background-color: #f44;
    border: 1px solid #f44;
    margin-top: 50px;
  }

</style>
