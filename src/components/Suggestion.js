import React from 'react'
import { useUser } from '../context/UserContext'
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Suggestion = () => {

  const {NewUserProfile} =useAuth()
  const {userlist,handleGetUserPost,handletoFollowUser,handleGetUser} = useUser();
  const userDisplay = userlist;
 const notfollowedUsers = userlist.filter(({username}) => NewUserProfile?.following?.every(user => user.username !== username)).filter((user => user.username !== NewUserProfile.username));
 
   return (
    <>
    
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}} >
     <p style={{color:"white"}} >Suggestions....</p>      
    
    </div>
    <div className='myComponent' > 
    <ol  className='SuggestionLayout' >{notfollowedUsers?.map((item)=>{
      const {_id,firstName,lastName,username,userPic} = item
      return(
    <li  key={_id}   >
    <div className='suggestionCard' >
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:"10rem"}} > 
    <Link to="/profile"  ><p onClick={()=>{handleGetUser(item);handleGetUserPost(item)}}>
    <div><div style={{display:"flex",justifyContent:"center"}} >
    <img src={userPic} alt="" height={60} width={60} style={{borderRadius:"50%"}} /></div>
    <div> 
     <p style={{fontWeight:"bold",color:"black"}} > {firstName} {lastName}</p> <p style={{fontSize:"15px",color:"grey"}} >@{username}</p> 
     </div></div> </p></Link>
    
  
    <button style={{padding:" 0.2rem 0.4rem 0.2rem 0.4rem ",borderRadius:"1rem",cursor:"pointer"}} onClick={()=>{handletoFollowUser(item)}} >Follow</button>
    </div></div>
    </li>)})}
    </ol>
    </div>
    
    </>

  )
}

export default Suggestion;
