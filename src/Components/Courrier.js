import React, { useState } from 'react'
import "../Styles/Courrier.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


export default function Courrier() {
    const [objet,setObjet]=useState()
    

    const send=(e)=>{
        e.preventDefault()
      alert(objet)
    }

    const update=(e)=>{
        e.preventDefault()

      alert("update")
    }
  return (
    <div className="mainCorr"  >
        
    <form onSubmit={send} >
        <div className="formitems">
        
            <div className="formitem">
                <h3>رقم المراسلة <span className='etoile'>*</span>
                
                </h3>
                <input type="text" placeholder="... رقم المراسلة"  name="numcrr" />
            </div>

            <div className="formitem">
                <h3>الموضوع<span className='etoile'>*</span></h3>
                <input type="text" placeholder="... الموضوع" name="objet" onChange={e=>setObjet(e.target.value)} />
            </div>
            <div className="formitem">
                <h3>تاريخ التوصل <span className='etoile'>*</span></h3>
                <input type="date" name="daterec" />
            </div>

            <div className="formitem">
                <h3>تاريخ التنفيذ <span className='etoile'>*</span></h3>
                <input type="date" name="datexe" />
            </div>


            <div className="formitem">
                <h3>المديرية الإقليمية<span className='etoile'>*</span></h3>
                <select name="dp">
                    <option value="1"></option>
                    <option value="2">طانطان</option>
                    <option value="3">كلميم</option>
                    <option value="4">أسا الزاك</option>
                    <option value="5">سيدي إفني</option>
                </select>
            </div>

            <div className="formitem">
                <h3>المصلحة<span className='etoile'>*</span></h3>
                <select name="service">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>

            <div className="formitem" >
                <h3>الملاحظات</h3>
                <textarea placeholder="... الملاحظات" name="observation"></textarea>
                               </div>

            <div className="formitem" >
                <h3>تحميل الملف</h3>
                <input type="file"  name="file" accept="" />
            </div>


        </div>
        <div className="formitems btn ">
            <div className="formitem ">
            <button type="submit"   >إرسال</button>
                {/* <button onClick={abbassi}>إرسال</button> */}
            </div>
            <div className="formitem ">
                <button onClick={update} >تعديل</button>
            </div>
        </div>

        </form>

        <div class="listecr">
            <h2>لائحة المراسلات</h2>
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

    
</div>
  )
}


