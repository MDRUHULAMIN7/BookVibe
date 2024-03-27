

const getStoredreadBooks2=()=>{
    const storeReadBook=localStorage.getItem('wish-books');
   
    if(storeReadBook){
       return JSON.parse(storeReadBook);
    }
    return [];
   }
   
   const saveReadbooks2=id=>{
   
   const storedreadBooks =getStoredreadBooks2();
   console.log(storedreadBooks);
   const exists = storedreadBooks.find(bookid => bookid === id);
   
       if(!exists){
           storedreadBooks.push(id);
           console.log(storedreadBooks);
           localStorage.setItem('wish-books',
           JSON.stringify(storedreadBooks))
       }
       console.log(id);
   }
   
   export {saveReadbooks2,getStoredreadBooks2}