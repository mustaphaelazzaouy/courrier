import React, {useEffect, useState } from "react";
import "../../Styles/Modaldelsrv.css";
import axios from 'axios';

export default function ModalDelelte(props) {
  



  const handleDelete= async()=>{
   
    await axios.delete(props.query+props.id);
    props.close(false)
  }

  return (
    <div className="backgrounddelsrv" onClick={() => props.close(false)}>
      <div className="modal">
       
        <div className="modaltitle">
        
        <h2>الحذف</h2>
        <button type="submit" className="close" onClick={() => props.close(false)}>
          X
        </button>
        </div>
        <div className="modalbody">
 {props.body}     </div>
        <div className="modalbtn">
          <button type="submit" className="btn"  onClick={() => handleDelete()}>
          حذف
          </button>
          <button type="submit" className="btn" onClick={() => props.close(false)}>
          إلغاء
          </button>
        </div>
      </div>
    </div>
  );
}
