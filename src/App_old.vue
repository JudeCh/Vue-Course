<script setup>
// App.vue預設
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'

// 調用FruitSpring、Summer、Taiwan物件
// import MyCom from "./components/MyCom.vue"

import { RouterLink } from 'vue-router';
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';

</script>

<template>
  <!-- App.vue預設
   <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->

  <!-- <MyCom /> -->

  <div>
    <nav>
      <RouterLink to="/" class="navLink">Home</RouterLink>
      <RouterLink to="/about" class="navLink">About</RouterLink>
      <!-- <RouterLink to="/news" class="navLink">News</RouterLink> -->
       <!-- Vue內建的route-link路由 -->
      <router-link :to='{name:"news", params:{headlines:"Apple On Sale"}}'>新聞</router-link>
      <RouterLink to="/products" class="navLink">Products</RouterLink>
    </nav>
    <Header />
  </div>
  <RouterView></RouterView>

</template>

<style scoped>
/* App.vue預設
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
