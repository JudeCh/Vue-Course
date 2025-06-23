
<!--
script setup 是Vue3  中所提供syntacitc sugar,使用方式非常簡單,只要在script 標籤加上setup 即可以,就如setup()一樣,
所有的變數,函數都可以直接給template模板使用。
-->
<script setup>
import { ref } from 'vue';
import FruitSpring from './FruitSpring.vue';
import FruitSummer from './FruitSummer.vue';
import FruitTaiwan from './FruitTaiwan.vue';


const season="這個季節最好吃的水果是橘子";
const monthOnSale='巴樂';

// const name='';   //變數對應的資料是靜態的
// const price=0.0;
// const qty=0;

const name=ref(''); //變數對應的資料是動態的
const price=ref(0.0);
const qty=ref(0);

const isVisible=ref(false);

const fruitVisible=()=>{
    isVisible.value=!isVisible.value;
}

</script>

<template>
    <h1>Welcome to Taiwan Fruit Stand</h1>
    <hr>
    <h3>{{ season }}</h3>   <!--資料單向綁定,最基本的數據綁定形式,使用雙大括號-->

    <p>本月特推水果：{{ monthOnSale }}</p>  <!--在文件中插入  Using text interpolation-->
    <p>本月特推水果：<span v-html="monthOnSale"></span></p><!--使用v-html 來播出 Using v-html directive -->

    <!--資料雙向綁定,資料有改變,畫面會隨之改變;畫面有變化,資料會隨著改變-->
    <input type="text" placeholder="Enter Name" v-model="name" />
    <input type="number" placeholder="Enter Price" v-model="price" />
    <input type="number" placeholder="Enter Qty" v-model="qty" />
    <p>{{ name || null }}</p>
    <p>{{ price || null }}</p>
    <p>{{ qty || null }}</p>
    <p>總計為{{ price*qty }} 元</p> 


    <hr>

    <!-- <button v-on:click="fruitVisible">The Current display fruit</button> -->
    <button @click="fruitVisible">The Current display fruit is : {{ isVisible ? 'Spring':'Summer' }}</button>
    <hr>
    <!-- <FruitSpring v-if="isVisible" />
    <FruitSummer v-if="!isVisible" /> -->

    <FruitSpring v-show="isVisible" />
    <FruitSummer v-show="!isVisible" />
    <hr>
    <FruitTaiwan />
 
</template>


<!-- scoped 屬性的作用是避免父元件的CSS樣式,會影響到子元件的CSS 樣式。-->
<style scoped>
input{
    display: block;
}


/* 子元件的圖片不受影響,必須將 scoped 屬性移除,子元件圖片的樣式,才會改變 。
可分別至FruitSpring,FruitSummer 檔內設定
*/
img{
    width: 30%;
    border-radius: 25px;
}
</style>