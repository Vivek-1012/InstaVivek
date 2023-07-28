import React from 'react'
import { useAuth } from '../context/AuthContext';
import { usePost } from '../context/PostsContext';
import { useBookmark } from '../context/BookmarkContext';
import { FcLike,FcComments,FcShare,FcBookmark } from "react-icons/fc";
import { SlHeart } from "react-icons/sl";
import { GoBookmark } from "react-icons/go";
import { IoMdMore } from "react-icons/io";
import { Link } from 'react-router-dom';

import { useUser } from '../context/UserContext';


const Home = () => {

  const {NewUserProfile} = useAuth()
  const {userlist} = useUser()
  const {newPostItem,setNewPostItem,handleToAddPost,postlist,newPostAddedList,addNewPostValue,setAddNewPostValue,singlePostHandler,handleToDislike,handleToLike,handleTODeletePost,editHandler} = usePost()
  const{bookmarklist,handleToAddBookmark,handleToDeletBookmark }=useBookmark(); 

   
 const filterList = postlist?.filter((lst=>lst.username === NewUserProfile?.username  ))
 const UserDp = userlist.user?.find((lst)=> lst.username === filterList?.username)
 console.log(filterList,"userFilter")
 console.log(UserDp,"userDp")
  const post = addNewPostValue
 const handleImageContent = (e) =>{

  const type = (e.target?.files[0]?.type)
  if(e.target?.files[0]?.type === undefined) return;
  if(type === "image/png" || type === "image/jpeg" || type === "image/jpg"){
      setNewPostItem({...newPostItem,imageContent:URL.createObjectURL(e.target.files[0]),videoContent:null})
  }
  else{
      setNewPostItem({...newPostItem,videoContent:URL.createObjectURL(e.target.files[0]),imageContent:null})
  }
 }
 
 const handleNewPost = (newPostItem) =>{
 if(newPostItem.imageContent ===  null && newPostItem.textContent === "" ){
 console.log("error")
 }else{
  handleToAddPost(newPostItem)
  setNewPostItem({ imageContent:null , textContent:"",videoContent:null })
 
}

console.log(newPostItem.textContent)
 }

return (
<>
   
      


  <div style={{display:"flex",flexDirection:"column",padding:"0.5rem",alignItems:"center"}} > 

<p className='addContentLayout' >
  <input type="text"  placeholder='Whats in Your mind' style={{width:"100%",height:"5rem",border:"1px solid white",padding:"0.7rem",backgroundColor:"lightblue"}}  value={newPostItem.textContent} onChange={(event)=>setNewPostItem((prv)=>({...prv,textContent:event.target.value}))} />
  <div style={{display:"flex",padding:"0.5rem",justifyContent:"space-between",alignItems:"center"}}>
    <div>

      <label htmlFor="file">
<input type="file"  name="file" style={{display:"none"}} accept='image/*,video/*' id="file" onChange={(e)=>handleImageContent(e)} />
    <div style={{cursor:"pointer",background:"#4F709C",padding:"0.5rem",border:"1px solid black",borderRadius:"0.5rem",color:"white" }} > Add Media </div>
      </label>
    </div>
    
   <button  type='submit' style={{padding:"0.5rem",cursor:"pointer",borderRadius:"0.5rem",background:"lightblue"}}  onClick={()=>handleNewPost(newPostItem)}> Add post</button>  
   </div> 
      </p>
      
  
  
   <ol style={{display:"flex",justifyContent:"space-between",flexDirection:"column",alignItems: "center",listStyle:"none",display:"flex",justifyContent:"center"}}>{filterList?.map((item)=>{
            const{_id,userPic,content,likes,postPic,username,createdAt}= item
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
               

            
                
                 <Link to="/postDetails" style={{textDecoration:"none",padding:"0.5rem",color:"black"}} ><div onClick={()=>singlePostHandler(item)} ><p style={{textAlign:'left',marginBottom:"0.5rem"}} >{content}</p>
                 <div style={{textAlign:"center"}} >
                  {postPic === null ? <div></div> :
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
                <div>
                
                </div>
                
            
</>  )
}

export default Home