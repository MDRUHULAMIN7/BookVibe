import { useEffect } from "react";
import { useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books,setBooks]=useState([]);

    useEffect(()=>{
        fetch('Books.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    }

    ,[])
    return (
        <div className="mt-10">
            <h1 className="text-5xl text-black font-bold text-center">Books:{books.length}</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">  {books.map(book=><Book key={book.id} book={book}></Book>)}</div>
          
        </div>
    );
};

export default Books;