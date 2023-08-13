<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>

import TheHeader from './components/layout/header/TheHeader.vue'
export default {
 
  components: {TheHeader},
}
</script>

<style>
body{
  margin:0;
  /* font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
  padding:0;
}

</style>
