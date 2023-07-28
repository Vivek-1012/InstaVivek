import React from 'react'
import { usePost } from '../context/PostsContext';
import { Link } from 'react-router-dom';
import { FcLike,FcComments,FcShare,FcBookmark } from "react-icons/fc";
import { SlHeart } from "react-icons/sl";
import { GoBookmark } from "react-icons/go";
import { IoMdMore } from "react-icons/io";
import { useBookmark } from '../context/BookmarkContext';
import { useUser } from '../context/UserContext';
import Popup from '../components/Popup';
const SinglePostDetails = () => {
 const{NewUserProfile}=useUser()   
 const {EditDiv,singlePost,setAddNewcontentValue,singlePostHandler,handleToDislike,editHandler,handleToLike,handleTODeletePost} = usePost()

 const{bookmarklist,handleToAddBookmark, handleToDeletBookmark }=useBookmark();
    console.log(singlePost)
  let item = singlePost
  console.log(NewUserProfile,"item") 
     const {_id,postPic,content,likes,username,createdAt,userPic,likedBy}  = singlePost
    return (
  <>
<div>
        <div className='ProfilePosts'  >
        
          <div style={{display:"flex",padding:"1rem",margin:"0.5rem",justifyContent:"space-around",width:"20rem"}} >
            
           

          </div>
<div>
<ol style={{listStyle:"none"}}>
            <>
            <li className='postCard' key={_id}>
            <div className='postCardHeading' >
              <div style={{display:"flex",justifyContent:"space-between"}} >
                <div style={{display:"flex"}} >
                <div>
                  { username === NewUserProfile?.username ?  <img src={ NewUserProfile?.userPic} style={{borderRadius:"2rem"}} height={50} width={50} alt="" /> :  <img src={userPic} style={{borderRadius:"2rem"}} height={50} width={50} alt="" /> }
                 
                  </div>
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
                 <div style={{textAlign:"center"}} >
                  {postPic === null ? <p>{""}</p> :
                  <img src={postPic} style={{height:"50%",width:"50%"}}  />}</div>
                 </div></Link>
                
                <div className='feedIcon' style={{display:"flex", flexWrap:"wrap",justifyContent:"space-evenly"}} > 
                    <p>
                    {likes?.likedBy?.find((lst)=>lst.username === NewUserProfile?.username)  ?  <FcLike  onClick={()=>handleToDislike(item)} />:< SlHeart onClick={()=>handleToLike(item)} /> }{likes?.likeCount >0 && likes?.likeCount}
                    </p>
                    <p>
                 <FcComments /> 
                </p>
                <p> {  bookmarklist?.find(({_id}) =>_id === item._id )? <FcBookmark onClick={()=>handleToDeletBookmark(item)}  />:<GoBookmark onClick={()=>handleToAddBookmark(item)} />}</p>
                <p>
                   <FcShare/>
                   </p> 
                   
                 
                </div>
                </li> </></ol>
                </div>
                </div>
                
        </div> 

</>
  )
}

export default SinglePostDetails;