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

      <!--傳送參數的頁面-->
      <!-- 1.命名的路由, 類似post-->
      <!-- <RouterLink to="/news" class="navLink">News</RouterLink> -->
      <!--vue 2.x, vue 3.x 的標準HTML 標籤-->
      <router-link :to="{name:'news',params:{headlines:'Apple On Sale'}}" class="navLink">News</router-link>  
      
      
      <!-- <RouterLink to="/products" class="navLink">Products</RouterLink> -->
       <!-- 2.帶查詢參數,網址 /products?fruit=Apple, 類似get -->
      <router-link :to="{path:'/products',query:{fruit:'Apple'}}" class="navLink">Products</router-link> <!-- OK-->

      <!-- OK -->
       <!-- Vue 3.x 版本 JSX -->
      <!-- <RouterLink  :to="{path:'/products',query:{fruit:'Apple'}}" class="navLink">Products</RouterLink> --> 

      <RouterLink to="/orderdb" class="navLink">Order System</RouterLink>

    </nav>
  </div>

  <Header />

  <RouterView />

  <!-- <MyCom />  -->
</template>

<style scoped>
</style>
