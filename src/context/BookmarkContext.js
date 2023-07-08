import { useState } from "react";
import {createContext , useContext } from "react";
import { usePost } from "./PostsContext";
import { useEffect } from "react";



export const BookmarkContext = createContext();

export const BookmarkProvider = ({children})=>{
    const [bookmarklist,setBookmarklist] = useState([])
    const token = localStorage.getItem("token");

    
    
    const handleBookmarkList = async()=>{
        try{
          const response = await fetch("/api/users/bookmark/",{
           method:"GET",
           headers:({authorization: token })
          })
         const data = await response.json()
                 
          setBookmarklist(data.bookmarks)
        }catch(e){
            console.error(e)
        }
    }
    
    const handleToAddBookmark = async(item)=>{
        try{

            const response = await fetch(`/api/users/bookmark/${item._id}`,{
                method:"POST",
           headers:({authorization: token })
           
            })

            const data = await response.json()
                 
          setBookmarklist(data.bookmarks)
        
        }catch(e){
            console.error(e)
        }
    }
    const handleToDeletBookmark = async(item)=>{
        try{

            const response = await fetch(`/api/users/remove-bookmark/${item._id}`,{
                method:"POST",
               headers:({authorization: token })
           
            })

            const data = await response.json()
            console.log(data)     
            setBookmarklist(data.bookmarks)
        
        }catch(e){
            console.error(e)
        }
    }
 useEffect(()=>{handleBookmarkList()},[])

  
    
    return(
        <BookmarkContext.Provider value={{handleToAddBookmark,bookmarklist,handleToDeletBookmark}} >
            {children}
        </BookmarkContext.Provider>
    )
}

export const useBookmark=()=>{
    return useContext(BookmarkContext)
}