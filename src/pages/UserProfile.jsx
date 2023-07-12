import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { usePost } from '../context/PostsContext'
import { FcLike,FcSettings,FcComments,FcShare,FcBookmark } from "react-icons/fc";
import { SlHeart } from "react-icons/sl";
import { GoBookmark } from "react-icons/go";
import { IoMdMore } from "react-icons/io";
import { useBookmark } from '../context/BookmarkContext';
import { useUser } from '../context/UserContext';
import { SlGlobe } from "react-icons/sl";
const UserProfile = () => {
      
    const {NewUserProfile} = useAuth()
    const {postlist,setAddNewcontentValue,singlePostHandler,handleToDislike,editHandler,handleToLike,handleTODeletePost} = usePost()
    const{bookmarklist,handleToAddBookmark, handleToDeletBookmark }=useBookmark(); 
    const {newDetails,handleGetUser,setnewDetails,userlist,handlertoupdateProfileDetails} = useUser();
    const [EditProfileDiv,setEditProfileDiv] =useState(false);
    // console.log(NewUserProfile)
    const filterList = postlist?.filter((lst=>lst.username === NewUserProfile?.username  ))
   
     


   const postId = NewUserProfile._id

   console.log(newDetails) 
   return (
    
    <>
   <div>{ EditProfileDiv &&   <div> <div className='popupLayout' > 
    <input type="text"  placeholder='Add avatar'  onChange={(event)=>setnewDetails((prv)=>({...prv,userPic:event.target.value}))} />

<input type="text"   placeholder='Write bio....'  onChange={(event)=>setnewDetails((prv)=>({...prv, bio: event.target.value}))} />
  
<input type="text"  placeholder='Enter website...'  onChange={(event)=>setnewDetails((prv)=>({...prv, website: event.target.value}))} />

<button onClick={()=>handlertoupdateProfileDetails(postId,newDetails)} >update Post</button>
<button onClick={()=>setEditProfileDiv(!EditProfileDiv)} >Discharge</button>
</div> </div> }</div>     

    <div style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"}} >
    <div className='profileLayout'  >
      <div className='profilePageCard'  >
    
    <div style={{display:"flex",flexDirection:"column"}} >
        <div> 
         <div style={{display:"flex",margin:"1rem",flexDirection:"column"}} > 
         <div style={{display:"flex",justifyContent:"space-around",width:"20rem"}} >
         <div>          
         <div><img src={NewUserProfile.userPic}  className='profilePic'  alt="" /></div>
         </div>
         <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-evenly",textAlign:"left"}} >
         <div>
         <p className='firstNameProfile' style={{fontSize:"24px",fontWeight:"bold",color:"white"}}  > {NewUserProfile?.firstName} {NewUserProfile?.lastName} </p>
         <p className='firstNameProfile'  >@{NewUserProfile?.username}</p>
         </div><div>
         <p className='firstNameProfile' >{NewUserProfile?.bio}</p>
         <p className='firstNameProfile' style={{display:"flex",alignItems:"center"}} ><SlGlobe/> {NewUserProfile?.website}</p>
         </div></div>
         <div class="dropdown">
  <button class="dropbtn" style={{backgroundColor:"#42c6d1",fontSize:"24px",cursor:"pointer"}} ><FcSettings /></button>
  <div class="dropdown-content">
    <p onClick={()=>setEditProfileDiv(!EditProfileDiv)} >Edit Profile</p>
     <p onClick={()=>{localStorage.removeItem("token") ;console.log("LOgout")}}> <Link to="/signIn" style={{textDecoration:"none",color:"black"}} >  Logout</Link> </p> 
  </div>
</div> 
         
         
         </div>
         <div style={{display:"flex",flexDirection:"column"}} >
         <div>
            <div style={{display:"flex"}}>
                <div>
        </div>
        </div>
        <div style={{justifyContent:"center",textAlign:"center"}} >
        
       
        <p style={{color:"black",fontSize:"20px"}} > <strong>Posts</strong>: {filterList?.length}    <strong>Followers</strong>: {NewUserProfile?.followers?.length}    <strong>Following</strong>: {NewUserProfile?.following?.length}  </p>
        </div>
        </div>
        </div>
        </div>
        </div>
         </div>
         </div>

<div>
        <div className='ProfilePosts'  >
        
          <div style={{display:"flex",padding:"1rem",margin:"0.5rem",justifyContent:"space-around",width:"20rem"}} >
            
           

          </div>
<div>
<ol style={{listStyle:"none"}}>{filterList?.map((item)=>{
            const{_id,content,likes,username,createdAt,userPic,likedBy}= item
            return(
            <>
            <li className='postCard' key={_id}>
            <div className='postCardHeading' >
              <div style={{display:"flex",justifyContent:"space-between"}} >
                <div style={{display:"flex"}} >


                <div><img src={NewUserProfile.userPic} style={{borderRadius:"2rem"}} height={50} width={50} alt="" /></div>
                <div> <p style={{fontWeight:"bold"}} >{username}</p>..{createdAt}</div>
                
                </div>    
                <div>
                  
                  <p style={{fontSize:"1.3rem"}} > 
                { username !== NewUserProfile?.username  ? "" : <div class="dropdown">
  <button class="dropbtn"><IoMdMore /></button>
  <div class="dropdown-content">
    <p onClick={()=>editHandler(item)}>Edit</p>
    <p   onClick={()=>handleTODeletePost(item)
}>Delete</p>
  </div>
</div>   }
               
                            
                              
                </p> </div>
                </div>
                </div>
                
                 <Link to="/postDetails" style={{textDecoration:"none",padding:"0.5rem",color:"black"}} ><div onClick={()=>singlePostHandler(item)} style={{textAlign:'left',marginBottom:"0.5rem"}} ><p>{content}</p>
                 <div style={{textAlign:"center"}} ><img src={`https://funkylife.in/wp-content/uploads/2021/06/whatsapp-dp-pic-24-scaled.jpg`} height={300} width={300} alt="" /></div>
                 </div></Link>
                
                <div className='feedIcon' style={{display:"flex", flexWrap:"wrap",justifyContent:"space-evenly"}} > 
                    <p>
                    {likes.likedBy?.find((lst)=>lst.username === NewUserProfile?.username)  ?  <FcLike  onClick={()=>handleToDislike(item)} />:< SlHeart onClick={()=>handleToLike(item)} /> }{likes.likeCount >0 && likes.likeCount}
                    </p>
                    <p>
                 <FcComments /> 
                </p>
                <p> {  bookmarklist?.find(({_id}) =>_id === item._id )? <FcBookmark onClick={()=>handleToDeletBookmark(item)}  />:<GoBookmark onClick={()=>handleToAddBookmark(item)} />}</p>
                <p>
                   <FcShare/>
                   </p> 
                   
                 
                </div>
                </li> </>)})}</ol>
                </div>
                </div>
                
        </div> 
        </div> 
           
      
</div>
    </>
  )
}

export default UserProfile

