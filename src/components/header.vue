<template>
  <div class="title-aheader">
    <slot name="left" ></slot>
   <span> {{title}}</span>
    <slot name="right"></slot>
  </div>
</template>

<script>
    export default {
      props:{
        title:String
      },
    }
</script>

<style scoped>
  .title-aheader{
    text-align: center;
    padding: 10px;
    font-size: 16px;
    background-color: #1989fa;
    color: #fff;
  }
</style>
