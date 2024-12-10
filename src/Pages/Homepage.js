import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "../Styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Homepage() {
  return (
    <>
      <Header />
      <div className="mainhome">
     <FontAwesomeIcon icon={faEnvelope} className="icon" />
        <h1>نظام تدبير المراسلات</h1>
        
      </div>
      <Footer />
    </>
  );
}
