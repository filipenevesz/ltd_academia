import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F3F3F3",
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
    profile: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
    },
    profileContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative', 
    },
    profilePhoto: {
      width: 100,
      height: 100,
      backgroundColor: 'grey',
      borderRadius: 50, 
      justifyContent: 'center',
      alignItems: 'center',
    },
    profilePhotoChange: {
      width: 30,
      height: 30,
      backgroundColor: '#2b2b2b',
      borderRadius: 50, 
      position: 'absolute',
      bottom: 3, 
      right: 3, 
      justifyContent: 'center',
      alignItems: 'center',
    },
    profileTextName: {
      padding: 3,
      fontWeight: "700",
      fontSize: 23,
    },
    textInfo: {
      fontSize: 20,
      paddingTop: 50,
      paddingLeft: 30,
      fontWeight: '100',
    },
    card: {
      padding: 10,
      paddingBottom: 120,
      backgroundColor: "#fff",
      marginHorizontal: 30,
      borderRadius: 10,
      overflow: "hidden",
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.5,
      shadowRadius: 4,
    },
    textCard: {
      fontSize: 17,
      fontWeight: '700',
      padding: 2,
    },
    textCardInfo: {
      fontWeight: '400',
      fontSize: 17,
    },
    buttons: {
      flexDirection: "row-reverse",
      marginHorizontal: 27,
    },
    buttonStyle: {
      flex: 1,
      width: "50%",
      margin: 10,
      marginHorizontal: 3,
      backgroundColor: "#ED5359",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      padding: 10,
    },
    buttonText: {
      fontWeight: "bold",
      color: "white",
    },
    addressContainer: {
      flexDirection: 'row', 
      alignItems: 'center', 
    },
    addressText: {
      fontSize: 16,
    },
});