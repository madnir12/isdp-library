import React,{useEffect,useState} from 'react';
import PreLoader from '../PreLoader';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {app} from '../../assets/config/firebaaseconfig'

function Protected({LMT}) {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState("checking")
  const auth = getAuth(app);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLogin(true)
      console.log("login by app")

    } else {
      setIsLogin(false)
      console.log("not login by app")
    }
  });
  useEffect(() => {
    isLogin === false ? navigate("/login") : console.log("hello")
  
    
  })
  
        return(
          <>
          {
            isLogin === "checking" ? <PreLoader/> : <LMT/>
          }
          </>
        )  
           
      
}

export default Protected