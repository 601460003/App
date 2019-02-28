<template>
<div class="moreshop">
  <van-badge-group :active-key="activeKey" @change="onChange">
    <van-badge title="标签名称" />
    <van-badge title="标签名称" info="8" />
    <van-badge title="标签名称" info="99" />
    <van-badge title="标签名称" info="99+" />
  </van-badge-group>
</div>
</template>

<script>
    export default {
        data(){
          return{
            activeKey: 0
          }
        },
      methods: {
        onChange(key) {
          this.activeKey = key;
        }
      }
    }
</script>

<style scoped>

</style>
