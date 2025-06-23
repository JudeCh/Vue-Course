<script setup>
</script>

<template>
    <div>
        <h1>Products</h1>  
        
        <!-- 接收參數的頁面-->
         <!-- 2.query -->

        <div>
            當季水果：{{ this.$route.query.fruit }}
        </div>
    </div>    
    
</template>

<style scoped>
    div{
        padding: 2.0vw;
    }
</style>