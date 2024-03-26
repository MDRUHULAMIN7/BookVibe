

const getStoredreadBooks=()=>{
 const storeReadBook=localStorage.getItem('read-books');

 if(storeReadBook){
    return JSON.stringify(storeReadBook);
 }
 return [];
}

const saveReadbooks=id=>{

const StoredreadBooks =getStoredreadBooks();

const exists =StoredreadBooks.find(bookid => 
     bookid === id);

    if(! exists){
        StoredreadBooks.push(id);
        localStorage.setItem('read-books',
        JSON.stringify(StoredreadBooks))
    }
    console.log(id);
}

export {saveReadbooks,getStoredreadBooks}