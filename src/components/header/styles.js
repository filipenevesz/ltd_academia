import { StyleSheet } from "react-native";
import { colors } from '../../styles/colors';


const styles = StyleSheet.create({
    header: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#333',
        paddingTop: 50,
        padding: 20,
        borderBottomWidth: 3,
        borderColor: colors.primary,
    },
    headerText: {
        fontSize: 20,
        color: 'white',
    },

    headerText:{
        fontSize: 20,
        color: 'white',
        width: 200,
        fontWeight: 'bold',
    },
    gradient: {
        height: 2,
        marginTop: 10,
      },

});

export default styles;