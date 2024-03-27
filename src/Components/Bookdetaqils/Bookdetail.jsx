import { useLoaderData, useParams } from "react-router-dom";


import 'react-toastify/dist/ReactToastify.css';
import { saveReadbooks } from "../../Utility/localstorage";
import { saveReadbooks2 } from "../../Utility/localstorage2";


const Bookdetail = () => {
    const books=useLoaderData();
    const {bookId}=useParams();
    const ids=parseInt(bookId)
    const book = books.find(book => book.bookId== ids);

    const{bookName,author,image,rating,category,tags,review,totalPages,publisher,yearOfPublishing}=book;
console.log(books,book);

const handleReadBook=()=>{

    
    saveReadbooks(ids);

}

// 
const handleWishBook=()=>{
  
  saveReadbooks2(ids)
}
// 
    return (
        <div className="lg:flex gap-4">
         
            <div className="card  bg-base-100 shadow-xl w-1/2 h-[700px]">
  <figure><img className="  h-[670px]" src={image}alt="Shoes" /></figure>
  </div>
  <div className="card-body ">
    <h2 className="card-title text-4xl">{bookName}</h2>
    <p className="text-xl">By : {author}</p>
    <hr />
    <p className="text-xl  font-semibold">{category}</p>
    <hr />
    <p><span className="font-bold">Review:</span>{review}</p>
    <div className="flex w-96 text-xl">
        <p className="font-bold">Tag</p>
        <p className="text-green-500 font-semibold rounded-xl ">#{tags[0]}</p>
        <p className="text-green-500 font-semibold rounded-xl ">#{tags[1]}</p>
    </div>
    <hr />
    <div className="w-2/3 mt-2">
        <div className="flex "><p>Number of Pages:</p> <p className="text-left font-bold flex justify-start">{totalPages}</p></div>
        <div  className="flex "><p>Publisher:</p> <p className="text-left font-bold flex justify-start">{publisher}</p></div>
        <div  className="flex "><p>Year of Publishing:</p> <p className="text-left font-bold">{yearOfPublishing}</p></div>
        <div  className="flex text-left"><p>Rating:</p> <p className="text-left font-bold">{rating}</p></div>
    </div>
        <div className="card-actions  mt-2">
      <button onClick={handleReadBook} className="btn px-6 text-xl">Read</button>
      <button onClick={handleWishBook} className="btn px-6 text-xl bg-[#50B1C9] text-white">Wishlist</button>
    </div>
  </div>

</div>
        
    );
};

export default Bookdetail;