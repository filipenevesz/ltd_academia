import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: colors.background,
    },
    header: {
      backgroundColor: "#2B2B2B",
      borderBottomWidth: 3,
      borderColor: "#ED5359"
  
    },
    textHeader: {
      color: "#FFFFFF",
      padding: 20,
      alignSelf: "flex-start",
      fontSize: 30,
      fontWeight: "700",
    },
    containerScroll: {
      backgroundColor: colors.background,
    },
    details: {
      margin: 20,
      padding: 10,
      paddingBottom: 60,
      backgroundColor: colors.cardBackground,
      borderRadius: 5,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 5,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
      color: colors.textForeground,
    },
    treino: {
      fontSize: 16,
      color: colors.textForeground,
    },
    buttons: {
      marginHorizontal: 17,
      flexDirection: "row",
      justifyContent: "center", // Centraliza os botões horizontalmente
    },
    button: {
      backgroundColor: colors.primary,
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 20, // Bordas arredondadas
      marginHorizontal: 10, // Espaçamento entre os botões
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      textAlign: "center",
    },
  });