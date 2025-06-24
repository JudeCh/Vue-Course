
// 從SDK 匯入要的函數, initializeApp()
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Firebase 網頁的組態,指給firebaseConfig 物件常數
const firebaseConfig = {
  apiKey: import.meta.FIREBASE_APIKEY,
  authDomain: "front241229.firebaseapp.com",
  projectId: "front241229",
  storageBucket: "front241229.firebasestorage.app",
  messagingSenderId: "137230429021",
  appId: "1:137230429021:web:e6572831de900b974396b4"
};


//Firebase 初始化
const app = initializeApp(firebaseConfig);

//建立連結資料庫的物件
export const db=getFirestore(app);
