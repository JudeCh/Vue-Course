<!-- 
 script setup 是Vue3中所提供的syntactic sugar,使用方式非常簡單,只要在script標籤加上setup即可,如setup()一樣,所有變數、函數都可以直接給template使用
 -->

<script setup>
import { ref } from 'vue';
import FruitSpring from './FruitSpring.vue';
import FruitSummer from "./FruitSummer.vue";
import FruitTaiwan from './FruitTaiwan.vue';
const season="這個季節最好吃的水果是橘子";
const monthOnSale="芭樂";

// 對應的資料是靜態的,無法雙向綁定
// const name="";
// const price=0.0;
// const qty=0;

// 變數對應的資料是動態的
const name=ref("");
const price=ref(0.0);
const qty=ref(0);

const isVisible=ref(false);

const fruitVisible = () =>{
    isVisible.value=!isVisible.value;    //不能單純用isVisible=!isVisible ,isVisible已經是物件,要調用其屬性

};

</script>
<template>
    <h1>Welcom To Taiwan Fruit Stand</h1>
    <hr>
    <h3>{{ season }}</h3>    <!--資料單向綁定,最基本的數據綁定型式,使用雙大括號{{  }}  -->
    <p>本月特推水果:{{monthOnSale}}</p>    <!--在文件中插入Using text interpolation-->
    <p>本月特推水果:<span v-html="monthOnSale"></span></p>    <!--使用v-html插入Using text directive -->

    <!-- 資料雙向綁定,資料有改變,畫面就會隨之改變;畫面有變化,資料也會隨著改變 -->
    <input type="text" placeholder="Enter Name" v-model="name"/>
    <input type="number" placeholder="Enter Price" v-model="price"/>
    <input type="number" placeholder="Enter Qty" v-model="qty"/>
    <p>{{ name || null }}</p>    <!--加上||null 在沒輸入資料時候畫面不會出現-->
    <p>{{ price || null}}</p>
    <p>{{ qty || null}}</p>
    <p>total: {{ price*qty }} 元</p>
    <hr>
    <button @click="fruitVisible">The Current Display Fruit is: {{ isVisible ? "Spring" : "Summer"}}</button> <!--三元運算子, 條件 ? 成立: 不成立-->
    <hr>
    <!-- 節點多,建議
    <FruitSpring v-if="isVisible"/>
    <FruitSummer v-if="!isVisible"/> 
    -->

    <!-- 兩張圖都會渲染,其中一張style="display: none,較影響效能 -->
    <FruitSpring v-show="isVisible"/>
    <FruitSummer v-show="!isVisible"/>

    <hr>
    <FruitTaiwan />

    
</template>

<!-- 
scoped屬性的作用是避免父元件CSS樣式,會影響到仔元件的CSS樣式,如App.vue不會影響到MyCom.vue
-->
<style scoped>
input{
    display: block;
}
</style>