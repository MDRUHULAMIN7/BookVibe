import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";



const Home = () => {
    return (
        <div className="lg:mx-20 mx-2">
          

           <Navbar></Navbar>
           <Outlet></Outlet>
        </div>
    );
};

export default Home;