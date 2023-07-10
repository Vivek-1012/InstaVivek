import React from 'react'
import { useBookmark } from '../context/BookmarkContext'
import { Link } from 'react-router-dom'
import { usePost } from '../context/PostsContext'
import Popup from '../components/Popup'
import { FcLike,FcComments,FcShare,FcBookmark } from "react-icons/fc";
import { SlHeart } from "react-icons/sl";
import { GoBookmark } from "react-icons/go";
import { IoMdMore } from "react-icons/io";
import { useAuth } from '../context/AuthContext'
const BookmarkPage = () => {

    const {NewUserProfile} = useAuth()
  
    const {EditDiv,singlePost,newContent,dischargeHandler,handlertoupdateEdit,postId,setAddNewcontentValue,handleToAddPost,postlist,newPostAddedList,addNewPostValue,setAddNewPostValue,singlePostHandler,handleToDislike,handleToLike,handleTODeletePost,editHandler} = usePost()
  
  

const {handleToAddBookmark,bookmarklist,handleToDeletBookmark}=useBookmark()
// console.log(bookmarklist,"Bookmark page")

const filterList = bookmarklist.map((lst)=>lst._id)
console.log(filterList,"filterList")
const idlist = postlist.map(lst=>lst._id)
const list = idlist.filter((lst)=>lst !== filterList )

          
console.log(list,"Bppkmark page")

return (<>
    <div>BookmarkPage</div>

    <div className='LikedPagelayout' >
  <div style={{display: "flex",alignContent:"center",justifyContent:"center"}} >
  <ol style={{display:"flex",listStyle:"none",justifyContent:"space-between",flexDirection:"column",alignItems: "center",listStyle:"none",display:"flex",justifyContent:"center"}}>{bookmarklist?.map((item)=>{
            const{_id,content,likes,username,userPic,createdAt,likedBy}= item
            return(
            <>
            <li className='postCard' style={{listStyle:'none'}} key={_id}>
            <div className='postCardHeading' >
              <div style={{display:"flex",justifyContent:"space-between"}} >
                <div style={{display:"flex"}} >
                <div><img src={userPic} style={{borderRadius:"2rem"}} height={50} width={50} alt="" /></div>
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
                {/* <p>
                    {likes.likedBy?.find((lst)=>lst.username === NewUserProfile?.username)  ?  <FcLike  onClick={()=>handleToDislike(item)} />:< SlHeart onClick={()=>handleToLike(item)} /> }{likes.likeCount >0 && likes.likeCount}
                    </p> */}
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
    </>)

}

export default BookmarkPage