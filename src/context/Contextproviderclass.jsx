
  import React, { useState } from 'react'
import { Countercontext } from './context.js';





export const Contextproviderclass = ({children}) => {
  const[count,setcount]=useState(0);
  const inccount = () =>{
    setcount(count=>count+1);
  }
  return (
    <Countercontext.Provider value={{ count, setcount, inccount }}>
      {children}
    </Countercontext.Provider>
  );
}

