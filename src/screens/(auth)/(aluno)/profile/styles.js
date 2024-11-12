import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
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
    sectionTitle: {
      textAlign: "center",
      fontSize: 20,
      fontWeight: "600",
      paddingHorizontal: 20,
      marginVertical: 10,
      color: "#2B2B2B",
    },
    card: {
      backgroundColor: "#ffffff",
      borderRadius: 10,
      marginHorizontal: 20,
      marginBottom: 10,
    },
    label: {
      fontSize: 14,
      color: "#000",
      marginTop: 10,
      fontWeight: "600"
    },
    value: {
      textAlignVertical: "center",
      height: 30,
      paddingLeft: 10,
      fontSize: 16,
      color: "#000",
      fontWeight: "400",
      marginVertical: 5,
      borderWidth: 2,
      borderRadius: 10,
      borderColor: "#ddd",
    },
    buttons: {
      marginHorizontal: 50,
      paddingBottom: 100,
    },
    addressContainer: {
      flexDirection: 'row', 
      alignItems: 'center', 
    },
    addressText: {
      fontSize: 16,
    },
    tabContainer: {
      paddingTop: 40,
      flexDirection: "row",
      justifyContent: "space-around",
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderColor: "#DDD",
    },
    tabItem: {
      alignItems: "center",
    },
    tabText: {
      fontSize: 12,
      color: "#555",
      marginTop: 5,
    },
});


export default styles;