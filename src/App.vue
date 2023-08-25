<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component" :comp="slotProps.Component"></component>
      </transition>
  </router-view>
</template>

<script>

import TheHeader from './components/layout/header/TheHeader.vue'
export default {
 
  components: {TheHeader},
}
</script>

<style>
.route-enter-from,.route-leave-to{
  opacity: 0.2;
  transform: translateY(100px);
}
.route-enter-to, .route-leave-from{
  opacity: 1;
  transform: translateY(0px);
}
.route-enter-active{
  transition: all 0.5s ease-in;
}
.route-leave-active{
  transition: all 0.2s ease-out;
}

body{
  margin:0;
  /* font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
  padding:0;
}

</style>
