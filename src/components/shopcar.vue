<template>
 <div>
   <div style="text-align: center;font-size: 18px;padding: 10px">
     <span style="float: right;font-size: 16px ">编辑</span><span>购物车</span>
   </div>
   <div class="imgs-title">
     <span>8小时内快速发货</span>
     <span>30天内无忧退货</span>
     <span>48小时内快速退货</span>
   </div>
   <div >
     <div style="background: white;">
       <div style="float: left">
         <input type="radio" >
         <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2308971841,1416905536&fm=26&gp=0.jpg" width="100px"  height="100px" style="vertical-align: middle;padding-right: 10px" />
       </div>
       <div style="margin-top: 15px"> <span style="float: right;padding-right: 15px">X2</span> <p>正新轮胎35-10</p></div>
       <p style="padding-top: 30px;color: red">￥68.00</p>
     </div>
     <div>
       <van-submit-bar :price="6800" button-text="下单"/>
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
  .imgs-title{
    font-size: 12px;
    color: #d10643;
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    padding: 8px;
    border: 1px solid #dadada;
  }
  .imgs-title span{
    background: url("../assets/icon.png") no-repeat;
    background-size:15px ;
    padding-left: 16px;
  }
</style>
