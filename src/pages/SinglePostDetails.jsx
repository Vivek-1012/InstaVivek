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
 const {EditDiv,singlePost,newContent,dischargeHandler,handlertoupdateEdit,postId,postlist,setAddNewcontentValue,singlePostHandler,handleToDislike,editHandler,handleToLike,handleTODeletePost} = usePost()

 const{bookmarklist,handleToAddBookmark, handleToDeletBookmark }=useBookmark();
    console.log(singlePost)
  let item = singlePost
  console.log(item,"item") 
     
    return (
  <>
     
     <div><Popup/></div>        
    <div>SinglePostDetails</div>
    
          <li style={{border:"1px solid",padding:"1rem",width:"30rem",borderRadius:"0.3rem",backgroundColor:"white"}}>
            <div style={{display:"flex",justifyContent:"space-between"}} >
                <div style={{display:"flex"}} >
                <div><img src={`https://funkylife.in/wp-content/uploads/2021/06/whatsapp-dp-pic-24-scaled.jpg`} style={{borderRadius:"2rem"}} height={50} width={50} alt="" /></div>
                <div> <p style={{fontWeight:"bold"}} >{singlePost.username}</p>..{singlePost.createdAt}</div>
                </div>
                
                <div>
                  
                  <p style={{fontSize:"1.3rem"}} > 
                { item.username !== NewUserProfile?.username  ? "" : <div class="dropdown">
  <button class="dropbtn"><IoMdMore /></button>
  <div class="dropdown-content">
    <p onClick={()=>editHandler(singlePost)}>Edit</p>
    <p   onClick={()=>handleTODeletePost(item)
}>Delete</p>
  </div>
</div>   }
               
                            
                              
                </p> </div>
               

            </div>
                
                 <Link to="/postDetails" style={{textDecoration:"none",padding:"0.5rem",color:"black"}} ><div onClick={()=>singlePostHandler(singlePost)} ><p>{singlePost.content}</p>
                 <div style={{textAlign:"center"}} ><img src={`https://funkylife.in/wp-content/uploads/2021/06/whatsapp-dp-pic-24-scaled.jpg`} height={300} width={300} alt="" /></div>
                 </div></Link>
                
                <div className='feedIcon' style={{display:"flex", flexWrap:"wrap",justifyContent:"space-evenly"}} > 
                    <p>
                    {singlePost.likes?.likedBy.find((lst)=>lst.username === NewUserProfile?.username)  ?  <FcLike  onClick={()=>handleToDislike(item)} />:< SlHeart onClick={()=>handleToLike(item)} /> }{singlePost.likes?.likeCount >0 && singlePost.likes.likeCount}
                    </p>
                    <p>
                 <FcComments /> 
                </p>
                <p> {  singlePost.bookmarklist?.find(({_id}) =>_id === NewUserProfile._id )? <FcBookmark onClick={()=>handleToDeletBookmark(item)}  />:<GoBookmark onClick={()=>handleToAddBookmark(item)} />}</p>
                <p>
                   <FcShare/>
                   </p> 
                   
                 
                </div>
                </li> 
  </>
  )
}

export default SinglePostDetails;s