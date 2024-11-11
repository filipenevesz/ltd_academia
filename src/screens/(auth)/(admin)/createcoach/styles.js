import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerBackground: {
        backgroundColor: "#f5f5f5",
        // margin: 20,
        borderRadius: 10,
        marginBottom: 180,
    },
    textContainer: {
        margin: 10,
        fontWeight: "bold",
        fontSize: 20,
        flexDirection: "row"
    },
    radioButtonOptions: {
        flexDirection: "row-reverse",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingLeft: 5,
        marginBottom: 5
    },
    radioButtonText: {    
        fontSize: 16,
        fontWeight: "bold",
    },
})

export default styles;