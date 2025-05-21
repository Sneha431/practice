
  import { createSlice } from "@reduxjs/toolkit"
// import { decrement, increment, incrementbyvalue } from "../action/action"


const initialState =
{
  count: 0
};

const CounterSlice = createSlice({
  name:"counter",
initialState,
reducers:{
increment:(state)=> {state.count+=1},
    decrement: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },

    
  incrementbyvalue:(state,action)=>{state.count+=action.payload
}}
})

export const {increment,decrement,incrementbyvalue}=CounterSlice.actions;
export default CounterSlice.reducer;