import React, {useContext, useState} from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Context } from '../main'
import { Navigate,Link, useNavigate } from 'react-router-dom';
const Login = () => {
  const {isAuthenticated, setAuthenticated}=useContext(Context)
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [confirmPassword, setConfirmPassword]= useState("");
  const navigateTo = useNavigate();
  const handleLogin = async(e)=>{
    e.preventDefault();
   try {
    const response = await axios.post("http://localhost:4000/api/v1/user/login",{email, password, confirmPassword,role:"Patient"}, {withCredentials: true,
      headers: {"Content-type":"application/json"},}
    );
    toast.success(response.data.message);
    setAuthenticated(true)
    navigateTo("/")
   } catch (error) {
    toast.error(error.response.data.message)
   }
  };
  if(isAuthenticated){
    return <Navigate to ={"/"}/>
  }
  return (
    <div className='container form-component login-form'>
      <h2>Sing In</h2>
      <p>Please Login to continue</p>
      <form onSubmit={handleLogin}>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/>
        <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder='Confirm Password'/>
        <div style={{gap:"10px", justifyContent:"flex-end", flexDirection:"row"}}></div>
        <p style={{marginBottom:0}}>Not Register</p>
        <Link to={"/register"} style={{textDecoration:"none",alignItmes:"center"}}>Register Now</Link>
        <div style={{justifyContent:"center", alignItems: "center"}}>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  )
}
export default Login;
