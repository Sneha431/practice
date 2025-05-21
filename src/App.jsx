
import './App.css'

import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement,incrementbyvalue } from "./slice/CounterSlice";
import {useContext, useState } from 'react';
import Button from '@mui/material/Button';
import { Countercontext } from './context/context.js';
import axios from 'axios';
import useSWR from 'swr';
import Viewuserdata from './Viewuserdata.jsx';
import { BrowserRouter, Routes ,Route, Link} from 'react-router-dom';
import Adduserdata from './Adduserdata.jsx';
import Edituser from './Edituser.jsx';

// import { decrement, increment, incrementbyvalue } from './action/action'

function App() {
const dispatch = useDispatch();
const [colorv, setcolor] = useState("bg-blue-400");
// // const countdata = useSelector((state) => state.count);
 const countdata = useSelector((state) => state.counter.count);
const { count, inccount } = useContext(Countercontext);
const changebg = () =>{
setcolor("themebg");
}
const[datas,setdata]=useState([]);
const fetchdata = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((result) => setdata(result));
};

const fetchdatausingaxios = () => {
  axios.get("https://jsonplaceholder.typicode.com/todos").then((result) => setdata(result.data)).catch((err)=>console.log(err));
};

const fetcher = (url) => fetch(url).then((res)=>res.json());
const fetchdatausingtrycatchasync = async() => {
 try {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const result = await response.json();
  setdata(result)
 } catch (error) {
  console.log(error);
 }
};

const { data, error, isLoading } = useSWR(
  "https://jsonplaceholder.typicode.com/todos",
  fetcher
);

if(error) return <p>Error</p>;
if (isLoading) return <p>Loading........</p>;
const fetchdatausingaxiostrycatchasync = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setdata(response.data);
    
  } catch (error) {
    console.log(error);
  }
};
// useEffect(() => {
  
//   fetchdata();
// }, [data])

  return (
    <div
      className={`flex flex-col justify-center items-center gap-3 ${colorv}`}
    >
      <h1 className="text-2xl">{countdata}</h1>
      <button
        onClick={() => dispatch(increment())}
        className="border-1 rounded-md p-2 text-[14px] bg-sky-950 text-white cursor-pointer"
      >
        INC +
      </button>
      <button onClick={() => dispatch(decrement())}>DEC -</button>
      <button onClick={() => dispatch(incrementbyvalue(5))}>
        INC BY VALUE 5 +
      </button>
      <h1>Context api</h1>
      <p>{count}</p>
      <button onClick={inccount}>INC +</button>
      <button onClick={changebg}>Change background</button>

      <div>Fetchdata</div>
      <Button variant="contained" color="primary" onClick={fetchdata}>
        Fetchdata
      </Button>
      <Button variant="contained" color="primary" onClick={fetchdatausingaxios}>
        Fetchdatausingaxios
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={fetchdatausingtrycatchasync}
      >
        fetchdatausingtrycatchasync
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={fetchdatausingaxiostrycatchasync}
      >
        fetchdatausingaxiostrycatchasync
      </Button>
      <h1>Using other fetch methods</h1>
      <ul>
        {datas &&
          datas.slice(0, 2).map((user) => {
            return (
              <>
                <li>{user.id}</li>
                <li>{user.title}</li>
                <li>{user.completed}</li>
              </>
            );
          })}
        <h1>Using SWR</h1>
        {data &&
          data.slice(0, 4).map((user) => {
            return (
              <>
                <li>{user.id}</li>
                <li>{user.title}</li>
                <li>{user.completed}</li>
              </>
            );
          })}
      </ul>
      <h1>CRUD</h1>
      <Link to="/adduser">Add user</Link>
      <Viewuserdata />

      <Routes>
        <Route path="/adduser" element={<Adduserdata />} />
        <Route path="/edituser/:id" element={<Edituser />} />
      </Routes>
    </div>
  );
}

export default App
