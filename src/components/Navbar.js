import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import {MdOutlineExplore,MdBookmarkBorder} from "react-icons/md";
import { SlHeart } from "react-icons/sl";
import { Link, NavLink } from 'react-router-dom';



const Navbar = () => {
  

  return (
  <>
    {/* <div className='NavIcon' >    
    <div><Link to="/" ><p ><IoHomeOutline /></p> </Link> </div>
    <div><p><Link to="/feedPage"><MdOutlineExplore/></Link></p></div>
     <div><p><Link to="/bookmark"><MdBookmarkBorder/></Link></p></div>
     <div><p><Link to="/likedPost"><SlHeart /></Link></p></div>
     <button> Post </button>    
     </div> */}
       
     <div class="sideNavbar">
 
     <NavLink className="sideNavbaricon" to="/" ><IoHomeOutline /></NavLink>
      <NavLink className="sideNavbaricon" to="/feedPage"><MdOutlineExplore/></NavLink>
      <NavLink className="sideNavbaricon" to="/bookmark"><MdBookmarkBorder/></NavLink>
      <NavLink className="sideNavbaricon" to="/likedPost"><SlHeart /></NavLink>
      <NavLink className="sideNavbaricon" to="/signIn" > Login  </NavLink>
      <NavLink className="sideNavbaricon" to="/signUp" > Sign up </NavLink>
      <NavLink className="sideNavbaricon" to="/profile">Profile </NavLink>
      <NavLink className="sideNavbaricon" to="/userProfile">Profile</NavLink>
</div>

    </>)

  }

export default Navbar