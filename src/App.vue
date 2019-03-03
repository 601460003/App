<template>
  <div id="app">
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

</style>
