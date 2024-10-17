import { Text, View, StyleSheet, Image, TextInput, Pressable, TouchableOpacity } from "react-native"
import LoginImage from "../login-page/assets-login/frame-login-page.png";
import GoogleIcon from "../login-page/assets-login/Google.png";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

// useState para o hover:
export const Login = ({ login }) => {
    const [hovered, setHovered] = useState(false);
    // const [login, setisSignedIn] = useState(false);

    return <View style={styles.containerLogin}>

        {/*View da imagem e do texto 'Bem vindo'*/}
        <View style={styles.header}>
            <Image style={styles.imgLogin} source={LoginImage} />
            <Text style={styles.textLogin}>Bem-vindo(a)!</Text>
        </View>

        {/*Input do email*/}
        <View style={styles.inputLogin}>
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu email"
            />
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
                onPressOut={() => setHovered(false)}>
                <Text style={[styles.forgotPassword, hovered && styles.hoveredText]}>Esqueceu a senha?</Text>
            </Pressable>
        </View>

        {/*Container dos botoes*/}
        <View style={styles.containerButtons}>

            {/*Botao Principal de Logar*/}
            <TouchableOpacity style={styles.buttonLogin} onPress={login} >
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
    </View>;
};

const styles = StyleSheet.create({
    containerLogin: {
        flex: 1,
        backgroundColor: '#2B2B2B',
        alignItems: 'center',
    },
    header: {
        marginTop: 60,
        alignItems: 'center',
    },

    textLogin: {
        marginTop: 30,
        color: 'white',
        fontSize: 38,
        fontWeight: "800",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    label: {
        marginBottom: 5,
        fontSize: 16,
        color: 'white',

    },
    inputLogin: {
        marginTop: 15,
        width: '75%',
    },
    input: {
        height: 40,
        paddingLeft: 10,
        backgroundColor: '#D9D9D9',
        borderRadius: 7,
        height: 50,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,

    },
    forgotPassword: {
        marginTop: 5,
        textAlign: 'right',
        color: '#A5242D',
        fontSize: 15,
    },
    hoveredText: {
        textDecorationLine: 'underline',
    },
    containerButtons: {
        margin: 50,
        width: '55%'
    },
    buttonLogin: {
        marginBottom: 15,
        backgroundColor: '#ED5359',
        alignItems: 'center',
        padding: 10,
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,

    },
    buttonLoginText: {
        color: 'white',
        fontWeight: "500",
        fontSize: 23,

    },
    buttonGoogle: {
        marginBottom: 15,
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 6,
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,

    },
    buttonLoginGoogle: {
        fontWeight: "700",
        color: '#424242',
        fontSize: 16,
    },
    googleButtonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    googleIconImg: {
        marginTop: 7,
    }
})

export default Login