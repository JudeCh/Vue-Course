<template>
  <!-- App.vue預設
   <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  <MyCom />
</template>

<script>
// App.vue預設
// import HelloWorld from './components/HelloWorld.vue'
// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }

import MyCom from './components/MyCom.vue'
// 全域要export，專案版不用
export default{
  name:"App",
  components:{
    MyCom
  }
}



</script>

<style>
/* App.vue預設 
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
 
</style>
