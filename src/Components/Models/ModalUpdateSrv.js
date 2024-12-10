import React, {useEffect, useState } from "react";
import "../../Styles/ModalUpdateSrv.css";
import axios from 'axios';
export default function ModalUpdateSrv(props) {



  const [dp,setDp]=useState("طانطان")
const [srv,setSrv]=useState("")
const [ID,setID]=useState(props.id)

const handleupdate= async()=>{
  await axios.put("http://localhost:5000/api/services/"+ID,{dp:dp,service:srv})
  // props.close(false)
}

useEffect(()=>{
  fetch("http://localhost:5000/api/services/"+ID)
  .then(response => response.json())
  .then(data =>{
    console.log(data);
    setSrv(data.service);
  setDp(data.dp)})
  },[])

 
  return (
    <div className="backgroundupdate" >
      <div className="modal">
       
        <div className="modaltitle">
        
        <h2>تعديل</h2>
        <button type="submit" className="close" onClick={() => props.close(false)}>
          X
        </button>
        </div>
        <div className="modalbody">
       <form>
       <div className="formitems">
          <div className="formitem">
            <h3>
              المديرية الإقليمية<span className="etoile">*</span>
            </h3>
            <select value={dp} onChange={(e)=>{setDp(e.target.value)}}>
             
              <option value="طانطان" >طانطان</option>
              <option value="كلميم">كلميم</option>
              <option value="أسا الزاك">أسا الزاك</option>
              <option value="سيدي إفني">سيدي إفني</option>
            </select>
          </div>

          <div className="formitem">
            <h3>
              المصلحة<span className="etoile">*</span>
            </h3>
            <input type="text" placeholder="المصلحة ......"  value={srv} onChange={(e)=>{setSrv(e.target.value)}}/>
          </div>
        </div>
       </form>
        </div>
        <div className="modalbtn">
          <button type="submit" className="btn" onClick={() => handleupdate()}>
         تعديل
          </button>
          <button type="submit" className="btn" onClick={() => props.close(false)}>
          إلغاء
          </button>
        </div>
      </div>
    </div>
  );
}
