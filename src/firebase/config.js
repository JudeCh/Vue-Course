
// 從SDK 匯入要的函數, initializeApp()
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Firebase 網頁的組態,指給firebaseConfig 物件常數
const firebaseConfig = {
  apiKey: import.meta.FIREBASE_APIKEY,
  authDomain: "myvue-76877.firebaseapp.com",
  projectId: "myvue-76877",
  storageBucket: "myvue-76877.firebasestorage.app",
  messagingSenderId: "634438993801",
  appId: "1:634438993801:web:5094aa549b67ea9f54c358"
};


//Firebase 初始化
const app = initializeApp(firebaseConfig);

//建立連結資料庫的物件
export const db=getFirestore(app);
