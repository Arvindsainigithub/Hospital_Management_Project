import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Login from './Components/Login'
import AddNewAdmin from './Components/AddNewAdmin'
import AddNewDoctor from './Components/AddNewDoctor'
import Messages from './Components/Messages'
import Doctor from './Components/Doctor'
import Sidebar from './Components/Sidebar'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Context} from "./main";
import axios from 'axios'
import "./App.css"

const App = () => {
  const {isAuthenticated,setAuthenticated,setUser} = useContext(Context);
  useEffect(()=>{
    const fetchUser = async()=>{
    try {
      const response = await axios.get("http://localhost:4000/api/v1/user/admin/me",{withCredentials : true});
      setAuthenticated(true);
      setUser(response.data.user);
    } catch (error) {
      setAuthenticated(false)
      setUser({});
    }
  };
  fetchUser();
  },[isAuthenticated]);
  return (
    <>
      <Router>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/admin/addnew' element={<AddNewAdmin/>}/>
          <Route path='/doctor/addnew' element={<AddNewDoctor/>}/>
          <Route path='/message' element={<Messages/>}/>
          <Route path='/doctor' element={<Doctor/>}/>
        </Routes>
        <ToastContainer position='top-center'/>
      </Router>
    </>
    )}
export default App
