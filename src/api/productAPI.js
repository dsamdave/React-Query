import axios from "axios";
import { toast } from "react-toastify";

export const handleError = (err) => {
  if(err.response.data.msg){
    toast.error(err.response.data.msg)
    throw new Error(err.response.data.msg)
  }else{
    toast.error(err.message)
    throw new Error(err.message)
  }
}

export const getData = async ({ queryKey }) => {
  try {
    const res = await axios.get(`${queryKey[0]}`)
    return res.data;
  } catch (err) {
    handleError(err)
  }
}

export const getInfiniteData = async ({ queryKey, pageParam = 1}) => {
  // console.log(`url : ${queryKey[0]}&page=${pageParam}`)
  // console.log({pageParam})
  try {
    const res = await axios.get(`${queryKey[0]}&page=${pageParam}`)
    return res.data;
  } catch (err) {
    handleError(err)
  }
}

export const createProduct = async (newData) => {
  const res = await axios.post('/products', newData)
  return res.data;
};

export const updateProduct = async ({id, newData}) => {
  const res = await axios.put(`/products/${id}`, newData)
  return res.data;
};

export const deleteProduct = async (id) => {
  const res = await axios.delete(`/products/${id}`)
  return res.data;
};