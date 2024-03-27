import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Home = () => {
    return (
        <div className="lg:mx-20 mx-2">
          

           <Navbar></Navbar>
           <Outlet></Outlet>
           <ToastContainer />
        </div>
    );
};

export default Home;