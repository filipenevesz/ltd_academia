import { StyleSheet } from "react-native";
import { colors } from "../../../../styles/colors";
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },

    titleContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginRight: 8, // Espaço entre a imagem e o título
      color: colors.textForeground,
    },
    subtitle: {
      fontSize: 18,
      color: colors.mutedForeground,
      marginBottom: 8,
      left:'5%'
    },
    card: {
      backgroundColor: colors.cardBackground,
      padding: 10,
      borderRadius: 8,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 5,
      marginBottom: 20,
      width: "90%",
      justifyContent: "center",
      left:'5%'
    },
    cardTwo: {
      backgroundColor: colors.cardBackground,
      padding: 10,
      borderRadius: 8,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 5,
      marginBottom: 18,
      width: "90%",
      justifyContent: "center",
      left:'5%'
      
  
  
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: "600",
      marginBottom: 8,
    },
    infoRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 8,
    },
    paidText: {
      color: colors.success,
      fontWeight: "bold",
    },
    pendingText: {
      color: colors.danger,
      fontWeight: "bold",
    },
    amount: {
      fontSize: 20,
    },
    mutedText: {
      color: colors.mutedForeground,
      marginTop: 4,
    },
    buttonRow: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 16,
      width: "50%",
      borderRadius:8,
      alignItems: "center",
      left:'41%'
    },
    buttons :{
      gap:10,
      width:"100%",

         },
    dangerButton: {
      backgroundColor: colors.primary,
      padding: 12,
      borderRadius: 8,
      marginTop: 16,
      width: "50%",
      left: "25%",
    },
    dangerButtonText: {
      color: "#fff", // Texto em branco
      fontWeight: "bold",
      textAlign: "center",
    },
    image: {
      width: 40,
      height: 40,
      borderRadius: 20, // Para fazer a imagem ser redonda
      marginRight: 8, // Espaço entre a imagem e o texto
    },
    moneyImage: {
      width: 30,
      height: 30,
      marginRight: 7,
      left:'20%'
    },
  });

export default styles;
  