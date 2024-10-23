import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2B2B2B",
    },
    textHeader: {
        color: "#FFFFFF",
        padding: 20,
        alignSelf: "flex-start",
        fontSize: 30,
        fontWeight: "700"
    },
    header: {
      backgroundColor: "#2B2B2B",
      borderBottomWidth: 3,
      borderColor: "#ED5359",
      paddingTop: 20,
    },
    notificationArea: {
        paddingHorizontal: 5,
        padding: 10,
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: 'center',
    },
    notificationText:{
        margin: 35,
        fontSize: 20,
        marginTop: 25,
    },
    notificationCard: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 2,
        width: '80%', 
        height: 120, 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        marginBottom: 25,
      },
      notificationTextDate: {
        fontWeight: "light",
        fontSize: 18,
        color: "#81A0A0"
      },
      notificationTextCard: {
        padding: 15,
        fontSize: 20,
        fontWeight: '900',
      },
      buttonBack: {
        flexDirection: 'row',
        alignItems: 'center',
        left: 10,
      }
      
});
