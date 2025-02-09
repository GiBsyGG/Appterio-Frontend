import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
const logo = require("../../assets/images/Logo.png");

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.homeImage}></Image>
      <Text style={globalStyles.mainTitle}>Bienvenido</Text>
      <Text style={globalStyles.grayTitle}>
        ¡Cuidamos tus datos, cuidamos tu bioterio!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  homeImage: {
    width: 240,
    height: 240,
  },
});
