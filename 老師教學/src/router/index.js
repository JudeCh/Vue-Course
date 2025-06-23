import { createRouter,createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "../views/About.vue";
import News from "@/views/News.vue";
import Products from "@/views/Products.vue";

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',name:'home',component:Home},
        {path:'/about',name:'about',component:About},
        // {path:'/news',name:'news',component:News},
        {path:'/news/:headlines',name:'news',component:News},
        {path:'/products',name:'products',component:Products},
    ]
});

export default router;