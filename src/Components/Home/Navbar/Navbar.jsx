import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <Link  className="  text-black font-bold "  to='/'>Home</Link>
            <Link  className="  text-black font-bold"  to='/listedbooks'>Listed Books</Link>
            <Link className="  text-black font-bold" to='/pagestoread'>Pages to Read</Link>
             
       
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl text-black font-bold">Book Vibe</a>
        </div>
        <div className="justify-center items-center  hidden lg:flex text-black font-bold ">
          <ul className="menu menu-horizontal px-5 space-x-4 navbar-center">
            <NavLink  to='/' className={({isActive,isPending})=>
          isPending?'text-black':isActive?'text-green-500 border-2 border-green-500 rounded-xl px-3 py-2':''}>Home</NavLink>
            <NavLink  to='/listedbooks' className={({isActive,isPending})=>
          isPending?'text-black':isActive?'text-green-500 border-2 border-green-500 rounded-xl px-3 py-2':''}>Listed Books</NavLink>
            <NavLink  to='/pagestoread' className={({isActive,isPending})=>
          isPending?'text-black':isActive?'text-green-500 border-2 border-green-500 rounded-xl px-3 py-2':''}>Pages to Read</NavLink>
   
            <NavLink  to='/newbooks' className={({isActive,isPending})=>
          isPending?'text-black':isActive?'text-green-500 border-2 border-green-500 rounded-xl px-3 py-2':''}>NewBooks</NavLink>
   
            
          </ul>
        </div>
        <div className="navbar-end text-white font-bold">
      
          <a className="btn bg-[#23BE0A]">Sign in</a>
          <a className="btn bg-[#59C6D2] ">Sign up</a>
        </div>
      </div>
    );
};

export default Navbar;