import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import aaa1 from "./assets-forget-password/aaaa1.png"
import styles from "./styles";

const forgetPassword = () => {
    return (
        <SafeAreaView>
            <View style={styles.containerLogin}>
                <Image source={aaa1} />
            </View>
        </SafeAreaView>
    );
}

export default forgetPassword;