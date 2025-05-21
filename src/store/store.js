
  // import  {createStore}  from "redux";
import CountReducer from "../reducer/reducer";
import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../slice/CounterSlice";


// export const store = createStore(CountReducer);
export const store = configureStore({
  reducer:{
    counter:CounterSlice
  }
})