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
import {saveToken} from "../../../services/AuthService";

// useState para o hover:
export const Login = ({ login }) => {
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
    console.log(data);
    try {
      const response = await api.post("/auth/login", {
        email: data.email,
        password: data.password,
      }
    );
    const token = response.data.token;
    saveToken(token);  
    console.log();
    login();
    }
  catch (error) {
    console.log(error);
    alert("Erro ao fazer login");
    }
  }

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
