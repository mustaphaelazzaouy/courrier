import React, { useEffect, useState, useRef } from "react";
import "../Styles/Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import ModalDelelte from "./Models/ModalDelelte";
import ModalUpdateSrv from "./Models/ModalUpdateSrv";
import ReactPaginate from 'react-paginate';
import Modal from "./Models/Modal";
import axios from "axios";

function Srvc() {
  const [backendData, setBackendData] = useState([]);
  const [dp, setDp] = useState("*");
  const [srv, setSrv] = useState("");
  const [ID, setID] = useState("");
  const [OpenModelUpdate, setOpenModelUpdate] = useState(false);
  const [OpenModelDelete, setOpenModelDelete] = useState(false);
  const [OpenModelInsert, setOpenModelInsert] = useState(false);
  const [errService, setErrService] = useState(false);
  const [errDp, setErrDp] = useState(false);
  //pagination
  const [limit, setLimit] = useState(10);
  const [pageCount, setPageCount] = useState(3);

  const currentPage=useRef(1)

  const handledelete = async (id) => {
    
    setID(id);
    setOpenModelDelete(true)
  };

  const handleupdate = async (id) => {
    setID(id);
    setOpenModelUpdate(true);
    
  };

  const handleForm = async (e) => {
    e.preventDefault();
   
    const item = {
      dp: dp,
      service: srv,
    };
    if (item.service !== "" && item.dp !== "*" ) {
      await axios.post("http://localhost:5000/api/services/", item);
      setOpenModelInsert(true);
    } else
    {
      if(item.service === "") {setErrService(true);} 
      if(item.dp === "*") {setErrDp(true);}
    }
  };

//   //start pagination
//   const handlePageClick = (e) => {
//  currentPage.current=e.selected+1
//  getPaginateUsers()
//   };

// function getPaginateUsers(){
//     fetch(("http://localhost:5000/api/services?dp="+dp+"&service="+srv+"&page="+currentPage.current+"&limit="+limit))
//     .then((response) => response.json())
//     .then((data) => {setBackendData(data)
//                      setPageCount(data.pageCount)
//                      console.log(backendData.result[0])
//     })
// }
//   // endpagination



    useEffect(() => {
      fetch(("http://localhost:5000/api/services?dp="+dp+"&service="+srv))//+"&page="+currentPage.current+"&limit="+limit))
          .then((response) => response.json())
          .then((data) => {setBackendData(data)
                         //  setPageCount(data.pageCount)
                         //  console.log(backendData.result[0])
          })
     
     
    }, [backendData]);
  

  return (
    <div className="mainsrv">
          <form>
        <div className="formitems">
          <div className="formitem">
            <h3>
              المديرية الإقليمية<span className="etoile">*</span>
            </h3>
            <select 
             className={errDp ? "erreur" : ""}  
              value={dp}
              onChange={(e) => {
                setDp(e.target.value);
                 setErrDp(false);
              }}
            >
               <option value="*">*</option>
              <option value="طانطان">طانطان</option>
              <option value="كلميم">كلميم</option>
              <option value="أسا الزاك">أسا الزاك</option>
              <option value="سيدي إفني">سيدي إفني</option>
            </select>
          </div>

          <div className="formitem">
            <h3>
              المصلحة<span className="etoile">*</span>
            </h3>
            <input
              type="text"
              placeholder="المصلحة ......"
              className={errService ? "erreur" : ""}
              value={srv}
              onChange={(e) => {
                setSrv(e.target.value);
                setErrService(false);
              }}
            />
          </div>
        </div>
        <div className="formitems btn">
          <div className="formitem">
            <button type="submit" onClick={handleForm}>
              حفظ
            </button>
          </div>
        </div>
      </form>

      <div className="listeSrv">
        <h3>لائحة المصالح حسب المديريات</h3>
        <table>
          <thead>
            <tr>
              <th>المديرية</th>
              <th>المصلحة</th>
            </tr>
          </thead>
          <tbody>
            {backendData.length === 0 ? (
              <tr>
                <td></td>
                <td></td>
              </tr>
            ) : (
              backendData.map((srvc, i) => (
                <tr key={i}>
                  <td data-cell="المديرية">{srvc.dp}</td>
                  <td data-cell="المصلحة">{srvc.service}</td>

                  <td data-cell="تعديل">
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      className="update"
                      alt="تعديل"
                      onClick={() => handleupdate(srvc._id)}
                    />
                  </td>
                  <td data-cell="حدف ">
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="delete"
                      alt="حذف"
                      onClick={() => handledelete(srvc._id)}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {/* <ReactPaginate
        breakLabel="..."
        nextLabel="→"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="←"
        renderOnZeroPageCount={null}
      
        containerClassName="paginationBttns"
        previousLinkClassName="previous"
        nextLinkClassName="next"
        disabledClassName=""
        activeClassName="paginationactive"


      /> */}
      {/* <span>{backendData.startIndex + "...."+backendData.totalServices + " / " +backendData.result.length}</span>
      <span>{"de : "+backendData.startIndex + " à : "+backendData.lastIndex }</span> */}
      {OpenModelUpdate && <ModalUpdateSrv id={ID} close={setOpenModelUpdate} />}
      {OpenModelDelete && <ModalDelelte id={ID} close={setOpenModelDelete} body="هل أنت متأكد من أنك تريد حذف هذه المصلحة ؟ " query="http://localhost:5000/api/services/" />}
      {OpenModelInsert && <Modal  close={setOpenModelInsert} color="rgb(24, 141, 231)" title="إضافة" body="تمت إضافة المصلحة بنجاح"/>}
  
    </div>
  );
}

export default Srvc;
