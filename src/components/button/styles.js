import { StyleSheet } from "react-native";
import {colors} from '../../styles/colors'


const styles = StyleSheet.create(
    {
        container: {
            width:'100%',
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.primary,
            gap: 7,
            padding: 10,
            borderRadius: 6,
            marginTop: 10,
        },
        icon: {
            color: "#ffff",

        },
        title: {
            textAlign: "center",
            fontWeight: 'bold',
            fontSize: 16,
            color: '#fff'
        }


    }
);

export default styles