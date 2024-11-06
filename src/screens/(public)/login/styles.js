import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: "100%",
    },
    containerLogin: {
      flex: 1,
      backgroundColor: "#2B2B2B",
      alignItems: "center",
      height: "100%",
    },
    header: {
      marginTop: 60,
      alignItems: "center",
    },
  
    textLogin: {
      marginTop: 30,
      color: "white",
      fontSize: 38,
      fontWeight: "800",
      shadowColor: "#000",
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
      color: "white",
    },
    inputLogin: {
      marginTop: 15,
      width: "75%",
    },
    input: {
      height: 40,
      paddingLeft: 10,
      backgroundColor: "#D9D9D9",
      borderRadius: 7,
      height: 50,
      shadowColor: "#000",
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
      textAlign: "right",
      color: "#A5242D",
      fontSize: 15,
    },
    hoveredText: {
      textDecorationLine: "underline",
    },
    containerButtons: {
      margin: 50,
      width: "55%",
    },
    buttonLogin: {
      marginBottom: 15,
      backgroundColor: "#ED5359",
      alignItems: "center",
      padding: 10,
      borderRadius: 6,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
    },
    buttonLoginText: {
      color: "white",
      fontWeight: "500",
      fontSize: 23,
    },
    buttonGoogle: {
      marginBottom: 15,
      backgroundColor: "white",
      alignItems: "center",
      padding: 6,
      borderRadius: 6,
      shadowColor: "#000",
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
      color: "#424242",
      fontSize: 16,
    },
    googleButtonContent: {
      flexDirection: "row",
      alignItems: "center",
    },
    googleIconImg: {
      marginTop: 7,
    },
  });

export default styles;