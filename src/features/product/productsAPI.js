import axios from "../../API/axios.config";

export const getProducts = async () => {
  const data = await axios.get("/products");
  console.log(data.data.data);
  return data.data.data;
};
