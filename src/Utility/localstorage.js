

const getStoredreadBooks=()=>{
 const storeReadBook=localStorage.getItem('read-books');

 if(storeReadBook){
    return JSON.parse(storeReadBook);
 }
 return [];
}

const saveReadbooks=id=>{

const storedreadBooks =getStoredreadBooks();
console.log(storedreadBooks);
const exists = storedreadBooks.find(bookid => bookid === id);

    if(!exists){
        storedreadBooks.push(id);
        console.log(storedreadBooks);
        localStorage.setItem('read-books',
        JSON.stringify(storedreadBooks))
    }
    console.log(id);
}

export {saveReadbooks,getStoredreadBooks}