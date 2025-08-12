import React, { useContext, useState } from "react";
import logo from "../assets/logo.jpg";
import credit from "../assets/credit-icon-0.jpg";
import profile from "../assets/profile.png";
import { Link,useNavigate } from "react-router-dom";
import { Appcontext } from "../context/Appcontext";

export default function Navbar() {
  const {user,setShowLogin,credit,logout}=useContext(Appcontext);
  
  const navigate = useNavigate();
  return (
  
    <div className="flex justify-between items-center py-4">
      <Link to="/" className="cursor-pointer">
        {" "} 
        <img src={logo} alt="" className="w-28 sm:w-32 lg:w-40" />
      </Link>
      <div className="flex items-center justify-between py-4">
        {user ? (
          <div className="flex text-center gap-2 sm:gap-3">
            <button onClick={()=>navigate("/buy")} className="flex items-center gap-2 bg-blue-200 px-2 sm:px-6 lg:px-1.5 rounded-full hover:scale-105 transition-all duration-700">
              <img src={credit} alt="" className="w-5" />
              <p className="text-xs sm:text-sm font-medium text-grey-600 text-center ml-1.5">
                Creditleft:{credit?credit:50}</p>
            </button>
            <p className="text-grey-600 max-sm:hidden pl-4 ">{user.name}</p>
            <div className="relative group ">
              <img src={profile} className="w-10 drop-shadow" alt="" />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 rounded pt-12">
                <ul className="list-none m-0 p-2 rounded-md border text-sm  bg-blue-400 text-white">
                  <li onClick={logout} className="px-2 py-1 pr-5 cursor-pointer rounded-full bg-blue-600">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            <p onClick={()=>navigate("/buy")} className="cursor-pointer ">Pricing</p>
            <button type="button" onClick={()=>setShowLogin(true)} className="bg-zinc-800 px-7 py-2 sm:px-10
             text-sm rounded-full text-white">Login</button>
          </div>
        )}
      </div>
    </div>
  );
}
