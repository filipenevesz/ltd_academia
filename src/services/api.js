import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Alert } from "react-native";

const api = axios.create({
    baseURL: "http://192.168.100.120:8000",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

// Função de Login
export const login = async (email, password ) => {
    console.log(`Email: ${email}, Password: ${password} teste`);
    try {
        const response = await api.post("/usuarios/login/", { email, password });
        console.log(response.data);
        
        if (response.data.access && response.data.refresh) { // Verifica se existe access e refresh token
            await AsyncStorage.setItem("accessToken", response.data.access);
            await AsyncStorage.setItem("refreshToken", response.data.refresh);
            await AsyncStorage.setItem("user", JSON.stringify(response.data.usuario));

            return {
                success: true,
                user: response.data.usuario,
            };
        } else {
            Alert.alert("Erro", "Falha ao logar, tente novamente");
            return { success: false };
        }
    } catch (error) {
        console.error(error);
        Alert.alert("Erro", "Falha ao logar, tente novamente");
        return { success: false };
    }
};

export default api;
