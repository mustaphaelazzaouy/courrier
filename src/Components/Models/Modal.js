import React from "react";
import "../../Styles/Modal.css";

export default function Modal(props) {
  return (
    <div className="backgroundauth"  onClick={() => props.close(false)}  >
      <div className="modal">
       
        <div className="modaltitle" style={{backgroundColor:props.color}}>
        
        <h2>{props.title}</h2>
        <button type="submit" className="close" onClick={() => props.close(false)}>
          X
        </button>
        </div>
        <div className="modalbody">
        {props.body}
        </div>
        <div className="modalbtn">
          <button type="submit" className="cancel" style={{backgroundColor:props.color}} onClick={() => props.close(false)}>
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
}
