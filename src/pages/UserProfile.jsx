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
    const {postlist,setAddNewcontentValue,singlePostHandler,handleGetUserPost,handleToDislike,editHandler,handleToLike,handleTODeletePost} = usePost()
    const{bookmarklist,handleToAddBookmark, handleToDeletBookmark }=useBookmark(); 
    const {newDetails,handleGetUser,setnewDetails,userlist, handletoUnfollowUser,handlertoupdateProfileDetails} = useUser();
    const [EditProfileDiv,setEditProfileDiv] =useState(false);
    const filterList = postlist?.filter((lst=>lst.username === NewUserProfile?.username  ))
   const [followProfileDiv,setFollowProfileDiv] = useState(false)
    

  const postId = NewUserProfile._id

  console.log(newDetails)
 console.log(NewUserProfile)

  const handleProfile = (e) =>{

    const type = (e.target?.files[0]?.type)
    if(e.target?.files[0]?.type === undefined) return;
    if(type === "image/png" || type === "image/jpeg" || type === "image/jpg"){
        setnewDetails({...newDetails,userPic:URL.createObjectURL(e.target.files[0])})
    }else{
      console.log("file Type not expected")
    }
   }
   
   return (
    
    <>
   <div>{ EditProfileDiv &&   <div> <div className='popupLayout'>
    <div className='ProfilePopupLayout' >
     <label>    
      <input className='ProfilePopupElemants' style={{display:"none"}} accept='image/*' type="file" id="file" placeholder='Add avatar'  onChange={(e)=>handleProfile(e)} />
     <div>Updated Profile Pic</div>
     </label>
<label>
  Add Bio
<input type="text"  className='ProfilePopupElemants'  placeholder='Write bio....'  onChange={(event)=>setnewDetails((prv)=>({...prv, bio: event.target.value}))} />
</label>
<label>
  Add website
<input type="text" className='ProfilePopupElemants'  placeholder='Enter website...'  onChange={(event)=>setnewDetails((prv)=>({...prv, website: event.target.value}))} />
</label>
<button  className='ProfilePopupElemants' style={{backgroundColor:"#87BBA2",padding:"0.3rem 0.6rem"}} onClick={()=>{handlertoupdateProfileDetails(postId,newDetails);setEditProfileDiv(false)}} >Update Post</button>
<button className='ProfilePopupElemants' style={{backgroundColor:"#C9E4CA",padding:"0.3rem 0.6rem"}} onClick={()=>setEditProfileDiv(!EditProfileDiv)} >Discharge</button>
</div></div> </div> }</div>     
{/* Following div */}
<div>{ followProfileDiv &&   <div> <div className='FollowingPopupLayout'>
    <div className='ProfilePopupLayout' >
      <button onClick={()=>setFollowProfileDiv(false)} >Close</button>
    { NewUserProfile?.following?.length === 0 ? <div> You are not following...! </div> :  <ol style={{listStyle:"none",display:"flex",flexDirection:"column"}} >{NewUserProfile?.following?.map((item)=>{
      const {_id,firstName,lastName,username,userPic} = item
      return(
    <li  key={_id}   >
    <div style={{width:"20rem"}} >
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}} >  
    <Link to="/profile"  ><p onClick={()=>{handleGetUser(item);handleGetUserPost(item)}}>
    <div style={{display:"flex"}} >
      <div >
    <img src={userPic} alt="" height={40} width={40} style={{borderRadius:"50%"}} /></div>
    <div> 
     <p style={{fontWeight:"bold",color:"black"}} > {firstName} {lastName}</p>
      <p style={{fontSize:"15px",color:"grey"}} >@{username}</p> 
     </div>
     
     </div> </p></Link>
    
  
    <button style={{padding:" 0.2rem 0.4rem 0.2rem 0.4rem ",borderRadius:"1rem",cursor:"pointer"}} onClick={()=>{ handletoUnfollowUser(item)}} >Unfollow</button>
    </div></div>
    </li>)})}
    </ol>}
</div></div> </div> }</div>  


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
        
       
        <p style={{color:"black",fontSize:"20px"}} > <strong>Posts</strong>: {filterList?.length}    <strong>Followers</strong>: {NewUserProfile?.followers?.length}    <strong style={{cursor:"pointer"}} onClick={()=>setFollowProfileDiv(true)} >Following</strong>: {NewUserProfile?.following?.length}  </p>
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
            const{_id,postPic,content,likes,username,createdAt,userPic,likedBy}= item
                const dateNew = new Date(createdAt)
            const formatDate = dateNew.toString().slice(0,21)
            return(
            <>
            <li className='postCard' key={_id}>
            <div className='postCardHeading' >
              <div style={{display:"flex",justifyContent:"space-between"}} >
                <div style={{display:"flex",textAlign:"left"}} >


                <div><img src={NewUserProfile.userPic} style={{borderRadius:"2rem"}} height={50} width={50} alt="" /></div>
                <div> <p style={{fontWeight:"bold"}} >{username}</p>{formatDate}</div>
                
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
                 <div style={{textAlign:"center"}} >
                  {postPic === null ? <p>{""}</p> :
                  <img src={postPic} style={{height:"50%",width:"50%"}}  />}</div>
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

