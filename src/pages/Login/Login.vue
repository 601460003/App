<template>
<div >
<v-header title="登录" class="login-title">
  <span class="icon iconfont iconfanhui" slot="left" @click="shopMsg"></span>
</v-header>
  <div class="login">
    <div class="login-div2"><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2692288157,3206351884&fm=26&gp=0.jpg"/></div>
    <div class=" login-div login-active">微信登录</div>
    <div class="login-div">邮箱账号登录</div>
    <div class="login-div">手机号码登录</div>
    <div class="login-div1" @click="phone">手机快捷注册 ></div>
  </div>
</div>
</template>

<script>
  import header from '@/components/header'
    export default {
      components:{
        'v-header':header,
      },
      data(){
        return {

        }
      },
      methods:{
        shopMsg(){
          this.$router.go(-1)
        },
        phone(){
         // var p={
         //   mobile:'121231223'
         // }
         //  this.$axios.post('me/addMember',p).then(res=>{
         //
         //  })
          this.$router.push({path:'/Mobile'})
        },
      },
    }
</script>

<style scoped>
  .icon{
    position: absolute;
    left: 10px;
    top: 15px;
  }
  .login{
    margin: 80px 20px;
  }
  .login-div{
    width: 100%;
    text-align: center;
    font-size: 15px;
    margin-top: 15px ;
    border: 1px solid #BB3343;
    color: #BB3343;
    padding: 10px 0;
  }
  .login-div1{
    text-align: center;
    margin-top: 20px;
    color: #333;
    font-size: 13px;
  }
  .login-div2 img{
    width: 100%;
    height: 150px;
    border-radius: 10px;
  }
  .login-active{
    background: #BB3343;
    color: #fff;
  }
</style>
