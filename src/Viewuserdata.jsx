import React, { useEffect, useState } from 'react'
import { deleteuserdata, getuserdata } from './api/api';
import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Viewuserdata = () => {

  const[data,setdata]=useState([]);
  
  const [filterdata, setfilterdata] = useState([]);
  const getdata = async () => {
    const result = await getuserdata();
    
    const filterdata = result.data.filter((user) => user.id > 4);
   
    setdata(result);
    setfilterdata(filterdata[0]);
  };
  const totaluser = data?.data?.reduce((total, user) => total + parseInt(user.id), 0);
  useEffect(() => {
    getdata();
  }, [])
  const deletedata = async (id) =>
  {
await deleteuserdata(id);
getdata();
  }

 
  return (
    <div className="flex flex-col gap-2">
      {data.data &&
        data.data.map((user) => {
          return (
            <Stack direction="row" spacing={2}>
              <ul>
                <li>Name: {user.name}</li>
                <li>Username: {user.username}</li>
                <li>Email: {user.email}</li>
              </ul>

              <Button>
                <Link to={`/edituser/${user.id}`}>Edit</Link>
              </Button>
              <Button onClick={() => deletedata(user.id)}>Delete</Button>
            </Stack>
          );
        })}
      <h1>filtereduser</h1>

      <ul>
        <li>Username: {filterdata.username}</li>
        <li>Email: {filterdata.email}</li>
      </ul>
      <h2>totaluser:{totaluser}</h2>
    </div>
  );
}

export default Viewuserdata;