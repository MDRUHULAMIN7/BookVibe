import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <div className='bg-base-300 px-20 py-10 rounded-2xl my-auto'><h1 className='text-5xl font-bold text-center text-red-500'>Oops Not Found Page!</h1>
            <Link to={'/'} className="text-black font-bold bg-green-500 px-3 py-2 rounded-xl">Go Back Home</Link>
            </div>
        </div>
    );
};

export default Error;