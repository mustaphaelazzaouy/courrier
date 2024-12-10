import React, { useState, useEffect,useMemo } from "react";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import "../Styles/User.css";
import Adduser from "./Models/Adduser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ModalDelelte from "./Models/ModalDelelte";
import Updateuser from "./Models/Updateuser";

export default function Main() {
  const [openUpdateModel, setOpenUpdateModel] = useState(false);
  const [openAddModel, setOpenAddModel] = useState(false);
  const [openDeleteModel, setOpenDeleteModel] = useState(false);
  const [backendData, setBackendData] = useState([]);
  const [backendData2, setBackendData2] = useState([]);
  const [dp, setDp] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [ns, setNs] = useState("");
  const [id, setId] = useState("");
  function addUser() {
    setOpenAddModel(true);
  }



// useMemo(()=>{alert('test')},[backendData])

const handleresearch=()=>{ 
  // fetch("http://localhost:5000/api/users/req?nom="+nom+"&prenom="+prenom+"&login="+ns+"&dp="+dp)
  // .then((response) => response.json())
  // .then((data) => {
  //   // console.log(data);
  //   setBackendData(data);
  // })
}



  function hideshow() {
    const elm=document.getElementById("body");
    const btn=document.getElementById("shhd");
    if(btn.innerText==="-")
    {
      elm.style.display='none';
      btn.innerText="+";
    }
    else
    {
      elm.style.display='block';
      btn.innerText="-";
    }
   
  }



  function updateUser(i) {
    setId(i);
    setOpenUpdateModel(true);
  }

  function handledelete(i) {
    setId(i);
    setOpenDeleteModel(true);
  }

  useEffect(() => {
    fetch("http://localhost:5000/api/users/req?nom="+nom+"&prenom="+prenom+"&login="+ns+"&dp="+dp)
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  },[backendData]);

  return (
    <div className="mainuser">
      <div className="listeUser">

        <div className="research">
          <div className="title">
            <h2>البحث</h2>
            <h2 id="shhd" onClick={()=>hideshow()}>+</h2>
          </div>
          <div className="bodyr" id="body">
            
          <div className="formitemsr">
          <div className="formitemr">
            <h3>
            الإسم 
            </h3>
            <input type="text" placeholder="الإسم ..." 
             value={prenom}
             onChange={(e) => {
               setPrenom(e.target.value);
             }}/>
          </div>

          <div className="formitemr">
            <h3>
            النسب 
            </h3>
            <input type="text" placeholder="النسب ..." 
             value={nom}
             onChange={(e) => {
               setNom(e.target.value);
             }}/>
          </div>

          <div className="formitemr">
            <h3>
            رقم التأجير 
            </h3>
            <input type="text" placeholder="رقم التأجير ..." 
            value={ns}
            onChange={(e) => {
              setNs(e.target.value);
            }} />
          </div>

          <div className="formitemr">
            <h3> المديرية الإقليمية  </h3>
            <select value={dp}
                  onChange={(e) => {
                    setDp(e.target.value);
                  }}>
              <option value="">*</option>
              <option value="طانطان">طانطان</option>
              <option value="كلميم">كلميم</option>
              <option value="أسا الزاك">أسا الزاك</option>
              <option value="سيدي إفني">سيدي إفني</option>
          </select>
          </div>
          
          </div>

          <div className="bttn">
            <button type="submit" onClick={handleresearch}>بحث</button>
          </div>


          </div>
        </div>

        <div className="entete">
          <h2>لائحة المستخدمين</h2>
          <button type="submit" onClick={() => addUser()}>
            إضافة
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>الإسم </th>
              <th>النسب</th>
              <th>رقم التأجير</th>
              <th>البريد الإلكتروني </th>
              <th>المديرية</th>
              <th>المصلحة</th>
            </tr>
          </thead>

          <tbody>
            {backendData.length === 0 ? (
              <tr>
                <td data-cell="الإسم"></td>
                <td data-cell="النسب"> </td>
                <td data-cell="إسم المستعمل "></td>
                <td data-cell="البريد الإلكتروني"></td>
                <td data-cell="المديرية"></td>
                <td data-cell="المصلحة"></td>
              </tr>
            ) : (
              backendData.map((user, i) => (
                <tr key={i}>
                  <td data-cell="الإسم">{user.prenom}</td>
                  <td data-cell="النسب">{user.nom} </td>
                  <td data-cell="إسم المستعمل ">{user.login}</td>
                  <td data-cell="البريد الإلكتروني">{user.email}</td>
                  <td data-cell="المديرية">{user.dp}</td>
                  <td data-cell="المصلحة">{user.service}</td>
                  <td data-cell="تعديل">
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      className="update"
                      onClick={() => updateUser(user._id)}
                    />
                  </td>
                  <td data-cell="حدف ">
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="delete"
                      onClick={() => handledelete(user._id)}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {openAddModel && (
        <Adduser close={setOpenAddModel} title="إضافة مستخدم جديد" id={id} />
      )}
      {openUpdateModel && (
        <Updateuser close={setOpenUpdateModel} title="تعديل" id={id} />
      )}
      {openDeleteModel && (
        <ModalDelelte
          close={setOpenDeleteModel}
          id={id}
          body="هل أنت متأكد من أنك تريد حذف هذا المستخدم ؟ "
          query="http://localhost:5000/api/users/"
        />
      )}
    </div>
  );
}
