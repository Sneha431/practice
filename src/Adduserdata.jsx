import { Button, Stack } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form'
import { adduserdata } from './api/api';

const Adduserdata = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) =>{
    adduserdata(data);
  }
  return (
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
          {...register("email", { required: true, maxLength: 10 })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors && errors.email && <p>Email is required</p>}
      </Stack>
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default Adduserdata