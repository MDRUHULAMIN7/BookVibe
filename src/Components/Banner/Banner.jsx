import { Link } from 'react-router-dom';
import pic from '../../../public/images/pngwing 1.png'
import Books from '../Books/Books';

const Banner = () => {
    return (
        
       <div>
         <div className='lg:flex bg-[#f5f5f4]  lg:px-5 px-2 lg:py-10 rounded-2xl'>
            <div className='space-y-14 text-center w-1/2 my-auto' ><h1 className="text-5xl text-center items-center text-black font-extrabold ">Books to freshen up <br /> your bookshelf</h1>
            <Link to={'/listedbooks'} className='btn bg-[#23BE0A] font-bold text-white'>View the list</Link>
            </div>
            <div className='w-1/2 flex justify-center'><img src={pic} alt="" /></div>
            
        </div>
        <Books></Books>
       </div>
    );
};

export default Banner;