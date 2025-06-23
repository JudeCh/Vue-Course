<script setup>
// import MyCom from './components/MyCom.vue';
import { RouterLink,RouterView } from 'vue-router';
import Header from './components/Header.vue';
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/" class="navLink">Home</RouterLink>
      <RouterLink to="/about" class="navLink">About</RouterLink>
      <!-- <RouterLink to="/news" class="navLink">News</RouterLink> -->

      <router-link :to="{name:'news',params:{headlines:'Apple On Sale'}}" class="navLink">News</router-link>
     


      <RouterLink to="/products" class="navLink">Products</RouterLink>
    </nav>
  </div>

  <Header />

  <RouterView />

  <!-- <MyCom />  -->
</template>

<style scoped>
</style>
