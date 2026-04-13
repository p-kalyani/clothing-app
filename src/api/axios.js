import axios from 'axios';

const api = axios.create({
  baseURL: "https://fakestoreapi.com"
})

export const fetchProducts = async () => {
  try {
    const res = await api.get("/products");
    return res.data;
  } catch (e) {
    console.log("Error fetching products:", e);
  }
};