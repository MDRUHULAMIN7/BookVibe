import { getStoredreadBooks } from "./localstorage";
import {  toast } from 'react-toastify';

const getStoredreadBooks2=()=>{
    const storeReadBook=localStorage.getItem('wish-books');
   
    if(storeReadBook){
       return JSON.parse(storeReadBook);
    }
    return [];
   }
   
   const saveReadbooks2=id=>{
   
   const storedreadBooks =getStoredreadBooks2();
   const storedreadBooks2=getStoredreadBooks();
   console.log(storedreadBooks);
   const exists2 =storedreadBooks2.find(bookid2 => bookid2 === id);
   const exists = storedreadBooks.find(bookid => bookid === id);

   if(!exists2){
    if(!exists){
        storedreadBooks.push(id);
        console.log(storedreadBooks);
        localStorage.setItem('wish-books',
        JSON.stringify(storedreadBooks))
        toast.success('book added to Wishlist Books')
    }
    else{
        toast.warning('this book already added Wishlist Books')
       
    }
   }
   else{
    toast.warning('this book already added to Readbooks')
   }

     
       console.log(id);
       
   }
  
   export {saveReadbooks2,getStoredreadBooks2}