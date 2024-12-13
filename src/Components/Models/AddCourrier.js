import React, { useMemo, useState } from 'react'
import "../../Styles/AddCourrier.css";
import axios from 'axios';
import request from '../../utils/request';
export default function AddCourrier(props) {
const [postNumber, setPostNumber]=useState({value:"",err:false})
const [subject, setSubject]=useState({value:"",err:false})   
const [dateReceive, setDateReceive]=useState({value:"",err:false})   
const [dateExecute, setDateExecute]=useState({value:"",err:false})  
const [observation, setObservation]=useState({value:"",err:false}) 
const [file, setFile]=useState({value:"",err:false}) 
const handleForm=async(e)=> {
    e.preventDefault();
    const formData=new FormData()
    formData.append("postNumber",postNumber.value)
    formData.append("subject",subject.value)
    formData.append("dateReceive",dateReceive.value)
    formData.append("dateExecute",dateExecute.value)
    formData.append("observation",observation.value)
    formData.append("file",file.value)
    console.log(file.value)
    await request.post('/api/post',formData,{
        headers:{
            "Content-Type":"multipart/form-data"
        }
    }).then(()=>console.log('ok'))
    .catch(e=>console.log(e))
    

    
} 
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
                <input type="text" placeholder="... رقم المراسلة"  
                onChange={(e)=>setPostNumber({value:e.target.value})}
                name="numcrr" />
            </div>

            <div className="formitem">
                <h3>الموضوع<span className='etoile'>*</span></h3>
                <input type="text" placeholder="... الموضوع" 
                name="objet" 
                onChange={(e)=>setSubject({value:e.target.value})}
                 />
            </div>
            <div className="formitem">
                <h3>تاريخ التوصل <span className='etoile'>*</span></h3>
                <input type="date"
                 name="daterec"
                 onChange={(e)=>setDateReceive({value:e.target.value})}
                 />
            </div>

            <div className="formitem">
                <h3>تاريخ التنفيذ <span className='etoile'>*</span></h3>
                <input type="date" name="datexe"
                onChange={(e)=>setDateExecute({value:e.target.value})}
                />
            </div>



            <div className="formitem" >
                <h3>الملاحظات</h3>
                <textarea placeholder="... الملاحظات" name="observation"
                onChange={(e)=>setObservation({value:e.target.value})}
                ></textarea>
                               </div>

            <div className="formitem" >
                <h3>تحميل الملف</h3>
                <input type="file"  name="file" accept=""
                onChange={(e)=>setFile({value:e.target.files[0]})}
                />
            </div>


        </div>
        <div className="formitems btn ">
            <div className="formitem ">
            <button type="submit" onClick={handleForm}  >إرسال</button>
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
