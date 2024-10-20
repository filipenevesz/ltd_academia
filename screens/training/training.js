import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import image from "../../assets/Treino.png";
import { Image , StatusBar} from "react-native";

export const Training = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor={"f0f0f0"} />
      <View>
        <Image style={styles.image} source={image} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
  },
});
