import axios from "../../API/axios.config";

export const getProducts = async () => {
  const data = await axios.get("/products");
  return data.data.data;
};
export const postProducts = async (product) => {
  const data = await axios.post("/products", product);
  return data;
};
