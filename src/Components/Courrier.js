import React, { useEffect, useState } from 'react'
import "../Styles/Courrier.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash,faEye } from '@fortawesome/free-solid-svg-icons';
import AdCourrier from "./Models/AddCourrier";
import {  format } from "date-fns";

export default function Courrier() {
   
    const [OpenAddCourrier, setOpenAddCourrier] = useState(false);
    const [dataPost,setDataPost]=useState([])
      useEffect(() => {
        fetch("http://localhost:5000/api/post")
          .then((response) => response.json())
          .then((data) => {
            setDataPost(data);
          });
      },[dataPost]);
    
function viewPDF(id){
  window.open(id)
}
   
  function AddCourrier() {

    setOpenAddCourrier(true);
  }
  return (
    <div className="mainCorr"  >
        
       

        <div class="listecr">
        <div className="entete">
        <h2>لائحة المراسلات</h2>
          <button type="submit" onClick={() => AddCourrier()}>
            إضافة
          </button>
        </div>
            <table>
                <thead>
                    <th>رقم المراسلة</th>
                    <th>الموضوع</th>
                    <th>تاريخ التوصل</th>
                    <th>تاريخ التنفيذ</th>
                    <th>الجهة المسؤولة</th>
                    <th>الملاحظات</th>
                    <th>الوضعية</th>
                    
                </thead>
                <tbody>
                  {dataPost.map((post,index)=>(
                    <tr key={index}>
                        <td data-cell="رقم المراسلة">{post.postNumber}</td>
                        <td data-cell="الموضوع"> {post.subject} </td>
                        <td data-cell="تاريخ التوصل">{format(post.dateReceive, "dd-MM-yyyy")}</td>
                        <td data-cell="تاريخ التنفيذ">{format(post.dateExecute, "dd-MM-yyyy")}</td>
                        <td data-cell="الجهة المسؤولة">منظومة الإعلام</td>
                        <td data-cell="الملاحظات">{post.observation}</td>
                        <td data-cell="الوضعية">في طور الإنجاز</td>
                        <td data-cell="معاينة"><FontAwesomeIcon icon={faEye}  onClick={()=>viewPDF(post.file.url)} className='update' />
                        </td>
                        <td data-cell="حذف"><FontAwesomeIcon icon={faTrash}  className='delete' /></td>
                    </tr>
                  ))}
                  
                    
                </tbody>
            </table>
        </div>

        {OpenAddCourrier &&  <AdCourrier close={setOpenAddCourrier} title="إضافة مراسلة جديدة" />}

     
</div>
  )
}


