import React from 'react'
import { useUser } from '../context/UserContext'
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Suggestion = () => {

  const {NewUserProfile} =useAuth()
  const {userlist,handleGetUserPost,handletoFollowUser,handleGetUser} = useUser();
  const userDisplay = userlist.users
  const userName = NewUserProfile.following?.filter((lst)=>lst.username)
 
  console.log(userName,"username")
  
  

  // const filterList = userDisplay.filter((lst)=>)
  // console.log(filterList,"filterList")
   return (
    <>
    
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}} >
     <p style={{color:"white"}} >Suggestions....</p>      
    
    </div>
    
    <ol style={{listStyle:"none"}} >{userDisplay?.map((item)=>{
      const {_id,firstName,lastName,username} = item
      return(
    <li  key={_id}   >
    <div className='suggestionCard' >
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:"10rem"}} > 
    <Link to="/profile"  ><p onClick={()=>{handleGetUser(item);handleGetUserPost(item)}}>
    <div><div style={{display:"flex",justifyContent:"center"}} >
    <img src={`https://funkylife.in/wp-content/uploads/2021/06/whatsapp-dp-pic-24-scaled.jpg`} alt="" height={60} width={60} style={{borderRadius:"50%"}} /></div>
    <div> 
     <p style={{fontWeight:"bold",color:"black"}} > {firstName} {lastName}</p> <p style={{fontSize:"15px",color:"grey"}} >@{username}</p> 
     </div></div> </p></Link>
    
    <button style={{padding:" 0.2rem 0.4rem 0.2rem 0.4rem ",borderRadius:"1rem",cursor:"pointer"}} onClick={()=>{handletoFollowUser(item)}} >Follow</button>
    </div></div>
    </li>)})}
    </ol>
    
    </>

  )
}

export default Suggestion;
