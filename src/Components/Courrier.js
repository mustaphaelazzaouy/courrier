import React, { useState } from 'react'
import "../Styles/Courrier.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import AdCourrier from "./Models/AddCourrier";

export default function Courrier() {
   
    const [OpenAddCourrier, setOpenAddCourrier] = useState(false);

    

   
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
                    <tr>
                        <td data-cell="رقم المراسلة">12345</td>
                        <td data-cell="الموضوع">تكوينات في البرمجة</td>
                        <td data-cell="تاريخ التوصل">12/10/2023</td>
                        <td data-cell="تاريخ التنفيذ">12/10/2023</td>
                        <td data-cell="الجهة المسؤولة">منظومة الإعلام</td>
                        <td data-cell="الملاحظات">لاشيء</td>
                        <td data-cell="الوضعية">في طور الإنجاز</td>
                        <td data-cell="تعديل"><FontAwesomeIcon icon={faPenToSquare}  className='update' />
                        </td>
                        <td data-cell="حذف"><FontAwesomeIcon icon={faTrash}  className='delete' /></td>
                    </tr>
                    <tr>
                        <td data-cell="رقم المراسلة">12345</td>
                        <td data-cell="الموضوع">تكوينات في البرمجة</td>
                        <td data-cell="تاريخ التوصل">12/10/2023</td>
                        <td data-cell="تاريخ التنفيذ">12/10/2023</td>
                        <td data-cell="الجهة المسؤولة">منظومة الإعلام</td>
                        <td data-cell="الملاحظات">لاشيء</td>
                        <td data-cell="الوضعية">في طور الإنجاز</td>
                        <td data-cell="تعديل"><FontAwesomeIcon icon={faPenToSquare}  className='update' />
                        </td>
                        <td data-cell="حذف"><FontAwesomeIcon icon={faTrash}  className='delete' /></td>
                    </tr>
                    <tr>
                        <td data-cell="رقم المراسلة">12345</td>
                        <td data-cell="الموضوع">تكوينات في البرمجة</td>
                        <td data-cell="تاريخ التوصل">12/10/2023</td>
                        <td data-cell="تاريخ التنفيذ">12/10/2023</td>
                        <td data-cell="الجهة المسؤولة">منظومة الإعلام</td>
                        <td data-cell="الملاحظات">لاشيء</td>
                        <td data-cell="الوضعية">في طور الإنجاز</td>
                        <td data-cell="تعديل"><FontAwesomeIcon icon={faPenToSquare}  className='update' />
                        </td>
                        <td data-cell="حذف"><FontAwesomeIcon icon={faTrash}  className='delete' /></td>
                    </tr>
                    <tr>
                        <td data-cell="رقم المراسلة">12345</td>
                        <td data-cell="الموضوع">تكوينات في البرمجة</td>
                        <td data-cell="تاريخ التوصل">12/10/2023</td>
                        <td data-cell="تاريخ التنفيذ">12/10/2023</td>
                        <td data-cell="الجهة المسؤولة">منظومة الإعلام</td>
                        <td data-cell="الملاحظات">لاشيء</td>
                        <td data-cell="الوضعية">في طور الإنجاز</td>
                        <td data-cell="تعديل"><FontAwesomeIcon icon={faPenToSquare}  className='update' />
                        </td>
                        <td data-cell="حذف"><FontAwesomeIcon icon={faTrash}  className='delete' /></td>
                    </tr>
                    
                </tbody>
            </table>
        </div>

        {OpenAddCourrier &&  <AdCourrier close={setOpenAddCourrier} title="إضافة مراسلة جديدة" />}

     
</div>
  )
}


