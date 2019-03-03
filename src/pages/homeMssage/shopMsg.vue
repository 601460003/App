<template>
    <div>
     <h1 @click="shopMsg">X</h1>

    </div>
</template>

<script>
    export default {
        name: "shop-msg",


      methods:{
        shopMsg(){
          window.history.go(-1)
        },
      },
    }
</script>

<style scoped>

</style>
