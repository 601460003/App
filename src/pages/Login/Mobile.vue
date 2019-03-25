<template>
  <div style="height: 736px">
    <v-header title="绑定手机"  v-if="selectLogin==='loginPath'">
      <span class="icon iconfont iconfanhui" slot="left" @click="back"></span>
    </v-header>
    <v-header title="手机登录"  v-if="selectLogin==='enterPath'">
      <span class="icon iconfont iconfanhui" slot="left" @click="back"></span>
    </v-header>
    <div class="mobile-container">
      <div  v-if="selectLogin==='loginPath'" class="mobile_title">手机号注册</div>
      <div  v-else="selectLogin==='enterPath'" class="mobile_title ">手机号登录</div>
      <div class="mobile-content">
        <!--maxlength最大长度，利用计算属性来绑定黑色样式-->
        <input type="text" maxlength="11" placeholder="请输入手机号" v-model="mobile">
        <!--button属性disabled-->
        <!--<input type="text" maxlength="4" placeholder="请输入短信验证码" v-model="color">-->

        <!--判断登录的方式-->
        <input maxlength="11" placeholder="请输入密码" type="password" v-model="password" >
        <!--<div v-else="selectLogin==='enterPath'" class="code_login">-->
          <!--<span class="code">使用密码验证登录</span>-->
        <!--</div>-->
            <!--判断按钮的显示方式-->
        <button v-if="selectLogin==='loginPath'"
                class="mobile_button"
                @click="loginMobile"
                :class="{login_color:loginColor}">注册
        </button>
        <button v-else="selectLogin==='enterPath'"
                class="mobile_button"
                @click="enterMobile" >登录</button>

      </div>
      <!--<button v-show="sendAuthCode" :disabled="!rightMobile" class="mobile-get" :class="{right_mobile:rightMobile}" @click.prevent="getCode">获取验证码</button>-->
      <!--<button v-show="!sendAuthCode" class="mobile-get right_mobiles ">{{computedTime}}秒</button>-->
    </div>
  </div>
</template>

<script>
  import header from '@/components/header'

  export default {

    data() {
      return {
        mobile: '',
        computedTime:0,
        password:'',
        sendAuthCode:true,
        color:'',
        selectLogin:''
      }
    },
    components: {
      'v-header': header,
    },
    created(){
      /**
       * 获取路由参数名字
       */
     this.selectLogin= this.$route.params.type
    },
    methods: {
      /**
       * 返回上一层
       */
      back() {
        this.$router.go(-1)
      },
      /**
       * post带对象获取请求
       */
      loginMobile() {
        var p = {
          mobile: this.mobile,
          password:this.password
        };
        if(!p.mobile){
          this.$toast('请输入手机号码');
          return
        }
        if(!p.password){
          this.$toast('请输入密码');
          return
        }

        this.$axios.post('me/addMember', p)
          .then(res => {
            console.log(res)
            if (res.data.code == 100) {
              this.$toast('注册成功');
              localStorage.setItem("user", JSON.stringify(res.data.data));
              this.$router.go(-2)
            }
            else {
              //重新注册
              this.$toast('用户已存在，重新注册');
            }

          })
         },
      /**
       * 获取信息进行登录
       */
      enterMobile() {
        this.$axios.get('me/getMember?mobile='+this.mobile+'&password='+this.password)
          .then(res => {
            if(res.data.code==100){
              if(this.mobile=res.data.data.mobile){
                this.$toast('登录成功');
                localStorage.setItem("user", JSON.stringify(res.data.data));
                this.$router.go(-2)
              }
            }

          })
      },
      /**
       * 获取验证码
       */
      getCode() {
        this.sendAuthCode = false;
        if (!this.computedTime) {
          this.computedTime = 60;
          let time = setInterval(() => {
            this.computedTime--;
            if (this.computedTime <= 0) {
              clearInterval(time);
              this.sendAuthCode = true
            }
          }, 1000);
        }
      },
    },
    computed: {
      /**
       *
       * 利用计算属性来绑定黑色样式
       */
      rightMobile() {
        return /^1\d{10}$/.test(this.mobile)
      },
      loginColor() {
        if (this.rightMobile) {
          return /^[0-9]\d{3}$/.test(this.color)
        }
      }
    },
  }
</script>

<style scoped>
  .code{
    color: #333;
  }
  .mobile_title{
    text-align: center;
    font-size: 15px;
    color: #333;
  }
  .icon {
    position: absolute;
    left: 10px;
    top: 13px;
    cursor: pointer;
  }

  .mobile-container {
    position: relative;
    height: 180px;
    background: white;
    margin-top: 20px;
  }

  .mobile-content {
    display: flex;
    flex-direction: column;
    margin: 0 20px;
    line-height: 40px;
    padding-top: 80px;
    font-size: 13px;
  }

  .mobile-content input {
    border: none;
    border-bottom: 1px solid #dee1e6;
    text-indent: 5px;
    margin-top: 10px;
    padding-right: 100px;
    font-size: 13px;
  }

  .mobile_button{
    font-size: 14px;
    color: #fff;
    margin-top: 30px;
    border-radius: 5px;
    border: 1px solid #BB3343;
    background:#BB3343 ;
  }

  .mobile-get {
    position: absolute;
    right: 30px;
    border: 1px solid #333;
    background: white;
    top: 170px;
    height: 30px;
    width: 90px;
    border-radius: 3px;
    color: #999;
    border: 1px solid #999;
  }
  .right_mobile{
    color: #1989fa;
  }
  .login_color{
    background: #1989fa;
    border: 1px solid #1989fa;
    color: white;
  }
  .right_mobiles{
    color: red;
    font-size: 12px;
  }
  .code_login{
    font-size: 13px;
    text-align: right;
    padding-top: 10px;
  }

</style>
