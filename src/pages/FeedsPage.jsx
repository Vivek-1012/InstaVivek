import React, { useState } from 'react'
import { usePost } from '../context/PostsContext'
import { Link, useNavigate } from 'react-router-dom'
import { useBookmark } from '../context/BookmarkContext'
import { FcLike,FcComments,FcShare,FcBookmark } from "react-icons/fc";
import { SlHeart } from "react-icons/sl";
import { GoBookmark } from "react-icons/go";
import { useAuth } from '../context/AuthContext';
import { IoMdMore } from "react-icons/io";
import Suggestion from '../components/Suggestion';


const FeedsPage = () => {
 const Navigate = useNavigate()
 const {dischargeHandler,EditDiv,editHandler,postId,newContent,setAddNewcontentValue,handlertoupdateEdit,postlist,handleToEdit,singlePost,setAddNewPostValue,singlePostHandler,handleToDislike,handleToLike,handleTODeletePost} = usePost()
const{bookmarklist,handleToAddBookmark,handleToDeletBookmark}=useBookmark(); 
const {NewUserProfile} =useAuth()





const post = singlePost.content




console.log(singlePost.content)

return (
  <>
  

        
        
  <div>{ EditDiv &&   <div className='popupLayout' > 

  
  <input type="text"  placeholder='Whats in Your mind'  onChange={(event)=>setAddNewcontentValue(event.target.value)} />
  
  <button onClick={()=>handlertoupdateEdit(postId,newContent)} >update Post</button>
  <button onClick={()=>dischargeHandler()} >Discharge</button>
  </div> }</div>        
        <div className='Feedlayout' > 
        <div className='feedpost' >
        <div  >
      <button className='feedButton'>Trending</button>
      <button className='feedButton'>Latest</button>
     
    </div>
    <ol style={{display:"flex",justifyContent:"space-between",flexDirection:"column",alignItems: "center",listStyle:"none",display:"flex",justifyContent:"center"}}>{postlist?.map((item)=>{
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
               

            
                
                 <Link to="/postDetails" style={{textDecoration:"none",padding:"0.5rem",color:"black"}} ><div onClick={()=>singlePostHandler(item)} ><p style={{textAlign:'left',marginBottom:"0.5rem"}} >{content}</p>
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

  </>
  )
}

export default FeedsPage