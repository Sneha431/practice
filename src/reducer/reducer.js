
  import { DECREMENTCOUNT, INCREMENTCOUNT, INCREMENTCOUNTBYVALUE } from "../action/action"

const initialstate = 
{
count:0
}


export default function CountReducer(state=initialstate,action){
switch(action.type)
{
  case INCREMENTCOUNT:
   { 
    return {
    ...state,count:state.count+1}
    
   }
  
  case DECREMENTCOUNT:
    {
     
      return {
        ...state, count: state.count <= 0 ? state.count : state.count - 1
      }
    }
  case INCREMENTCOUNTBYVALUE:{
    return {
      ...state, count: state.count + action.payload
    }
  }
  default:return state
   
}
}
  