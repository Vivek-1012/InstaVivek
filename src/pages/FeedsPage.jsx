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
import { useEffect } from 'react';


const FeedsPage = () => {
 const Navigate = useNavigate()
 const {dischargeHandler,EditDiv,editHandler,postId,newContent,setAddNewcontentValue,handlertoupdateEdit,postlist,handleToEdit,singlePost,setAddNewPostValue,singlePostHandler,handleToDislike,handleToLike,handleTODeletePost} = usePost()
const{bookmarklist,handleToAddBookmark,handleToDeletBookmark}=useBookmark(); 


const {NewUserProfile} =useAuth()
const [trendingList,setTrendingList] =useState(postlist)

const handlerForLatest = (trendingList) =>{
  const sortedList = [...trendingList].sort((a,b)=>b.likes.likeCount-a.likes.likeCount);
  setTrendingList(sortedList)
  console.log(sortedList,"sorted List")
}
 

return (
  <>
  

        
        
        <div className='Feedlayout' > 
        <div className='feedpost' >
        <div  >
      <button className='feedButton'>Latest</button>
      <button className='feedButton' onClick={()=>handlerForLatest(trendingList)} >Trending</button>
     
    </div>
    <ol style={{display:"flex",justifyContent:"space-between",flexDirection:"column",alignItems: "center",listStyle:"none",display:"flex",justifyContent:"center"}}>{postlist?.map((item)=>{
            const{_id,postPic,content,likes,username,userPic,createdAt,}= item
            return(
            <>
            
            <li className='postCard' key={_id}>
            <div className='postCardHeading' >
              <div style={{display:"flex",justifyContent:"space-between"}} >
                <div style={{display:"flex"}} >
                <div  >
                {username === NewUserProfile.username ?  <img src={NewUserProfile.userPic} style={{borderRadius:"2rem"}} height={50} width={50} /> :<img src={userPic} style={{borderRadius:"2rem"}} height={50} width={50} />
             } </div>
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

  </>
  )
}

export default FeedsPage