export const INCREMENTCOUNT = "INCREMENTCOUNT";
export const DECREMENTCOUNT = "DECREMENTCOUNT";
export const INCREMENTCOUNTBYVALUE = "INCREMENTCOUNTBYVALUE";


export const increment = ()=>{return ({type:INCREMENTCOUNT})};
export const decrement = () => { return ({ type: DECREMENTCOUNT }) }
export const incrementbyvalue = (value) => { return ({ type: INCREMENTCOUNTBYVALUE , payload:value }) }