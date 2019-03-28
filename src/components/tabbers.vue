<template>
<div>
  <van-tabbar v-model="active" style="z-index: 1999"   @change="isActive()">
    <van-tabbar-item
      v-for="(tab, index) in tabbar"
      :icon="tab.icon"
      :to="tab.path"
      :dot="tab.dot"
      :info="tab.info"
      :key="index"
    >
      {{tab.name}}
    </van-tabbar-item>
  </van-tabbar>
  <!--购物车图标的小红圈-->
  <!--<div class="shopNunber">{{shopsCount}}</div>-->
</div>
</template>

<script>
    export default {
      // props:{
      //   active:{
      //     type:Number,
      //     value:0
      //   }
      // },
      // 这是第一种方法利用props传参显示导航tab
      // computed: {
      //   isActive: {
      //     get: function () {
      //       return this.active
      //     },
      //     set() {
      //     }
      //   }
      // },
      mounted(){
        var user = localStorage.getItem("user");
        if(user){
          this.mobileID = JSON.parse(user).id;
          // 通过get请求返回数据获取购物车的信息
          this.$axios.get('home/getCar?sessionId=' + this.mobileID)
            .then(res => {
              if (res.data.code == 100){
                if (res.data.data) {
                  console.log(res)
                  this.shopsCount = res.data.data.total
                }
              }
            })
        }else {

        }
      },
      data(){
          return{
            active: 0,
            shopsCount:0,
            tabbar: [
              {
                name: '精选',
                path: '/home',
                pathName: 'home',
                icon: 'wap-home',
                dot: false,
              },
              {
                name: '专题',
                path: '/subject',
                pathName: 'subject',
                icon: 'vip-card-o',
                dot: false,
                info: ''
              },
              // {
              //   name: '分类',
              //   path: '/shoplist',
              //   pathName: 'shoplist',
              //   icon: 'orders-o',
              //   dot: false,
              //   info: ''
              // },
              {
                name: '购物车',
                path: '/shopcar',
                pathName: 'shopcar',
                icon: 'shopping-cart-o',
                dot: false,
                info:''
              },
              {
                name: '个人',
                path: '/me',
                pathName: 'me',
                icon: 'manager-o',
                dot: false,
                info: ''
              }

            ]
          }
      },
      methods:{
        isActive(e){
          // console.log(e)
          // this.active=value;
        },
      },
    }
</script>
<style scoped>
  .shopNunber{
    position: fixed;
    right: 94px;
    bottom: 32px;
    color: #fff;
    font-size:13px;
    font-weight: 500;
    font-family: PingFang SC,Helvetica Neue,Arial,sans-serif;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    /*padding:1px;*/
    min-width: 0.42667rem;
    border: 0.02667rem solid #fff;
    border-radius: 0.42667rem;
    background-color: #f44;
    z-index: 2000;
  }
</style>

