import { Link } from "react-router-dom";
import "../Styles/header.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const redirect=useNavigate()

  function toggelMenu() {
    setIsOpen((open) => !open);
  }

  function toggelUser() {
    setUserOpen((open) => !open);
  }


  function toggelUser1() {
    redirect("/")
  }

  return (
    <>
      <div className="menu">
        
        <div className="logo">
          <Link to="/Homepage"><FontAwesomeIcon icon={faEnvelope} className="lg" />
          المراسلات
          </Link>
        </div>
        <div className="Burger" onClick={toggelMenu}>
         <span></span>
         <span></span>
         <span></span>
        </div>
        <div className={`menu-items ${isOpen? "isopen": ""}`}>
          <div className="item">
            <Link to="/Homepage">الرئيسية</Link>
          </div>
          
          

          <div className="item">
            <Link to="/CreateCourrier">مراسلة</Link>
          </div>
          <div className="item">
            <Link to="/CreateUser">المستخدم</Link>
          </div>
          <div className="item">
            <Link to="/Services">المصالح</Link>
          </div>
          <div className="item">
            <Link to="/Statistiques">إحصائيات</Link>
          </div>
          <div className="item">
            <Link to="/Research">البحث</Link>
          </div>
          <div className="itemuser">
            {" "}
            <Link to=""  onClick={toggelUser}>مصطفى العزاوي </Link>{" "}
          </div>
        </div>
        
        <div className={`userinfo ${userOpen? "isopen": ""}`}>
          <div className="closeuserinfo" > 
          <button onClick={toggelUser}>X</button>
          </div>

          <div className="deconnecter" > 
          <button onClick={toggelUser1}>تسجيل الخروج</button>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Header;
