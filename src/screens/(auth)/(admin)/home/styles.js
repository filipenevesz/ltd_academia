import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    profile: {
        flexDirection: 'row', // Coloca o texto e imagem lado a lado
        alignItems: 'center', // Centraliza verticalmente
        backgroundColor: '#525153',
        padding: 5,
        paddingBottom: 12,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    perfil: {
        width: 50,   // Largura da imagem
        height: 50,  // Altura da imagem
        borderRadius: 25, // Faz a imagem ser circular, se for quadrada
        marginRight: 10, // Espaço entre imagem e texto
    },
    nome: {
        fontSize:18,
        fontWeight:'bold',
        color:'white',
    },
});

export default styles;