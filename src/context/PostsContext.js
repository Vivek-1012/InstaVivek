import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { useUser } from "./UserContext";
import Loading from "../components/Loading";


export const PostContext = createContext();


export const PostProvider = ({children}) =>{
 const token = localStorage.getItem("token");
const [EditDiv,setEditDiv]=useState(false)
const {NewUserProfile} =useAuth()
const {isLoading,setisLoading} = useAuth()

 const [addNewPostValue,setAddNewPostValue]=useState()
 const [postlist,setpostlist] = useState([])
 const [ singlePost,setSinglePost] = useState([])
 const [likedPostList,setlikedPostList] = useState([])
 const post = singlePost.content
 const postId =singlePost._id 
 const [newContent,setAddNewcontentValue]=useState(post)
// const {newDetails} = useUser() 
 
 const postList = async()=>{
        try{
            const response = await fetch("/api/posts",
            {
               method:"GET"
            })

             const postData = await response.json() 
             setpostlist(postData.posts) 
             setisLoading(false)
            }catch(e){
            console.log(e)
        }
    }

    const singlePostHandler = async(item)=>{
        try{
            const response = await fetch(`/api/posts/${item._id}`,{
                method:"GET"
            })
            const data = await response.json()
            setSinglePost(data.post)

        }catch(e){
            console.error(e)
        }
    }

    const handleToAddPost = async(post)=>{
        try{
            const response = await fetch(`/api/posts`,{
              method:"POST",
              headers:({authorization: token }),
              body: JSON.stringify({ postData: {content: post, userPic: NewUserProfile.userPic } })
            })
            const data =(await response.json())
            
            setpostlist(data.posts)
            // setisLoading(false)
            
        }catch(e){
            console.error(e)
        }
    }

    const handleToEdit = async(postId,newContent)=>{
        console.log(postId,newContent,"- edit content")
        try{
            const response = await fetch(`/api/posts/edit/${postId}`,{
                method:"POST",
                headers:({authorization: token }),
                body: JSON.stringify({ postData:{content: newContent} })
            })
           
          
            const data = await response.json()
            setpostlist(data.posts)
            // setisLoading(false)
             
        }catch(e){
            console.error(e)
        }
    }

    

    
    const handleToLike = async(item)=>{
        try{
            const response = await fetch(`/api/posts/like/${item._id}`,{
                method:"POST",
                
                headers:({authorization: token })
            })

            const postData = await response.json() 
            
            console.log(postData,token)
            setpostlist(postData.posts)
            
        }catch(e){
            console.error(e)
        }
    }

    const handleToDislike = async(item)=>{
        try{
            const response = await fetch(`/api/posts/dislike/${item._id}`,{
                method:"POST",
                
                headers:({authorization: token })
            })

            const postData = await response.json() 
             setpostlist(postData.posts)
            
        }catch(e){
            console.error(e)
        }
    }

    const handleTODeletePost = async (item)=>{
        try{
             const response = await fetch(`/api/posts/${item._id}`,{
                method:"DELETE",                
                headers:({authorization: token })
             })   
             const postData =await response.json()

             setpostlist(postData.posts)
            //  setisLoading(false)
     
        }catch(e){
            console.error(e)
        }
    }

useEffect(()=>{postList()},[])


const handlertoupdateEdit=(postId,newContent)=>{
    handleToEdit(postId,newContent)
    
      setAddNewcontentValue({newContent}) 
      setEditDiv(!EditDiv)
          }

          const editHandler=(item) =>{
            singlePostHandler(item)
           
            setEditDiv(!EditDiv)
          }
         
         
if(isLoading){
    return <div><Loading /></div>
}

 
          const dischargeHandler=()=>setEditDiv(!EditDiv)


return<PostContext.Provider value={{newContent,postId,dischargeHandler,EditDiv,editHandler,setEditDiv,setAddNewcontentValue,handlertoupdateEdit,addNewPostValue,handleToEdit,setAddNewPostValue,postlist,handleToAddPost,handleTODeletePost,singlePostHandler,singlePost,handleToLike,setpostlist,likedPostList,handleToDislike,token}}>
    {children}
</PostContext.Provider>

}

export const usePost = ()=>{
    return useContext(PostContext)
}