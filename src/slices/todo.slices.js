import { createSlice } from "@reduxjs/toolkit";
const todoslice=createSlice({
    name:"todos",
    initialState:[],
    reducers:{
        addtodo:(state,action) =>{

state.push({text:action.payload,id:Math.random().toString()})        },
        edittodo:(state,action)=>{
            const editedtodo=prompt("edit text",action.payload.text)
            const index=state.findIndex((todo)=>todo.id===action.payload)
 state.splice(index,1,{text:editedtodo,id:action.payload.id})
        },
        deletetodo:(state,action)=>{
const index=state.findIndex((todo)=>todo.id===action.payload)
if(index>=0){
    state.splice(index,1)
}
        }

    }
})
export const {addtodo,edittodo,deletetodo}=todoslice.actions

export default todoslice