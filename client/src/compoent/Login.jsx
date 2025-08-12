import React, { useEffect, useState } from "react";
import profile from "../assets/profile.png";
import cross from "../assets/crossicon.jpg";
import { Appcontext } from "../context/Appcontext";
import { useContext } from "react";

import axios from 'axios'
import { toast } from "react-toastify";

export default function Login() {
  const [state, setState] = useState("Login");
  const [name,setName]=useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const{setShowLogin,setToken,token,backend_url,setUser} = useContext(Appcontext);
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
     if(state==="Login"){
      const {data} =await axios.post(backend_url+"/api/user/login",{
        email,
        password
       })
        if(data.sucess){
        setToken(data.token);
        localStorage.setItem("token",data.token);
        setUser(data.user);
        setShowLogin(false);
       }
       else{
        toast.error(data.message);
       }
     }else{
        const {data} =await axios.post(backend_url+"/api/user/register",{
          name,
          email,
          password
        })
        if(data.sucess){
          setToken(data.token);
          localStorage.setItem("token",data.token);
          setShowLogin(false);
        }
        else{
          toast.error(data.message);
        }
     }
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    document.body.style.overflow = "hidden";
    return()=>{
      document.body.style.overflow = "unset";
    }
  },[]);

   
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 
    flex items-center justify-center backdrop-blur-md bg-white/30">
      <form onSubmit={handleSubmit} className="bg-white relative p-10 rounded-xl shadow-lg text-slate-700 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-2">
          {state === "Login" ? "Login" : "Sign Up"}
        </h1>
        <p className="text-sm text-center text-gray-500 mb-6">
          {state === "Login" ? "Sign in to continue" : "Create your account"}
        </p>

        {/* Name Field only for  Signup user */}
        {state !== "Login" && (
          <div className="flex items-center gap-4 border px-4 py-2 rounded-full mb-4">
            <img
              src={profile}
              alt="Profile"
              className="w-8 h-8 object-cover rounded-full"
            />
            <input
              type="text"
              placeholder="Enter your name"
              onChange={e=>setName(e.target.value)}
              value={name}

              className="w-full outline-none text-sm bg-transparent"
              required
            />
          </div>
        )}

        {/* Email Field */}
        <div className="flex items-center gap-4 border px-4 py-2 rounded-full mb-4">
          <img
            src={profile}
            alt="Profile"
            className="w-8 h-8 object-cover rounded-full"
          />
          <input
            type="email"
            placeholder="Enter your email"
             onChange={e=>setEmail(e.target.value)}
              value={email}
            className="w-full outline-none text-sm bg-transparent"
            required
          />
        </div>

        {/* Password Field */}
        <div className="flex items-center gap-4 border px-4 py-2 rounded-full mb-4">
          <img
            src={profile}
            alt="Profile"
            className="w-8 h-8 object-cover rounded-full"
          />
          <input
            type="password"
            placeholder="Enter your password"
             onChange={e=>setPassword(e.target.value)}
              value={password}
            className="w-full outline-none text-sm bg-transparent"
            required
          />
        </div>

        <p className="text-sm text-blue-600 mb-1 text-center cursor-pointer">
          Forgot password
        </p>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition"
        >
          {state === "Login" ? "Login" : "Create Account"}
        </button>

      
        {state === "Login" ? (
          <p className="mt-5 text-center">
            Don't have an account?
            <span
              onClick={() => setState("Signup")}
              className="text-blue-600 cursor-pointer ml-1"
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account?
            <span
              onClick={() => setState("Login")}
              className="text-blue-600 cursor-pointer ml-1"
            >
              Login
            </span>
          </p>
        )}

        {/* Cross Icon */}
        <img onClick={() => setShowLogin(false)}
          src={cross}
          alt="Close"
          className="absolute top-4 right-4 w-5 h-5 cursor-pointer"
        />
      </form>
    </div>
  );
}
