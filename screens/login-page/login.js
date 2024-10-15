import { Text, View, StyleSheet, Image, TextInput, Pressable } from "react-native"

import LoginImage from "../login-page/assets-login/frame-login-page.png"

export const Login = () => {
    return <View style={styles.containerLogin}>
        <View style={styles.header}>
            <Image style={styles.imgLogin} source={LoginImage}/>
            <Text style={styles.textLogin}>Bem-vindo(a)!</Text>
        </View>

        <View style={styles.inputLogin}>
            <Text style={styles.label}>Email</Text>
            <TextInput 
                style={styles.input}
                placeholder="Digite seu email"
            />
        </View>

        <View style={styles.inputLogin}>
            <Text style={styles.label}>Senha</Text>
            <TextInput 
                style={styles.input}
                placeholder="Digite sua senha"
                secureTextEntry
            />
        </View>
        <Pressable title="Login"/>
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
    },
    label: {
        marginBottom: 5,
        fontSize: 16,
        color: 'white',
    
    },
    input: {
        height: 40,
        paddingLeft: 10,
        backgroundColor: '#D9D9D9',
        width: '100%',
    }
})