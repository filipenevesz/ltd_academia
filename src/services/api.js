import axios from "axios";
import { getToken } from "./AuthService";
const api = axios.create({
    baseURL: "http://34.56.3.98:8081",
    headers: {
        "Content-Type": "application/json",
    },
})
api.interceptors.request.use(
    async (config) => {
      const token = await getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export default api;