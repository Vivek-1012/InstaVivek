import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom';

const SignupPage = () => {
 
  const {setUserRegistration,handleToSignUp,SigninPage} = useAuth();

  return (
  <>
    <div>
      Signup
    </div>

    

<div className='LoginparentpopupLayout' >   

<div className='SignPage'  >
<h2>Sign Up</h2>
  <p><label htmlFor='firstName'>Firstname</label>
  </p>
<input className='AuthForminput' type="text"  onChange={(e)=>setUserRegistration((prv)=>({...prv,firstName:e.target.value}))} name="firstName" id="firstName" autoComplete="off" />


<p><label htmlFor='lastName'>lastName</label>
</p>
<input className='AuthForminput' type="text"  onChange={(e)=>setUserRegistration((prv)=>({...prv,lastName:e.target.value}))} name="lastName" id="lastName" autoComplete="off" />

{/* <label htmlFor='Email'>Email</label>
<input className='AuthForminput' type="email" onChange={(e)=>setUserRegistration((prv)=>({...prv,Email:e.target.value}))} name="Email" id="Email" autoComplete="off" /> */}
<p>
<label htmlFor='username'>Username</label>
</p>
<input className='AuthForminput' type="username" onChange={(e)=>setUserRegistration((prv)=>({...prv,username:e.target.value}))} name="username" id="username" autoComplete="off" />


<p><label htmlFor='password'>Password</label>
</p>
<input className='AuthForminput' type="password"  onChange={(e)=>setUserRegistration((prv)=>({...prv,password:e.target.value}))} name="password" id="password" />


<p><label htmlFor='Password'>Confirm Password</label>
</p>
<input className='AuthForminput' type="password"  name="Password" id="Password" />

<p><button className='RegistratinBtn' type="submit" onClick={()=>{handleToSignUp()}}>Registration</button></p>
<p><Link to="/signIn" ><button className='NonRegistratinBtn' >Already have an Account...?</button></Link>  </p>
</div>
</div>
  </>)
}

export default SignupPage
