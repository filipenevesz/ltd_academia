import { TouchableOpacity, Text } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons"
import styles from "./styles";

export default function Button({ title, isLoading = false, icon, ...rest }) {


  return (
    <TouchableOpacity
      style={styles.container}
      disabled={isLoading}
      activeOpacity={0.5}
      {...rest}
    >
      {
        isLoading
          ?
          <ActivityIndicator color={"#fff"} />
          :
          <>
            {icon && <Ionicons name={icon} style={styles.icon} />}
            <Text style={styles.title}>{title}</Text>
          </>
      }

    </TouchableOpacity>
  );
}