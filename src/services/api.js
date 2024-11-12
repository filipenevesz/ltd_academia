import axios from "axios";
import { getToken } from "./AuthService";
const api = axios.create({
    baseURL: "http://34.71.4.173:8081",
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
      console.log("Error in request interceptor", error);
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        console.error("Erro na resposta:", error.response.data);
        console.error("Status:", error.response.status);
        console.error("Headers:", error.response.headers);
      } else if (error.request) {
        console.error("Erro na requisição:", error.request);
      } else {
        console.error("Erro ao configurar a requisição:", error.message);
      }
      return Promise.reject(error);
    }
  );

export default api;