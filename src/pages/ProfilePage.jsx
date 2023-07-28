import React from 'react'
import { usePost } from '../context/PostsContext'
import { useUser } from '../context/UserContext'
import { Link } from 'react-router-dom';
import { FcLike,FcComments,FcShare,FcBookmark } from "react-icons/fc";
import { SlHeart } from "react-icons/sl";
import { GoBookmark } from "react-icons/go";
import { IoMdMore } from "react-icons/io";
import { useBookmark } from '../context/BookmarkContext';
import { SlGlobe } from "react-icons/sl";

// import { useUser } from '../context/UserContext';
import Suggestion from '../components/Suggestion';
import { useAuth } from '../context/AuthContext';

const ProfilePage = () => {   
   const {NewUserProfile,userDatabsePost} = useAuth()
    const{selectedUser,userlist,handletoFollowUser,handletoUnfollowUser} = useUser();
    const {editHandler,postlist,singlePostHandler,handleToDislike,handleToLike,handleTODeletePost} = usePost()
    const{bookmarklist,handleToAddBookmark, handleToDeletBookmark }=useBookmark();
     
     
    const ProfileDetails = selectedUser.user
    const notfollowedUsers = userlist.filter(({username}) => NewUserProfile?.following?.every(user => user.username !== username)).filter((user => user.username === NewUserProfile.username))
 const filterPost = postlist?.filter((lst=>lst.username === ProfileDetails?.username  ))
    
   const item = ProfileDetails
   console.log(item,"item id ")
//  style={{padding:" 0.2rem 0.4rem 0.2rem 0.4rem ",borderRadius:"1rem",cursor:"pointer",alignItems:"flex-end"}}
     
     return (
<>
<div style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"}} >
    <div  className='profileLayout'   >
    <div className='profilePageCard'  >
    
    <div style={{display:"flex",flexDirection:"column"}} >
        <div> 
         <div style={{display:"flex",margin:"1rem",flexDirection:"column"}} > 
         <div style={{display:"flex",justifyContent:"space-around",width:"20rem"}} >
         <div>          
         <div><img src={ProfileDetails?.userPic}  className='profilePic'  alt="" /></div>
         </div>
         <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-evenly",textAlign:"left"}} >
         <div>

{ userlist.filter(({username}) => NewUserProfile?.following?.every(user => user.username !== username))? <button onClick={()=>handletoFollowUser(item)}>Follow</button>:<button onClick={()=>handletoUnfollowUser(item)} >Unfollow</button>}

</div>
         <div>
         <p className='firstNameProfile' style={{fontSize:"24px",fontWeight:"bold",color:"white"}}  > {ProfileDetails?.firstName} {ProfileDetails?.lastName} </p>
         <p className='firstNameProfile'  >@{ProfileDetails?.username}</p>

         </div>
         <div>
         <p className='firstNameProfile' >{ProfileDetails?.bio}</p>
         <p className='firstNameProfile' style={{display:"flex",alignItems:"center"}} ><SlGlobe/> {ProfileDetails?.website}</p>
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
        
       
        <p style={{color:"black",fontSize:"20px"}} > <strong>Posts</strong>: {userDatabsePost?.length}    <strong>Followers</strong>: {ProfileDetails?.followers?.length}    <strong>Following</strong>: {ProfileDetails?.following?.length}  </p>
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
<ol style={{listStyle:"none"}}>{filterPost?.map((item)=>{
            const{_id,content,likes,userPic,postPic,username,createdAt,likedBy}= item
            return(
            <>
            <li className='postCard' key={_id}>
            <div className='postCardHeading' >
              <div style={{display:"flex",justifyContent:"space-between"}} >
                <div style={{display:"flex"}} >
                <div><img src={userPic} style={{borderRadius:"2rem"}} height={50} width={50} alt="" /></div>
                <div> <p style={{fontWeight:"bold"}} >{username}</p>..{createdAt}</div>
                
                </div>    
                <div>
                  
                  <p style={{fontSize:"1.3rem"}} > 
                { username !== ProfileDetails?.username  ? "" : <div class="dropdown">
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

export default ProfilePage