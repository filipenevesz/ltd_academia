import {
  Text,
  View,
  Image,
  SafeAreaView,
  Keyboard

} from "react-native";
import LoginImage from "./assets-login/frame-login-page.png";
import { useState, useEffect } from "react";
import styles from "./styles";
import LoginForm from "../../../forms/LoginForm";
import api from "../../../services/api";
import { saveToken } from "../../../services/AuthService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

// useState para o hover:
export const Login = ({ onLogin }) => {
  const navigation = useNavigation();
  //const [login, setisSignedIn] = useState(false);
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await api.post('/auth/login', {
        email: data.email,
        password: data.password,
      });


      await AsyncStorage.setItem('token', response.data.token);
      console.log("Login bem-sucedido:", response.data);
      alert('Login bem-sucedido!');
      onLogin();

    } catch (error) {
      console.error("Erro ao fazer login:", error);

      if (error.response) {
        console.error("Erro na resposta:", error.response.data);
        console.error("Status:", error.response.status);
        console.error("Headers:", error.response.headers);
        Alert.alert('Erro', `Falha ao fazer login: ${error.response.data.message}`);
      } else if (error.request) {
        console.error("Erro na requisição:", error.request);
        Alert.alert('Erro', 'Falha ao fazer login: Nenhuma resposta recebida do servidor.');
      } else {
        console.error("Erro ao configurar a requisição:", error.message);
        Alert.alert('Erro', `Falha ao fazer login: ${error.message}`);
      }
    }
  };
  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.containerLogin}>
        {/*View da imagem e do texto 'Bem vindo'*/}
        <View style={styles.header}>
          {
            !keyboardVisible ? <Image source={LoginImage} /> : null
          }

          <Text style={styles.textLogin}>Bem-vindo(a)!</Text>
        </View>
        {/*Formulario de login*/}
        <LoginForm
          onSubmit={onSubmit}
        />
      </View>

    </SafeAreaView>



  );
};


export default Login
