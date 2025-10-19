import React from 'react';
import { Link, NavLink } from 'react-router';
import userImg from "../assets/user.png"

const Navber = () => {
    return (
        <div>
            <nav className='flex justify-between items-center'>
                <div className=''></div>
                <div className='nav flex gap-4 items-center'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/career">Career</NavLink>
                </div>
                <div className='login-btn flex items-center gap-2'>
                    <img className='rounded-full' src={userImg} alt="" />
                <Link to="/auth/login" className='btn btn-primary text-white px-5 py-3'>Login</Link>
                </div>
            </nav>
        </div>
    );
};

export default Navber;