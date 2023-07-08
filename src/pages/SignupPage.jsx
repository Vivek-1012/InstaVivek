import React from 'react'
import { useAuth } from '../context/AuthContext'

const SignupPage = () => {
 
  const {setUserRegistration,handleToSignUp} = useAuth();

  return (
  <>
    <div>
      Signup
    </div>

    <h2>Sign Up</h2>

<label htmlFor='firstName'>Firstname</label>
<input className='AuthForminput' type="text"  onChange={(e)=>setUserRegistration((prv)=>({...prv,firstName:e.target.value}))} name="firstName" id="firstName" autoComplete="off" />


<label htmlFor='lastName'>lastName</label>
<input className='AuthForminput' type="text"  onChange={(e)=>setUserRegistration((prv)=>({...prv,lastName:e.target.value}))} name="lastName" id="lastName" autoComplete="off" />

{/* <label htmlFor='Email'>Email</label>
<input className='AuthForminput' type="email" onChange={(e)=>setUserRegistration((prv)=>({...prv,Email:e.target.value}))} name="Email" id="Email" autoComplete="off" /> */}

<label htmlFor='username'>Username</label>
<input className='AuthForminput' type="username" onChange={(e)=>setUserRegistration((prv)=>({...prv,username:e.target.value}))} name="username" id="username" autoComplete="off" />


<label htmlFor='password'>Password</label>
<input className='AuthForminput' type="password"  onChange={(e)=>setUserRegistration((prv)=>({...prv,password:e.target.value}))} name="password" id="password" />


<label htmlFor='Password'>Confirm Password</label>
<input className='AuthForminput' type="password"  name="Password" id="Password" />

<button type="submit" onClick={()=>{handleToSignUp()}}>Registration</button>

  </>)
}

export default SignupPage
