import { configureStore } from "@reduxjs/toolkit";
import todoslice from "../slices/todo.slices";
const store=configureStore({
    reducer:{
        todo:todoslice.reducer
    }
})
export default store