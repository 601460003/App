<template>
  <div id="app">
   <!--<transition >-->
   <!--</transition>-->
    <router-view/>
    <v-tabber></v-tabber>
  </div>
</template>

<script>
  import tabbers from './components/tabbers'
  export default {
    data() {
      return {}
    },
    components: {
      'v-tabber': tabbers,
    }
  }
</script>

<style scoped>
.v-enter{
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
  .v-enter-active,
  .v-leave-active{
    transition: all 0.6s ease;

  }
</style>
