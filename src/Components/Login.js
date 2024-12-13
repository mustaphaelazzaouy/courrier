import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from "../Components/Models/Modal";
import logo from "../img/logo.png";
import "../Styles/Login.css";
import { useDispatch } from 'react-redux';
import request from '../utils/request';
import {authActions} from '../redux/slices/authSlice'
export default function Login() {
  const [email,setEmail]=useState()
  const [password,setPasswd]=useState()
const redirect=useNavigate()
const [OpenModel,setOpenModel]=useState(false)

const dispatch=useDispatch( )
  const connecter=async(e)=>{
    
 try {
  e.preventDefault()
  if(email  && password ){
    const response = await request.post('/api/users/login',{email,password})
    dispatch(authActions.login(response?.data))
    redirect("/homepage")
  }else{
    setOpenModel(true)
  }
 } catch (error) {
  setOpenModel(true)
 }
}

  return (
    <div className="mainlogin">
      
      <div className="right">
        <img src={logo} alt="" />
        <h1>منظومة تدبير المراسلات</h1>
        <form className="formitems">
          <input type="text" name="email" placeholder="إسم المستخدم" onChange={e=>setEmail(e.target.value)} />
          <input type="password" name="password" placeholder="كلمة المرور"  onChange={e=>setPasswd(e.target.value)}/>
          <button type="submit" onClick={connecter}>تسجيل الدخول</button>
        </form>
        
      </div>
      <div className="left">
        <h1>مرحبًا بك في حسابك الخاص</h1>
        <h3>
          
          مرحبًا بك في منظومة معلوماتية متكاملة تمكن من إرساء طرق
          عمل جديدة لتدبير
           <span>  المراسلات </span> 
           على صعيد الأكاديمية الجهوية كلميم وادنون
        </h3>
      </div>
     
      {OpenModel && <Modal  close={setOpenModel} color="rgb(228, 67, 67)" title="خطأ" body="اسم المستخدم أو كلمة المرور غير صحيحة"/>}
    </div>
   
  );
}
