import { useEffect, useState } from "react";

import pic4 from '../../../public/images/location.png'
import pic5 from '../../../public/images/pub.png'
import pic6 from '../../../public/images/Frame.png'
import { getStoredreadBooks2 } from "../../Utility/localstorage2";
import {Link} from"react-router-dom";



const Wishlist = () => {
    const [books2,setbooks2]=useState([]);
    const [wishbook,setWishbook]=useState([])
console.log(wishbook);
    useEffect(()=>{
        fetch('Books.json')
        .then(res=> res.json())
        .then(data=>setbooks2(data))
    },[]);

    useEffect(()=>{
        const storedbookid = getStoredreadBooks2();
 
  
           
               
                    if(books2.length>0){
                        const bookwish=[];
                        for(const id of storedbookid){
                            const book2 = books2.find(book2=>book2.bookId===id);
                            if(book2){
                                bookwish.push(book2);
                            
                            }
                        }
                        setWishbook(bookwish)
                }
              
            
        
        
            
        
    },[books2]);
    return (
    
       

     <div>
 <h1 className="text-4xl text-green-500 font-bold text-center my-4">WishBooks:{wishbook.length}</h1>
{/*  */}
<div>
                    {
   wishbook.map(wishbook=><div className="m-5" key={wishbook.id}>
  
  
    <div className=" lg:flex gap-10 bg-base-100 shadow-xl rounded-2xl">
  
    <div className="bg-base-300 p-10 rounded-xl m-4">
    <img src={wishbook.image}alt="Shoes" />
    </div>
  <div className="space-y-2 m-4">
    <h2 className="card-title text-3xl font-bold">{wishbook.bookName}</h2>
    <p className="text-xl">By:{wishbook.author}</p>
    <div className="flex text-xl gap-5">
        <p className="font-bold">Tag</p>
        <p  className="text-green-500 font-semibold rounded-xl">#{wishbook.tags[0]}</p>
        <p className="text-green-500 font-semibold rounded-xl">#{wishbook.tags[1]}</p>
        <h1 className="flex gap-3"><img src={pic4} alt="" />Year of Publishing : {wishbook.yearOfPublishing}</h1>
    </div>
    <div className="flex gap-3 text-xl">
        <p className="flex gap-3"><img src={pic5} alt="" />Publisher : {wishbook.publisher}</p> 
        <p className="flex gap-3"><img src={pic6} alt="" />Pages : {wishbook.totalPages}</p>
        </div>

        <hr />
      <button className="btn btn-primary bg-blue-300 text-blue-600 rounded-full">Category:{wishbook.category}</button>
      <button className="btn btn-primary bg-orange-200 text-orange-500 rounded-full mx-4">Rating :        
         {wishbook.rating}</button>

         <Link to={`/book/${wishbook.bookId}`}>   <button className="btn btn-primary  bg-green-500 text-white rounded-full my-8">View Details</button></Link>
 
  </div>
</div>
   </div>)
                    }
                 
                </div>


     </div>
)};

export default Wishlist;