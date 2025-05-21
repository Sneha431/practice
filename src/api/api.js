import axios from "axios";

const url = "http://localhost:3000/user";


export const getuserdata = async(id="") =>{
return await axios.get(`${url}/${id}`);
}

export const adduserdata = async(data)=>{
  return await axios.post(`${url}`,data);
}

export const edituserdata = async(data,id)=>{
  return await axios.put(`${url}/${id}`,data);
}

export const deleteuserdata = async (id) => {
  return await axios.delete(`${url}/${id}`);
}