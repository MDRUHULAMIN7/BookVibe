import { Link } from 'react-router-dom';
import star from '../../../public/images/Frame (1).png'

const Book = ({book}) => {
    const{bookId,bookName,author,image,rating,category,tags}=book;
    return (

      <Link to={`/book/${bookId}`}>
        <div className="card  bg-base-100 shadow-xl border-2 border-base-200">
        <figure className="bg-base-300 m-4 rounded-2xl"><img className="p-3" src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <div className="flex gap-4 text-green-500 font-bold"><h1 className="bg-base-200 p-2 rounded-xl">{tags[0]}</h1><h1 className="bg-base-200 p-2 rounded-xl">{tags[1]}</h1> </div>
          
          <h2 className="card-title text-2xl font-bold">{bookName}</h2>
          <p className="font-semibold mb-2">{author}</p>
          <hr />



          <div className="flex justify-between">
            <div>  <h1>{category}</h1></div>
            
                      
            <div className='flex gap-4'>
          <h1>{rating}</h1>
      <img src={star} alt="" />
            </div>
          </div>

          </div>
        </div></Link>
      
      
    );
};

export default Book;