import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Navber = () => {
  const { user, logOut } = use(AuthContext);

  const haldleLogout = () => {
    logOut()
    .then(result=>{
        console.log(result);
        toast("You LogOut Successfully")
    })
    .catch(error=>{
        console.log(error.message);
    })
      
  };

  return (
    <div>
      <nav className="flex justify-between items-center">
        <div className=""> {user && user.email}</div>
        <div className="nav flex gap-4 items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
        </div>
        <div className="login-btn flex items-center gap-2">
          <img className="rounded-full w-12" src={`${user? user.photoURL : userImg}`} alt="" />
          {user ? (
            <button
              onClick={haldleLogout}
              className="btn btn-primary text-white px-5 py-3"
            >
              LogOut
            </button>
          ) : (
            <Link
              to="/auth/login"
              className="btn btn-primary text-white px-5 py-3"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navber;
