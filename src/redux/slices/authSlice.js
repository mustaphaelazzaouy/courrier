import {createSlice} from "@reduxjs/toolkit"

const authSlice=createSlice({
    name:"auth",
    initialState:{
        user:localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) :null,
        error:false,

    },
    reducers:{
        login(state,action){
            state.user=action.payload 
            localStorage.setItem("userInfo",JSON.stringify(action.payload ))
            state.error=false
           
        },
        signInfailue(state,action){
            state.user=null
            state.error=true
             
        },
        signOut(state,action){
            state.user=null
            localStorage.removeItem('userInfo')
            state.error=true
             
        },

        
    }
})
 const authReducer =authSlice.reducer
 const authActions=authSlice.actions

export   {authActions,authReducer} 