import {
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert
} from "react-native";
import LoginImage from "./assets-login/frame-login-page.png";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import GoogleIcon from "./assets-login/Google.png";
import { useState } from "react";
import styles from "./styles";
import {login} from "../../../services/api";
import Button from "../../../components/button";

// useState para o hover:
export const Login = ({ navigation }) => {
  const [hovered, setHovered] = useState(false);
  // const [login, setisSignedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);


  const handleLogin = async () => {
    setLoading(true);

    try {
      const response = await login(email, password);
      console.log(response);
      if (response.acess && response.token) {
        console.log(response);
        await AsyncStorage.setItem('token', response.token);
        setisSignedIn(true);
        navigation.navigate('Home');
      }
      else {
        Alert.alert('Erro', 'Falha ao logar, tente novamente');
        setLoading(false);
      }

    }
    catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Falha ao logar, tente novamente');
      setLoading(false);
    }
  };

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
            <TextInput style={styles.input} placeholder="Digite seu email"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/*Input da senha*/}
          <View style={styles.inputLogin}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
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
            <Button
              title="Entrar"
              onPress={()=>handleLogin()}
              isLoading={loading} />


            {/*Botao para logar com o google*/}
            {/* <TouchableOpacity style={styles.buttonGoogle}>
              <View style={styles.googleButtonContent}>
                <Image style={styles.googleIconImg} source={GoogleIcon} />
                <Text style={styles.buttonLoginGoogle}>Entrar com o Google</Text>
              </View>
            </TouchableOpacity> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView >
  );
};


export default Login;
