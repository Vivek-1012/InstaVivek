import React from 'react'
import { useState } from 'react'
import { useUser } from '../context/UserContext';
import { Link } from 'react-router-dom';

const Input = () => {
    const [query,setQuery] = useState("");
    const [searchUser,setSearchUser] = useState([]);
    const {userlist,handleGetUser,handleGetUserPost} = useUser()

     const handleInput = (e) =>{
      setQuery(e.target.value)
      findUser(e.target.value) 
     }
  
     const findUser = (val) =>{
        const user = userlist.filter(({firstName,lastName,username})=> firstName.toLowerCase().includes(val.toLowerCase()) || lastName.toLowerCase().includes(val.toLowerCase()) || username.toLowerCase().includes(val.toLowerCase()) )
       setSearchUser(user)
       console.log(user)
     }




  return (
    <>
    <div style={{ width:"30%" }} >

  <input type='text' onInput={(e)=>handleInput(e)} placeholder='Search User...' value={query}  />
   <div style={{position:"absolute"}} >
    
   { query && searchUser &&  searchUser.map((item)=> {
    const {_id,firstName,lastName,username,userPic} = item;
    return(<li style={{width:"11rem",listStyle:"none" }} key={_id} >
       <div style={{ display:"flex",background:"black",color:"white",padding:"10px"}} >
        <div>
            <img src={userPic} height={50} width={50} />
        </div>
        <Link to={`/profile`} onClick={()=>{handleGetUser(item);handleGetUserPost(item)}} style={{fontSize:"13px",paddingLeft:"10px",textDecoration:"none",color:"white"}} >
            <p>{firstName} {lastName}</p>
            <p>@{username}</p>
        </Link>
       </div>
   </li>)})}
   </div>
   </div>
    </>
  )
}

export default Input
