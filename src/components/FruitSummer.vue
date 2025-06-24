<script setup>
</script>
<template>
    <div>
        <img src="/src/images/fruit/mango.jpg" />
        <p>
            芒果,賀呷!
        </p>
    </div>
</template>
<style scoped>
/* 子元件的圖片不受影響,必須將scoped屬性移除,子元件的圖片樣式,才會改變 */
/* 可分別至FruitSpring, FruitSummer中設定 */
img{
    width: 30%;
    border-radius: 25px;
    padding: 3rem; 
    border: gold solid 3px;
}
</style>