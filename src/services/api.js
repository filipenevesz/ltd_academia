import axios from "axios";
const api = axios.create({
    baseURL: "http://34.56.3.98:8081",
})

export const login = async (email, password) => {
    try {
        const response = await api.post("/auth/login", {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export default api;