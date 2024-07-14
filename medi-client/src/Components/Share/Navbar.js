import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { IoNotifications } from 'react-icons/io5';
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [booking, setBooking] = useState([]);
  const logout = () => {
    signOut(auth);
  };

  useEffect(() => {
    fetch(`http://localhost:5006/myBookings/${email}`)
      .then(res => res.json())
      .then(data => setBooking(data));
  }, [booking, email]);


  const menuItems = (
    <>
      <li className=" hover:text-orange-600">
        <Link to="/about">About</Link>
      </li>
      <li className=" hover:text-orange-600">
        <Link to="/appointment">Book A Appointment</Link>
      </li>
      {user && (
        <>
          <li className=" hover:text-orange-600">
            <Link to="/myBooking">My Booking</Link>
          </li>
          <li className=" hover:text-orange-600">
            <Link to="/blood">Blood Donner</Link>
          </li>
          <li className=" hover:text-orange-600">
            <Link to="/vaccine">Vaccine</Link>
          </li>
          <li className=" hover:text-orange-600">
            <Link to="/contact">Contact</Link>
          </li>
        </>
      )}
      {user?.email === 'abc@def.com' && (
        <li className=" hover:text-orange-600">
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      <li className=" hover:text-orange-600 indicator">
        <Link to="/myBooking">
          <span className="indicator-item badge badge-sm  bg-red-500 text-white mt-1 mr-3 px-[4px] ">
            {booking?.length}
          </span>
          <IoNotifications className="text-xl " />
        </Link>
      </li>
    </>
  );
  return (
    <div className="  navbar   text-black ">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        <Link
          to="/"
          className="btn btn-ghost  font-extrabold lg:text-3xl   sm:text-sm text-primary   uppercase"
        >
          <img className="h-12 mr-2" src="" alt="" />
         Medi + 24/7
        </Link>
      </div>
      {/* <div className="navbar-center hidden lg:flex lg:pr-36 ml-40 text-indigo-900">
        <ul className="menu menu-horizontal p-0 font-semibold">{menuItems}</ul>
      </div> */}
      {/* Image */}
      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex  mr-3 text-primary">
          <ul className="menu menu-horizontal p-0 font-semibold">
            {menuItems}
          </ul>
        </div>
        {user ? (
          <button
            className=" font-semibold mr-8 text-red-600"
            onClick={logout}
          >
            SignOut
          </button>
        ) : (
          <ul className="mr-5">
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
