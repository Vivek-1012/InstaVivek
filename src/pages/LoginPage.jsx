import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

 const LoginPage = () => {
 const location = useLocation();
 const {setuserLogin, handleToLogin} = useAuth();
 const Navigate = useNavigate();

  
  return (
    <>
   <div> Sign In </div>   

   <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username"  onChange={(e)=> setuserLogin((prv)=>({...prv,username:e.target.value}))} autoComplete='off' />
   
    <label>Password</label>
    <input type="password" name="password" id="password" onChange={(e)=> setuserLogin((prv)=>({...prv, password: e.target.value}))} />
    
    <button  onClick={()=>{handleToLogin();
      return location.state ? Navigate(location?.state?.from?.pathname): Navigate("/signIn")
      }}>Sign In</button>

    <Link to="/" ><button>New User...?</button></Link>
    <button style={{alignContent:"center",padding:"1rem",margin:"1rem",fontSize:"20px"}} onClick={()=>{localStorage.removeItem("token") ;console.log("LOgout")}} >   Logout </button>
    </>
  )
}

export default LoginPage;
