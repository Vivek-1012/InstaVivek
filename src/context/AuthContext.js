import { createContext, useContext, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";


export const AuthContext = createContext()


export const AuthProvider = ({children}) =>{
 const [NewUserProfile,setNewUserProfile] = useState([])
 const Navigate = useNavigate();
 const [userRegistration,setUserRegistration]=useState({
    firstName:"",
    lastName:"",
    username:"",
    password:""
     
 })

 const [userLogin,setuserLogin] = useState({
    username:"",
    password:"",
  user:{}    
 })
 
    const handleToLogin = async ()=>{
        try{

            const response = await fetch("/api/auth/login",{
             method:"POST",
             body: JSON.stringify({username:userLogin.username,password:userLogin.password})
            })
            if(response.status === 200){
                const {foundUser,encodedToken}= await response.json()

                setuserLogin((prev)=>({...prev,user:{...foundUser}}))
                setNewUserProfile(foundUser)
                
                console.log(userLogin,"Login ")   
                localStorage.setItem("token",encodedToken)
                console.log(encodedToken)
                Navigate("/")
            }

        }catch(e){
            console.error(e)
        }
    }

    const handleToSignUp = async()=>{
        try{
            const response = await fetch("/api/auth/signup",{
                method:"POST",
                body: JSON.stringify({username:userRegistration.username , password:userRegistration.password, firstName:userRegistration.firstName, lastName:userRegistration.lastName })          
                }
              
                
            
            
            ) 
            if(response.status === 201){
                Navigate("/signIn")
              console.log(await response.json(),"sign up")
                console.log("Signup",userRegistration.lastName,userRegistration.firstName,userRegistration.username,userRegistration.password)
            
            }    

        }catch(e){
            console.log(e)
        }
    }

  
     

return (
    <AuthContext.Provider value={{handleToSignUp,NewUserProfile,setNewUserProfile,handleToLogin,userRegistration,setUserRegistration,setuserLogin}} >
        {children}
    </AuthContext.Provider>
)}


export const useAuth = ()=> {
    return useContext(AuthContext)
}