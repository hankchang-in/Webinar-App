import axios from "axios";

const API = axios.create({
     baseURL: "http://localhost:7777/api" ,
    withCredentials: true,
});

export const signupAPI = (userData) => API.post("/signup", userData );
export const loginAPI = (userData) => API.post("/auth", userData);
export const productsAPI = (userData) => API.get("/products");
