<script setup>
    const imgInfo=[
        "荔枝 原生自中國南方的亞熱帶水果 " ,      
        "蘋果 含有大量的膳食纖維及維他命C",
        "香蕉 富含膳食纖維中的果膠，可促進腸蠕動",
        "葡萄 營養豐富，含有多種礦物質",
        "西瓜 香甜多汁，被稱為「夏季瓜果之王」",
        "芒果 富含大量的維生素C，抗氧化及美膚",
        "草莓 擁有豐富的維生素C",
        "櫻桃 中醫古籍稱「滋潤皮膚」、「令人好顏色，美態」",
        "巴樂 含豐富維生素C，低熱量、高纖維、水分高",
        "龍眼 色澤晶瑩、肉質鮮嫩、甜美爽口",
        "桃子 果皮光澤具彈性、絨毛綿密，果實飽滿",
        "鳳梨 果肉中的酵素能解油膩、助消化、降血壓",
    ];
    
</script>
<template>
    <div v-for="(img, i) in imgInfo" :key="i" class="mytxt">{{ img }}</div>
    
</template>
<style scoped>
    .mytxt{
        font-size: 30px;
        animation: imgInfo 1s ease-in-out;
    }

    @keyframes  imgInfo {
        0%{
            opacity: 0.0;
        }
        100%{
            opacity: 1.0;
        }
    }
</style>