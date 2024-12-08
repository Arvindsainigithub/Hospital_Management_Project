import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Context} from '../main'
import axios from 'axios'
import { toast } from 'react-toastify'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [show, setShow]= useState()
    const {isAuthenticated, setAuthenticated}= useContext(Context);
    const navigateTo = useNavigate();

    const handleLogout = async()=>{
            await axios.get("http://localhost:4000/api/v1/user/patient/logout",{withCredentials:true})
            .then(res=>{
              toast.success(res.data.message);
              setAuthenticated(false)
            }).catch((err)=>{
              toast.error(err.response.data.message);
            });
        } 
    const gotoLogin=()=>{
        navigateTo("/login");
    };

  return (
    <nav className='container'>
      <div className="logo">
        <img src="/src/AllImages/logo.png" alt="logo" className='logo-img' />
      </div>
      <div className={show ? "navLinks showmenu":"navLinks"}>
        <div className="links">
            <Link to = {"/"} >Home</Link>
            <Link to = {"/appointment"} >Appointment</Link>
            <Link to = {"/about"} >AboutUs</Link>
        </div>
        {
           isAuthenticated ? (<button className='logoutBtn btn' onClick={handleLogout}>Logout</button>):(<button className='logoutBtn btn' onClick={gotoLogin}>LogIn</button>)
        }
      </div>
      <div className='hamburger btn' onClick={()=>setShow(!show)}>
      <GiHamburgerMenu />
      </div>
    </nav>
  )
}

export default Navbar
