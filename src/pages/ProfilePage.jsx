import React from 'react'
import { usePost } from '../context/PostsContext'
import { useUser } from '../context/UserContext'
import { Link } from 'react-router-dom';
import { FcLike,FcComments,FcShare,FcBookmark } from "react-icons/fc";
import { SlHeart } from "react-icons/sl";
import { GoBookmark } from "react-icons/go";
import { IoMdMore } from "react-icons/io";
import { useBookmark } from '../context/BookmarkContext';
// import { useUser } from '../context/UserContext';
import Suggestion from '../components/Suggestion';

const ProfilePage = () => {   
   
    const{selectedUser,userDatabsePost,NewUserProfile} = useUser();
    const {postlist,editHandler,singlePostHandler,handleToDislike,handleToLike,handleTODeletePost} = usePost()
    const{bookmarklist,handleToAddBookmark, handleToDeletBookmark }=useBookmark();
     
     
    const ProfileDetails = selectedUser.user
     
           
    
     return (
<>
    <div style={{display:"flex",justifyContent:"space-evenly"}} >
    <div>
      <div className='profilePageCard'  >
    
    <div style={{display:"flex",flexDirection:"column"}} >
        <div> 
         <div style={{display:"flex",margin:"1rem",flexDirection:"column"}} > 
         <div style={{display:"flex",justifyContent:"space-evenly"}} >
         <div>          
         <p style={{fontSize:"20px",fontWeight:"bold"}} > {ProfileDetails?.firstName} {ProfileDetails?.lastName} </p>
         <p>@{ProfileDetails?.username}</p>
         </div>
         <div><img src={`https://funkylife.in/wp-content/uploads/2021/06/whatsapp-dp-pic-24-scaled.jpg`} height={200} width={200}  alt="" /></div>
         <p><button>Follow</button> </p>
         </div>
         <div style={{display:"flex",flexDirection:"column"}} >
         <div>
            <div style={{display:"flex"}}>
                <div>
        </div>
        </div>
        <div style={{justifyContent:"center",textAlign:"center"}} >
        <p>bio</p>
        <p>user Link</p>
       
        <p> Posts: {userDatabsePost?.length}     Followers: {ProfileDetails?.followers?.length}    Following: {ProfileDetails?.following?.length}  </p>
        </div>
        </div>
        </div>
        </div>
        </div>
         </div>
         </div>

<div>
        <div className='ProfilePosts'  >
        
          <div style={{display:"flex",padding:"1rem",margin:"0.5rem",justifyContent:"space-around",width:"30rem"}} >
            <div>Posts</div>
           

          </div>
<div>
        <ol style={{listStyle:"none"}}>{userDatabsePost?.map((item)=>{
            const{_id,content,likes,username,createdAt,likedBy}= item
            return(
            <>
            <li className='postCard' key={_id}>
            <div className='postCardHeading' >
              <div style={{display:"flex",justifyContent:"space-between"}} >
                <div style={{display:"flex"}} >
                <div><img src={`https://funkylife.in/wp-content/uploads/2021/06/whatsapp-dp-pic-24-scaled.jpg`} style={{borderRadius:"2rem"}} height={50} width={50} alt="" /></div>
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
                
                 <Link to="/postDetails" style={{textDecoration:"none",padding:"0.5rem",color:"black"}} ><div onClick={()=>singlePostHandler(item)} >{content}</div></Link>
                
                <div className='feedIcon' style={{display:"flex", flexWrap:"wrap",justifyContent:"space-evenly"}} > 
                    <p>
                    {likes.likedBy?.find((lst)=>lst.username === NewUserProfile.username)  ?  <FcLike  onClick={()=>handleToDislike(item)} />:< SlHeart onClick={()=>handleToLike(item)} /> }{likes.likeCount >0 && likes.likeCount}
                    </p>
                    <p>
                 <FcComments /> 
                </p>
                <p> {  bookmarklist?.find(({_id}) =>_id === item._id )? <FcBookmark onClick={()=>handleToDeletBookmark(item)}  />:<GoBookmark onClick={()=>handleToAddBookmark(item)} />}</p>
                <p>
                   <FcShare/>
                   </p> 
                   <p onClick={()=>handleTODeletePost(item)} >Delete</p>
                    

                </div>
                </li> </>)})}</ol>
                </div>
                </div>
                {/* <div className='parent' >
                  Cancel
        <div className='followersList'>
          folowers
          <div>
            <ol>{ProfileDetails?.followers?.map((item)=>{
      const {_id,firstName,lastName,username} = item
      return(
    <li key={_id}  >
    <div style={{borderBottom:"1px solid", paddingBottom:"0.5rem"}} > 
    <Link to="/profile"  ><p onClick={()=>handleGetUser(item)} > DP {firstName} {lastName}</p></Link>
    
    
    </div>
    </li>)})}

            </ol>
          </div>
          
        </div>
        
        </div> */}
        {/* <div className='parent' >
          cancel
        <div className='followersList'>
          following
          <div>
            <ol>{ProfileDetails?.following?.map((item)=>{
      const {_id,firstName,lastName,username} = item
      return(
    <li key={_id}  >
    <div style={{borderBottom:"1px solid", paddingBottom:"0.5rem"}} > 
    <Link to="/profile"  ><p onClick={()=>handleGetUser(item)} > DP {firstName} {lastName}</p></Link>
    <p>@{username}</p>
    
    </div>
    </li>)})}

            </ol>
          </div>
          
        </div>
        
        </div> */}
        </div> 
        </div> 
           
     
</div>
    </>
    )
}

export default ProfilePage