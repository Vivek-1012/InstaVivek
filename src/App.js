import "./App.css";
import {Routes,Route, NavLink} from "react-router-dom"
import FeedsPage from "./pages/FeedsPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/Navbar";
import MockAPI from "./pages/Mockman";
import SinglePostDetails from "./pages/SinglePostDetails";
import { RequireAuth } from "./pages/RequireAuth";
import LikedPostPage from "./pages/LikedPostPage";
import BookmarkPage from "./pages/BookmarkPage";
import UserProfile from "./pages/UserProfile";
import Home from "./pages/Home";
import { IoHomeOutline, IoJournalSharp } from "react-icons/io5";
import {MdOutlineExplore,MdBookmarkBorder} from "react-icons/md";
import { SlHeart } from "react-icons/sl";
import { Link } from 'react-router-dom';
import Suggestion from "./components/Suggestion";
import Popup from "./components/Popup";
import Input from "./components/Input";
import { LuInstagram } from "react-icons/lu";

function App() {
  return (
    <div className="App">
      <div><Popup/></div> 
      
      
      <nav className="navBar">
        
        <div style={{color:"white",fontSize:"20px",display:"flex",alignItems:"center"}} > <span style={{fontWeight:"bold",color:"#00ADB5"}} >Insta</span>Vivek <span style={{fontSize:"25px"}} ><LuInstagram/></span></div>
        <div><Input /></div>
      </nav>
     
 <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}} >
      <div><Navbar /></div>

<div style={{width:"30rem"}} >
  <div style={{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center"}} >
    <Routes>
      <Route path="/" element={<RequireAuth> <Home /> </RequireAuth>} />
        <Route path="/feedPage" element={<RequireAuth> <FeedsPage /> </RequireAuth>} />
        <Route path="/signIn" element={<LoginPage />} />
        <Route path="/signUp" element={<SignupPage />} />
        <Route path="/profile" element={<ProfilePage />}  />
        <Route path='/mockman' element={<MockAPI />} />
        <Route path="/postDetails" element={<SinglePostDetails />} />
        <Route path="/likedPost" element={<LikedPostPage />} />
        <Route path="/bookmark" element={<BookmarkPage />} />
        <Route path="/userProfile" element={<UserProfile />} />
                
        </Routes>
        </div>
        </div>

       <div>
        <Suggestion />
        </div>

        
      
        </div>
      
</div>
  );
}

export default App;
