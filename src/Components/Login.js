import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from "../Components/Models/Modal";
import logo from "../img/logo.png";
import "../Styles/Login.css";

export default function Login() {
  const [email,setEmail]=useState()
  const [passwd,setPasswd]=useState()
const redirect=useNavigate()
const [OpenModel,setOpenModel]=useState(false)

  const connecter=(e)=>{
    
    e.preventDefault()
  if(email === undefined && passwd === undefined){
redirect("/homepage")
  }else{
    // alert("Email ou mot de passe incorrect")
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
          <input type="password" name="passwd" placeholder="كلمة المرور"  onChange={e=>setPasswd(e.target.value)}/>
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
