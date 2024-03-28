import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";



const Home = () => {
    return (
        <div className="lg:mx-20 mx-2">
          <Helmet>
            <title>Book Reviews | Home</title>
          </Helmet>

           <Navbar></Navbar>
           <Outlet></Outlet>
           <ToastContainer />
        </div>
    );
};

export default Home;