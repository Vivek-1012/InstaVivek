import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import {MdOutlineExplore,MdBookmarkBorder} from "react-icons/md";
import { SlHeart } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink } from 'react-router-dom';



const Navbar = () => {
  

  return (
  <>
   
       
     <div class="sideNavbar">
 
     <NavLink className="sideNavbaricon" to="/" ><IoHomeOutline /></NavLink>
      <NavLink className="sideNavbaricon" to="/feedPage"><MdOutlineExplore/></NavLink>
      <NavLink className="sideNavbaricon" to="/bookmark"><MdBookmarkBorder/></NavLink>
      <NavLink className="sideNavbaricon" to="/likedPost"><SlHeart /></NavLink>
      <NavLink className="sideNavbaricon" to="/userProfile"><CgProfile/></NavLink>
</div>

    </>)

  }

export default Navbar