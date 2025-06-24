<script setup>
import {db} from "../firebase/config";
import {collection,getDocs,addDoc,doc,setDoc,getDoc,updateDoc,deleteDoc} from "firebase/firestore";
import {ref, onMounted } from 'vue'

onMounted(async()=>{
    const fruitColl=collection(db,'Fruit'); //取得Fruit集合
    const fruitDoc= await getDocs(fruitColl);   //取得Fruit 文件    
    const fruitList=fruitDoc.docs.map(doc=>doc.data()); //取得每一筆文件,指定給fruitList
    console.log(fruitList);
    console.log(fruitList[0]);
    console.log(fruitList[1]);
    console.log(fruitList[2]);
}
);


const fruits=ref([]);
onMounted(async()=>{
    const fruitColl=collection(db,'Fruit'); //取得Fruit集合
    const fruitDoc= await getDocs(fruitColl);   //取得Fruit 文件    

    //...展開運算子(spread operator),陣列合併
    //以前通常採用concat 語法來合併陣列
    fruitDoc.forEach((fruit)=>{
        fruits.value.push({...fruit.data(),id:fruit.id})
    })
    
}
);

//設定初值
const fruitName=ref('');
const fruitPrice=ref(0);
const fruitQty=ref(0);

const fruitID=ref('');

//新增記錄
const addData=async()=>{
    await addDoc(collection(db,'Fruit'),{
        name:fruitName.value,
        price:fruitPrice.value,
        qty:fruitQty.value
    }).then(()=>{
        alert("新增記錄OK!!");
        fruitName.value=''
        fruitPrice.value=0
        fruitQty.value=0
    });
}

//搜尋資料
const searchData=async()=>{
    const docRef=doc(db,'Fruit',fruitID.value);
    const docSnap=await getDoc(docRef)

    //判斷文件是否存在
    if(docSnap.exists()){
        var data=docSnap.data();
        fruitName.value=data['name'];
        fruitPrice.value=data['price'];
        fruitQty.value=data['qty'];
    }
}

//更新資料
const updateData=async()=>{
    const docRef=doc(db,'Fruit',fruitID.value);
    await updateDoc(docRef,{
        name:fruitName.value,
        price:fruitPrice.value,
        qty:fruitQty.value
    }).then(function(){
        alert(fruitID.value + " 水果修改成功!");
    })
}

//刪除文件
const deleteData=async()=>{
     await deleteDoc(doc(db,'Fruit',fruitID.value))
        .then(()=>{
            alert(fruitID.value + ' 水果已刪除!!');
        })
}


</script>

<template>
    <div>
        <h1>Order System</h1>
        <hr>
        <div style="float: left;">
            <div v-for="f in fruits" :key="f.id">
                <span>{{ f.id }}</span>
                <pre>
                    {{ JSON.stringify(f,null,6) }}
                </pre>
                <hr>
            </div>
        </div>

        <div style="float: left;">
            <!-- <form @submit.prevent="addData"> -->

                <input type="text" placeholder="Enter Fruit" v-model="fruitID" />
                <button @click="searchData">SEARCH</button>
                <hr>
                <input type="text" placeholder="Enter Fruit" v-model="fruitName"/>
                <input type="number" placeholder="Enter Price" v-model="fruitPrice"/>
                <input type="number" placeholder="Enter Qty" v-model="fruitQty"/>
                <button @click="addData">ADD</button>               
                <button @click="updateData">UPDATE</button>
                <button @click="deleteData">DELETE</button>
            <!-- </form> -->
        </div>
    </div>
</template>

<style scoped>
    div{
        padding: 2.0vw;
    }

    input{
        display: block;
    }
</style>