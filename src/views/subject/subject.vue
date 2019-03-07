<template>
  <div style="margin-bottom: 40px">
    <v-header title="专题"></v-header>
    <div v-for="car in carList" style="border-bottom: 1px solid #F4F0EA;">
      <div style="background: white;padding: 10px">
        <img :src="car.icon" width="40" height="40" style="border-radius: 50px;vertical-align: middle"/>
        <span>{{car.name}}</span>
      </div>
      <div style="line-height: 10px;padding:0 10px">
        <img :src="car.imgs" width="100%" height="250px"/>
        <div>
          <span style="float: right;color: #f44;padding-right: 10px;font-size: 14px">{{car.price}}元</span>
          <p style="font-size: 15px;color: #333">{{car.title}}</p>
        </div>
        <p style="color: #999;font-size: 14px;padding-bottom: 10px">{{car.describe}}</p>
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
      this.$axios.get('https://www.easy-mock.com/mock/5c7e40655613ca634951821a/')
        .then(res => {
          this.carList = res.data.data
        })
    },
  }
</script>

<style scoped>

</style>
