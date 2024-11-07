import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveToken = async (token) => {
    try{
        await AsyncStorage.setItem("token", token);
    }
    catch(error){
        console.log(error);
        alert("Erro ao salvar token");
    }
};

export const getToken = async () => {
    try{
        return await AsyncStorage.getItem("token");
    }
    catch(error){
        console.log(error);
        alert("Erro ao pegar token");
    }
}

export const removeToken = async () => {
    try{
        await AsyncStorage.removeItem("token");
    }
    catch(error){
        console.log(error);
        alert("Erro ao remover token");
    }
};

export const save_user = async (user) => {
    try{
        await AsyncStorage.setItem("user",JSON.stringify(user));
    }
    catch(error){
        console.log(error);
        alert("Erro ao salvar user");
    }
};

export const get_user = async () => {
    try{
        const userData = await AsyncStorage.getItem("user");
        if (userData){
            return JSON.parse(userData);
        }
    }
    catch(error){
        console.log(error);
        alert("Erro ao pegar user");
    }
}