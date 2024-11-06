import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F3F3F3",
    },
    header: {
      padding: 20,
      backgroundColor: "#2B2B2B",
      borderBottomWidth: 3,
      borderColor: "#ED5359"
    },
    textHeader: {
        color: "#FFFFFF",
        paddingTop: 20,
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
      borderWidth: 51,
      borderColor: "#2b2b2b",
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 5,
    },
    imageProfilePhoto: {
      width: 99,
      height: 99,
    },
    profilePhotoChange: {
      width: 30,
      height: 30,
      backgroundColor: '#ED5359',
      borderRadius: 50, 
      position: 'absolute',
      bottom: 3, 
      right: 3, 
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: "#2b2b2b",   
      shadowColor: "#000",
      shadowOpacity: 1,
      shadowRadius: 10,
      elevation: 5,
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
      fontWeight: '400',
    },
    card: {
      padding: 10,
      paddingBottom: 120,
      backgroundColor: "#fff",
      marginHorizontal: 30,
      borderRadius: 10,
      overflow: "hidden",
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 5,
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
      alignItems:"center",
      justifyContent: "center",
      flexDirection: "row-reverse",
      marginHorizontal: 100,
      padding:10,
      gap:10,
    },
    // buttonStyle: {
    //   flex: 1,
    //   width: "50%",
    //   margin: 10,
    //   marginHorizontal: 3,
    //   backgroundColor: "#ED5359",
    //   alignItems: "center",
    //   borderRadius: 10,
    //   padding: 10,
    // },
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


export default styles;