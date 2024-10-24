import {
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from "react-native";
import LoginImage from "./assets-login/frame-login-page.png";
import GoogleIcon from "./assets-login/Google.png";
import { useState } from "react";
import styles from "./styles";

// useState para o hover:
export const Login = ({ login }) => {
  const [hovered, setHovered] = useState(false);
  // const [login, setisSignedIn] = useState(false);

  return (

    <SafeAreaView style={styles.container} >
      <ScrollView>
        <View style={styles.containerLogin}>
          {/*View da imagem e do texto 'Bem vindo'*/}
          <View style={styles.header}>
            <Image style={styles.imgLogin} source={LoginImage} />
            <Text style={styles.textLogin}>Bem-vindo(a)!</Text>
          </View>

          {/*Input do email*/}
          <View style={styles.inputLogin}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder="Digite seu email" />
          </View>

          {/*Input da senha*/}
          <View style={styles.inputLogin}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              secureTextEntry
            />
            {/*Botao de hover no 'Esqueceu a senha'*/}
            <Pressable
              onPressIn={() => setHovered(true)}
              onPressOut={() => setHovered(false)}
            >
              <Text style={[styles.forgotPassword, hovered && styles.hoveredText]}>
                Esqueceu a senha?
              </Text>
            </Pressable>
          </View>

          {/*Container dos botoes*/}
          <View style={styles.containerButtons}>
            {/*Botao Principal de Logar*/}
            <TouchableOpacity style={styles.buttonLogin} onPress={login}>
              <Text style={styles.buttonLoginText}>Entrar</Text>
            </TouchableOpacity>

            {/*Botao para logar com o google*/}
            <TouchableOpacity style={styles.buttonGoogle}>
              <View style={styles.googleButtonContent}>
                <Image style={styles.googleIconImg} source={GoogleIcon} />
                <Text style={styles.buttonLoginGoogle}>Entrar com o Google</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView >
  );
};


export default Login;
