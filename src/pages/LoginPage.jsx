import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

 const LoginPage = () => {
 const location = useLocation();
 const {setuserLogin, handleToLogin,LoginPage} = useAuth();
 const Navigate = useNavigate();

  
  return (
    <>
<  div className='LoginparentpopupLayout' >   
   <div className='LoginPage ' >
<div style={{display:"flex",flexDirection:"column"}} >
  <p>   <label htmlFor="username">Username</label></p>
        <input type="text" name="username" id="username"  onChange={(e)=> setuserLogin((prv)=>({...prv,username:e.target.value}))} autoComplete='off' />
        
        <p>

    <label>Password</label></p>
    <input type="password" name="password" id="password" onChange={(e)=> setuserLogin((prv)=>({...prv, password: e.target.value}))} />
    
    <p>

    <button className='loginbtn' style={{padding:"0.5rem 1rem 0.5rem 1rem " ,borderRadius:"1rem",fontSize:"18px"}}  onClick={()=>{handleToLogin();
      return location.state ? Navigate(location?.state?.from?.pathname): Navigate("/signIn")
      }}>Sign In</button>
</p>

<p>
    <Link  to="/signUp" ><button className='newUserbtn' style={{width:"80%",padding:"0.5rem 1rem 0.5rem 1rem",fontSize:"16px"}} >New User...?</button></Link>
    </p>

   
    </div></div>
    </div>
    </>
  )
}

export default LoginPage;
