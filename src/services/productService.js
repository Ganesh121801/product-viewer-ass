import axios from "axios";


const API = import.meta.env.VITE_DUMMY_API_URL || "https://dummyjson.com";

export const getProducts = async () =>{
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API}/products`, {
        headers :{
            Authorization :`Bearer ${token}`,
        },
    })

    return response.data.products ;
}