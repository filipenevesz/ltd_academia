import React from "react";
import { View, Text, StyleSheet } from "react-native";
import image from "../../assets/Home (1).png";
import { Image, SafeAreaView, StatusBar } from "react-native";

export const Home = () => {
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
