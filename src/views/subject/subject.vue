<template>
  <div class="subject_title">
    <!--专题头部-->
    <v-header title="专题"></v-header>
    <div v-for="car in carList" >
      <!--头像-->
      <div class="subject_icon_box">
        <img class="subject_icon" :src="car.portrait" />
        <span class="subject_mobile">{{car.mobile}}</span>
      </div>
      <!--专题评论-->
      <div class="subject_content">
        <!--大图片-->
       <div class="subject_img">
         <img :src="car.img" height="100px"/>
       </div>
        <!--评论标题-->
        <div>
          <!--<span style="float: right;color: #f44;padding-right: 10px;font-size: 14px">{{car.price}}元</span>-->
          <h3>{{car.name}}</h3>
        </div>
        <p class="comment_p" >{{car.comment}}</p>
      </div>
      <spilt></spilt>
    </div>
  </div>
</template>

<script>
  import header from '@/components/header'
  import spilt from '@/components/spilt'

  export default {
    data() {
      return {
        carList: [],
      }
    },
    components: {
      'v-header': header,
      'spilt': spilt,
    },
    created() {
      // 我的调试API
     // https://www.easy-mock.com/mock/5c7e40655613ca634951821a/
      this.$axios.get('subject/list')
        .then(res => {
          this.carList = res.data.data
        })
    },
  }
</script>

<style scoped>
  .comment_p {
    color: #999;
    font-size: 12px;
    line-height: 16px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    padding-right: 8px;
  }
  h3{
    font-weight: normal;
    color: #333;
    font-size: 14px;
  }
  .subject_title{
    margin-bottom:40px ;
  }
  .subject_icon {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    vertical-align: middle;
  }
  .subject_icon_box{
    padding: 10px;
  }

  .subject_mobile {
    padding-left: 3px;
    font-size: 13px;
  }

  .subject_content {
    line-height: 10px;
    padding: 0 10px;
  }
  .subject_img{
    text-align: center;
  }

</style>
