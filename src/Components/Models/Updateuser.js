import React, { useEffect, useState } from "react";
import "../../Styles/AddModal.css";
import axios from "axios";
import Modal from "./Modal";

export default function Adduser(props) {
  const [OpenModelUpdate, setOpenModelUpdate] = useState(false);
  const [dpData,setDpData]=useState([]);
  const [id, setId] = useState(props.id);
  
  const [nom, setNom] = useState({value:"",err:false});
  const [prenom, setPrenom] = useState({value:"",err:false});
  const [login, setLogin] = useState({value:"",err:false});
  const [email, setEmail] = useState({value:"",err:false,msg:"المرجو ملء الخانات الفارغة"});
  const [passwd1, setPasswd1] = useState({value:"",err:false,msg:"المرجو ملء الخانات الفارغة"});
  const [passwd2, setPasswd2] = useState({value:"",err:false,msg:"المرجو ملء الخانات الفارغة"});
  const [dp, setDp] = useState({value:"",err:false});
  const [srv, setSrv] = useState({value:"",err:false});
  const [profil, setProfil] = useState({value:"",err:false});
  

  const handleForm = async (e) => {
    e.preventDefault();

   
    await axios.put("http://localhost:5000/api/users/" + id, {
      nom: nom.value,
      prenom: prenom.value,
      login: login.value,
      email: email.value,
      mot_passe: passwd1.value,
      dp: dp.value,
      service: srv.value,
      profil: profil.value,
    })
    setOpenModelUpdate(true)
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/users/"+id)
      .then((response) => response.json())
      .then((data) => {
        setNom({...nom,value:data.nom});
        setPrenom({...prenom,value:data.prenom});
        setLogin({...login,value:data.login});
        setEmail({...email,value:data.email});
        setPasswd1({...passwd1,value:data.mot_passe});
        setPasswd2({...passwd1,value:data.mot_passe});
        setDp({...dp,value:data.dp});
        setSrv({...srv,value:data.service});
        setProfil({...profil,value:data.profil});
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  useEffect(()=>{
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
          <button
            type="submit"
            className="close"
            onClick={() => props.close(false)}
          >
            X
          </button>
        </div>
        <div className="modalbody">
          <form>

            <div className="formitems">
              
              <div className="formitem">
                <h3>الإسم <span className="etoile">*</span></h3>
                <input type="text" placeholder="الإسم ..." value={prenom.value} 
                onChange={(e) => {setPrenom({...prenom,value:e.target.value});}}/>
              </div>


              <div className="formitem">
                <h3>النسب<span className="etoile">*</span></h3>
                <input type="text" placeholder=" النسب ......" value={nom.value}
                 onChange={(e) => {setNom({...nom,value:e.target.value});}}/>
              </div>


              <div className="formitem">
                <h3>رقم التأجير <span className="etoile">*</span></h3>
                <input type="text" placeholder="إسم المستعمل..." value={login.value}
                  onChange={(e) => {setLogin({...login,value:e.target.value});}}/>
              </div>


              <div className="formitem">
                <h3>البريد الإلكتروني<span className="etoile">*</span></h3>
                <input type="text" placeholder=" البريد الإلكتروني ..." value={email.value}
                  onChange={(e) => {setEmail({...email,value:e.target.value});}}/>
              </div>


              <div className="formitem">
                <h3>كلمة المرور <span className="etoile">*</span></h3>
                <input type="password" placeholder="  كلمة المرور ..." value={passwd1.value}
                  onChange={(e) => {setPasswd1({...passwd1,value:e.target.value}); }} />
              </div>


              <div className="formitem">
                <h3>تأكيد كلمة المرور<span className="etoile">*</span></h3>
                <input type="password" placeholder=" تأكيد كلمة المرور ..." value={passwd2.value}
                  onChange={(e) => {setPasswd2({...passwd2,value:e.target.value}); }}/>
              </div>


              <div className="formitem">
                <h3>المديرية الإقليمية<span className="etoile">*</span></h3>
                <select value={dp.value} onChange={(e) => {setDp({...dp,value:e.target.value});}}>
                  <option value=""></option>
              <option value="طانطان">طانطان</option>
              <option value="كلميم">كلميم</option>
              <option value="أسا الزاك">أسا الزاك</option>
              <option value="سيدي إفني">سيدي إفني</option>
                </select>
              </div>

          <div className="formitem">
            <h3> المصلحة<span className="etoile">*</span> </h3>
            <select value={srv.value} onChange={(e) => {setSrv({...srv,value:e.target.value});}}>
             
              {(dpData.length===0)?
          (<option value=""></option>):
          (dpData.map((data, i) => (
          <option  key={i}>{data.service}</option>)))}
               </select>
          </div>

              <div className="formitem">
                <h3>نوع الحساب<span className="etoile">*</span></h3>
                <select value={profil.value} onChange={(e) => {setProfil({...profil,value:e.target.value});}}>
                  <option value=""></option>
                  <option value="admin">admin</option>
                  <option value="invite">invite</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div className="modalbtn">
          <button type="submit" className="btn" onClick={handleForm}>
            حفظ
          </button>
          <button
            type="submit"
            className="btn"
            onClick={() => props.close(false)}
          >
            إغلاق
          </button>
        </div>
      </div>
      {OpenModelUpdate && <Modal  close={setOpenModelUpdate} color="rgb(24, 141, 231)" title="تعديل" body="تمت تعديل المستخدم بنجاح"/>}
     
    </div>
  );
}
