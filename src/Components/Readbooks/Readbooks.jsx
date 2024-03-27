import { useEffect, useState } from "react";
import { getStoredreadBooks } from "../../Utility/localstorage";

import pic1 from "../../../public/images/location.png"
import pic2 from "../../../public/images/pub.png"
import pic3 from "../../../public/images/Frame.png"
import { Link } from "react-router-dom";
const Readbooks = () => {

    const [books,setbooks]=useState([]);
    const[readbook,setReadbook]=useState([]);

 console.log(readbook);
    useEffect(()=>{
        fetch('Books.json')
        .then(res=> res.json())
        .then(data=>setbooks(data))
    },[]);
    console.log(books);

    useEffect( ()=>{
        const storedbookid = getStoredreadBooks();
        console.log(storedbookid);
        if(books.length > 0){
            const bookread = [];
            for(const id of storedbookid){
                const book =books.find(book=> book.bookId === id);
                if(book){
                    bookread.push(book);
                  
                }
              
               
            }
           
            setReadbook(bookread)
        }

       
    },[books])
  
    return (
        <div>
            <h1 className="text-4xl text-green-500 font-bold text-center my-4">Read Books:{readbook.length}</h1>

            
                <div>
                    {
   readbook.map(readlistbook=><div className="m-5" key={readlistbook.id}>
  
  
    <div className=" lg:flex gap-10 bg-base-100 shadow-xl rounded-2xl">
  
    <div className="bg-base-300 p-10 rounded-xl m-4">
    <img src={readlistbook.image}alt="Shoes" />
    </div>
  <div className="space-y-2 m-4">
    <h2 className="card-title text-3xl font-bold">{readlistbook.bookName}</h2>
    <p className="text-xl">By:{readlistbook.author}</p>
    <div className="flex text-xl gap-5">
        <p className="font-bold">Tag</p>
        <p  className="text-green-500 font-semibold rounded-xl">#{readlistbook.tags[0]}</p>
        <p className="text-green-500 font-semibold rounded-xl">#{readlistbook.tags[1]}</p>
        <h1 className="flex gap-3"><img src={pic1} alt="" />Year of Publishing : {readlistbook.yearOfPublishing}</h1>
    </div>
    <div className="flex gap-3 text-xl my-3">
        <p className="flex gap-3"><img src={pic2} alt="" />Publisher : {readlistbook.publisher}</p> 
        <p className="flex gap-3"><img src={pic3} alt="" />Pages : {readlistbook.totalPages}</p>
      
        </div>
        <hr />
      <button className="btn btn-primary bg-blue-300 text-blue-600 rounded-full">Category:{readlistbook.category}</button>
      <button className="btn btn-primary bg-orange-200 text-orange-500 rounded-full mx-4">Rating :        
         {readlistbook.rating}</button>

         <Link to={`/book/${readlistbook.bookId}`}>   <button className="btn btn-primary  bg-green-500 text-white rounded-full my-8">View Details</button></Link>
   
 
  </div>
</div>
   </div>)
                    }
                 
                </div>
            
        </div>
    );
};

export default Readbooks;