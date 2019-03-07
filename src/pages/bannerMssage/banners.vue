<template>
  <div>
    <!--头部组件-->
    <v-header title="创意">
      <span style="font-size: 14px;position: absolute;left: 11px;top: 15px;" slot="left" @click="back">返回</span>
    </v-header>
    <div style="margin: 5px 10px 80px;background: #fafafa">
      <div v-for="banner in contents" class="banner-img">
        <h1>{{banner.text}}</h1>
        <img v-if="banner.img" :src="banner.img"/>
      </div>
    </div>
  </div>
</template>

<script>
  import header from '@/components/header'

  export default {
    components: {
      'v-header': header,
    },
    data() {
      return {
        BannerMssage: [],
        contents: [],
      }
    },
    // 华升车行项目
    // 第一天学习到跳转路由加ID的方法
    mounted() {
      var information = 'home/getInformationById?id=' + this.$route.params.id;
      this.$axios.get(information)
        .then(res => {
          this.BannerMssage = res.data.data;
          let content = JSON.parse(this.BannerMssage.content);
          this.contents = content;
        })
    },
    methods:{
      back(){
        this.$router.go(-1)
      },
    },
  }
</script>

<style scoped>
  .banner-img h1{
    font-size: 16px;
    text-indent: 32px;
    font-weight: normal;
    color: #333;
  }
  .banner-img img {
    width: 100%;
    height: 250px;
  }
</style>
