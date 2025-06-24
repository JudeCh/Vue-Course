<script setup>
</script>
<template>
    <div>
        <h1>News</h1>
        <p>本日特價:{{this.$route.params.headlines}}</p>
    </div>
</template>
<style scoped>
    div{
        padding: 10%;
    }
</style>