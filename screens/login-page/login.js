import { Text, View, StyleSheet, Image } from "react-native"

import LoginImage from "../login-page/assets-login/frame-login-page.png"

export const Login = () => {
    return <View style={styles.containerLogin}>
        <View style={styles.header}>
            <Image style={styles.imgLogin} source={LoginImage}/>
            <Text style={styles.textLogin}>Bem-vindo(a)!</Text>
        </View>

        <View style={styles.inputLogin}>
            
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

    }
})