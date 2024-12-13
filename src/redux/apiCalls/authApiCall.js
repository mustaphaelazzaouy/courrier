
import request from '../../utils/request'
import {authActions} from '../slices/authSlice'



export function loginUser(user){
    return async (dispatch)=>{
        try {
          
            const response=await request.post('/api/users/login',user)
            const {data}=response
           
           
          
            dispatch(authActions.login(data))
                localStorage.setItem("userInfo",JSON.stringify(data))
          
            
        } catch (error) {
          
            alert(1)
        }
    }
}