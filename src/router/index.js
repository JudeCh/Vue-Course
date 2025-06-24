import { createRouter,createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "../views/About.vue";
import News from "@/views/News.vue";
import Products from "@/views/Products.vue";
import OrderDB from "@/views/OrderDB.vue";

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',name:'home',component:Home},
        {path:'/about',name:'about',component:About},
        // {path:'/news',name:'news',component:News},
        {path:'/news/:headlines',name:'news',component:News},   //使用 1. params ,必須修改路由
        // {path:'/products',name:'products',component:Products},
        {path:'/products',name:'products',component:()=>import('../views/Products.vue')}, //使用2.query, 不須改路由

        {path:'/orderdb',name:'orderdb',component:OrderDB},
    ]
});

export default router;