import { createContext, useContext, useEffect, useState } from "react";
import { usePost } from "./PostsContext";
import { useAuth } from "./AuthContext";
import Loading from "../components/Loading";


export const userContext = createContext();


 
export const UserProvider = ({children}) =>{
    const token = localStorage.getItem("token");
    const {setpostlist} = usePost();
    const {NewUserProfile,} = useAuth()
const {isLoading,setisLoading} = useAuth()
    const [userlist,setUserlist] = useState([])
    const [selectedUser,setSelectedUSer] = useState([])
    const{setNewUserProfile} =useAuth()   
   const [userDatabsePost,setUserDatabsePost]=useState([]) 
   const [newDetails,setnewDetails]=useState({
    bio:"",website:"",userPic:``})
  const postId = NewUserProfile._id


   const userList = async()=>{
        try{
    
            const response = await fetch("/api/users",{
                  method:"GET"
            })
    
            const userdata = (await response.json())
            
            setUserlist(userdata.users)   
            setisLoading(false)
        
        }catch(e){
            console.error(e)
        }
    }

    

    const handleGetUser = async(item)=>{
  
        try{ 
            const response = await fetch(`/api/users/${item._id}`,{
                method:"GET"
            })

            setSelectedUSer(await response.json())
            setisLoading(false)
            
            

        }catch(e){
            console.error(e)
        }
    }

    const handletoFollowUser = async(item)=>{
        try{
            const response = await fetch(`/api/users/follow/${item._id}`,{
                method:"POST",
                
                headers:({authorization: token })
            })
            const data = (await response.json()) 
            setNewUserProfile(data.user)
            setisLoading(false)
             
        }catch(e){
            console.error(e)
        }
    }

    const handleGetUserPost = async(item)=>{
        try{
            const response = await fetch(`/api/posts/user/${item.username}`,{
                method:"GET"
            })
            const data = (await response.json())
 
            setUserDatabsePost(data.posts)
            setisLoading(false)

        }catch(e){
            console.log(e)
        }
    }

    const handletoUnFollowUser = async(item)=>{
        try{

            const response = await fetch(`/api/users/unfollow/${item._id}`,{
                method:"POST",
                
                headers:({authorization: token })

            })

            console.log(await response.json())
            setisLoading(false)

        }catch(e){
            console.error(e)
        }
    }
     
    const handlertoupdateProfileDetails = async(postId,newDetails)=>{
        console.log(postId,newDetails,"userDetails")
        try{
            const response = await fetch(`/api/users/edit`,{
                method:"POST",
                headers:({authorization: token }),
                body: JSON.stringify({userData:{bio: newDetails.bio,website: newDetails.website, userPic:newDetails.userPic }})
            })
                        
            const data = await response.json()
            setNewUserProfile(data.user)
            setisLoading(false)

            console.log(data,"New user Data")
            // setpostlist(data.posts)

            // const responsePost = await fetch(`/api/posts/edit/${postId}`,{
            //     method:"POST",
            //     headers:({authorization: token }),
            //     body: JSON.stringify({ postData:{userPic: newDetails.userPic} })
            // })
           
          
            // const dataPost = await responsePost.json()
            // console.log(dataPost,"userEdited Post")
            // setpostlist(dataPost.posts)


        }catch(e){
            console.error(e)
        }
    }


    


    
    useEffect(()=>{userList()},[])
    
  
return <userContext.Provider value={{handlertoupdateProfileDetails,handleGetUserPost,userDatabsePost,newDetails,userlist,handleGetUser,selectedUser,handletoFollowUser,setnewDetails}} >
        {children}
    </userContext.Provider>
}

export const useUser = ()=>{
    return useContext(userContext)
}
