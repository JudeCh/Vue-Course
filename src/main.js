//真正的網頁入口寫在這個main.js

// 預設的CSS
import './assets/main.css'

//使用createApp函數
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
//import { useRouter } from 'vue-router'

// 預設
// createApp(App).mount('#app')

//呼叫createApp(App)建立app常數物件,用該常數呼叫use(路由),再用該常數物件呼叫mount
const app=createApp(App);
app.use(router);
app.mount("#app");