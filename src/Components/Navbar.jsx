import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Context/AuthContext";
import { ToastContainer } from 'react-toastify';

const Navbar = () => {
    const { user, logout } = useContext(authContext);
  
    console.log(user?.displayName);

    const links = <>
     <Link>Home</Link>
     <Link to='/allmovie'>All Movies</Link>
     {
      user ?  
      <>
        <Link to='/addmovie'>Add Movie</Link>
        <Link to='/favmovie'>My Favorites</Link>
      </> :
      ''
     }
     <Link to='/blog'>Blog</Link>
    </>;

    const handleLogout = () => {
      console.log('done');
      logout();
    }

    return (
        <div className="m-2 rounded">
        <ToastContainer />
            <div className="navbar bg-gray-800 text-white rounded">
              <div className="navbar-start">

                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-52 p-2 shadow text-black flex flex-col gap-4 font-semibold">
                    {links}
                  </ul>
                </div>

                <Link to='/' className="text-lg md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-400">Reelora</Link>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex justify-center items-center gap-4 font-semibold">
                  {links}
                </ul>
              </div>

              <div className="navbar-end flex items-center gap-2">
                {/* <Link to='/login' className="border p-2 rounded-lg hover:bg-white hover:text-black transition-all cursor-pointer">Login</Link>
                <Link to='/register' className="border p-2 rounded-lg hover:bg-white hover:text-black transition-all cursor-pointer">Register</Link> */}
                {
                  user ?
                  <>
                    <button onClick={handleLogout} className="border p-2 rounded-lg hover:bg-white hover:text-black transition-all cursor-pointer">Logout</button>
                    <div className="tooltip tooltip-left cursor-pointer" data-tip={user?.displayName}>
                       <img 
                       className="h-12 w-12 border rounded-full cursor-pointer" 
                       src={user?.photoURL} alt="photo user" />
                    </div>
                  </> :
                  <>
                    <Link to='/login' className="border p-2 rounded-lg hover:bg-white hover:text-black transition-all cursor-pointer">Login</Link>
                    <Link to='/register' className="border p-2 rounded-lg hover:bg-white hover:text-black transition-all cursor-pointer">Register</Link>
                  </> 
                }
              </div>
            </div>
        </div>
    );
};

export default Navbar;