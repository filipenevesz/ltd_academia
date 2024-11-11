import { Avatar,Text,Button, IconButton } from "react-native-paper";
import { View, StyleSheet } from "react-native";


export default function CardPerson({ item }) {
    return (
        <View style={styles.containner}>

            <Avatar.Image size={70} source={{ uri: item.imageUrl }} />
            <View style={styles.info}>
            <Text style={styles.name}>{item.nome} {item.lastName}</Text>
            <Text>{item.email}</Text>
            <Text>{item.createad}</Text>
            </View>
            <View style={styles.buttons}>
            <Button icon="pencil" buttonColor ="#ED5359" style={styles.button} mode="contained" onPress={() => console.log("Edit")}>Editar</Button>
            {/* <Button icon="delete" buttonColor ="#ED5359" style={styles.button} mode="contained" onPress={() => console.log("Delete")}>Excluir</Button> */}
            {/* {/* <IconButton icon="pencil" color="#ED5359" size={30} onPress={() => console.log("View")} /> */}
            <IconButton icon="delete" iconColor="#ED5359" size={30} onPress={() => console.log("Delete View")} /> 
            </View>
        </View>
        )
    }


const styles = StyleSheet.create({
    containner: {
        flexDirection: "row",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#d6d9db",
        marginHorizontal: 10,
        alignItems: "center",
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
    },
    info: {
        justifyContent: "flex-end",
        marginLeft: 10,
        gap: 5,
    },
    buttons: {
        flex: 1,
        alignItems: "flex-end",
    },
    button: {
        marginHorizontal: 5,
        marginVertical: 5,
        color: "#ED5359",
    },
});