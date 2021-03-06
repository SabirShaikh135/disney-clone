import {createSlice} from "@reduxjs/toolkit";
const initialState ={
    name:"",
    email:"",
    photo:"",
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        SetuserLogin:(state,action)=>{
            state.name=action.payload.name;
            state.email=action.payload.email;
            state.photo=action.payload.photo;
        },
        SetuserSignOut:(state)=>{
            state.name=null;
            state.email=null;
            state.photo=null;
        }
    }
})

export const {SetuserLogin,SetuserSignOut} = userSlice.actions;
export const selectusername = (state)=>state.user.name;
export const selectuseremail = (state)=>state.user.email;
export const selectuserphoto = (state)=>state.user.photo;
export default userSlice.reducer;