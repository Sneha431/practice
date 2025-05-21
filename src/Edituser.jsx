import { Button, Stack } from '@mui/material';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { edituserdata, getuserdata } from './api/api';
import { useParams } from 'react-router-dom';

const Edituser = () => {
  const {id} = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();

    const getdata = async () => {
      const result = await getuserdata(id);
      console.log(result.data);
     
      reset({
        name: result.data.name,
        username: result.data.username,
        email: result.data.email,
      });
    };
    useEffect(() => {
      getdata();
    }, [id,reset]);

  
 

  const onSubmit = async(data,e) =>{
    e.preventDefault();
    await edituserdata(data,id);
  }
  return (
    <>
      <h1>Edit data</h1>
      <form
       
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2"
      >
        <Stack direction={"row"} className="flex items-center justify-center">
          <label className="form-label mx-1">Name:</label>
          <input
            type="text"
            placeholder="name"
        
            className="border-1 border-b-amber-950 px-2 py-1 rounded-md"
            {...register("name", { required: true, maxLength: 10 })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors && errors.name && <p>Name is required</p>}
        </Stack>
        <Stack direction={"row"} className="flex items-center justify-center">
          <label className="form-label mx-1">Userame:</label>
          <input
            type="text"
            placeholder="username"
            className="border-1 border-b-amber-950 px-2 py-1 rounded-md"
            {...register("username", { required: true, maxLength: 10 })}
            aria-invalid={errors.username ? "true" : "false"}
          />
          {errors && errors.username && <p>Username is required</p>}
        </Stack>
        <Stack direction={"row"} className="flex items-center justify-center">
          <label className="form-label mx-1">Email:</label>
          <input
            type="text"
            placeholder="email"
            className="border-1 border-b-amber-950 px-2 py-1 rounded-md"
            {...register("email", { required: true })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors && errors.email && <p>Email is required</p>}
        </Stack>
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}

export default Edituser;