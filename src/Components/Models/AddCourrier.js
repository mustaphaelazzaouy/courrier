import React from 'react'
import "../../Styles/AddCourrier.css";
export default function AddCourrier(props) {

    


  return (
    <div className="backgroundadd">
     
    <div className="modaladd">
     
      <div className="modaltitle">
      
      <h2>{props.title}</h2>
      <button type="submit" className="close" onClick={() => props.close(false)}>
        X
      </button>
      </div>
      <div className="modalbody">
    <form >
        <div className="formitems">
        
            <div className="formitem">
                <h3>رقم المراسلة <span className='etoile'>*</span>
                
                </h3>
                <input type="text" placeholder="... رقم المراسلة"  name="numcrr" />
            </div>

            <div className="formitem">
                <h3>الموضوع<span className='etoile'>*</span></h3>
                <input type="text" placeholder="... الموضوع" name="objet" onChange="{e=>setObjet(e.target.value)}" />
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
                <button onClick="{update}" >تعديل</button>
            </div>
        </div>

        </form>
        </div>
        </div>
        </div>
  )
}
