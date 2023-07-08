import React from 'react'
import { useAuth } from '../context/AuthContext';
import { useBookmark } from '../context/BookmarkContext';
import { usePost } from '../context/PostsContext';

const Popup = () => {

    const {dischargeHandler,EditDiv,editHandler,postId,newContent,setAddNewcontentValue,handlertoupdateEdit,postlist,handleToEdit,singlePost,setAddNewPostValue,singlePostHandler,handleToDislike,handleToLike,handleTODeletePost} = usePost()
    const{bookmarklist,handleToAddBookmark,handleToDeletBookmark}=useBookmark(); 
    const {NewUserProfile} =useAuth()

return (<>
  
  <div>{ EditDiv &&   <div className='parentpopupLayout' > <div className='popupLayout' > 

  
<input type="text"  placeholder='Whats in Your mind'  onChange={(event)=>setAddNewcontentValue(event.target.value)} />

<button onClick={()=>handlertoupdateEdit(postId,newContent)} >update Post</button>
<button onClick={()=>dischargeHandler()} >Discharge</button>
</div> </div> }</div>        
  
  </>
      )
}

export default Popup