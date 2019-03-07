<template>
<div>
  <v-header title="搜索">
    <span class="icon iconfont iconfanhui" slot="left" @click="back"></span>
  </v-header>
  <div>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"

    >
      <div slot="action" >搜索</div>
    </van-search>
  </div>
</div>
</template>

<script>
  import header from '@/components/header'
    export default {
    data(){
      return{
        value:'',
      }
    },
    components:{
      'v-header':header
    },
      methods:{
        back(){
          this.$router.go(-1)
        }
      },

    }
</script>

<style scoped>
.icon{
  position: absolute;
  left: 10px;
  top: 13px;
}

</style>
