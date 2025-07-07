import axios from "axios";

const API = import.meta.env.VITE_DUMMY_API_URL || "https://dummyjson.com";
console.log("API", API);
export const login = async ({username, password}) =>{
    const response = await axios.post(`${API}/auth/login` , {username , password});
    console.log("response", response);
    return response.data ;
}

export function isTokenExpired(token) {
  if (!token) return true;
  try {
    const [, payload] = token.split(".");
    const { exp } = JSON.parse(atob(payload));
    return Date.now() >= exp * 1000;
  } catch {
    return true;
  }
}