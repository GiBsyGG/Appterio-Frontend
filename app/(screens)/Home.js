import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import ButtonRegular from "../../components/commons/Buttons/ButtonRegular";
import { useRouter } from "expo-router";
import useAuthStore from "../../Auth/authStore";
import { rolesEnum } from "../../utils/RolesEnum";

const logo = require("../../assets/images/Logo.png");

export default function Home() {
  const router = useRouter();
  const { user } = useAuthStore();

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.homeImage}></Image>
      <View>
        <Text style={globalStyles.mainTitle}>Bienvenido</Text>
        <Text style={globalStyles.grayTitle}>
          ¡Cuidamos tus datos, cuidamos tu bioterio!
        </Text>
      </View>
      {user.role === rolesEnum.UNLOGED && (
        <ButtonRegular
          title="Iniciar sesión"
          onPress={() => router.push("autenticacion/login")}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
  },
  homeImage: {
    width: 240,
    height: 240,
  },
});
