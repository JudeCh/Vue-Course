<script setup>
</script>
<template>
    <div>
        <<img src="/src/images/fruit/strawberry.jpg" />
        <p>
            草莓,有豐富的維生素C
        </p>>
    </div>
    
</template>
<style scoped>
/* 子元件的圖片不受影響,必須將scoped屬性移除,子元件的圖片樣式,才會改變 */
/* 可分別至FruitSpring, FruitSummer中設定 */
img{
    width: 20%;
    border-radius: 15px;
    padding: 1rem; 
    border: green solid 3px;
}
</style>