import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import ButtonRegular from "../../components/commons/Buttons/ButtonRegular";
import { useRouter } from "expo-router";
const logo = require("../../assets/images/Logo.png");

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.homeImage}></Image>
      <Text style={globalStyles.mainTitle}>Bienvenido</Text>
      <Text style={globalStyles.grayTitle}>
        ¡Cuidamos tus datos, cuidamos tu bioterio!
      </Text>
      <ButtonRegular
        title="Iniciar Sesión"
        ButtonAction={() => router.push("/autenticacion/login")}
      />
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

