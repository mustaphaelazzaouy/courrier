import React, {useMemo, useState } from "react";
import "../../Styles/AddModal.css";
import axios from 'axios';
import Modal from "./Modal";

export default function Adduser(props) {
  
  const [OpenModelInsert, setOpenModelInsert]=useState(false)
  const [openErrModel, setOpenErrModel] = useState(false);
  const [dpData,setDpData]=useState([])
  const [id,setId]=useState(props.id)
  const [msg,setMsg]=useState("المرجو ملء الخانة")

  const [nom, setNom]=useState({value:"",err:false})
  const [prenom, setPrenom]=useState({value:"",err:false})
  const [login, setLogin]=useState({value:"",err:false})
  const [email, setEmail]=useState({value:"",err:false,msg:"المرجو ملء الخانات الفارغة"})
  const [passwd1, setPasswd1]=useState({value:"",err:false,msg:"المرجو ملء الخانات الفارغة"})
  const [passwd2, setPasswd2]=useState({value:"",err:false,msg:"المرجو ملء الخانات الفارغة"})
  const [dp,setDp]=useState({value:"",err:false})
  const [srv,setSrv]=useState({value:"",err:false})
  const [profil,setProfil]=useState({value:"",err:false})



const handleForm= async(e)=>{

  e.preventDefault();

  const item = {
    nom:nom.value,
    prenom:prenom.value,
    login:login.value,
    email:email.value,
    password:passwd1.value,
    service: srv.value,
    profile:profil.value
  };




    
const regex=/[a-zA-Z0-9.]+@[a-z0-9.]+\.[a-z]{2,8}/g; //(.[a-z{2,8}])?
   

    if(nom.value!=='' && prenom.value!=='' && login.value!=='' && email.value!=='' && passwd1.value!=='' && passwd2.value!=='' && dp.value!==''&& srv.value!==''&& profil.value!=='' )
     {
 
//email validation

if(!regex.test(email.value)){
 
  setEmail({...email,err:true,msg:"المرجو إدخال بريد إلكترونى صحيح"})
}



       else if(passwd1.value.length!==passwd2.value.length || passwd1.value!==passwd2.value){
setPasswd1({...passwd1,err:true,msg:"عدم تطابق كلمة السر بالخانتين "})
setPasswd2({...passwd2,err:true,msg:"عدم تطابق كلمة السر بالخانتين "})


      }
      else {
        await axios.post("http://localhost:5000/api/users/", item).then(
          (response)=>{setOpenModelInsert(true)}
        ).catch(
          (error)=>{
            setOpenErrModel(true)
          }
        )  
      }
     
     }
    else{
 
  // tester si un champ est vide
 
  if(nom.value===''){setNom({...nom,err:true})}else{setNom({...nom,err:false})}
  if(prenom.value===''){setPrenom({...prenom,err:true})}else{setPrenom({...prenom,err:false})}
  if(login.value===''){setLogin({...login,err:true})}else{setLogin({...login,err:false})}
  if(email.value===''){setEmail({...email,err:true})}else{setEmail({...email,err:false})}
  if(passwd1.value===''){setPasswd1({...passwd1,err:true})}else{setPasswd1({...passwd1,err:false})}
  if(passwd2.value===''){setPasswd2({...passwd2,err:true})}else{setPasswd2({...passwd2,err:false})}
  if (dp.value===''){setDp({...dp,err:true})}else{setDp({...dp,err:false})}
  if (srv.value===''){setSrv({...srv,err:true})}else{setSrv({...srv,err:false})}
  if (profil.value===''){setProfil({...profil,err:true})}else{setProfil({...profil,err:false})}
    // tester si un champ est vide
    }

  
}

useMemo(()=>{
  fetch(("http://localhost:5000/api/services?dp="+dp.value+"&service="))
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    setDpData(data)})
},[dpData])

 
  return (
    <div className="backgroundadd">
     
      <div className="modaladd">
       
        <div className="modaltitle">
        
        <h2>{props.title}</h2>
        <button type="submit" className="close" onClick={() => props.close(false)}>
          X
        </button>
        </div>
        <div className="modalbody">
        <form>
        <div className="formitems">
          
          <div className="formitem">
            <h3>الإسم<span className="etoile">*</span></h3>
            <input type="text" placeholder=" الإسم ......" value={prenom.value}  
            className={prenom.err ? "erreur" : ""}
            onChange={(e) => { setPrenom({value:e.target.value,err:false})}}/>
            <p className="err"> {prenom.err ? msg : ""}</p>
          </div>

          <div className="formitem">
            <h3>النسب<span className="etoile">*</span></h3>
            <input type="text" placeholder=" النسب ......" value={nom.value}  
            className={nom.err ? "erreur" : ""}
            onChange={(e) => { setNom({value:e.target.value,err:false})}}/>
            <p className="err"> {nom.err ? msg : ""}</p>
          </div>

          <div className="formitem">
            <h3>رقم التأجير<span className="etoile">*</span></h3>
            <input type="text" placeholder="إسم المستعمل..."  value={login.value} 
            className={login.err ? "erreur" : ""}
            onChange={(e) => {setLogin({value:e.target.value,err:false});  }}/>
            <p className="err"> {login.err ? msg : ""}</p>
          </div>

          <div className="formitem">
            <h3>البريد الإلكتروني<span className="etoile">*</span> </h3>
            <input type="email" placeholder=" البريد الإلكتروني ..."  value={email.value}
            className={email.err ? "erreur" : ""}
            onChange={(e) => {setEmail({...email,value:e.target.value,err:false});}}  />
                <p className="err"> {email.err ? email.msg : ""}</p>
          </div>

          <div className="formitem">
            <h3> كلمة المرور <span className="etoile">*</span> </h3>
            <input type="password" placeholder="  كلمة المرور ..."  value={passwd1.value}
            className={passwd1.err ? "erreur" : ""}
            onChange={(e) => {setPasswd1({...passwd1,value:e.target.value,err:false});
            setPasswd2({...passwd2,err:false}) }}/>
                <p className="err"> {passwd1.err ? passwd1.msg : ""}</p>
          </div>

          <div className="formitem">
            <h3>تأكيد كلمة المرور<span className="etoile">*</span></h3>
            <input type="password" placeholder=" تأكيد كلمة المرور ..." value={passwd2.value} 
            className={passwd2.err ? "erreur" : ""}
            onChange={(e) => {setPasswd2({...passwd2,value:e.target.value,err:false});
            setPasswd1({...passwd1,err:false});
            }}/>
               <p className="err"> {passwd2.err ? passwd2.msg : ""}</p>
          </div>
          <div className="formitem">
            <h3>المديرية الإقليمية<span className="etoile">*</span></h3>
            <select value={dp.value} placeholder=" المديرية الإقليمية..."
            className={dp.err ? "erreur" : ""}
            onChange={(e) => {setDp({value:e.target.value,err:false});}}>
              <option value=""></option>
              <option value="طانطان">طانطان</option>
              <option value="كلميم">كلميم</option>
              <option value="أسا الزاك">أسا الزاك</option>
              <option value="سيدي إفني">سيدي إفني</option>
            </select>
            <p className="err"> {dp.err ? msg : ""}</p>
          </div>

          <div className="formitem">
            <h3>المصلحة<span className="etoile">*</span></h3>
            <select value={srv.value} 
            className={srv.err ? "erreur" : ""}
            onChange={(e) => {setSrv({value:e.target.value,err:false});}}>
             <option value=""></option>
              {(dpData.length===0)?
          (""):

          (
            dpData.map((data, i) => (
            <option  key={i} value={data._id}>{data.service}</option>)))}
            </select>
            <p className="err"> {srv.err ? msg : ""}</p>
          </div>

          <div className="formitem">
            <h3>نوع الحساب<span className="etoile">*</span></h3>
            <select value={profil.value}
            className={profil.err ? "erreur" : ""}
            onChange={(e) => {setProfil({value:e.target.value,err:false});}}>
              <option value=""></option>
              <option value="admin">admin</option>
              <option value="invite">invite</option>
            </select>
            <p className="err"> {profil.err ? msg : ""}</p>
          </div>
        </div>
        
        </form>
        </div>
        <div className="modalbtn">
          <button type="submit" className="btn" onClick={handleForm}>
         حفظ
          </button>
          <button type="submit" className="btn" onClick={() => props.close(false)}>
          إغلاق
          </button>
        </div>
      </div>

      {OpenModelInsert && <Modal  close={setOpenModelInsert} color="rgb(24, 141, 231)" title="إضافة" body="تمت إضافة المستخدم بنجاح"/>}
      {openErrModel && <Modal  close={setOpenErrModel} color="rgb(228, 67, 67)" title="تنبيه" body="لا يمكن إضافة مستخدم موجود مسبقا في قاعدة البيانات"/>}
     
    </div>
  );
}
