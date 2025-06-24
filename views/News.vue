<script setup>
</script>

<template>
    <div>
        <h1>News</h1>    

        <!-- 接收參數的頁面 -->
        <!--1 . params -->
        <p>本日特價：{{ this.$route.params.headlines }}</p>
     
    </div>    
    
</template>

<style scoped>
    div{
        padding: 2.0vw;
    }
</style>