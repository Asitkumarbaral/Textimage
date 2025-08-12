import axios from "axios";
import { createContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Appcontext=createContext();

const AppContextprovider=(props)=>{
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [token,setToken]=useState(localStorage.getItem("token"));
 const backend_url = import.meta.env.VITE_BACKEND_URL; 
 const [credit,setCredit]=useState(false);
 const navigate = useNavigate();
 const getLocalcredits=async()=>{
   try {
   const {data} = await axios.get(
     backend_url + "/api/user/credit",
     {
       headers: {
         Authorization: `Bearer ${token}`
       }
     }
   );
     if(data.sucess){
       setCredit(data.creditBalance);
       setUser(data.user);
     }
     else{
       toast.error(data.message);
     }
   } catch (error) {
    console.log(error);
    
    
   }
 }
 const generateImage=async(prompt)=>{
   try {
     const {data}=await axios.post(backend_url+"/api/image/generate",{prompt},{headers:{
       Authorization: `Bearer ${token}`}})
       if(data.success){
        getLocalcredits();
        return data.image;
       }else{
        toast.error(data.message);  
        getLocalcredits();
        if(data.creditBalance===0){
          navigate("/buy");
        }
       }
   } catch (error) {
      console.log("Error generating image:", error);
      toast.error("Error generating image");
      
   }
 }
 useEffect(()=>{
   if(token){
     getLocalcredits();
   }
 },[token]);
 //logout
 const logout=()=>{
   localStorage.removeItem("token");
   setToken(null);
   setUser(null);
 }
   const value={
    user,setUser,showLogin,setShowLogin,backend_url,token,setToken,credit,setCredit,getLocalcredits,logout,generateImage
   }
   return(
    <Appcontext.Provider value={value}>
       {props.children}
     </Appcontext.Provider>  
   )
}
export default AppContextprovider;